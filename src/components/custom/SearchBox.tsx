import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { os } from "platform";
import * as React from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { Card, CardContent, CardDescription, CardFooter } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import SearchBoxMenu from "./SearchBoxMenu";

const SearchBox = ({
  className,
  type = "text",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  const ref = React.useRef<HTMLInputElement | null>(null);
  const menuRef = React.useRef<HTMLDivElement | null>(null);
  const [isFocused, setIsFocused] = React.useState(false);
  const isMobile = useIsMobile();

  useHotkeys(
    "ctrl+f, ⌘+f",
    (event) => {
      console.log(document.activeElement);

      event.preventDefault();
      event.stopPropagation();
      if (ref.current) {
        if (document.activeElement == ref.current) {
          ref.current.blur();
          setIsFocused(false);
        } else {
          ref.current.focus();
        }
      }
    },
    { enableOnFormTags: true }
  );

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => {
    // Do nothing here, we will handle closing the menu in the click event listener
  };

  // Global click event listener
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (
      menuRef.current &&
      !menuRef.current.contains(target) &&
      !ref.current?.contains(target)
    ) {
      setIsFocused(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full relative max-w-[600px]">
      <div
        className={cn(
          "flex gap-3 items-center justify-between h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus-within:ring-2 focus-within:ring-ring",
          className
        )}
      >
        <Search size={"20px"} />
        <input
          type={type}
          className="h-full w-full border-0 bg-transparent focus:outline-none"
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />

        <AnimatePresence>
          {!isMobile && !isFocused && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-offbackground px-2 py-1 border-border rounded-md w-max text-nowrap cursor-none pointer-events-none"
            >
              <span>{os?.family === "Windows" ? "Ctrl" : "⌘"} + F</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isFocused && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="bg-transparent shadow-2xl absolute top-[70px] w-full search-card z-10"
            ref={menuRef} // Attach ref to the menu
          >
            <Card className="bg-background w-full  ">
              <ScrollArea>
                <CardContent className="pt-2 max-h-[500px] px-0">
                  <SearchBoxMenu />
                </CardContent>
              </ScrollArea>

              <Separator />
              <CardFooter className="pt-5">
                <CardDescription>
                  Press "Enter" To Show All Results
                </CardDescription>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

SearchBox.displayName = "SearchBox";

export default SearchBox;
