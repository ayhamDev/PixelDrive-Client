import { AnimatePresence, motion } from "framer-motion";
import ConnectStorage from "./steps/ConnectStorageStep";
import CreateAdminStep from "./steps/CreateAdminStep";
import ProfilePictureStep from "./steps/ProfilePicture";
import WelcomeStep from "./steps/WelcomeStep";
import ConnectStorageContext from "./steps/ConnectStorageContext";

interface IAppSetup {
  step: 1 | 2 | 3 | 4 | 5;
}

const AppSetup = ({ step }: IAppSetup) => {
  const renderStep = () => {
    switch (step) {
      case 1:
        return <WelcomeStep />;
      case 2:
        return <CreateAdminStep />;
      case 3:
        return <ProfilePictureStep />;
      case 4:
        return <ConnectStorageContext />;
      case 5:
        return <ConnectStorage />;
      default:
        return <WelcomeStep />;
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AppSetup;
