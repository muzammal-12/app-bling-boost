import { MaintenanceCard } from "@/components/dashboard/MaintenanceCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  Gauge,
  Calendar,
  DollarSign,
  AlertTriangle
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
      color: "bg-automotive-green"
    },
    {
      label: "Vehicle Health",
      value: "87%",
      change: 5,
      changeType: "increase" as const,
      icon: Gauge,
      color: "bg-automotive-blue"
    },
    {
      label: "Next Service",
      value: "14 days",
      change: -3,
      changeType: "decrease" as const,
      icon: Calendar,
      color: "bg-automotive-teal"
    },
    {
      label: "Active Issues",
      value: "2",
      change: -1,
      changeType: "decrease" as const,
      icon: AlertTriangle,
      color: "bg-automotive-red"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-automotive-blue/5">
      {/* Automotive-styled Header with speedometer vibe */}
      <header className="border-b-2 border-automotive-blue/20 bg-gradient-to-r from-card/95 via-card/90 to-automotive-teal/10 backdrop-blur-md sticky top-0 z-10 shadow-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 animate-pulse"></div>
                <img 
                  src="/logo.png"
                  alt="PROVE IT AUTO"
                  className="h-12 w-auto relative z-10"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  PROVE IT AUTO
                </h1>
                <p className="text-xs text-muted-foreground font-medium tracking-wide uppercase">
                  Vehicle Command Center
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              {/* Car Info Display */}
              <div className="relative px-4 py-2 rounded-lg bg-gradient-to-br from-automotive-blue/10 to-automotive-teal/10 border border-automotive-blue/20">
                <div className="absolute top-0 right-0 w-2 h-2 bg-automotive-green rounded-full animate-pulse"></div>
                <p className="text-sm font-bold text-foreground">
                  2018 Honda Civic
                </p>
                <p className="text-xs text-automotive-teal font-semibold">
                  87,432 miles • Active
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Racing stripe accent */}
        <div className="h-1 bg-gradient-to-r from-transparent via-automotive-blue to-transparent"></div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Stats Overview - Gauge Style */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gradient-primary rounded-full"></div>
            <h2 className="text-lg font-bold text-foreground uppercase tracking-wide">
              Performance Metrics
            </h2>
          </div>
          <StatsCard stats={stats} />
        </section>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Quick Actions with automotive styling */}
          <div className="space-y-6 relative">
            <div className="absolute -top-2 -left-2 w-20 h-20 bg-automotive-blue/5 rounded-full blur-2xl"></div>
            <QuickActions />
          </div>
          
          {/* Maintenance Overview */}
          <div className="space-y-6 relative">
            <div className="absolute -top-2 -right-2 w-20 h-20 bg-automotive-teal/5 rounded-full blur-2xl"></div>
            <MaintenanceCard items={maintenanceItems} />
          </div>
        </div>

        {/* Decorative racing elements */}
        <div className="fixed bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-automotive-blue via-automotive-teal to-automotive-green pointer-events-none"></div>
      </main>
    </div>
  );
};

export default Index;
