import InputPassword from "@/components/custom/inputPassword";
import PasswordCheckMarks, {
  IPasswordState,
} from "@/components/custom/passwordCheckMarks";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAdminStep = () => {
  const navigate = useNavigate();
  const PasswordRef = useRef<HTMLInputElement | null>(null);
  const [PasswordState, SetPasswordState] = useState<IPasswordState>({
    charactersLength: false,
    ContainsNumber: false,
    ContainsSpecialCharacter: false,
    ContainsUppercase: false,
    ContainsLowercase: false,
  });
  const PasswordProgress = useMemo(() => {
    let score = 0;
    if (PasswordState.charactersLength) score += 1;
    if (PasswordState.ContainsNumber) score += 1;
    if (PasswordState.ContainsSpecialCharacter) score += 1;
    if (PasswordState.ContainsUppercase) score += 1;
    if (PasswordState.ContainsLowercase) score += 1;

    return score; // Since there are 5 conditions, the progress will be in percentage
  }, [PasswordState]);

  const PasswordChange = (
    e: React.ChangeEvent<HTMLInputElement> | undefined
  ) => {
    const password = e?.currentTarget.value || "";

    SetPasswordState({
      charactersLength: password.length >= 8, // Check if the length is at least 8 characters
      ContainsNumber: /\d/g.test(password), // Check if the password contains a number
      ContainsSpecialCharacter: /[!@#$%^&*(),.?":{}|<>_-]/g.test(password), // Check if the password contains a special character
      ContainsUppercase: /[A-Z]/g.test(password), // Check if the password contains an uppercase letter
      ContainsLowercase: /[a-z]/g.test(password), // Check if the password contains a lowercase letter
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Admin Account</CardTitle>
        <CardDescription>
          Please provide the details for the admin account
        </CardDescription>
      </CardHeader>
      <CardContent className="gap-2">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex justify-between items-center gap-3">
              <div className="flex justify-between flex-col  space-y-2">
                <Label htmlFor="first_name">First Name</Label>
                <Input
                  name="fistName"
                  type="text"
                  id="first_name"
                  placeholder="First Name"
                />
              </div>
              <div className="flex justify-between flex-col  space-y-2">
                <Label htmlFor="last_name">Last Name</Label>
                <Input
                  name="lastName"
                  type="text"
                  id="last_name"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex justify-between flex-col  space-y-2">
              <Label htmlFor="username">Username</Label>
              <div className="flex justify-center items-center">
                <span className="h-10 px-4 opacity-100 select-none grid place-items-center bg-background border-input rounded-md border rounded-r-none border-r-0">
                  @
                </span>
                <Input
                  type="text"
                  name="userName"
                  id="username"
                  placeholder="John"
                  className="rounded-l-none"
                />
              </div>
            </div>
            <div className="flex justify-between flex-col space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input type="text" id="email" placeholder="Email Address" />
            </div>
            <div className="flex justify-between flex-col space-y-2">
              <Label htmlFor="password">Password</Label>
              <InputPassword
                id="password"
                placeholder="Password"
                onChange={PasswordChange}
                ref={PasswordRef}
              />
            </div>
            <PasswordCheckMarks
              PasswordProgress={PasswordProgress}
              PasswordState={PasswordState}
              inputRef={PasswordRef}
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between mt-4">
        <Button variant="secondary" onClick={() => navigate("/setup")}>
          Back
        </Button>
        <Button onClick={() => navigate("/setup/profile-picture")}>
          Create
        </Button>
      </CardFooter>

      {/* Add your admin creation form here */}
    </Card>
  );
};
export default CreateAdminStep;
