import { BACKEND_BASE_URL } from "@/constants/constants";
import axios from "axios";
const axiosInstance = axios.create({
    baseURL: BACKEND_BASE_URL,
    withCredentials: true,
  });

  export default axiosInstance;
