import { ForwardRefExoticComponent, RefAttributes, useEffect } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar";

import {
  Clock,
  Cloud,
  Folder,
  Home,
  LucideProps,
  Share2,
  Star,
  Trash,
  Users,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { useMediaQuery } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface ILink {
  path: string;
  name: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  group: "MyDrive" | "Files" | "System" | "Storage";
}

const AppSideBar = () => {
  const { state, setOpen } = useSidebar();
  const CollabsSidebar = useMediaQuery("only screen and (max-width: 1200px)");
  const { pathname } = useLocation();
  const isMobile = useIsMobile();
  // Organize links with `group` property for simpler grouping in the sidebar
  const Links: ILink[] = [
    { path: "/", name: "Home", icon: Home, group: "MyDrive" },
    { path: "/files", name: "My Files", icon: Folder, group: "MyDrive" },
    { path: "/shared", name: "Shared Files", icon: Share2, group: "Files" },
    { path: "/recent", name: "Recent", icon: Clock, group: "Files" },
    { path: "/favorites", name: "Favorites", icon: Star, group: "Files" },
    { path: "/users", name: "Users", icon: Users, group: "System" },
    { path: "/trash", name: "Trash", icon: Trash, group: "Storage" },
    { path: "/storage", name: "Stroage", icon: Cloud, group: "Storage" },
  ];

  // Dynamically extract unique groups
  const groupedLinks = Links.reduce((groups, link) => {
    (groups[link.group] ||= []).push(link);
    return groups;
  }, {} as Record<string, ILink[]>);
  useEffect(() => {
    setOpen(!CollabsSidebar);
  }, [CollabsSidebar]);

  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeader className={cn(!CollabsSidebar ? "mb-6" : "mb-4")}>
        {state === "collapsed" ? (
          isMobile ? (
            <img src="/logo.svg" className="m-auto w-[75%] mt-4" />
          ) : (
            <img
              src="/logo_small.svg"
              className="m-auto w-full max-w-12 mt-4"
            />
          )
        ) : (
          <img src="/logo.svg" className="m-auto w-[75%] mt-4" />
        )}
      </SidebarHeader>

      <ScrollArea>
        <SidebarContent>
          {Object.entries(groupedLinks).map(([groupName, links]) => (
            <SidebarGroup key={groupName}>
              <SidebarGroupLabel>{groupName}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {links.map((link) => (
                    <SidebarMenuItem key={link.name}>
                      <SidebarMenuButton
                        isActive={pathname.includes(link.path)}
                        className="p-5 font-semibold"
                        asChild
                      >
                        <Link
                          to={link.path}
                          className="flex items-center gap-3 text-base"
                        >
                          <link.icon strokeWidth={2.5} />
                          <span>{link.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
      </ScrollArea>
    </Sidebar>
  );
};

export default AppSideBar;
