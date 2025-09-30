import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Car, Shield, DollarSign, Clock, AlertTriangle } from "lucide-react";

interface OnboardingData {
  year: string;
  make: string;
  model: string;
  trim: string;
  biggestWorry: string;
  lastService: string;
  fairPriceKnowledge: string;
  pressureExperience: string;
}

export default function OnboardingWizard() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    year: "",
    make: "",
    model: "",
    trim: "",
    biggestWorry: "",
    lastService: "",
    fairPriceKnowledge: "",
    pressureExperience: "",
  });

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  const updateData = (field: keyof OnboardingData, value: string) => {
    setData({ ...data, [field]: value });
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Store data in localStorage and navigate to sneak peek
      localStorage.setItem("onboardingData", JSON.stringify(data));
      navigate("/onboarding/preview");
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return data.year && data.make && data.model;
      case 2:
        return data.biggestWorry;
      case 3:
        return data.lastService;
      case 4:
        return data.fairPriceKnowledge;
      case 5:
        return data.pressureExperience;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Prove It Auto" className="h-8 w-auto" />
            </div>
            <span className="text-sm text-muted-foreground">
              Step {step} of {totalSteps}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Step 1: Car Details */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>What's your car?</CardTitle>
                  <CardDescription>Let's get your vehicle details</CardDescription>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="year">Year</Label>
                  <Input
                    id="year"
                    placeholder="2020"
                    value={data.year}
                    onChange={(e) => updateData("year", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="make">Make</Label>
                  <Input
                    id="make"
                    placeholder="Toyota"
                    value={data.make}
                    onChange={(e) => updateData("make", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="model">Model</Label>
                <Input
                  id="model"
                  placeholder="Camry"
                  value={data.model}
                  onChange={(e) => updateData("model", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="trim">Trim (Optional)</Label>
                <Input
                  id="trim"
                  placeholder="LE, SE, XLE..."
                  value={data.trim}
                  onChange={(e) => updateData("trim", e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Step 2: Biggest Worry */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>What's your biggest worry?</CardTitle>
                  <CardDescription>Help us personalize your experience</CardDescription>
                </div>
              </div>

              <RadioGroup value={data.biggestWorry} onValueChange={(val) => updateData("biggestWorry", val)}>
                <div className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="safety" id="safety" />
                  <Label htmlFor="safety" className="flex-1 cursor-pointer">
                    <div className="font-medium">Safety concerns</div>
                    <div className="text-sm text-muted-foreground">Keeping my family safe on the road</div>
                  </Label>
                </div>

                <div className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="cost" id="cost" />
                  <Label htmlFor="cost" className="flex-1 cursor-pointer">
                    <div className="font-medium">Unexpected costs</div>
                    <div className="text-sm text-muted-foreground">Worried about expensive surprise repairs</div>
                  </Label>
                </div>

                <div className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="ripped-off" id="ripped-off" />
                  <Label htmlFor="ripped-off" className="flex-1 cursor-pointer">
                    <div className="font-medium">Getting ripped off</div>
                    <div className="text-sm text-muted-foreground">Being sold services I don't actually need</div>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          )}

          {/* Step 3: Last Service */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>When was your last service?</CardTitle>
                  <CardDescription>This helps us understand your maintenance needs</CardDescription>
                </div>
              </div>

              <RadioGroup value={data.lastService} onValueChange={(val) => updateData("lastService", val)}>
                <div className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="0-3" id="0-3" />
                  <Label htmlFor="0-3" className="flex-1 cursor-pointer">0–3 months ago</Label>
                </div>

                <div className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="3-6" id="3-6" />
                  <Label htmlFor="3-6" className="flex-1 cursor-pointer">3–6 months ago</Label>
                </div>

                <div className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="6-12" id="6-12" />
                  <Label htmlFor="6-12" className="flex-1 cursor-pointer">6–12 months ago</Label>
                </div>

                <div className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="over-year" id="over-year" />
                  <Label htmlFor="over-year" className="flex-1 cursor-pointer">Over a year ago</Label>
                </div>

                <div className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="cant-remember" id="cant-remember" />
                  <Label htmlFor="cant-remember" className="flex-1 cursor-pointer">Can't remember</Label>
                </div>
              </RadioGroup>
            </div>
          )}

          {/* Step 4: Fair Price Knowledge */}
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Know what's fair in your area?</CardTitle>
                  <CardDescription>Do you know fair pricing for your next service in your ZIP code?</CardDescription>
                </div>
              </div>

              <RadioGroup value={data.fairPriceKnowledge} onValueChange={(val) => updateData("fairPriceKnowledge", val)}>
                <div className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="yes" id="price-yes" />
                  <Label htmlFor="price-yes" className="flex-1 cursor-pointer">
                    <div className="font-medium">Yes, I know the fair price range</div>
                  </Label>
                </div>

                <div className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="no" id="price-no" />
                  <Label htmlFor="price-no" className="flex-1 cursor-pointer">
                    <div className="font-medium">No, I'm not sure what's fair</div>
                  </Label>
                </div>

                <div className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="somewhat" id="price-somewhat" />
                  <Label htmlFor="price-somewhat" className="flex-1 cursor-pointer">
                    <div className="font-medium">I have a rough idea</div>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          )}

          {/* Step 5: Pressure Experience */}
          {step === 5 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Ever felt pressured at a shop?</CardTitle>
                  <CardDescription>Have you been pressured into paying for something you weren't sure you needed?</CardDescription>
                </div>
              </div>

              <RadioGroup value={data.pressureExperience} onValueChange={(val) => updateData("pressureExperience", val)}>
                <div className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="yes" id="pressure-yes" />
                  <Label htmlFor="pressure-yes" className="flex-1 cursor-pointer">
                    <div className="font-medium">Yes, definitely</div>
                    <div className="text-sm text-muted-foreground">I've been upsold unnecessary services</div>
                  </Label>
                </div>

                <div className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="no" id="pressure-no" />
                  <Label htmlFor="pressure-no" className="flex-1 cursor-pointer">
                    <div className="font-medium">No, not really</div>
                    <div className="text-sm text-muted-foreground">My experiences have been fair</div>
                  </Label>
                </div>

                <div className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="not-sure" id="pressure-not-sure" />
                  <Label htmlFor="pressure-not-sure" className="flex-1 cursor-pointer">
                    <div className="font-medium">Not sure</div>
                    <div className="text-sm text-muted-foreground">Hard to tell if I was being taken advantage of</div>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          )}

          <div className="flex gap-3 pt-4">
            {step > 1 && (
              <Button variant="outline" onClick={handleBack} className="flex-1">
                Back
              </Button>
            )}
            <Button onClick={handleNext} disabled={!canProceed()} className="flex-1">
              {step === totalSteps ? "See My Preview" : "Continue"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
