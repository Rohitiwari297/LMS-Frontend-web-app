import axios from "axios";
import { AiFillAccountBook } from "react-icons/ai";

const BASE_URL = "http://localhost:5000/api/v1";

const axiosInstance = axios.create();


axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true

export default axiosInstance;