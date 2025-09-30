import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, DollarSign, AlertCircle, Lock, Sparkles } from "lucide-react";

export default function SneakPeek() {
  const navigate = useNavigate();
  const [carInfo, setCarInfo] = useState({ year: "", make: "", model: "", trim: "" });
  const [riskLevel, setRiskLevel] = useState<"low" | "moderate" | "high">("moderate");

  useEffect(() => {
    const data = localStorage.getItem("onboardingData");
    if (data) {
      const parsed = JSON.parse(data);
      setCarInfo({
        year: parsed.year,
        make: parsed.make,
        model: parsed.model,
        trim: parsed.trim,
      });

      // Calculate risk based on last service
      if (parsed.lastService === "over-year" || parsed.lastService === "cant-remember") {
        setRiskLevel("high");
      } else if (parsed.lastService === "6-12") {
        setRiskLevel("moderate");
      } else {
        setRiskLevel("low");
      }
    }
  }, []);

  const getRiskColor = () => {
    switch (riskLevel) {
      case "high":
        return "bg-destructive/10 text-destructive border-destructive/20";
      case "moderate":
        return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 border-yellow-500/20";
      case "low":
        return "bg-green-500/10 text-green-600 dark:text-green-500 border-green-500/20";
    }
  };

  const getRiskIcon = () => {
    return riskLevel === "low" ? <Shield className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background p-4 py-12">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold">Your Personalized Preview</h1>
          <p className="text-xl text-muted-foreground">
            Here's what we found for your {carInfo.year} {carInfo.make} {carInfo.model}
          </p>
        </div>

        {/* Risk Badge Card */}
        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Vehicle Health Status</CardTitle>
              <Badge variant="outline" className={`px-4 py-2 text-sm font-semibold ${getRiskColor()}`}>
                <span className="flex items-center gap-2">
                  {getRiskIcon()}
                  {riskLevel.toUpperCase()} RISK
                </span>
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Based on your maintenance history, we've identified potential service needs that require attention.
            </p>
          </CardContent>
        </Card>

        {/* Fair Price Range Card */}
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              <CardTitle>Fair Price Range in Your Area</CardTitle>
            </div>
            <CardDescription>Based on local market data for your vehicle</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-primary">$150 - $280</span>
                <span className="text-muted-foreground">for oil change & inspection</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Unlock full pricing for all recommended services with Pro access
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Due Services Preview */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Maintenance</CardTitle>
            <CardDescription>Services due or coming up soon</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {/* Visible Item */}
            <div className="p-4 rounded-lg border bg-card">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">Oil Change & Filter</h4>
                <Badge variant="destructive">Due Now</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Recommended every 5,000-7,500 miles</p>
            </div>

            {/* Blurred Items */}
            <div className="relative">
              <div className="p-4 rounded-lg border bg-card blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">Tire Rotation & Balance</h4>
                  <Badge>Due Soon</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Recommended every 6,000-8,000 miles</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-background/95 rounded-lg p-4 flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  <span className="text-sm font-medium">Unlock 12+ more items</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="p-4 rounded-lg border bg-card blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">Brake Inspection</h4>
                  <Badge variant="outline">Upcoming</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Safety critical - inspect every 12 months</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Lock className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Talking Points Preview */}
        <Card>
          <CardHeader>
            <CardTitle>What to Say at the Shop</CardTitle>
            <CardDescription>Protect yourself from unnecessary upsells</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {/* Visible Bullet */}
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
              <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <p className="text-sm">
                "I'm here for the oil change only. I have my maintenance schedule and will address other items according to my plan."
              </p>
            </div>

            {/* Half-visible Blurred Bullet */}
            <div className="relative">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 blur-sm">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <p className="text-sm">
                  "Can you show me the issue? I'd like to see the worn part before approving..."
                </p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-background/95 rounded-lg px-4 py-2 flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  <span className="text-sm font-medium">Unlock all talking points</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 blur-sm">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <p className="text-sm">"What's the safety risk if I wait until..."</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="border-2 border-primary/40 bg-gradient-to-br from-primary/5 to-primary/10">
          <CardContent className="pt-6 text-center space-y-4">
            <h3 className="text-2xl font-bold">Ready to take control?</h3>
            <p className="text-muted-foreground">
              Get your full personalized maintenance plan, fair pricing data, and expert talking points
            </p>
            <Button size="lg" className="w-full sm:w-auto" onClick={() => navigate("/paywall")}>
              See Pricing Plans
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full sm:w-auto"
              onClick={() => navigate("/")}
            >
              Skip for now
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
