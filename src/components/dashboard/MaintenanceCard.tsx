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
    <Card className="bg-gradient-card border-border/50 shadow-card">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <Wrench className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Maintenance Overview</h2>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => {
            const TypeIcon = typeConfig[item.type].icon;
            return (
              <div key={index} className="p-4 rounded-lg bg-background/50 border border-border/30">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <TypeIcon className={`w-4 h-4 ${typeConfig[item.type].color}`} />
                      <span>{item.dueDate}</span>
                    </div>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`${priorityConfig[item.priority].bg} ${priorityConfig[item.priority].color} ${priorityConfig[item.priority].border}`}
                  >
                    {typeConfig[item.type].label}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-foreground font-medium">{item.progress}%</span>
                  </div>
                  <Progress value={item.progress} className="h-2" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}