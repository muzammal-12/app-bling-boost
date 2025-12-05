import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar, Wrench, AlertTriangle, ChevronRight } from "lucide-react";

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
  high: { 
    color: "text-automotive-red", 
    bg: "bg-automotive-red/10", 
    border: "border-automotive-red/30",
    glow: "shadow-[0_0_15px_hsl(var(--automotive-red)/0.2)]"
  },
  medium: { 
    color: "text-automotive-orange", 
    bg: "bg-automotive-orange/10", 
    border: "border-automotive-orange/30",
    glow: "shadow-[0_0_15px_hsl(var(--automotive-orange)/0.2)]"
  },
  low: { 
    color: "text-automotive-green", 
    bg: "bg-automotive-green/10", 
    border: "border-automotive-green/30",
    glow: "shadow-[0_0_15px_hsl(var(--automotive-green)/0.2)]"
  },
};

const typeConfig = {
  overdue: { icon: AlertTriangle, color: "text-automotive-red", label: "Overdue", gradient: "from-automotive-red to-automotive-orange" },
  "due-soon": { icon: Calendar, color: "text-automotive-orange", label: "Due Soon", gradient: "from-automotive-orange to-automotive-purple" },
  scheduled: { icon: Wrench, color: "text-automotive-blue", label: "Scheduled", gradient: "from-automotive-blue to-automotive-teal" },
};

export function MaintenanceCard({ items }: MaintenanceCardProps) {
  return (
    <Card className="relative overflow-hidden bg-card border-border/50 shadow-card">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-32 translate-x-32" />
      
      <div className="p-6 relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg">
              <Wrench className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-xl font-display font-bold text-foreground">Maintenance</h2>
              <p className="text-sm text-muted-foreground">Upcoming services</p>
            </div>
          </div>
          <Badge variant="secondary" className="font-medium">
            {items.length} items
          </Badge>
        </div>

        <div className="space-y-3">
          {items.map((item, index) => {
            const TypeIcon = typeConfig[item.type].icon;
            return (
              <div 
                key={index} 
                className={`group p-4 rounded-xl bg-background/50 border transition-all duration-300 hover:shadow-md cursor-pointer ${priorityConfig[item.priority].border} hover:${priorityConfig[item.priority].glow}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                      <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <TypeIcon className={`w-4 h-4 ${typeConfig[item.type].color}`} />
                      <span>{item.dueDate}</span>
                    </div>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`${priorityConfig[item.priority].bg} ${priorityConfig[item.priority].color} border-0 font-medium`}
                  >
                    {typeConfig[item.type].label}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-foreground font-semibold">{item.progress}%</span>
                  </div>
                  <div className="relative">
                    <Progress value={item.progress} className="h-2" />
                    {/* Glow effect on progress */}
                    <div 
                      className="absolute top-0 left-0 h-2 rounded-full blur-sm opacity-50"
                      style={{ 
                        width: `${item.progress}%`,
                        background: `linear-gradient(to right, hsl(var(--primary)), hsl(var(--accent)))`
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
