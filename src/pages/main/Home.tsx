import QuickAccess from "@/components/custom/QuickAccess";
import StorageCluster from "@/components/custom/StorageCluster";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Cloud, Link } from "lucide-react";

const Home = () => {
  return (
    <ScrollArea className="h-full">
      <div className="p-5 flex flex-col gap-6">
        {/* quick access */}
        <StorageCluster />
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Link />
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Quick Access
            </h4>
          </div>
          <QuickAccess />
        </section>
      </div>
    </ScrollArea>
  );
};

export default Home;
