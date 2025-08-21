import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Play, 
  Clock, 
  Star, 
  Search,
  Filter,
  MessageCircle,
  Wrench,
  Car,
  Gauge,
  Zap,
  AlertTriangle,
  CheckCircle,
  Video,
  FileText,
  Bot
} from "lucide-react";

const LearningGuides = () => {
  const [selectedTab, setSelectedTab] = useState("guides");
  const [searchQuery, setSearchQuery] = useState("");

  const guides = [
    {
      id: 1,
      title: "How to Check Your Engine Oil",
      description: "Learn the proper way to check oil level and condition",
      category: "Maintenance",
      difficulty: "Beginner",
      duration: "5 min",
      rating: 4.8,
      views: 12500,
      type: "video",
      thumbnail: "/api/placeholder/300/200",
      steps: 8,
      featured: true
    },
    {
      id: 2,
      title: "Understanding Dashboard Warning Lights",
      description: "Complete guide to all dashboard warning symbols",
      category: "Troubleshooting",
      difficulty: "Beginner",
      duration: "12 min",
      rating: 4.9,
      views: 25000,
      type: "article",
      steps: 15,
      featured: true
    },
    {
      id: 3,
      title: "Tire Pressure Check and Inflation",
      description: "Step-by-step tire maintenance for safety and efficiency",
      category: "Maintenance",
      difficulty: "Beginner",
      duration: "7 min",
      rating: 4.7,
      views: 18200,
      type: "video",
      steps: 6,
      featured: false
    },
    {
      id: 4,
      title: "Jump Starting Your Car Safely",
      description: "Emergency procedures for dead battery situations",
      category: "Emergency",
      difficulty: "Intermediate",
      duration: "10 min",
      rating: 4.8,
      views: 15600,
      type: "video",
      steps: 12,
      featured: false
    },
    {
      id: 5,
      title: "Basic Brake System Understanding",
      description: "How brakes work and signs of brake problems",
      category: "Safety",
      difficulty: "Intermediate",
      duration: "15 min",
      rating: 4.6,
      views: 9800,
      type: "article",
      steps: 20,
      featured: false
    },
    {
      id: 6,
      title: "Changing Your Air Filter",
      description: "DIY air filter replacement to improve performance",
      category: "DIY Repair",
      difficulty: "Beginner",
      duration: "8 min",
      rating: 4.5,
      views: 7300,
      type: "video",
      steps: 10,
      featured: false
    }
  ];

  const categories = [
    { name: "All", count: guides.length, icon: BookOpen },
    { name: "Maintenance", count: 3, icon: Wrench },
    { name: "Troubleshooting", count: 2, icon: AlertTriangle },
    { name: "Safety", count: 2, icon: CheckCircle },
    { name: "DIY Repair", count: 1, icon: Car },
    { name: "Emergency", count: 1, icon: Zap }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500";
      case "Intermediate": return "bg-yellow-500";
      case "Advanced": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getTypeIcon = (type: string) => {
    return type === "video" ? Video : FileText;
  };

  const featuredGuides = guides.filter(guide => guide.featured);
  const regularGuides = guides.filter(guide => !guide.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Learning & Guides</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Master car maintenance with step-by-step tutorials and expert tips
              </p>
            </div>
            <Button>
              <Bot className="w-4 h-4 mr-2" />
              Ask AI Helper
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="guides">Browse Guides</TabsTrigger>
            <TabsTrigger value="ai-helper">AI Helper</TabsTrigger>
            <TabsTrigger value="my-progress">My Progress</TabsTrigger>
          </TabsList>

          <TabsContent value="guides" className="space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search guides, topics, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Card key={category.name} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4 text-center">
                      <IconComponent className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <p className="font-medium text-sm">{category.name}</p>
                      <p className="text-xs text-muted-foreground">{category.count} guides</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Featured Guides */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-foreground">Featured Guides</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {featuredGuides.map((guide) => {
                  const TypeIcon = getTypeIcon(guide.type);
                  return (
                    <Card key={guide.id} className="border-border/50 hover:shadow-md transition-shadow">
                      <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                        <TypeIcon className="w-12 h-12 text-muted-foreground" />
                      </div>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <CardTitle className="text-lg line-clamp-2">{guide.title}</CardTitle>
                            <CardDescription className="line-clamp-2">{guide.description}</CardDescription>
                          </div>
                          <Badge className={getDifficultyColor(guide.difficulty)}>
                            {guide.difficulty}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              <span>{guide.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500" />
                              <span>{guide.rating}</span>
                            </div>
                          </div>
                          <Badge variant="outline">{guide.category}</Badge>
                        </div>
                        
                        <Button className="w-full">
                          <Play className="w-4 h-4 mr-2" />
                          Start Guide
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* All Guides */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-foreground">All Guides</h2>
              <div className="grid gap-4">
                {regularGuides.map((guide) => {
                  const TypeIcon = getTypeIcon(guide.type);
                  return (
                    <Card key={guide.id} className="border-border/50">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                            <TypeIcon className="w-8 h-8 text-muted-foreground" />
                          </div>
                          
                          <div className="flex-1 space-y-2">
                            <div className="flex items-start justify-between">
                              <h3 className="font-semibold text-lg">{guide.title}</h3>
                              <Badge className={getDifficultyColor(guide.difficulty)}>
                                {guide.difficulty}
                              </Badge>
                            </div>
                            
                            <p className="text-muted-foreground">{guide.description}</p>
                            
                            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{guide.duration}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-500" />
                                <span>{guide.rating}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <BookOpen className="w-4 h-4" />
                                <span>{guide.steps} steps</span>
                              </div>
                              <Badge variant="outline">{guide.category}</Badge>
                            </div>
                          </div>
                          
                          <Button>
                            <Play className="w-4 h-4 mr-2" />
                            Start
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ai-helper" className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-5 h-5" />
                  AI Car Assistant
                </CardTitle>
                <CardDescription>
                  Ask any car-related question in plain language and get expert answers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Bot className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Welcome! I'm your AI car assistant.</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Ask me anything about car maintenance, troubleshooting, or repairs. 
                          I can help explain technical concepts in simple terms.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium">Popular Questions:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <Button variant="outline" className="justify-start h-auto p-3">
                        <MessageCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="text-left">What does the check engine light mean?</span>
                      </Button>
                      <Button variant="outline" className="justify-start h-auto p-3">
                        <MessageCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="text-left">How often should I change my oil?</span>
                      </Button>
                      <Button variant="outline" className="justify-start h-auto p-3">
                        <MessageCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="text-left">Why is my car making a squealing noise?</span>
                      </Button>
                      <Button variant="outline" className="justify-start h-auto p-3">
                        <MessageCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="text-left">What's the difference between summer and winter tires?</span>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Ask me anything about your car..."
                      className="flex-1"
                    />
                    <Button>
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Ask
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="my-progress" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-border/50">
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Guides Completed</p>
                </CardContent>
              </Card>
              
              <Card className="border-border/50">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">3.5h</p>
                  <p className="text-sm text-muted-foreground">Time Spent Learning</p>
                </CardContent>
              </Card>
              
              <Card className="border-border/50">
                <CardContent className="p-6 text-center">
                  <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">Expert</p>
                  <p className="text-sm text-muted-foreground">Current Level</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Recently Completed</CardTitle>
                <CardDescription>Your learning journey progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {guides.slice(0, 3).map((guide) => (
                    <div key={guide.id} className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <div className="flex-1">
                        <p className="font-medium">{guide.title}</p>
                        <p className="text-sm text-muted-foreground">Completed 2 days ago</p>
                      </div>
                      <Badge variant="outline">Completed</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default LearningGuides;