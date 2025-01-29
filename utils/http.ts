import axios from "axios";

const baseURL = import.meta.env.BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  },
});

export const http = instance;
