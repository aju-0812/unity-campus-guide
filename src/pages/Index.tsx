import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import TestimonialCard from "@/components/TestimonialCard";
import FAQSection from "@/components/FAQSection";
import { Calendar, MapPin, TrendingUp, Heart, Users, Navigation, Clock, Award, Shield, Accessibility } from "lucide-react";
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Active Opportunities</div>
              <div className="text-xs text-muted-foreground mt-1">Updated weekly</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">2,500+</div>
              <div className="text-sm text-muted-foreground">Student Volunteers</div>
              <div className="text-xs text-muted-foreground mt-1">This academic year</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Campus Locations</div>
              <div className="text-xs text-muted-foreground mt-1">Indoor navigation available</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">35K+</div>
              <div className="text-sm text-muted-foreground">Volunteer Hours</div>
              <div className="text-xs text-muted-foreground mt-1">Total community impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Volunteer?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Develop skills, build your resume, and make lasting connections
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Build Your Resume</h3>
              <p className="text-sm text-muted-foreground">Gain practical experience and demonstrate leadership to future employers</p>
            </div>
            <div className="text-center p-6">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Expand Your Network</h3>
              <p className="text-sm text-muted-foreground">Connect with community leaders, professionals, and like-minded peers</p>
            </div>
            <div className="text-center p-6">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-sm text-muted-foreground">Find opportunities that fit your class schedule and personal commitments</p>
            </div>
            <div className="text-center p-6">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Make Real Impact</h3>
              <p className="text-sm text-muted-foreground">See the direct positive effects of your contributions to the community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Experiences</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from students who have transformed their college experience through volunteering
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="Volunteering at the food bank changed my perspective on food insecurity. It's incredibly fulfilling knowing I'm helping fellow students in need while developing organizational skills I use in my business classes."
              name="Sarah Martinez"
              role="Junior, Business Administration"
              program="Food Bank Volunteer - 8 months"
            />
            <TestimonialCard
              quote="The campus navigation system saved me so much time! As a freshman, I was constantly lost. Now I confidently get anywhere on campus, and the accessibility routes are perfect for when I'm using my mobility scooter."
              name="James Chen"
              role="Freshman, Computer Science"
              program="Regular Map User"
            />
            <TestimonialCard
              quote="Leading STEM workshops for middle schoolers solidified my passion for teaching. Seeing their faces light up during experiments reminds me why I chose education. Plus, it looks great on my teaching credential applications!"
              name="Emily Rodriguez"
              role="Senior, Education Major"
              program="STEM Workshop Leader - 2 years"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Accessibility Statement */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Accessibility className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Commitment to Accessibility</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              We are committed to making volunteer opportunities and campus navigation accessible to everyone. All locations include detailed accessibility information, and our map system highlights wheelchair-accessible routes. If you need accommodations or have suggestions for improving accessibility, please contact our office.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span>WCAG 2.1 AA Compliant • ADA Accessible Facilities</span>
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
      <footer className="bg-muted py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-accent" />
                Campus Navigator
              </h4>
              <p className="text-sm text-muted-foreground">
                Making campus engagement and navigation accessible for everyone.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/opportunities" className="hover:text-primary transition-colors">Browse Opportunities</Link></li>
                <li><Link to="/map" className="hover:text-primary transition-colors">Campus Map</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Register Account</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Track Hours</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Volunteer Handbook</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Safety Guidelines</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Accessibility Services</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Partner Organizations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Volunteer Center, Student Union 305</li>
                <li>volunteer@campus.edu</li>
                <li>Phone: (555) 123-4567</li>
                <li>Hours: Mon-Fri 9am-5pm</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Campus Navigator. All rights reserved. | <a href="#" className="hover:text-primary">Privacy Policy</a> | <a href="#" className="hover:text-primary">Terms of Service</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
