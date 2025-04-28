# Deploying to Vercel

This document provides instructions for deploying this React application with a Node.js backend to Vercel.

## Prerequisites

1. A [Vercel](https://vercel.com) account
2. The [Vercel CLI](https://vercel.com/docs/cli) (optional)
3. Node.js and npm installed

## Setup Environment Variables

Before deploying, you need to set up your environment variables in your Vercel dashboard:

1. `EMAIL_SERVICE` - The email service to use (e.g., "gmail")
2. `EMAIL_USER` - Your email address
3. `EMAIL_PASSWORD` - Your email password or app-specific password
4. `EMAIL_RECIPIENT` - The recipient's email address (can be the same as `EMAIL_USER`)

## Deployment Options

### Option 1: Deploy from the Vercel Dashboard

1. Push your project to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to your Vercel dashboard
3. Click "New Project"
4. Import your Git repository
5. Configure the project:
   - Set the framework preset to "Create React App"
   - Add the environment variables mentioned above
6. Click "Deploy"

### Option 2: Deploy using Vercel CLI

1. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```

2. Log in to your Vercel account:
   ```
   vercel login
   ```

3. Deploy from the project root:
   ```
   vercel
   ```

4. Follow the interactive prompts to complete deployment

### Option 3: Deploy with a One-Click Deploy

(If you have a public GitHub repository, you can create a deploy button)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fyourrepo)

## Post-Deployment

After deployment, verify that both your frontend and API routes are working properly:

1. Visit your deployed site (e.g., `https://your-project.vercel.app`)
2. Test the API endpoints:
   - `/api/test` should return `{"message":"API is working properly"}`
   - The contact form should successfully send emails

## Troubleshooting

If you encounter issues:

1. Check Vercel deployment logs for errors
2. Verify environment variables are properly set
3. If emails aren't working, check your email service settings and permissions
4. Make sure the correct Node.js version is being used (this project requires Node.js 16+)

## Local Development

To run the project locally:

```
npm run dev
```

This will start both the React development server and the Node.js backend.