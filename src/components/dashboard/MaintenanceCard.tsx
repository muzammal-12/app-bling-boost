import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar, Wrench, AlertTriangle } from "lucide-react";

interface MaintenanceItem {
  title: string;
  dueDate: string;
  progress: number;
  priority: "high" | "medium" | "low";
  type: "overdue" | "due-soon" | "scheduled";
}

interface MaintenanceCardProps {
  items: MaintenanceItem[];
}

const priorityConfig = {
  high: { color: "text-automotive-red", bg: "bg-automotive-red/10", border: "border-automotive-red/20" },
  medium: { color: "text-automotive-orange", bg: "bg-automotive-orange/10", border: "border-automotive-orange/20" },
  low: { color: "text-automotive-green", bg: "bg-automotive-green/10", border: "border-automotive-green/20" },
};

const typeConfig = {
  overdue: { icon: AlertTriangle, color: "text-automotive-red", label: "Overdue" },
  "due-soon": { icon: Calendar, color: "text-automotive-orange", label: "Due Soon" },
  scheduled: { icon: Wrench, color: "text-automotive-blue", label: "Scheduled" },
};

export function MaintenanceCard({ items }: MaintenanceCardProps) {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-card via-card/95 to-automotive-orange/5 border-2 border-border/30 shadow-card hover:shadow-hover transition-all">
      {/* Decorative gear background */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03]">
        <Wrench className="w-full h-full rotate-45" />
      </div>
      
      <div className="p-6 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-lg">
            <Wrench className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Maintenance Schedule</h2>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Service Tracker</p>
          </div>
        </div>

        <div className="space-y-3">
          {items.map((item, index) => {
            const TypeIcon = typeConfig[item.type].icon;
            return (
              <div 
                key={index} 
                className="relative p-4 rounded-lg bg-gradient-to-r from-background/80 to-background/40 border-l-4 hover:from-background hover:to-background/60 transition-all group"
                style={{ borderLeftColor: `hsl(var(--automotive-${item.type === 'overdue' ? 'red' : item.type === 'due-soon' ? 'orange' : 'blue'}))` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <TypeIcon className={`w-4 h-4 ${typeConfig[item.type].color}`} />
                      <span className="font-medium">{item.dueDate}</span>
                    </div>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`${priorityConfig[item.priority].bg} ${priorityConfig[item.priority].color} ${priorityConfig[item.priority].border} font-semibold`}
                  >
                    {typeConfig[item.type].label}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground font-medium">Progress</span>
                    <span className="text-foreground font-bold">{item.progress}%</span>
                  </div>
                  <Progress value={item.progress} className="h-2.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}