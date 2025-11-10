import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Plus, 
  Camera, 
  MapPin, 
  Bell, 
  Car,
  Zap
} from "lucide-react";

interface QuickAction {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  color: string;
  onClick: () => void;
}

export function QuickActions() {
  const actions: QuickAction[] = [
    {
      icon: Plus,
      label: "Add Service",
      color: "bg-gradient-to-br from-automotive-blue to-automotive-blue/80 text-white hover:from-automotive-blue/90 hover:to-automotive-blue/70",
      onClick: () => console.log("Add service")
    },
    {
      icon: Camera,
      label: "Tire Check",
      color: "bg-gradient-to-br from-automotive-red to-automotive-red/80 text-white hover:from-automotive-red/90 hover:to-automotive-red/70",
      onClick: () => console.log("Tire check")
    },
    {
      icon: MapPin,
      label: "Find Shop",
      color: "bg-gradient-to-br from-automotive-green to-automotive-green/80 text-white hover:from-automotive-green/90 hover:to-automotive-green/70",
      onClick: () => console.log("Find shop")
    },
    {
      icon: Car,
      label: "Vehicle Status",
      color: "bg-gradient-to-br from-automotive-teal to-automotive-teal/80 text-white hover:from-automotive-teal/90 hover:to-automotive-teal/70",
      onClick: () => console.log("Vehicle status")
    }
  ];

  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-card via-card/95 to-automotive-blue/5 border-2 border-border/30 shadow-card hover:shadow-hover transition-all">
      {/* Decorative lightning bolt background */}
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-[0.03]">
        <Zap className="w-full h-full -rotate-12" />
      </div>
      
      <div className="p-6 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-lg animate-pulse">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Quick Actions</h2>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">One-Tap Access</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className={`relative h-24 flex-col gap-2 ${action.color} border-0 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md hover:shadow-xl overflow-hidden group`}
              onClick={action.onClick}
            >
              {/* Racing stripe accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-white/30"></div>
              <action.icon className="w-7 h-7 relative z-10 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold relative z-10">{action.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
}