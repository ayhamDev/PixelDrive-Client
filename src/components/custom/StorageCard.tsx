import { HoverCardPortal } from "@radix-ui/react-hover-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "../ui/hover-card";
import { File, FileText, Image, Music, Video } from "lucide-react";

const StorageCard = () => {
  return (
    <Card className="bg-background">
      <CardHeader>
        <CardTitle>
          <div className="flex gap-3 items-center">
            <span className="w-[12px] h-[12px] rounded-full animate-pulse bg-yellow-400"></span>
            <h3>Server Name</h3>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-3 flex gap-[2px]">
          <HoverCard openDelay={100} closeDelay={100}>
            <HoverCardTrigger className="w-[10%]">
              <span className="block h-full rounded-sm bg-red-500 hover:shadow-md hover:scale-110"></span>
            </HoverCardTrigger>
            <HoverCardContent className="w-60 bg-background">
              <div className="flex items-center gap-3 pointer-events-none select-none">
                <Video className="text-red-500" size={50} />
                <div className="flex flex-col">
                  <span>Video</span>
                  <span className="text-muted-foreground">12.0 MB</span>
                </div>
                <span className="text-muted-foreground text-xs mt-auto ml-auto mb-1">
                  119 items
                </span>
              </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard openDelay={100} closeDelay={100}>
            <HoverCardTrigger className="w-[10%]">
              <span className="block h-full rounded-sm bg-indigo-400 hover:shadow-md hover:scale-110"></span>
            </HoverCardTrigger>
            <HoverCardContent className="w-60 bg-background">
              <div className="flex items-center gap-3 pointer-events-none select-none">
                <Image className="text-indigo-400" size={50} />
                <div className="flex flex-col">
                  <span>Images</span>
                  <span className="text-muted-foreground">12.0 MB</span>
                </div>
                <span className="text-muted-foreground text-xs mt-auto ml-auto mb-1">
                  119 items
                </span>
              </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard openDelay={100} closeDelay={100}>
            <HoverCardTrigger className="w-[10%]">
              <span className="block h-full rounded-sm bg-teal-500 hover:shadow-md hover:scale-110"></span>
            </HoverCardTrigger>
            <HoverCardContent className="w-60 bg-background">
              <div className="flex items-center gap-3 pointer-events-none select-none">
                <FileText className="text-teal-500" size={50} />
                <div className="flex flex-col">
                  <span>Documents</span>
                  <span className="text-muted-foreground">12.0 MB</span>
                </div>
                <span className="text-muted-foreground text-xs mt-auto ml-auto mb-1">
                  119 items
                </span>
              </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard openDelay={100} closeDelay={100}>
            <HoverCardTrigger className="w-[10%]">
              <span className="block h-full rounded-sm bg-emerald-600 hover:shadow-md hover:scale-110"></span>
            </HoverCardTrigger>
            <HoverCardContent className="w-60 bg-background">
              <div className="flex items-center gap-3 pointer-events-none select-none">
                <Music className="text-emerald-600" size={50} />
                <div className="flex flex-col">
                  <span>Music</span>
                  <span className="text-muted-foreground">12.0 MB</span>
                </div>
                <span className="text-muted-foreground text-xs mt-auto ml-auto mb-1">
                  119 items
                </span>
              </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard openDelay={100} closeDelay={100}>
            <HoverCardTrigger className="w-[10%]">
              <span className="block h-full rounded-sm bg-gray-600 hover:shadow-md hover:scale-110"></span>
            </HoverCardTrigger>
            <HoverCardContent className="w-60 bg-background">
              <div className="flex items-center gap-3 pointer-events-none select-none">
                <File className="text-gray-600" size={50} />
                <div className="flex flex-col">
                  <span>Other</span>
                  <span className="text-muted-foreground">12.0 MB</span>
                </div>
                <span className="text-muted-foreground text-xs mt-auto ml-auto mb-1">
                  119 items
                </span>
              </div>
            </HoverCardContent>
          </HoverCard>
          <span className="bg-offbackground block flex-1 h-full rounded-sm"></span>
        </div>
      </CardContent>

      <CardFooter>
        <CardDescription>284 GB free of 475 GB</CardDescription>
      </CardFooter>
    </Card>
  );
};

export default StorageCard;
