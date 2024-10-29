import React from "react";
import Login from "./Login";
import { AnimatePresence, motion } from "framer-motion";
import RequestResetPassword from "./RequestResetPassword";
import ResetPassword from "./ResetPassword";

const Auth = ({
  render,
}: {
  render: "login" | "reset-password" | "request-reset-password";
}) => {
  const RenderSetup = () => {
    switch (render) {
      case "login":
        return <Login />;
      case "request-reset-password":
        return <RequestResetPassword />;
      case "reset-password":
        return <ResetPassword />;
      default:
        return <Login />;
    }
  };
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={render}
        className="lg:w-[60%] w-full px-6"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        {RenderSetup()}
      </motion.div>
    </AnimatePresence>
  );
};

export default Auth;
