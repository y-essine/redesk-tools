import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Set your base URL here
  timeout: 5000, // Set the timeout for requests (optional)
  headers: {
    'Content-Type': 'application/json',
    // Add any default headers here
  },
});

// You can add interceptors, defaults, and other configurations here

export default API;