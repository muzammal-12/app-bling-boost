import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  status?: "active" | "warning" | "success" | "pending";
  statusText?: string;
  actionText?: string;
  onClick?: () => void;
}

const statusConfig = {
  active: { icon: Clock, color: "text-automotive-blue", bg: "bg-automotive-blue/10" },
  warning: { icon: AlertCircle, color: "text-automotive-red", bg: "bg-automotive-red/10" },
  success: { icon: CheckCircle, color: "text-automotive-green", bg: "bg-automotive-green/10" },
  pending: { icon: Clock, color: "text-automotive-orange", bg: "bg-automotive-orange/10" },
};

export function DashboardCard({
  title,
  description,
  icon,
  color,
  status,
  statusText,
  actionText = "Open",
  onClick
}: DashboardCardProps) {
  const StatusIcon = status ? statusConfig[status].icon : null;

  return (
    <Card 
      className="group relative overflow-hidden bg-gradient-card border-border/50 hover:bg-gradient-hover transition-all duration-300 cursor-pointer shadow-card hover:shadow-hover hover:scale-[1.02] active:scale-[0.98]"
      onClick={onClick}
    >
      <div className="p-6 h-full flex flex-col">
        {/* Status Badge */}
        {status && statusText && (
          <div className="absolute top-4 right-4">
            <Badge variant="outline" className={`${statusConfig[status].bg} ${statusConfig[status].color} border-current/20`}>
              {StatusIcon && <StatusIcon className="w-3 h-3 mr-1" />}
              {statusText}
            </Badge>
          </div>
        )}

        {/* Icon */}
        <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Action */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/30">
          <span className="text-sm font-medium text-muted-foreground">
            {actionText}
          </span>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
    </Card>
  );
}