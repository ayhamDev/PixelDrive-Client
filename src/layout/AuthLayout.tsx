import AnimatedOutlet from "@/components/custom/AnimatedOutlet";
import ThemeSwtich from "@/components/custom/ThemeSwtich";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
  const l = useLocation();
  return (
    <div className="onboardbg min-h-screen flex justify-end">
      <div className="absolute top-2 right-2 z-10">
        <ThemeSwtich />
      </div>
      <div className="relative bg-opacity-0 bg-background lg:w-[45%] w-[100%] flex justify-center items-center lg:rounded-tl-[40px] lg:rounded-bl-[40px]">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
