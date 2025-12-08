import Axios from "axios";
import { getToken } from "@/features/auth/utils/authStorage";

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.example.com",
});

axios.interceptors.request.use((config) => {
  const token = getToken();
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
