import axiosInstance from "../axios";

export const LoginUser = async (data) => {
	const response = await axiosInstance.post(
		"API/SYSTEM/LOGIN/USERS_LOGIN",
		data,
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);

	return console.log(response.data);
};
