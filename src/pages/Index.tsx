import { MaintenanceCard } from "@/components/dashboard/MaintenanceCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  Gauge,
  Calendar,
  DollarSign,
  AlertTriangle,
  Sparkles,
  Car
} from "lucide-react";

const Index = () => {

  const maintenanceItems = [
    {
      title: "Oil Change",
      dueDate: "Due in 2 weeks",
      progress: 75,
      priority: "medium" as const,
      type: "due-soon" as const
    },
    {
      title: "Brake Inspection",
      dueDate: "Overdue by 1 week",
      progress: 100,
      priority: "high" as const,
      type: "overdue" as const
    },
    {
      title: "Air Filter Replacement",
      dueDate: "Due in 1 month",
      progress: 45,
      priority: "low" as const,
      type: "scheduled" as const
    }
  ];

  const stats = [
    {
      label: "Monthly Savings",
      value: "$247",
      change: 12,
      changeType: "increase" as const,
      icon: DollarSign,
      color: "from-automotive-green to-automotive-teal"
    },
    {
      label: "Vehicle Health",
      value: "87%",
      change: 5,
      changeType: "increase" as const,
      icon: Gauge,
      color: "from-automotive-blue to-automotive-cyan"
    },
    {
      label: "Next Service",
      value: "14 days",
      change: -3,
      changeType: "decrease" as const,
      icon: Calendar,
      color: "from-automotive-purple to-automotive-blue"
    },
    {
      label: "Active Issues",
      value: "2",
      change: -1,
      changeType: "decrease" as const,
      icon: AlertTriangle,
      color: "from-automotive-red to-automotive-orange"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-glow opacity-50" />
      </div>

      {/* Header */}
      <header className="relative border-b border-border/50 glass-strong sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img 
                  src="/logo.png"
                  alt="PROVE IT AUTO"
                  className="h-12 w-auto relative z-10"
                />
                <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-display font-bold gradient-text">
                    PROVE IT AUTO
                  </h1>
                  <Sparkles className="w-5 h-5 text-primary animate-pulse-glow" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Your comprehensive vehicle maintenance hub
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-card/80 border border-border/50 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
                  <Car className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-foreground">
                    2018 Honda Civic
                  </p>
                  <p className="text-xs text-muted-foreground">
                    87,432 miles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 relative z-10">
        {/* Welcome Section */}
        <section className="mb-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-1 w-12 bg-gradient-primary rounded-full" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Dashboard</span>
          </div>
          <h2 className="text-3xl font-display font-bold text-foreground mb-1">
            Vehicle Overview
          </h2>
          <p className="text-muted-foreground">
            Stay on top of your vehicle's health and maintenance schedule
          </p>
        </section>

        {/* Stats Overview */}
        <section className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <StatsCard stats={stats} />
        </section>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Quick Actions */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <QuickActions />
          </div>
          
          {/* Maintenance Overview */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <MaintenanceCard items={maintenanceItems} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
