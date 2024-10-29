import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ConnectStorageContext = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">
        Connect{" "}
        <span className="font-extrabold text-indigo-400">PixelDrive</span>{" "}
        Storage
      </h1>
      <p className="mb-6">
        Connect to your storage pool to store files securely.
      </p>
      {/* Add your storage connection form here */}
      <div className="flex mt-4 justify-center items-center gap-4">
        <Button onClick={() => navigate("/setup/connect-storage")}>
          Connect
        </Button>
      </div>
    </div>
  );
};
export default ConnectStorageContext;
