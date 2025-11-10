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
        return <TrendingUp className="w-3 h-3 text-automotive-green" />;
      case "decrease":
        return <TrendingDown className="w-3 h-3 text-automotive-red" />;
      case "neutral":
        return <Minus className="w-3 h-3 text-muted-foreground" />;
      default:
        return null;
    }
  };

  const getChangeColor = (type?: "increase" | "decrease" | "neutral") => {
    switch (type) {
      case "increase":
        return "text-automotive-green";
      case "decrease":
        return "text-automotive-red";
      case "neutral":
        return "text-muted-foreground";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card 
          key={index} 
          className="relative overflow-hidden bg-gradient-to-br from-card via-card to-card/80 border-2 border-border/30 shadow-card hover:shadow-hover hover:scale-[1.02] transition-all duration-300 group"
        >
          {/* Gauge-style background arc */}
          <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-automotive-blue" />
            </svg>
          </div>
          
          {/* Racing stripe accent */}
          <div className={`absolute bottom-0 left-0 right-0 h-1 ${stat.color} opacity-60 group-hover:opacity-100 transition-opacity`}></div>
          
          <div className="p-6 relative z-10">
            <div className="flex items-center justify-between mb-4">
              {/* Icon with glow effect */}
              <div className={`relative w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center shadow-lg`}>
                <div className={`absolute inset-0 ${stat.color} rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                <stat.icon className="w-6 h-6 text-white relative z-10" />
              </div>
              
              {stat.change !== undefined && (
                <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${getChangeColor(stat.changeType)} bg-muted/50 backdrop-blur-sm`}>
                  {getChangeIcon(stat.changeType)}
                  <span>{Math.abs(stat.change)}%</span>
                </div>
              )}
            </div>
            
            <div className="space-y-1">
              <p className="text-3xl font-black text-foreground tracking-tight">{stat.value}</p>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}