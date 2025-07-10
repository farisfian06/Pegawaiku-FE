import { useForm } from "react-hook-form";
import { loginSchema, type LoginPayload } from "../schema/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const useLogin = () => {
  const form = useForm<LoginPayload>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginPayload) => {
    console.log(data);
  };

  return {
    form,
    onSubmit,
  };
};

export default useLogin;
