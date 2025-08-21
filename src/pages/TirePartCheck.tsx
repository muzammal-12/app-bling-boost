import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Camera, 
  Upload, 
  Zap, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Gauge,
  Calendar,
  FileImage,
  Scan
} from "lucide-react";

const TirePartCheck = () => {
  const [selectedTab, setSelectedTab] = useState("tire-check");
  const [uploadedImages, setUploadedImages] = useState<any[]>([]);

  const tireChecks = [
    {
      id: 1,
      position: "Front Left",
      date: "2024-08-15",
      treadDepth: "4.2mm",
      condition: "Good",
      wearPattern: "Even",
      status: "pass",
      aiConfidence: 94,
      recommendations: ["Continue monitoring", "Check again in 3 months"]
    },
    {
      id: 2,
      position: "Front Right",
      date: "2024-08-15",
      treadDepth: "2.1mm",
      condition: "Poor",
      wearPattern: "Uneven - Inner edge",
      status: "warning",
      aiConfidence: 98,
      recommendations: ["Replace soon", "Check wheel alignment", "Monitor closely"]
    },
    {
      id: 3,
      position: "Rear Left",
      date: "2024-08-15",
      treadDepth: "5.8mm",
      condition: "Excellent",
      wearPattern: "Even",
      status: "pass",
      aiConfidence: 92,
      recommendations: ["Continue current maintenance"]
    },
    {
      id: 4,
      position: "Rear Right",
      date: "2024-08-15",
      treadDepth: "5.6mm",
      condition: "Excellent",
      wearPattern: "Even",
      status: "pass",
      aiConfidence: 91,
      recommendations: ["Continue current maintenance"]
    }
  ];

  const partChecks = [
    {
      id: 1,
      partName: "Brake Pads",
      date: "2024-08-10",
      condition: "Fair",
      thickness: "4mm",
      status: "warning",
      aiConfidence: 96,
      estimatedLife: "2-3 months",
      recommendations: ["Schedule replacement soon", "Monitor brake performance"]
    },
    {
      id: 2,
      partName: "Air Filter",
      date: "2024-08-05",
      condition: "Dirty",
      clogging: "60%",
      status: "warning",
      aiConfidence: 89,
      estimatedLife: "1 month",
      recommendations: ["Replace immediately", "Impacts fuel economy"]
    },
    {
      id: 3,
      partName: "Serpentine Belt",
      date: "2024-07-28",
      condition: "Good",
      cracking: "Minor",
      status: "pass",
      aiConfidence: 85,
      estimatedLife: "6-12 months",
      recommendations: ["Continue monitoring", "Check for squealing sounds"]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pass": return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "warning": return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case "fail": return <XCircle className="w-5 h-5 text-red-500" />;
      default: return <Gauge className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pass": return <Badge className="bg-green-500">Good</Badge>;
      case "warning": return <Badge variant="destructive">Warning</Badge>;
      case "fail": return <Badge variant="destructive">Replace</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const handleImageUpload = () => {
    // Image upload logic will be implemented later
    console.log("Upload image for AI analysis");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Tire & Part Check</h1>
              <p className="text-sm text-muted-foreground mt-1">
                AI-powered visual inspection of your vehicle components
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Camera className="w-4 h-4 mr-2" />
                Take Photo
              </Button>
              <Button onClick={handleImageUpload}>
                <Upload className="w-4 h-4 mr-2" />
                Upload Image
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tire-check">Tire Analysis</TabsTrigger>
            <TabsTrigger value="part-check">Part Inspection</TabsTrigger>
            <TabsTrigger value="upload">New Check</TabsTrigger>
          </TabsList>

          <TabsContent value="tire-check" className="space-y-6">
            <div className="grid gap-6">
              {tireChecks.map((tire) => (
                <Card key={tire.id} className="border-border/50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(tire.status)}
                        <div>
                          <CardTitle className="text-lg">{tire.position} Tire</CardTitle>
                          <CardDescription>Analyzed on {tire.date}</CardDescription>
                        </div>
                      </div>
                      {getStatusBadge(tire.status)}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Tread Depth</p>
                        <p className="text-lg font-bold text-foreground">{tire.treadDepth}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Condition</p>
                        <p className="text-lg font-bold text-foreground">{tire.condition}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Wear Pattern</p>
                        <p className="text-sm font-medium text-foreground">{tire.wearPattern}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">AI Confidence</p>
                        <div className="flex items-center gap-2">
                          <Progress value={tire.aiConfidence} className="h-2 flex-1" />
                          <span className="text-sm font-medium">{tire.aiConfidence}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">AI Recommendations</p>
                      <div className="space-y-1">
                        {tire.recommendations.map((rec, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span>{rec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button size="sm" variant="outline">
                        <Scan className="w-4 h-4 mr-1" />
                        Re-analyze
                      </Button>
                      <Button size="sm" variant="outline">
                        <FileImage className="w-4 h-4 mr-1" />
                        View Image
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="part-check" className="space-y-6">
            <div className="grid gap-6">
              {partChecks.map((part) => (
                <Card key={part.id} className="border-border/50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(part.status)}
                        <div>
                          <CardTitle className="text-lg">{part.partName}</CardTitle>
                          <CardDescription>Analyzed on {part.date}</CardDescription>
                        </div>
                      </div>
                      {getStatusBadge(part.status)}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Condition</p>
                        <p className="text-lg font-bold text-foreground">{part.condition}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Measurement</p>
                        <p className="text-lg font-bold text-foreground">
                          {part.thickness || part.clogging || part.cracking}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Estimated Life</p>
                        <p className="text-sm font-medium text-foreground">{part.estimatedLife}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">AI Confidence</p>
                        <div className="flex items-center gap-2">
                          <Progress value={part.aiConfidence} className="h-2 flex-1" />
                          <span className="text-sm font-medium">{part.aiConfidence}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">AI Recommendations</p>
                      <div className="space-y-1">
                        {part.recommendations.map((rec, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span>{rec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button size="sm" variant="outline">
                        <Scan className="w-4 h-4 mr-1" />
                        Re-analyze
                      </Button>
                      <Button size="sm" variant="outline">
                        <FileImage className="w-4 h-4 mr-1" />
                        View Image
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upload" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="w-5 h-5" />
                    Tire Analysis
                  </CardTitle>
                  <CardDescription>
                    Upload tire photos for AI-powered tread depth and wear pattern analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-4">
                      Take clear photos of each tire's tread surface
                    </p>
                    <div className="space-y-2">
                      <Button onClick={handleImageUpload} className="w-full">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Tire Photos
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Camera className="w-4 h-4 mr-2" />
                        Take Photos
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Tips for best results:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Clean tires before photographing</li>
                      <li>• Take photos in good lighting</li>
                      <li>• Capture the entire tread area</li>
                      <li>• Include tire sidewall for size info</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Part Inspection
                  </CardTitle>
                  <CardDescription>
                    Upload photos of brake pads, filters, belts, and other components
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Zap className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-4">
                      Snap photos of parts that need inspection
                    </p>
                    <div className="space-y-2">
                      <Button onClick={handleImageUpload} className="w-full">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Part Photos
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Camera className="w-4 h-4 mr-2" />
                        Take Photos
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Supported parts:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Brake pads and rotors</li>
                      <li>• Air and cabin filters</li>
                      <li>• Belts and hoses</li>
                      <li>• Battery terminals</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default TirePartCheck;