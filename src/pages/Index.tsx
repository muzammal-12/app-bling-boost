import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { MaintenanceCard } from "@/components/dashboard/MaintenanceCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { 
  BookOpen, 
  Wrench, 
  Car, 
  Headphones, 
  MapPin, 
  User,
  Gauge,
  Calendar,
  DollarSign,
  AlertTriangle
} from "lucide-react";

const Index = () => {
  const dashboardItems = [
    {
      title: "Guides",
      description: "DIY tutorials, maintenance tips, and step-by-step repair guides",
      icon: <BookOpen className="w-6 h-6 text-white" />,
      color: "bg-automotive-blue",
      status: "active" as const,
      statusText: "12 new guides"
    },
    {
      title: "Maintenance",
      description: "Track service schedules, upcoming maintenance, and service history",
      icon: <Wrench className="w-6 h-6 text-white" />,
      color: "bg-automotive-teal",
      status: "warning" as const,
      statusText: "2 overdue"
    },
    {
      title: "Tire Check",
      description: "AI-powered tire wear analysis using photo-based inspection",
      icon: <Car className="w-6 h-6 text-white" />,
      color: "bg-automotive-red",
      status: "success" as const,
      statusText: "Last check: 5 days ago"
    },
    {
      title: "Sound Diagnosis",
      description: "Identify vehicle issues by analyzing unusual sounds and noises",
      icon: <Headphones className="w-6 h-6 text-white" />,
      color: "bg-automotive-purple",
      status: "pending" as const,
      statusText: "Analysis ready"
    },
    {
      title: "Shop Network",
      description: "Find trusted nearby mechanics, service centers, and parts dealers",
      icon: <MapPin className="w-6 h-6 text-white" />,
      color: "bg-automotive-green",
      status: "active" as const,
      statusText: "15 shops nearby"
    },
    {
      title: "Profile",
      description: "Manage your vehicle information, service records, and account settings",
      icon: <User className="w-6 h-6 text-white" />,
      color: "bg-automotive-orange",
      status: "success" as const,
      statusText: "Profile complete"
    }
  ];

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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                myCarApp
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Your comprehensive vehicle maintenance companion
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">2018 Honda Civic</p>
                <p className="text-xs text-muted-foreground">87,432 miles</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Stats Overview */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">Vehicle Overview</h2>
          <StatsCard stats={stats} />
        </section>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Dashboard Cards */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold text-foreground mb-4">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dashboardItems.map((item, index) => (
                <DashboardCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  color={item.color}
                  status={item.status}
                  statusText={item.statusText}
                  onClick={() => {
                    const routes = {
                      "Guides": "/guides",
                      "Maintenance": "/maintenance", 
                      "Tire Check": "/tire-check",
                      "Sound Diagnosis": "/sound-diagnosis",
                      "Profile": "/profile"
                    };
                    window.location.href = routes[item.title as keyof typeof routes] || "/";
                  }}
                />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <QuickActions />
            <MaintenanceCard items={maintenanceItems} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
