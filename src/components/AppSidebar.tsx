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
  Gauge,
  Sparkles
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
    title: "Dashboard Scan",
    url: "/dashboard-scan",
    icon: Gauge,
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

  return (
    <Sidebar
      className={`${isCollapsed ? "w-14" : "w-64"} transition-all duration-300 border-r border-border/50 bg-sidebar`}
      collapsible="icon"
    >
      <SidebarContent className="relative overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        
        <div className="p-4 border-b border-border/50 relative">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src="/logo.png"
                alt="PROVE IT AUTO"
                className={`${isCollapsed ? "h-8" : "h-10"} w-auto transition-all duration-300`}
              />
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full" />
            </div>
            {!isCollapsed && (
              <div className="flex flex-col">
                <span className="text-base font-display font-bold gradient-text leading-tight">
                  PROVE IT
                </span>
                <span className="text-base font-display font-bold text-accent leading-tight">
                  AUTO
                </span>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup className="mt-4">
          {!isCollapsed && (
            <SidebarGroupLabel className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-3 h-3" />
              Navigation
            </SidebarGroupLabel>
          )}

          <SidebarGroupContent>
            <SidebarMenu className="px-2 space-y-1">
              {navigationItems.map((item) => {
                const isActive = item.url === "/" 
                  ? currentPath === "/" 
                  : currentPath.startsWith(item.url);

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        end={item.url === "/"}
                        className={`group relative flex items-center px-3 py-2.5 rounded-xl transition-all duration-300 ${
                          isActive 
                            ? "bg-gradient-primary text-primary-foreground shadow-lg shadow-primary/25" 
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                      >
                        {/* Active indicator */}
                        {isActive && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary-foreground rounded-full" />
                        )}
                        
                        <item.icon 
                          className={`h-5 w-5 ${isCollapsed ? "" : "mr-3"} flex-shrink-0 transition-transform duration-300 ${
                            isActive ? "" : "group-hover:scale-110"
                          }`}
                        />
                        {!isCollapsed && (
                          <span className="text-sm font-medium truncate">
                            {item.title}
                          </span>
                        )}

                        {/* Hover glow effect */}
                        {!isActive && (
                          <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
