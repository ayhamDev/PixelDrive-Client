import React from "react";
import StorageCard from "./StorageCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Cloud } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const StorageCluster = () => {
  const isMobile = useIsMobile();

  return (
    <Accordion
      type="single"
      defaultValue={isMobile ? "2" : "1"}
      collapsible
      className="flex flex-col gap-4"
    >
      <AccordionItem value="1">
        <AccordionTrigger>
          <div className="flex items-center gap-2">
            <Cloud />
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Storage Cluster
            </h4>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="bg-offbackground rounded-lg p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-6 justify-between items-center">
            <StorageCard />
            <StorageCard />
            <StorageCard />
            <StorageCard />
            <StorageCard />
          </div>{" "}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default StorageCluster;
