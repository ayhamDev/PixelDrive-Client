import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const WelcomeStep = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        <span className="font-extrabold text-indigo-400">PixelDrive</span> Setup
      </h2>
      <p className="mb-6">Let's get started with setting up your app.</p>
      <Button onClick={() => navigate("/setup/create-admin")}>
        Get Started
      </Button>
    </div>
  );
};

export default WelcomeStep;
