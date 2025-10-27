import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Upload, AlertTriangle, Info, CheckCircle2, XCircle } from "lucide-react";
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
        return <XCircle className="h-6 w-6 text-destructive" />;
      case "warning":
        return <AlertTriangle className="h-6 w-6 text-warning" />;
      case "info":
        return <Info className="h-6 w-6 text-primary" />;
      default:
        return <CheckCircle2 className="h-6 w-6 text-success" />;
    }
  };

  const getSeverityBadge = (severity: string) => {
    const variants: Record<string, string> = {
      critical: "bg-destructive/10 text-destructive border-destructive/20",
      warning: "bg-warning/10 text-warning border-warning/20",
      info: "bg-primary/10 text-primary border-primary/20",
    };
    
    return (
      <Badge className={variants[severity] || ""}>
        {severity.toUpperCase()}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard Light Scanner</h1>
          <p className="text-muted-foreground">
            Take a photo of your dashboard warning light and let AI identify what it means
          </p>
        </div>

        {/* Vehicle Selection */}
        <Card>
          <CardHeader>
            <CardTitle>Select Your Vehicle</CardTitle>
            <CardDescription>Choose which car's dashboard you want to scan</CardDescription>
          </CardHeader>
          <CardContent>
            <Select value={selectedVehicle} onValueChange={setSelectedVehicle}>
              <SelectTrigger className="w-full">
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
          <Card>
            <CardHeader>
              <CardTitle>Scan Dashboard Light</CardTitle>
              <CardDescription>
                Take a clear photo of the warning light on your dashboard
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button
                  size="lg"
                  className="h-32 flex flex-col gap-2"
                  onClick={() => document.getElementById('camera-input')?.click()}
                >
                  <Camera className="h-8 w-8" />
                  <span>Take Photo</span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-32 flex flex-col gap-2"
                  onClick={() => document.getElementById('upload-input')?.click()}
                >
                  <Upload className="h-8 w-8" />
                  <span>Upload Image</span>
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
                <div className="mt-4">
                  <img
                    src={uploadedImage}
                    alt="Uploaded dashboard"
                    className="w-full rounded-lg border-2 border-border"
                  />
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Scanning State */}
        {isScanning && (
          <Card>
            <CardContent className="py-12">
              <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                <p className="text-lg font-medium">Analyzing dashboard light...</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Scan Results */}
        {scanResult && !isScanning && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {getSeverityIcon(scanResult.severity)}
                  <CardTitle>{scanResult.lightName}</CardTitle>
                </div>
                {getSeverityBadge(scanResult.severity)}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">What This Means</h3>
                <p className="text-muted-foreground">{scanResult.description}</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">What You Should Do</h3>
                <ul className="space-y-2">
                  {scanResult.whatToDo.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-medium text-primary">{index + 1}</span>
                      </div>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-accent/50 p-4 rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  <h4 className="font-semibold">Urgency Level</h4>
                </div>
                <p className="text-muted-foreground">{scanResult.urgency}</p>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1">Find Nearby Shops</Button>
                <Button variant="outline" className="flex-1">Save to History</Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default DashboardScan;
