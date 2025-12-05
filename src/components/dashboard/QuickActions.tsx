import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Plus, 
  Camera, 
  MapPin, 
  Car,
  Zap,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface QuickAction {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  description: string;
  gradient: string;
  route: string;
}

export function QuickActions() {
  const navigate = useNavigate();

  const actions: QuickAction[] = [
    {
      icon: Plus,
      label: "Add Service",
      description: "Log maintenance",
      gradient: "from-automotive-blue to-automotive-cyan",
      route: "/maintenance"
    },
    {
      icon: Camera,
      label: "Tire Check",
      description: "Scan tire condition",
      gradient: "from-automotive-red to-automotive-orange",
      route: "/tire-check"
    },
    {
      icon: MapPin,
      label: "Find Shop",
      description: "Locate nearby",
      gradient: "from-automotive-green to-automotive-teal",
      route: "/shop-network"
    },
    {
      icon: Car,
      label: "Vehicle Status",
      description: "Full diagnostic",
      gradient: "from-automotive-purple to-automotive-blue",
      route: "/dashboard-scan"
    }
  ];

  return (
    <Card className="relative overflow-hidden bg-card border-border/50 shadow-card h-full">
      {/* Decorative background */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent/5 to-transparent rounded-full translate-y-32 -translate-x-32" />
      
      <div className="p-6 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-secondary flex items-center justify-center shadow-lg">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-xl font-display font-bold text-foreground">Quick Actions</h2>
            <p className="text-sm text-muted-foreground">Fast access to tools</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="group relative h-auto p-4 flex-col items-start gap-3 bg-background/50 border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 overflow-hidden"
              onClick={() => navigate(action.route)}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              
              <div className="relative z-10 text-left">
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{action.label}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
                <span className="text-xs text-muted-foreground">{action.description}</span>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${action.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
}
