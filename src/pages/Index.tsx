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
    <div 
      className="min-h-screen bg-background"
      style={{ backgroundColor: "hsl(var(--background))" }}
    >
      {/* Header */}
      <header 
        className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-10"
        style={{
          borderBottom: "1px solid hsl(var(--border) / 0.5)",
          backgroundColor: "hsl(var(--card) / 0.5)"
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <img 
                src="/logo.png"
                alt="PROVE IT AUTO"
                style={{ height: "3rem", width: "auto" }}
              />
              <div>
                <h1 
                  className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent"
                  style={{
                    background: "var(--gradient-primary)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  PROVE IT AUTO Dashboard
                </h1>
                <p 
                  className="text-sm text-muted-foreground mt-1"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  Your comprehensive vehicle maintenance overview
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <div className="text-right">
                <p 
                  className="text-sm font-medium text-foreground"
                  style={{ color: "hsl(var(--foreground))" }}
                >
                  2018 Honda Civic
                </p>
                <p 
                  className="text-xs text-muted-foreground"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  87,432 miles
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Stats Overview */}
        <section className="mb-8">
          <h2 
            className="text-lg font-semibold text-foreground mb-4"
            style={{ color: "hsl(var(--foreground))" }}
          >
            Vehicle Overview
          </h2>
          <StatsCard stats={stats} />
        </section>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Quick Actions */}
          <div className="space-y-6">
            <QuickActions />
          </div>
          
          {/* Maintenance Overview */}
          <div className="space-y-6">
            <MaintenanceCard items={maintenanceItems} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
