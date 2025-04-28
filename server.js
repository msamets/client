const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002; // Use environment port or default to 5002

// Enhanced middleware for Vercel deployment
app.use((req, res, next) => {
  // Allow requests from any origin in both development and production
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Host');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  next();
});

// Parse JSON with minimal settings
app.use(express.json({
  limit: '100kb',
  strict: false
}));

// Create a mail transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
};

// API endpoint for contact form - works with both direct and /api/ prefix
app.post('/minimal-contact', handleContact);
app.post('/api/minimal-contact', handleContact);

// Contact form handler function
async function handleContact(req, res) {
  console.log('Received contact form data');

  try {
    const { firstName, lastName, email, phone, message } = req.body;

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return res.json({
        success: false,
        message: 'Missing required fields'
      });
    }

    const transporter = createTransporter();

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER,
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send success response
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.json({ success: false, message: 'Failed to send email' });
  }
}

// Start the server if running directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export for Vercel
module.exports = app;