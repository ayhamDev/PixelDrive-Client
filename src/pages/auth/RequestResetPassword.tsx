import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const RequestResetPassword = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight ">
        Reset Password
      </h2>
      <p className="text-sm text-muted-foreground">
        Enter your email to get reset password link.
      </p>
      <div className="flex gap-4 flex-col my-8">
        <div className="flex justify-between flex-col space-y-2">
          <label htmlFor="username">Email</label>
          <Input
            type="email"
            name="username"
            id="username"
            placeholder="Email Address"
          />
        </div>
      </div>
      <Button className="w-full">Send Request</Button>
      <Button
        className="w-full"
        variant={"ghost"}
        onClick={() => navigate("/auth/login")}
      >
        Back To Login
      </Button>
    </>
  );
};
export default RequestResetPassword;
