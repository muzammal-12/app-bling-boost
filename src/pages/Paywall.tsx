import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Shield, Zap, Star } from "lucide-react";

export default function Paywall() {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Basic vehicle health check",
      icon: Shield,
      features: [
        "Risk badge for your vehicle",
        "1 visible maintenance item",
        "Safety alerts (always free)",
      ],
      cta: "Current Plan",
      disabled: true,
      variant: "outline" as const,
    },
    {
      name: "Basic",
      price: "$4.99",
      period: "/month",
      description: "Essential maintenance tracking",
      icon: Zap,
      popular: false,
      features: [
        "Unlimited maintenance plans",
        "Service reminders & alerts",
        "Quote checker tool",
        "Local fair price ranges",
        "Expert talking points",
      ],
      cta: "Get Basic",
      variant: "outline" as const,
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "/month",
      description: "Complete car care solution",
      icon: Star,
      popular: true,
      features: [
        "Everything in Basic, plus:",
        "Sound diagnosis tool",
        "Multi-car family garage",
        "Price history tracking",
        "Priority support",
        "Advanced maintenance scheduling",
      ],
      cta: "Start Pro Trial",
      variant: "default" as const,
    },
  ];

  const handleSelectPlan = (planName: string) => {
    // Store selected plan and navigate to dashboard
    localStorage.setItem("selectedPlan", planName);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background p-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold">Choose Your Plan</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stop overpaying and start maintaining your car with confidence
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.popular
                  ? "border-2 border-primary shadow-lg scale-105"
                  : "border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="px-4 py-1 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                  <plan.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="min-h-[40px]">{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={plan.variant}
                  size="lg"
                  disabled={plan.disabled}
                  onClick={() => handleSelectPlan(plan.name)}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pay-per-use Option */}
        <Card className="border-2 border-dashed">
          <CardHeader>
            <CardTitle>Pay Per Service</CardTitle>
            <CardDescription>One-time access for specific maintenance needs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-semibold text-lg mb-1">$2.99 - $4.99 per service</p>
                <p className="text-sm text-muted-foreground">
                  Get full plan, fair pricing, and talking points for one specific service
                </p>
              </div>
              <Button variant="outline" onClick={() => navigate("/")}>
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Trust Badges */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-sm text-muted-foreground">Trusted by thousands of car owners</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm">Secure payments</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span className="text-sm">Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              <span className="text-sm">7-day money back</span>
            </div>
          </div>
        </div>

        {/* Skip Option */}
        <div className="text-center mt-8">
          <Button variant="ghost" onClick={() => navigate("/")}>
            Continue with Free plan
          </Button>
        </div>
      </div>
    </div>
  );
}
