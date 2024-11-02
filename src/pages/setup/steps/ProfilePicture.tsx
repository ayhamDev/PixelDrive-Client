import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { CircleUserRound, Upload, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfilePictureStep = () => {
  const navigate = useNavigate();
  return (
    <Card className="max-w-sm w-full mx-auto p-4">
      {" "}
      {/* Adjusted max width and added padding */}
      <CardHeader>
        <CardTitle className="text-center">Profile Picture</CardTitle>
        <CardDescription className="text-center">
          Set Your Account Profile Picture
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        {" "}
        {/* Centering the avatar */}
        <Avatar className="max-w-full max-h-[300px] w-full h-auto">
          {" "}
          {/* Made responsive */}
          <AvatarImage
            className="object-cover" // Ensures the image covers the avatar properly
            alt="Profile Picture"
          />
          <AvatarFallback>
            <UserRound width={"100%"} height={"100%"} strokeWidth={1} />
          </AvatarFallback>
        </Avatar>
      </CardContent>
      <CardFooter className="flex flex-col-reverse lg:flex-row justify-between mt-4 gap-3">
        {" "}
        {/* Responsive button layout */}
        <Button
          variant={"secondary"}
          onClick={() => navigate("/setup/storage")}
          className="w-full lg:w-auto" // Make the button full-width on small screens
        >
          Skip
        </Button>
        <Button className="w-full lg:w-auto">
          {/* Make the button full-width on small screens */}
          <Upload className="w-4 mr-2" /> Upload Picture
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfilePictureStep;
