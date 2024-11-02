import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { CircleUserRound } from "lucide-react";
import React from "react";
import { Card } from "../ui/card";
import { AvatarImage } from "../ui/avatar";

interface IUserCardProps {
  pictureUrl?: string;
  username?: string;
  email?: string;
}
const UserCard = ({ username, email, pictureUrl }: IUserCardProps) => {
  return (
    <Card className="flex px-5 py-4 gap-4 overflow-hidden items-center">
      <div>
        <Avatar className="max-w-[64px] max-h-[64px]">
          <AvatarImage src={pictureUrl} alt="Profile_Image" />
          <AvatarFallback>
            <CircleUserRound width={"64px"} height={"64px"} />
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col gap-1 justify-center">
        <h4 className="scroll-m-20 text-l font-semibold tracking-tight">
          @{username ? username : null}
        </h4>
        <p className="text-sm text-muted-foreground">{email ? email : null}</p>
      </div>
    </Card>
  );
};

export default UserCard;
