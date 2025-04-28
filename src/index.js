import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

// Set default base URL for axios in development
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:5002';
}

// Configure axios defaults to prevent large headers and cookies
axios.defaults.withCredentials = false; // Don't send cookies by default
axios.defaults.headers.common = {
  'Content-Type': 'application/json',
  // Include only necessary headers to avoid 431 errors
};

// Remove unnecessary default headers that could contribute to request size
delete axios.defaults.headers.common['X-Requested-With'];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
