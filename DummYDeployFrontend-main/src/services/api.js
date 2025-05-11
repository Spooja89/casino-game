import axios from "axios";

const api = axios.create({
  baseURL: "https://casino-backend-beta.vercel.app/api", // adjust as per your backend
  withCredentials: true, // if using cookies/sessions
});

export default api;
