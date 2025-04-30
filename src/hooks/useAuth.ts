import { useMutation } from "@tanstack/react-query";
import { LoginUser } from "../api/endpoint/auth";

const useAuth = () => {
  const loginMutation = useMutation({
    mutationFn: LoginUser,
  });

  return {
    login: loginMutation,
  };
};

export default useAuth;
