import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://demo.worx.systems/API/SYSTEM/LOGIN",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
