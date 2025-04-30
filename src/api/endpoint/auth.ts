import axiosInstance from "../axios";

export const LoginUser = async (data) => {
  const response = await axiosInstance.post("CLIENTS_LOGIN", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return console.log(response.data);
};
