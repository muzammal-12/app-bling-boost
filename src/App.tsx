import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Splash from "./pages/Splash";
import ShopNetwork from "./pages/ShopNetwork";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import MaintenanceRepairs from "./pages/MaintenanceRepairs";
import TirePartCheck from "./pages/TirePartCheck";
import SoundDiagnosis from "./pages/SoundDiagnosis";
import LearningGuides from "./pages/LearningGuides";
import ProfileSettings from "./pages/ProfileSettings";

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
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/dashboard" element={<Index />} />
            <Route path="/shop-network" element={<ShopNetwork />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<Signup />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route path="/maintenance" element={<MaintenanceRepairs />} />
            <Route path="/tire-check" element={<TirePartCheck />} />
            <Route path="/sound-diagnosis" element={<SoundDiagnosis />} />
            <Route path="/guides" element={<LearningGuides />} />
            <Route path="/profile" element={<ProfileSettings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
