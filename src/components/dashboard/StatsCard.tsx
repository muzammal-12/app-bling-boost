import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface Stat {
  label: string;
  value: string;
  change?: number;
  changeType?: "increase" | "decrease" | "neutral";
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface StatsCardProps {
  stats: Stat[];
}

export function StatsCard({ stats }: StatsCardProps) {
  const getChangeIcon = (type?: "increase" | "decrease" | "neutral") => {
    switch (type) {
      case "increase":
        return <TrendingUp className="w-3.5 h-3.5" />;
      case "decrease":
        return <TrendingDown className="w-3.5 h-3.5" />;
      case "neutral":
        return <Minus className="w-3.5 h-3.5" />;
      default:
        return null;
    }
  };

  const getChangeStyles = (type?: "increase" | "decrease" | "neutral") => {
    switch (type) {
      case "increase":
        return "text-automotive-green bg-automotive-green/10";
      case "decrease":
        return "text-automotive-red bg-automotive-red/10";
      case "neutral":
        return "text-muted-foreground bg-muted";
      default:
        return "text-muted-foreground bg-muted";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card 
          key={index} 
          className="group relative overflow-hidden bg-card border-border/50 shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-1"
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500" 
               style={{ backgroundImage: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))` }} />
          
          {/* Shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          </div>

          <div className="p-6 relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              {stat.change !== undefined && (
                <div className={`flex items-center gap-1 text-sm font-medium px-2.5 py-1 rounded-full ${getChangeStyles(stat.changeType)}`}>
                  {getChangeIcon(stat.changeType)}
                  <span>{Math.abs(stat.change)}%</span>
                </div>
              )}
            </div>
            
            <div className="space-y-1">
              <p className="text-3xl font-display font-bold text-foreground group-hover:gradient-text transition-all duration-300">{stat.value}</p>
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                 style={{ backgroundImage: `linear-gradient(to right, hsl(var(--primary)), hsl(var(--accent)))` }} />
          </div>
        </Card>
      ))}
    </div>
  );
}
