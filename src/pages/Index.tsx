import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Calendar, MapPin, TrendingUp, Heart, Users, Navigation } from "lucide-react";
import heroImage from "@/assets/hero-volunteer.jpg";

const Index = () => {
  const features = [
    {
      icon: Calendar,
      title: "Discover Opportunities",
      description: "Browse volunteer opportunities tailored to your interests and academic programs",
    },
    {
      icon: Navigation,
      title: "Campus Navigation",
      description: "Get turn-by-turn directions to venues, meeting points, and campus landmarks",
    },
    {
      icon: TrendingUp,
      title: "Track Your Impact",
      description: "Monitor your volunteer hours and see the difference you're making",
    },
    {
      icon: Users,
      title: "Build Community",
      description: "Connect with fellow volunteers and community partners",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Students volunteering on campus" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
              Make a Difference on Campus
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Connect with meaningful volunteer opportunities and navigate your campus with ease
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/opportunities">
                <Button size="lg" variant="hero" className="w-full sm:w-auto">
                  <Calendar className="mr-2 h-5 w-5" />
                  Explore Opportunities
                </Button>
              </Link>
              <Link to="/map">
                <Button size="lg" variant="accent" className="w-full sm:w-auto">
                  <MapPin className="mr-2 h-5 w-5" />
                  View Campus Map
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A unified platform to discover opportunities and navigate campus
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-gradient-card shadow-elevated hover:shadow-glow transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Active Opportunities</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">2,500+</div>
              <div className="text-muted-foreground">Student Volunteers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Campus Locations</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center shadow-elevated">
            <Heart className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-6 text-primary-foreground/90 max-w-2xl mx-auto">
              Join thousands of students making a positive impact in their community
            </p>
            <Link to="/opportunities">
              <Button size="lg" variant="accent">
                Find Your First Opportunity
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 Campus Navigator. Making campus engagement accessible for everyone.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
