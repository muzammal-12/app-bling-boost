import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Car, 
  Bell, 
  Shield, 
  Trash2,
  Edit,
  Plus,
  Calendar,
  Gauge,
  Fuel,
  Settings,
  CreditCard,
  LogOut
} from "lucide-react";

const ProfileSettings = () => {
  const [selectedTab, setSelectedTab] = useState("profile");

  const userVehicles = [
    {
      id: 1,
      make: "Honda",
      model: "Civic",
      year: 2018,
      mileage: 87432,
      vin: "19XFC2***********",
      isPrimary: true,
      nextService: "Oil Change - Due in 2 weeks",
      lastService: "Tire Rotation - 3 weeks ago"
    },
    {
      id: 2,
      make: "Toyota",
      model: "Camry",
      year: 2020,
      mileage: 45230,
      vin: "4T1C11***********",
      isPrimary: false,
      nextService: "Brake Inspection - Due in 1 month",
      lastService: "Oil Change - 1 month ago"
    }
  ];

  const notificationSettings = [
    { id: "maintenance", label: "Maintenance Reminders", description: "Get notified about upcoming services", enabled: true },
    { id: "quotes", label: "Quote Analysis", description: "Alerts when quote analysis is complete", enabled: true },
    { id: "tips", label: "Car Care Tips", description: "Weekly maintenance tips and advice", enabled: false },
    { id: "promotions", label: "Promotions & Offers", description: "Special deals from partner shops", enabled: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Profile & Settings</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Manage your account, vehicles, and preferences
              </p>
            </div>
            <Button variant="outline">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      Personal Information
                    </CardTitle>
                    <CardDescription>Update your personal details and contact information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Doe" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" defaultValue="john.doe@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" defaultValue="San Francisco, CA" />
                    </div>
                    
                    <Button>Save Changes</Button>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle>Preferences</CardTitle>
                    <CardDescription>Customize your app experience</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="units">Distance Units</Label>
                      <Select defaultValue="miles">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="miles">Miles</SelectItem>
                          <SelectItem value="kilometers">Kilometers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="currency">Currency</Label>
                      <Select defaultValue="usd">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usd">USD ($)</SelectItem>
                          <SelectItem value="eur">EUR (€)</SelectItem>
                          <SelectItem value="gbp">GBP (£)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select defaultValue="pst">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pst">Pacific Standard Time</SelectItem>
                          <SelectItem value="est">Eastern Standard Time</SelectItem>
                          <SelectItem value="cst">Central Standard Time</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button>Update Preferences</Button>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">John Doe</h3>
                    <p className="text-sm text-muted-foreground">Member since March 2024</p>
                    <Badge className="mt-2">Premium Member</Badge>
                    <Button variant="outline" className="w-full mt-4">
                      <Edit className="w-4 h-4 mr-2" />
                      Change Photo
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-base">Account Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Vehicles</span>
                      <span className="font-medium">2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Services Tracked</span>
                      <span className="font-medium">24</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Money Saved</span>
                      <span className="font-medium">$1,247</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="vehicles" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Your Vehicles</h2>
                <p className="text-sm text-muted-foreground">Manage your vehicle information and service history</p>
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Vehicle
              </Button>
            </div>

            <div className="grid gap-6">
              {userVehicles.map((vehicle) => (
                <Card key={vehicle.id} className="border-border/50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Car className="w-6 h-6 text-primary" />
                        <div>
                          <CardTitle className="text-lg">
                            {vehicle.year} {vehicle.make} {vehicle.model}
                            {vehicle.isPrimary && <Badge className="ml-2">Primary</Badge>}
                          </CardTitle>
                          <CardDescription>{vehicle.mileage.toLocaleString()} miles • VIN: {vehicle.vin}</CardDescription>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4 mr-1" />
                          Edit
                        </Button>
                        {!vehicle.isPrimary && (
                          <Button size="sm" variant="outline">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2">
                        <Gauge className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Mileage</p>
                          <p className="text-sm text-muted-foreground">{vehicle.mileage.toLocaleString()} miles</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Next Service</p>
                          <p className="text-sm text-muted-foreground">{vehicle.nextService}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Settings className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Last Service</p>
                          <p className="text-sm text-muted-foreground">{vehicle.lastService}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline">View Service History</Button>
                      <Button size="sm" variant="outline">Schedule Service</Button>
                      {!vehicle.isPrimary && (
                        <Button size="sm" variant="outline">Set as Primary</Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Notification Preferences
                </CardTitle>
                <CardDescription>Choose what notifications you want to receive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {notificationSettings.map((setting, index) => (
                  <div key={setting.id}>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="font-medium">{setting.label}</p>
                        <p className="text-sm text-muted-foreground">{setting.description}</p>
                      </div>
                      <Switch defaultChecked={setting.enabled} />
                    </div>
                    {index < notificationSettings.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
                
                <Separator />
                
                <div className="space-y-4">
                  <h4 className="font-medium">Delivery Methods</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Email Notifications</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Push Notifications</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>SMS Notifications</span>
                      <Switch />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Privacy & Security
                </CardTitle>
                <CardDescription>Manage your privacy settings and account security</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Privacy Settings</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Share Anonymous Usage Data</p>
                        <p className="text-sm text-muted-foreground">Help improve the app with anonymous analytics</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Location Services</p>
                        <p className="text-sm text-muted-foreground">Find nearby service centers and gas stations</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h4 className="font-medium">Account Security</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Two-Factor Authentication</p>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                      </div>
                      <Button size="sm" variant="outline">Enable</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Change Password</p>
                        <p className="text-sm text-muted-foreground">Update your account password</p>
                      </div>
                      <Button size="sm" variant="outline">Change</Button>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h4 className="font-medium text-red-600">Danger Zone</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Export Data</p>
                        <p className="text-sm text-muted-foreground">Download all your account data</p>
                      </div>
                      <Button size="sm" variant="outline">Export</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Delete Account</p>
                        <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
                      </div>
                      <Button size="sm" variant="destructive">Delete</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Billing & Subscription
                </CardTitle>
                <CardDescription>Manage your subscription and payment methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">Premium Plan</h3>
                      <p className="text-sm text-muted-foreground">Unlimited vehicles, AI analysis, priority support</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">$9.99</p>
                      <p className="text-sm text-muted-foreground">per month</p>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <Button size="sm" variant="outline">Change Plan</Button>
                    <Button size="sm" variant="outline">Cancel Subscription</Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">Payment Method</h4>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                        <CreditCard className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">•••• •••• •••• 4242</p>
                        <p className="text-sm text-muted-foreground">Expires 12/27</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Update</Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">Billing History</h4>
                  <div className="space-y-2">
                    {[
                      { date: "Aug 1, 2024", amount: "$9.99", status: "Paid" },
                      { date: "Jul 1, 2024", amount: "$9.99", status: "Paid" },
                      { date: "Jun 1, 2024", amount: "$9.99", status: "Paid" }
                    ].map((invoice, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{invoice.date}</p>
                          <p className="text-sm text-muted-foreground">Premium Plan</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{invoice.amount}</p>
                          <Badge variant="secondary">{invoice.status}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default ProfileSettings;