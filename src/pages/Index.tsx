import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Star, 
  Utensils, 
  Shield, 
  Truck, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle,
  Heart,
  Users,
  Leaf
} from "lucide-react";

// Import images
import tiffinHero from "@/assets/tiffin-hero.jpg";
import northIndianMeal from "@/assets/north-indian-meal.jpg";
import southIndianMeal from "@/assets/south-indian-meal.jpg";
import vegetarianMeal from "@/assets/vegetarian-meal.jpg";

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      mealType: "",
      message: ""
    }
  });

  const onSubmit = (data: any) => {
    console.log("Order form submitted:", data);
    toast.success("Thank you! We'll contact you soon to confirm your order.");
    form.reset();
  };

  const menuItems = [
    {
      name: "North Indian Delight",
      image: northIndianMeal,
      description: "Dal makhani, butter chicken, basmati rice, naan, raita & pickle",
      price: "₹180",
      features: ["Rich & creamy", "Protein-rich", "Authentic taste"]
    },
    {
      name: "South Indian Traditional",
      image: southIndianMeal,
      description: "Sambar, rasam, rice, vegetable curry, coconut chutney & papadum",
      price: "₹160",
      features: ["Light & healthy", "Coconut-based", "Traditional spices"]
    },
    {
      name: "Healthy Vegetarian",
      image: vegetarianMeal,
      description: "Mixed vegetables, chapati, yellow dal, salad & fresh yogurt",
      price: "₹150",
      features: ["Low calories", "High fiber", "Balanced nutrition"]
    }
  ];

  const pricingPlans = [
    {
      name: "Daily",
      price: "₹180",
      period: "per meal",
      features: ["Fresh daily preparation", "Free delivery", "Quality guarantee", "Customer support"]
    },
    {
      name: "Weekly",
      price: "₹1,200",
      period: "7 meals",
      originalPrice: "₹1,260",
      savings: "Save ₹60",
      features: ["5% discount", "Priority delivery", "Menu customization", "Weekly menu planning"]
    },
    {
      name: "Monthly",
      price: "₹4,800",
      period: "30 meals",
      originalPrice: "₹5,400",
      savings: "Save ₹600",
      popular: true,
      features: ["12% discount", "Premium packaging", "Flexible schedule", "Dedicated support", "Free weekend meals"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-accent/10 py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                  🏠 Home-Style Meals
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Fresh & Delicious
                  <span className="text-primary block">Tiffin Service</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Experience the taste of home with our authentic Indian meals, prepared fresh daily 
                  and delivered right to your doorstep. Healthy, hygienic, and delicious!
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 bg-card p-3 rounded-lg border">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>On-time delivery</span>
                </div>
                <div className="flex items-center gap-2 bg-card p-3 rounded-lg border">
                  <Shield className="w-5 h-5 text-accent" />
                  <span>100% hygienic</span>
                </div>
                <div className="flex items-center gap-2 bg-card p-3 rounded-lg border">
                  <Star className="w-5 h-5 text-golden-yellow" />
                  <span>4.8★ rated</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Order Now
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  View Menu
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-6"></div>
              <img 
                src={tiffinHero} 
                alt="Fresh Tiffin Meals" 
                className="relative z-10 w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border z-20">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-spice-red fill-current" />
                  <span className="font-semibold">1000+ Happy Customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Tiffin Service?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best home-style meals with uncompromising quality and service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Utensils className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Fresh Daily Preparation</h3>
              <p className="text-muted-foreground">
                All meals are prepared fresh every morning using premium ingredients and traditional recipes.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Truck className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Timely Delivery</h3>
              <p className="text-muted-foreground">
                Hot, fresh meals delivered right to your doorstep within the promised time frame.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-golden-yellow/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-golden-yellow" />
              </div>
              <h3 className="text-xl font-semibold">Hygienic Standards</h3>
              <p className="text-muted-foreground">
                Maintaining the highest standards of hygiene and food safety in our kitchen operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Delicious Menu</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our variety of authentic Indian meals, each carefully crafted to bring you the taste of home.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full font-semibold">
                    {item.price}
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {item.name}
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    Add to Order
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing options to suit your needs. Save more with longer subscriptions!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">{plan.price}</div>
                    <div className="text-sm text-muted-foreground">{plan.period}</div>
                    {plan.originalPrice && (
                      <div className="space-y-1">
                        <div className="text-sm line-through text-muted-foreground">{plan.originalPrice}</div>
                        <Badge variant="outline" className="text-accent border-accent">{plan.savings}</Badge>
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full mt-6 ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => setSelectedPlan(plan.name.toLowerCase())}
                  >
                    Choose {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Place Your Order</h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll contact you to confirm your order and delivery details.
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-primary" />
                  Order Details
                </CardTitle>
                <CardDescription>
                  Please provide your information and preferences for meal delivery.
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 98765 43210" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Delivery Address *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Enter your complete delivery address with landmarks" 
                              className="min-h-[80px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="mealType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Meal Type</FormLabel>
                          <FormControl>
                            <select 
                              className="w-full p-2 border border-input rounded-md bg-background"
                              {...field}
                            >
                              <option value="">Select meal preference</option>
                              <option value="north-indian">North Indian Delight</option>
                              <option value="south-indian">South Indian Traditional</option>
                              <option value="vegetarian">Healthy Vegetarian</option>
                              <option value="mixed">Mixed Variety</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Special Instructions</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Any dietary restrictions, delivery preferences, or special requests..." 
                              className="min-h-[80px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                      Submit Order Request
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground">
              Have questions? We're here to help you enjoy the best tiffin experience!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Call Us</h3>
              <p className="text-muted-foreground">+91 98765 43210</p>
              <p className="text-sm text-muted-foreground">Mon-Sat, 8AM-8PM</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Email Us</h3>
              <p className="text-muted-foreground">orders@tiffinservice.com</p>
              <p className="text-sm text-muted-foreground">24/7 support</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Visit Us</h3>
              <p className="text-muted-foreground">123 Food Street, Mumbai</p>
              <p className="text-sm text-muted-foreground">Maharashtra, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Utensils className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">Fresh Tiffin Service</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 Fresh Tiffin Service. Made with ❤️ for food lovers. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;