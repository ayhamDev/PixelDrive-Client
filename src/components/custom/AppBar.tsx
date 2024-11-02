import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Bell, Menu, Search, UserRound } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import SearchBox from "./SearchBox";
import ThemeSwtich from "./ThemeSwtich";
import { useSidebar } from "../ui/sidebar";

const AppBar = () => {
  const isMobile = useIsMobile();
  const { setOpenMobile } = useSidebar();
  return (
    <div
      className={cn(
        "h-[70px] w-full border-border border-b-2 flex justify-between items-center px-5 gap-6 sticky top-0 right-0 z-10 bg-background"
      )}
    >
      {!isMobile && <SearchBox placeholder="Search All Files..." />}
      {isMobile && (
        <div className="flex justify-center items-center gap-5">
          <Menu size={30} onClick={() => setOpenMobile(true)} />
          <img src="/logo_small.svg" width={40} />
        </div>
      )}
      <div className="flex gap-4">
        <ThemeSwtich />
        <Button
          variant={"outline"}
          size={"icon"}
          className="object-cover rounded-full" // Ensures the image covers the avatar properly
        >
          <Bell size={"24px"} />
        </Button>
        {isMobile && (
          <Button
            variant={"outline"}
            size={"icon"}
            className="object-cover rounded-full" // Ensures the image covers the avatar properly
          >
            <Search size={24} />
          </Button>
        )}
        {!isMobile && (
          <Button
            variant={"outline"}
            size={"icon"}
            className="object-cover rounded-full" // Ensures the image covers the avatar properly
          >
            <Avatar>
              <AvatarImage src="/logo_smalls.svg" />
              <AvatarFallback className="bg-transparent">
                <UserRound size={"24px"} />
              </AvatarFallback>
            </Avatar>
          </Button>
        )}
      </div>
    </div>
  );
};

export default AppBar;
