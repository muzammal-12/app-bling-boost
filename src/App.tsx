import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import LearningGuides from "./pages/LearningGuides";
import MaintenanceRepairs from "./pages/MaintenanceRepairs";
import TirePartCheck from "./pages/TirePartCheck";
import SoundDiagnosis from "./pages/SoundDiagnosis";
import ShopNetwork from "./pages/ShopNetwork";
import ProfileSettings from "./pages/ProfileSettings";
import Splash from "./pages/Splash";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SidebarProvider>
            <div className="min-h-screen flex w-full">
              <AppSidebar />
              <div className="flex-1 flex flex-col">
                <header 
                  className="h-12 flex items-center border-b border-border bg-background px-4"
                  style={{
                    borderBottom: "1px solid hsl(var(--border))",
                    backgroundColor: "hsl(var(--background))"
                  }}
                >
                  <SidebarTrigger />
                </header>
                <main className="flex-1">
                  <Routes>
                    <Route path="/splash" element={<Splash />} />
                    <Route path="/" element={<Index />} />
                    <Route path="/dashboard" element={<Index />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/guides" element={<LearningGuides />} />
                    <Route path="/maintenance" element={<MaintenanceRepairs />} />
                    <Route path="/tire-check" element={<TirePartCheck />} />
                    <Route path="/sound-diagnosis" element={<SoundDiagnosis />} />
                    <Route path="/shop-network" element={<ShopNetwork />} />
                    <Route path="/profile" element={<ProfileSettings />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </div>
            </div>
          </SidebarProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
