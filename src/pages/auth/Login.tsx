import InputPassword from "@/components/custom/inputPassword";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  return (
    <>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight ">
        Login
      </h2>
      <p className="text-sm text-muted-foreground">
        Provide your credentials to login to your account.
      </p>
      <div className="flex gap-4 flex-col my-8">
        <div className="flex justify-between flex-col space-y-2">
          <label htmlFor="username">Username</label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
        </div>
        <div className="flex justify-between flex-col space-y-2">
          <label htmlFor="">Password</label>
          <InputPassword placeholder="***********" />
        </div>
        <p className="text-sm text-muted-foreground">
          Forgot Your Password ?{" "}
          <Link to={"/auth/request-reset-password"} className="underline">
            {" "}
            Reset Password
          </Link>
        </p>
      </div>
      <Button className="w-full" onClick={() => nav("/")}>
        Login
      </Button>
    </>
  );
};

export default Login;
