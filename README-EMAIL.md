# Email Sending Functionality for User Add Data Form

This README provides instructions on how to set up and use the email sending functionality for the User Add Data form.

## Setup Instructions

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Configure email settings:**
   - Rename the `.env.example` file to `.env` or create a new `.env` file
   - Update the email configuration in the `.env` file:
     ```
     EMAIL_SERVICE=gmail
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASSWORD=your-app-password
     EMAIL_RECIPIENT=recipient-email@example.com
     ```

   **Note for Gmail users:**
   - You need to use an App Password if you have 2-factor authentication enabled
   - Go to your Google Account > Security > App passwords
   - Generate a new app password for this application

3. **Start the application:**
   ```
   npm run dev
   ```
   This will start both the React frontend and the Express backend server.

## How It Works

1. When a user fills out the form in the "User Add Data" modal and clicks Submit, the following happens:
   - The form data is validated on the client side
   - If validation passes, the data is sent to the `/api/contact` endpoint on the server
   - The server uses Nodemailer to send an email with the form data
   - The user receives a success message via a toast notification

2. The email contains:
   - First Name and Last Name
   - Email Address
   - Phone Number (if provided)
   - Message

## Troubleshooting

- **Email not sending:**
  - Check your `.env` file configuration
  - Make sure your email provider allows sending emails from less secure apps or using app passwords
  - Check the server logs for any error messages

- **Form submission errors:**
  - Open browser dev tools to see if there are any network errors
  - Check the server logs for error messages

## Configuration Options

- You can modify the email template in `server.js` to customize the email format
- Additional form fields can be added by updating both the frontend form in `Header.js` and the email template in `server.js`