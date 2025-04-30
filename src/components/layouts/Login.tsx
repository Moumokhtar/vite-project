import loginLogo from "../../assets/images/login-logo.png";
import loginLogo2 from "../../assets/images/login-logo2.png";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useAuth from "@/hooks/useAuth";
import { formSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { LockKeyholeOpen, User } from "lucide-react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const LoginForm: FC = () => {
  const { mutate } = useAuth().login;
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    mutate(data);
    console.log(data);
  };

  return (
    <div className="max-h-svh flex items-center justify-center">
      <div className="max-w-xs w-full flex flex-col items-center gap-10">
        <div className="flex  items-center gap-2 justify-center">
          <img src={loginLogo2} />
          <img src={loginLogo} />
        </div>

        <Form {...form}>
          <form className="w-full space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>إسم المستخدم</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" size={25} />
                      <Input type="email" placeholder="Email" className="w-full pr-10" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>كلمة السر</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <LockKeyholeOpen className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" size={25} />
                      <Input type="password" placeholder="Password" className="w-full pr-10" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-[#031425] mt-4 cursor-pointer text-[18px] w-[295px] h-[69px] rounded-s-[50px] rounded-tl-[10px] rounded-bl-[80px]">
              تسجيل الدخول
            </Button>
          </form>
        </Form>

        <div className="mt-5 space-y-5">
          <Link to="/" className="text-sm block underline text-muted-foreground text-center">
            نسيت كلمة المرور ؟
          </Link>
          <p className="text-sm text-center">
            Don&apos;t have an account?
            <Link to="/" className="ml-1 underline text-muted-foreground">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
