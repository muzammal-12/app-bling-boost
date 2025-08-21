import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mic, 
  Play, 
  Pause, 
  Square,
  Upload, 
  Volume2, 
  AlertTriangle, 
  CheckCircle,
  XCircle,
  Zap,
  FileAudio,
  Headphones
} from "lucide-react";

const SoundDiagnosis = () => {
  const [selectedTab, setSelectedTab] = useState("record");
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const diagnosisHistory = [
    {
      id: 1,
      date: "2024-08-20",
      soundType: "Squealing",
      location: "Front wheels",
      severity: "medium",
      duration: "15s",
      aiConfidence: 92,
      diagnosis: "Brake pad wear indicator",
      urgency: "Schedule service within 2 weeks",
      possibleCauses: ["Worn brake pads", "Brake dust buildup"],
      recommendations: ["Inspect brake pads", "Professional brake service"]
    },
    {
      id: 2,
      date: "2024-08-15",
      soundType: "Knocking",
      location: "Engine",
      severity: "high",
      duration: "8s",
      aiConfidence: 89,
      diagnosis: "Engine knock/ping",
      urgency: "Service immediately",
      possibleCauses: ["Carbon buildup", "Wrong fuel octane", "Timing issues"],
      recommendations: ["Stop driving", "Professional diagnosis needed", "Check fuel quality"]
    },
    {
      id: 3,
      date: "2024-08-10",
      soundType: "Whistling",
      location: "Dashboard",
      severity: "low",
      duration: "22s",
      aiConfidence: 76,
      diagnosis: "Possible vacuum leak",
      urgency: "Monitor and check within a month",
      possibleCauses: ["Loose vacuum hose", "Worn gasket"],
      recommendations: ["Check vacuum lines", "Monitor for changes"]
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "bg-red-500";
      case "medium": return "bg-yellow-500";
      case "low": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "high": return <Badge variant="destructive">High Priority</Badge>;
      case "medium": return <Badge className="bg-yellow-500">Medium Priority</Badge>;
      case "low": return <Badge variant="secondary">Low Priority</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high": return <XCircle className="w-5 h-5 text-red-500" />;
      case "medium": return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case "low": return <CheckCircle className="w-5 h-5 text-green-500" />;
      default: return <Volume2 className="w-5 h-5 text-gray-500" />;
    }
  };

  const handleRecording = () => {
    setIsRecording(!isRecording);
    // Recording logic will be implemented later
    console.log(isRecording ? "Stop recording" : "Start recording");
  };

  const handlePlayback = () => {
    setIsPlaying(!isPlaying);
    // Playback logic will be implemented later
    console.log(isPlaying ? "Stop playback" : "Start playback");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Sound Diagnosis</h1>
              <p className="text-sm text-muted-foreground mt-1">
                AI-powered vehicle sound analysis and issue identification
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Headphones className="w-4 h-4 mr-2" />
                Test Audio
              </Button>
              <Button>
                <Mic className="w-4 h-4 mr-2" />
                Quick Record
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="record">Record Sound</TabsTrigger>
            <TabsTrigger value="upload">Upload Audio</TabsTrigger>
            <TabsTrigger value="history">Diagnosis History</TabsTrigger>
          </TabsList>

          <TabsContent value="record" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mic className="w-5 h-5" />
                    Record Vehicle Sound
                  </CardTitle>
                  <CardDescription>
                    Record the unusual sound your vehicle is making for AI analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className={`w-32 h-32 rounded-full border-4 flex items-center justify-center ${
                      isRecording ? 'border-red-500 bg-red-50' : 'border-border bg-muted/50'
                    }`}>
                      <Mic className={`w-12 h-12 ${isRecording ? 'text-red-500' : 'text-muted-foreground'}`} />
                    </div>
                    
                    <div className="text-center">
                      <p className="text-lg font-medium">
                        {isRecording ? "Recording..." : "Ready to Record"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {isRecording ? "Capturing audio..." : "Tap to start recording"}
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        onClick={handleRecording}
                        variant={isRecording ? "destructive" : "default"}
                        size="lg"
                      >
                        {isRecording ? (
                          <>
                            <Square className="w-4 h-4 mr-2" />
                            Stop Recording
                          </>
                        ) : (
                          <>
                            <Mic className="w-4 h-4 mr-2" />
                            Start Recording
                          </>
                        )}
                      </Button>
                      
                      <Button onClick={handlePlayback} variant="outline" size="lg">
                        {isPlaying ? (
                          <>
                            <Pause className="w-4 h-4 mr-2" />
                            Pause
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            Play
                          </>
                        )}
                      </Button>
                    </div>
                  </div>

                  {isRecording && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Recording Duration</span>
                        <span>0:23</span>
                      </div>
                      <Progress value={23} className="h-2" />
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Recording Context</CardTitle>
                  <CardDescription>
                    Help our AI provide more accurate diagnosis
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="sound-location">Where is the sound coming from?</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="engine">Engine area</SelectItem>
                        <SelectItem value="front-wheels">Front wheels</SelectItem>
                        <SelectItem value="rear-wheels">Rear wheels</SelectItem>
                        <SelectItem value="dashboard">Dashboard/Interior</SelectItem>
                        <SelectItem value="exhaust">Exhaust system</SelectItem>
                        <SelectItem value="transmission">Transmission</SelectItem>
                        <SelectItem value="brakes">Brakes</SelectItem>
                        <SelectItem value="unknown">Not sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sound-occurs">When does the sound occur?</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="startup">Engine startup</SelectItem>
                        <SelectItem value="idle">While idling</SelectItem>
                        <SelectItem value="accelerating">While accelerating</SelectItem>
                        <SelectItem value="braking">While braking</SelectItem>
                        <SelectItem value="turning">While turning</SelectItem>
                        <SelectItem value="driving">While driving</SelectItem>
                        <SelectItem value="all-times">All the time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additional-info">Additional Information</Label>
                    <Textarea
                      id="additional-info"
                      placeholder="Describe the sound and any other symptoms you've noticed..."
                      className="min-h-[80px]"
                    />
                  </div>

                  <Button className="w-full">
                    <Zap className="w-4 h-4 mr-2" />
                    Analyze Sound
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="upload" className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Upload Audio File
                </CardTitle>
                <CardDescription>
                  Upload an existing audio recording of your vehicle's sound
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-border rounded-lg p-12 text-center">
                  <FileAudio className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Drop your audio file here</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Supports MP3, WAV, M4A files up to 10MB
                  </p>
                  <Button>
                    <Upload className="w-4 h-4 mr-2" />
                    Choose Audio File
                  </Button>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Tips for better analysis:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Record in a quiet environment when possible</li>
                    <li>• Try to capture 10-30 seconds of the sound</li>
                    <li>• Hold the phone close to the sound source</li>
                    <li>• Avoid wind noise and background chatter</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <div className="grid gap-6">
              {diagnosisHistory.map((diagnosis) => (
                <Card key={diagnosis.id} className="border-border/50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {getSeverityIcon(diagnosis.severity)}
                        <div>
                          <CardTitle className="text-lg">{diagnosis.soundType} Sound</CardTitle>
                          <CardDescription>
                            {diagnosis.location} • {diagnosis.date} • {diagnosis.duration}
                          </CardDescription>
                        </div>
                      </div>
                      {getSeverityBadge(diagnosis.severity)}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">AI Diagnosis</p>
                        <p className="font-semibold text-foreground">{diagnosis.diagnosis}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Urgency Level</p>
                        <p className="text-sm text-foreground">{diagnosis.urgency}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">AI Confidence</p>
                        <div className="flex items-center gap-2">
                          <Progress value={diagnosis.aiConfidence} className="h-2 flex-1" />
                          <span className="text-sm font-medium">{diagnosis.aiConfidence}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Possible Causes</p>
                        <div className="space-y-1">
                          {diagnosis.possibleCauses.map((cause, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                              <span>{cause}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Recommendations</p>
                        <div className="space-y-1">
                          {diagnosis.recommendations.map((rec, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                              <span>{rec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button size="sm" variant="outline">
                        <Play className="w-4 h-4 mr-1" />
                        Play Recording
                      </Button>
                      <Button size="sm" variant="outline">
                        <Zap className="w-4 h-4 mr-1" />
                        Re-analyze
                      </Button>
                      <Button size="sm" variant="outline">
                        Share with Mechanic
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default SoundDiagnosis;