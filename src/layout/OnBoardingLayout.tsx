import ThemeSwtich from "@/components/custom/ThemeSwtich";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";

const OnBoardingLayout = () => {
  return (
    <div className="relative onboardbg min-h-screen flex justify-center items-center  p-4">
      <div className="absolute top-4 right-4">
        <ThemeSwtich />
      </div>
      <Outlet />
    </div>
  );
};

export default OnBoardingLayout;
