import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.producthunt.com/v2/api/graphql',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_PRODUCT_HUNT_TOKEN}`,
    'Content-Type': 'application/json',
  },
});