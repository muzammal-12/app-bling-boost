import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  BookOpen,
  Wrench,
  Car,
  Headphones,
  MapPin,
  User,
  Home,
  Settings
} from "lucide-react";

const navigationItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Learning Guides",
    url: "/guides",
    icon: BookOpen,
  },
  {
    title: "Maintenance & Repairs",
    url: "/maintenance",
    icon: Wrench,
  },
  {
    title: "Tire & Part Check",
    url: "/tire-check",
    icon: Car,
  },
  {
    title: "Sound Diagnosis",
    url: "/sound-diagnosis",
    icon: Headphones,
  },
  {
    title: "Shop Network",
    url: "/shop-network",
    icon: MapPin,
  },
  {
    title: "Profile Settings",
    url: "/profile",
    icon: User,
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(path);
  };

  const getNavCls = ({ isActive: active }: { isActive: boolean }) =>
    active 
      ? "bg-primary text-primary-foreground font-medium hover:bg-primary/90" 
      : "hover:bg-muted/50 text-muted-foreground hover:text-foreground";

  return (
    <Sidebar
      className={`${isCollapsed ? "w-14" : "w-64"} transition-all duration-300 border-r border-border bg-card`}
      collapsible="icon"
      style={{
        borderRight: "1px solid hsl(var(--border))",
        backgroundColor: "hsl(var(--card))",
      }}
    >
      <SidebarContent>
        <div 
          className="p-4 border-b border-border"
          style={{ borderBottom: "1px solid hsl(var(--border))" }}
        >
          {!isCollapsed && (
            <h2 
              className="text-lg font-bold text-foreground"
              style={{ color: "hsl(var(--foreground))" }}
            >
              myCarApp
            </h2>
          )}
        </div>

        <SidebarGroup className="mt-4">
          <SidebarGroupLabel 
            className={`${isCollapsed ? "sr-only" : ""} text-muted-foreground px-4 py-2 text-sm font-medium`}
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Navigation
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={({ isActive: active }) => 
                        `flex items-center px-4 py-2 rounded-md transition-colors duration-200 ${getNavCls({ isActive: active })}`
                      }
                      style={({ isActive: active }) => ({
                        backgroundColor: active 
                          ? "hsl(var(--primary))" 
                          : "transparent",
                        color: active 
                          ? "hsl(var(--primary-foreground))" 
                          : "hsl(var(--muted-foreground))",
                      })}
                    >
                      <item.icon 
                        className={`h-5 w-5 ${isCollapsed ? "" : "mr-3"} flex-shrink-0`}
                      />
                      {!isCollapsed && (
                        <span className="text-sm font-medium truncate">
                          {item.title}
                        </span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}