import { useTheme } from "@/utils/useTheme";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";

const ThemeSwtich = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      variant={"outline"}
      size={"icon"}
      className="object-cover rounded-full" // Ensures the image covers the avatar properly
      onClick={toggleTheme}
    >
      {theme == "dark" ? <Moon /> : <Sun />}
    </Button>
  );
};

export default ThemeSwtich;
