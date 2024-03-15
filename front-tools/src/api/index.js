import axios from 'axios';

const BACK_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

const API = axios.create({
  baseURL: BACK_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    // Add any default headers here
  },
});

export default API;