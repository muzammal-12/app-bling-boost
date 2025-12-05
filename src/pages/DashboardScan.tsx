import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Upload, AlertTriangle, Info, CheckCircle2, XCircle, Gauge, Car, Sparkles, ArrowRight, Scan } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Vehicle {
  id: string;
  year: string;
  make: string;
  model: string;
  trim: string;
}

interface ScanResult {
  lightName: string;
  severity: "critical" | "warning" | "info";
  description: string;
  whatToDo: string[];
  urgency: string;
}

const DashboardScan = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<string>("");
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  // Mock vehicles - in production, this would come from user's garage
  const vehicles: Vehicle[] = [
    { id: "1", year: "2020", make: "Toyota", model: "Camry", trim: "SE" },
    { id: "2", year: "2018", make: "Honda", model: "Accord", trim: "Sport" },
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
        handleScan();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleScan = () => {
    setIsScanning(true);
    // Simulate AI scanning - in production, this would call Lovable AI
    setTimeout(() => {
      setScanResult({
        lightName: "Check Engine Light",
        severity: "warning",
        description: "The check engine light indicates a potential issue with your vehicle's engine or emission system. This could range from a loose gas cap to a serious engine malfunction.",
        whatToDo: [
          "Check if your gas cap is loose or damaged",
          "Notice any unusual sounds or performance issues",
          "Get a diagnostic scan at an auto parts store (often free)",
          "If the light is flashing, stop driving immediately and tow to a mechanic",
          "If solid, you can drive but schedule an appointment soon"
        ],
        urgency: "Schedule a diagnostic scan within 1-2 weeks"
      });
      setIsScanning(false);
    }, 2000);
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical":
        return <XCircle className="h-7 w-7 text-automotive-red" />;
      case "warning":
        return <AlertTriangle className="h-7 w-7 text-automotive-orange" />;
      case "info":
        return <Info className="h-7 w-7 text-automotive-blue" />;
      default:
        return <CheckCircle2 className="h-7 w-7 text-automotive-green" />;
    }
  };

  const getSeverityBadge = (severity: string) => {
    const variants: Record<string, string> = {
      critical: "bg-automotive-red/10 text-automotive-red border-automotive-red/30",
      warning: "bg-automotive-orange/10 text-automotive-orange border-automotive-orange/30",
      info: "bg-automotive-blue/10 text-automotive-blue border-automotive-blue/30",
    };
    
    return (
      <Badge className={`${variants[severity] || ""} font-semibold`}>
        {severity.toUpperCase()}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-automotive-purple/20 to-automotive-blue/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-automotive-cyan/15 to-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="max-w-4xl mx-auto p-6 relative z-10 space-y-6">
        {/* Header */}
        <div className="animate-fade-in">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-automotive-purple to-automotive-blue flex items-center justify-center shadow-lg">
              <Gauge className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-display font-bold text-foreground">Dashboard Light Scanner</h1>
                <Sparkles className="w-5 h-5 text-primary animate-pulse-glow" />
              </div>
              <p className="text-muted-foreground">
                AI-powered dashboard warning light identification
              </p>
            </div>
          </div>
        </div>

        {/* Vehicle Selection */}
        <Card className="animate-fade-in-up border-border/50 shadow-card overflow-hidden relative" style={{ animationDelay: '0.1s' }}>
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-24 translate-x-24" />
          <CardHeader className="relative">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-md">
                <Car className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <CardTitle className="font-display">Select Your Vehicle</CardTitle>
                <CardDescription>Choose which car's dashboard you want to scan</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Select value={selectedVehicle} onValueChange={setSelectedVehicle}>
              <SelectTrigger className="w-full h-12 bg-background/50 border-border/50 hover:border-primary/50 transition-colors">
                <SelectValue placeholder="Select a vehicle from your garage" />
              </SelectTrigger>
              <SelectContent>
                {vehicles.map((vehicle) => (
                  <SelectItem key={vehicle.id} value={vehicle.id}>
                    {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Scan Options */}
        {selectedVehicle && (
          <Card className="animate-fade-in-up border-border/50 shadow-card overflow-hidden relative" style={{ animationDelay: '0.2s' }}>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent/5 to-transparent rounded-full translate-y-24 -translate-x-24" />
            <CardHeader className="relative">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-secondary flex items-center justify-center shadow-md">
                  <Scan className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="font-display">Scan Dashboard Light</CardTitle>
                  <CardDescription>Take a clear photo of the warning light on your dashboard</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button
                  size="lg"
                  className="group h-32 flex flex-col gap-3 bg-gradient-to-br from-automotive-blue to-automotive-cyan hover:shadow-lg hover:shadow-automotive-blue/25 transition-all duration-300"
                  onClick={() => document.getElementById('camera-input')?.click()}
                >
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Camera className="h-7 w-7 text-white" />
                  </div>
                  <span className="font-semibold">Take Photo</span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="group h-32 flex flex-col gap-3 bg-background/50 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  onClick={() => document.getElementById('upload-input')?.click()}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-automotive-purple/20 to-automotive-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Upload className="h-7 w-7 text-primary" />
                  </div>
                  <span className="font-semibold text-foreground">Upload Image</span>
                </Button>
              </div>

              <input
                id="camera-input"
                type="file"
                accept="image/*"
                capture="environment"
                className="hidden"
                onChange={handleImageUpload}
              />
              <input
                id="upload-input"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />

              {uploadedImage && (
                <div className="mt-4 relative rounded-xl overflow-hidden border-2 border-primary/30 shadow-lg">
                  <img
                    src={uploadedImage}
                    alt="Uploaded dashboard"
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Scanning State */}
        {isScanning && (
          <Card className="animate-scale-in border-border/50 shadow-card">
            <CardContent className="py-16">
              <div className="flex flex-col items-center gap-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-primary animate-pulse-glow flex items-center justify-center">
                    <Scan className="w-10 h-10 text-primary-foreground animate-bounce-subtle" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-primary blur-xl opacity-50 animate-pulse" />
                </div>
                <div className="text-center">
                  <p className="text-xl font-display font-bold text-foreground mb-1">Analyzing dashboard light...</p>
                  <p className="text-sm text-muted-foreground">Our AI is identifying your warning light</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Scan Results */}
        {scanResult && !isScanning && (
          <Card className="animate-fade-in-up border-border/50 shadow-card overflow-hidden" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="border-b border-border/50 bg-gradient-to-r from-background to-muted/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg ${
                    scanResult.severity === 'critical' ? 'bg-automotive-red/20' :
                    scanResult.severity === 'warning' ? 'bg-automotive-orange/20' : 'bg-automotive-blue/20'
                  }`}>
                    {getSeverityIcon(scanResult.severity)}
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-display">{scanResult.lightName}</CardTitle>
                    <p className="text-sm text-muted-foreground">Identified warning light</p>
                  </div>
                </div>
                {getSeverityBadge(scanResult.severity)}
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
                <h3 className="font-display font-bold text-lg mb-2 flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  What This Means
                </h3>
                <p className="text-muted-foreground leading-relaxed">{scanResult.description}</p>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-automotive-green" />
                  What You Should Do
                </h3>
                <ul className="space-y-3">
                  {scanResult.whatToDo.map((step, index) => (
                    <li key={index} className="group flex items-start gap-4 p-3 rounded-xl bg-background/50 border border-border/30 hover:border-primary/30 hover:shadow-sm transition-all">
                      <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                        <span className="text-sm font-bold text-primary-foreground">{index + 1}</span>
                      </div>
                      <span className="text-muted-foreground pt-1">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-automotive-orange/10 to-automotive-red/10 border border-automotive-orange/30">
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle className="h-5 w-5 text-automotive-orange" />
                  <h4 className="font-display font-bold text-foreground">Urgency Level</h4>
                </div>
                <p className="text-muted-foreground">{scanResult.urgency}</p>
              </div>

              <div className="flex gap-3 pt-2">
                <Button className="flex-1 h-12 bg-gradient-primary hover:shadow-lg hover:shadow-primary/25 transition-all group">
                  Find Nearby Shops
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="flex-1 h-12 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all">
                  Save to History
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default DashboardScan;
