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
      color: "bg-automotive-blue text-white hover:bg-automotive-blue/90",
      onClick: () => console.log("Add service")
    },
    {
      icon: Camera,
      label: "Tire Check",
      color: "bg-automotive-red text-white hover:bg-automotive-red/90",
      onClick: () => console.log("Tire check")
    },
    {
      icon: MapPin,
      label: "Find Shop",
      color: "bg-automotive-green text-white hover:bg-automotive-green/90",
      onClick: () => console.log("Find shop")
    },
    {
      icon: Car,
      label: "Vehicle Status",
      color: "bg-automotive-teal text-white hover:bg-automotive-teal/90",
      onClick: () => console.log("Vehicle status")
    }
  ];

  return (
    <Card className="bg-gradient-card border-border/50 shadow-card">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <Zap className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Quick Actions</h2>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className={`h-20 flex-col gap-2 ${action.color} border-0 hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md`}
              onClick={action.onClick}
            >
              <action.icon className="w-6 h-6" />
              <span className="text-sm font-medium">{action.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
}