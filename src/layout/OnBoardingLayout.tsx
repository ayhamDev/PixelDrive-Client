import ThemeSwtich from "@/components/custom/ThemeSwtich";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";

const OnBoardingLayout = () => {
  return (
    <div className="relative onboardbg min-h-screen flex justify-center items-center  p-4">
      <div className="absolute top-2 right-2">
        <ThemeSwtich />
      </div>
      <Outlet />
    </div>
  );
};

export default OnBoardingLayout;
