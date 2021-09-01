import axios from 'axios';

// Creating axios instance to use it later for requests
export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
