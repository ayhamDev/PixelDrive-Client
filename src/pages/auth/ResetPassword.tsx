import InputPassword from "@/components/custom/inputPassword";
import PasswordCheckMarks, {
  IPasswordState,
} from "@/components/custom/passwordCheckMarks";
import { AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { CircleUserRound } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const PasswordRef = useRef<HTMLInputElement | null>(null);
  const [PasswordState, SetPasswordState] = useState<IPasswordState>({
    charactersLength: false,
    ContainsNumber: false,
    ContainsSpecialCharacter: false,
    ContainsUppercase: false,
    ContainsLowercase: false,
  });
  const PasswordProgrese = useMemo(() => {
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
    <>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight ">
        Reset Password
      </h2>
      <p className="text-sm text-muted-foreground">
        Enter your new password below to reset.
      </p>
      <div className="flex gap-4 flex-col my-8 ">
        <Card className="flex p-4 gap-4 overflow-hidden">
          <div>
            <Avatar className="max-w-[64px] max-h-[64px]">
              <AvatarFallback>
                <CircleUserRound width={"64px"} height={"64px"} />
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="scroll-m-20 text-l font-semibold tracking-tight">
              ayhamgm@gmail.com
            </h4>
            <p className="text-sm text-muted-foreground">@ayham</p>
          </div>
        </Card>
        <div className="flex justify-between flex-col space-y-2">
          <label htmlFor="password">New Password</label>
          <InputPassword
            name="password"
            id="password"
            placeholder="***********"
            onChange={PasswordChange}
            ref={PasswordRef}
          />
          <PasswordCheckMarks
            PasswordProgress={PasswordProgrese}
            PasswordState={PasswordState}
            inputRef={PasswordRef}
          />
        </div>
      </div>
      <Button className="w-full">Reset Password</Button>
    </>
  );
};
export default ResetPassword;
