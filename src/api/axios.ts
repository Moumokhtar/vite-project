import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://demo.worx.ws/",
	headers: {
		"Content-Type": "application/json",
	},
});

export default axiosInstance;
