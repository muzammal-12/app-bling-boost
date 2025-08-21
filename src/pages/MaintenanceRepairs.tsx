import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Calendar, 
  DollarSign, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Upload,
  FileText,
  Wrench,
  Car,
  Search
} from "lucide-react";

const MaintenanceRepairs = () => {
  const [selectedTab, setSelectedTab] = useState("upcoming");

  const upcomingMaintenance = [
    {
      id: 1,
      service: "Oil Change",
      dueDate: "2024-09-15",
      dueInDays: 14,
      estimatedCost: "$45-65",
      priority: "medium",
      progress: 75,
      category: "routine",
      description: "Replace engine oil and filter",
      lastService: "2024-06-15"
    },
    {
      id: 2,
      service: "Brake Inspection",
      dueDate: "2024-08-28",
      dueInDays: -3,
      estimatedCost: "$150-250",
      priority: "high",
      progress: 100,
      category: "safety",
      description: "Check brake pads, rotors, and brake fluid",
      lastService: "2024-02-28"
    },
    {
      id: 3,
      service: "Air Filter Replacement",
      dueDate: "2024-10-01",
      dueInDays: 30,
      estimatedCost: "$25-40",
      priority: "low",
      progress: 45,
      category: "routine",
      description: "Replace engine air filter",
      lastService: "2024-04-01"
    }
  ];

  const serviceHistory = [
    {
      id: 1,
      service: "Tire Rotation",
      date: "2024-07-20",
      cost: "$35",
      shop: "Quick Lube Plus",
      status: "completed"
    },
    {
      id: 2,
      service: "Oil Change",
      date: "2024-06-15",
      cost: "$55",
      shop: "AutoCare Center",
      status: "completed"
    },
    {
      id: 3,
      service: "Battery Test",
      date: "2024-05-10",
      cost: "$0",
      shop: "DIY",
      status: "completed"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-500";
      case "medium": return "bg-yellow-500";
      case "low": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const getPriorityBadgeVariant = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "default";
      case "low": return "secondary";
      default: return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Maintenance & Repairs</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Track your vehicle's service schedule and repair history
              </p>
            </div>
            <Button>
              <Upload className="w-4 h-4 mr-2" />
              Upload Quote
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="quotes">Quote Checker</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            <div className="grid gap-6">
              {upcomingMaintenance.map((item) => (
                <Card key={item.id} className="border-border/50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <Wrench className="w-5 h-5 text-primary" />
                          <CardTitle className="text-lg">{item.service}</CardTitle>
                          <Badge variant={getPriorityBadgeVariant(item.priority)}>
                            {item.priority}
                          </Badge>
                        </div>
                        <CardDescription>{item.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold text-foreground">{item.estimatedCost}</p>
                        <p className="text-sm text-muted-foreground">Estimated cost</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Due Date</p>
                          <p className="text-sm text-muted-foreground">
                            {item.dueInDays < 0 ? `Overdue by ${Math.abs(item.dueInDays)} days` : `In ${item.dueInDays} days`}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Last Service</p>
                          <p className="text-sm text-muted-foreground">{item.lastService}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Car className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Category</p>
                          <p className="text-sm text-muted-foreground capitalize">{item.category}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Service Progress</span>
                        <span>{item.progress}%</span>
                      </div>
                      <Progress value={item.progress} className="h-2" />
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button size="sm">Schedule Service</Button>
                      <Button size="sm" variant="outline">Get Quotes</Button>
                      <Button size="sm" variant="ghost">Mark Complete</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search service history..." className="pl-10" />
              </div>
            </div>

            <div className="grid gap-4">
              {serviceHistory.map((item) => (
                <Card key={item.id} className="border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{item.service}</h3>
                          <p className="text-sm text-muted-foreground">{item.shop}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{item.cost}</p>
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="quotes" className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Quote Checker</CardTitle>
                <CardDescription>
                  Upload or enter repair quotes to check for fair pricing and unnecessary work
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="service-type">Service Type</Label>
                  <Input id="service-type" placeholder="e.g., Brake Repair, Oil Change" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="quote-amount">Quote Amount ($)</Label>
                  <Input id="quote-amount" type="number" placeholder="Enter the quoted price" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="quote-details">Quote Details</Label>
                  <Textarea 
                    id="quote-details" 
                    placeholder="Paste or type the detailed quote here..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Drag and drop quote images or documents here
                  </p>
                  <Button variant="outline" size="sm">
                    <FileText className="w-4 h-4 mr-2" />
                    Choose Files
                  </Button>
                </div>

                <Button className="w-full">
                  <Search className="w-4 h-4 mr-2" />
                  Analyze Quote
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Schedule Service</CardTitle>
                <CardDescription>
                  Book your next maintenance appointment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="service-select">Service Needed</Label>
                    <Input id="service-select" placeholder="Select or type service" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="preferred-date">Preferred Date</Label>
                    <Input id="preferred-date" type="date" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="shop-preference">Shop Preference</Label>
                  <Input id="shop-preference" placeholder="Search for shops near you" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="additional-notes">Additional Notes</Label>
                  <Textarea 
                    id="additional-notes" 
                    placeholder="Any specific concerns or requests..."
                  />
                </div>

                <Button className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Find Available Appointments
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default MaintenanceRepairs;