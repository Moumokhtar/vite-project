import LoginForm from "@/components/layouts/Login";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import symbol from "../assets/images/Symbol.png";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col min-h-svh justify-between bg-[#031425] ">
      <div className="flex justify-end p-5 md:p-5">
        <Button variant="outline" className="cursor-pointer">
          <a href="#" className="flex items-center gap-2 font-medium">
            EN
          </a>
        </Button>
      </div>
      <div className="flex w-full items-center justify-center p-5 md:p-5">
        <div className="w-full max-w-2xl  bg-white py-4 px-9 shadow-lg rounded-[50px] justify-items-center">
          <div className="w-full max-w-96">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-end p-5 md:p-5">
        <img src={symbol} className="w-[67px] h-[67px]" />
      </div>
    </div>
  );
}
