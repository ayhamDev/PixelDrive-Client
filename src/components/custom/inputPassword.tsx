import React, { useState } from "react";
import { Input, InputProps } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";

const InputPassword = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [PasswordHidden, SetPasswordHidden] = useState<boolean>(true);
    const TogglePasswordView = () => {
      SetPasswordHidden((value) => !value);
    };
    return (
      <div className="relative">
        <Input
          className={className}
          type={PasswordHidden ? "password" : "text"}
          {...props}
          ref={ref}
        />
        <button
          type="button"
          onClick={() => TogglePasswordView()}
          className="absolute right-1 top-1 bottom-1 flex justify-center items-center px-2  bg-[color:hsl(var(--background))] rounded-md"
        >
          {PasswordHidden ? (
            <Eye className="w-5" />
          ) : (
            <EyeOff className="w-5" />
          )}
        </button>
      </div>
    );
  }
);

export default InputPassword;
