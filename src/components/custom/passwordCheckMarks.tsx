import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { Checkbox } from "../ui/checkbox";
import { Accordion, AccordionContent } from "../ui/accordion";
import { AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/utils/useTheme";

export interface IPasswordState {
  charactersLength: boolean;
  ContainsNumber: boolean;
  ContainsSpecialCharacter: boolean;
  ContainsUppercase: boolean;
  ContainsLowercase: boolean;
}
const PasswordCheckMarks = ({
  PasswordProgress,
  PasswordState,
  inputRef,
}: {
  PasswordProgress: number;
  PasswordState: IPasswordState;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
}) => {
  const { theme } = useTheme();
  const [IsOpen, SetIsOpen] = useState<boolean>(false);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("focusin", () => {
        SetIsOpen(true);
      });
    }
    return () => {
      inputRef.current?.removeEventListener("focusin", () => {
        SetIsOpen(true);
      });
    };
  }, []);

  return (
    <Accordion type="single" value={IsOpen ? "open" : "closed"}>
      <AccordionItem value={"open"} className="grid w-full items-center gap-4">
        <AccordionTrigger
          className="flex justify-between items-center gap-3 w-full cursor-default"
          tabIndex={-1}
        >
          <span
            className={twMerge(
              clsx(
                "flex-1 bg-offbackground p-1 rounded-full transition-all duration-300 delay-300",
                PasswordProgress >= 1
                  ? (theme === "dark" ? "bg-slate-200" : "bg-slate-700") +
                      " delay-0"
                  : ""
              )
            )}
          ></span>
          <span
            className={twMerge(
              clsx(
                "flex-1 bg-offbackground p-1 rounded-full transition-all duration-300 delay-300",
                PasswordProgress >= 2
                  ? (theme === "dark" ? "bg-slate-200" : "bg-slate-700") +
                      " delay-0"
                  : ""
              )
            )}
          ></span>
          <span
            className={twMerge(
              clsx(
                "flex-1 bg-offbackground p-1 rounded-full transition-all duration-300 delay-150",
                PasswordProgress >= 3
                  ? (theme === "dark" ? "bg-slate-200" : "bg-slate-700") +
                      " delay-0"
                  : ""
              )
            )}
          ></span>
          <span
            className={twMerge(
              clsx(
                "flex-1 bg-offbackground p-1 rounded-full transition-all duration-300 delay-75",
                PasswordProgress >= 4
                  ? (theme === "dark" ? "bg-slate-200" : "bg-slate-700") +
                      " delay-0"
                  : ""
              )
            )}
          ></span>
          <span
            className={twMerge(
              clsx(
                "flex-1 bg-offbackground p-1 rounded-full transition-all duration-300 delay-0",
                PasswordProgress >= 5
                  ? (theme === "dark" ? "bg-slate-200" : "bg-slate-700") +
                      " delay-0"
                  : ""
              )
            )}
          ></span>
        </AccordionTrigger>
        <AccordionContent className="grid w-full items-center gap-4 pb-0">
          <div
            className={cn(
              "flex items-center space-x-2 cursor-none pointer-events-none transition-all duration-300",
              !PasswordState.charactersLength && "opacity-60"
            )}
          >
            <Checkbox
              tabIndex={-1}
              id="characters"
              checked={PasswordState.charactersLength}
            />
            <label
              htmlFor="terms"
              className="text-sm font-normal leading-none cursor-default select-none"
            >
              At least 8 characters
            </label>
          </div>
          <div
            className={cn(
              "flex items-center space-x-2 cursor-none pointer-events-none transition-all duration-300",
              !PasswordState.ContainsNumber && "opacity-60"
            )}
          >
            <Checkbox
              tabIndex={-1}
              id="number"
              checked={PasswordState.ContainsNumber}
            />
            <label
              htmlFor="terms"
              className="text-sm font-normal leading-none cursor-default select-none"
            >
              Contains a number
            </label>
          </div>
          <div
            className={cn(
              "flex items-center space-x-2 cursor-none pointer-events-none transition-all duration-300",
              !PasswordState.ContainsSpecialCharacter && "opacity-60"
            )}
          >
            <Checkbox
              tabIndex={-1}
              id="special"
              checked={PasswordState.ContainsSpecialCharacter}
            />
            <label
              htmlFor="terms"
              className="text-sm font-normal leading-none cursor-default select-none"
            >
              Contains a special character (e.g., @, #, $)
            </label>
          </div>
          <div
            className={cn(
              "flex items-center space-x-2 cursor-none pointer-events-none transition-all duration-300",
              !PasswordState.ContainsUppercase && "opacity-60"
            )}
          >
            <Checkbox
              tabIndex={-1}
              id="uppercase"
              checked={PasswordState.ContainsUppercase}
            />
            <label
              htmlFor="terms"
              className="text-sm font-normal leading-none cursor-default select-none"
            >
              Contains an uppercase letter
            </label>
          </div>
          <div
            className={cn(
              "flex items-center space-x-2 cursor-none pointer-events-none transition-all duration-300",
              !PasswordState.ContainsLowercase && "opacity-60"
            )}
          >
            <Checkbox
              tabIndex={-1}
              id="lowercase"
              checked={PasswordState.ContainsLowercase}
            />
            <label
              htmlFor="terms"
              className="text-sm font-normal leading-none cursor-default select-none"
            >
              Contains a lowercase letter
            </label>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PasswordCheckMarks;
