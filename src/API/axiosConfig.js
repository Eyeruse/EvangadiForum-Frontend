import axios from "axios";

const axiosBase = axios.create({
  // This is for local host
  // baseURL: "http://localhost:5500/api"

  // For deployed version
  baseURL: "https://evangadiforum-backend-last-ibei.onrender.com/api",
});
export default axiosBase;
