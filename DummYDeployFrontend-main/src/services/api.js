import axios from "axios";

const api = axios.create({
  baseURL: "https://dummy-deploy2.vercel.app/api", // adjust as per your backend
  withCredentials: true, // if using cookies/sessions
});

export default api;
