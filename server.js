const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = 5002; // Use a different port to avoid conflicts

// Very minimal middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

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

// Super minimal contact endpoint
app.post('/minimal-contact', async (req, res) => {
  console.log('Received contact form data with minimal server');

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
});

// Start the server if running directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Minimal server running on port ${PORT}`);
  });
}

// Export for Vercel
module.exports = app;