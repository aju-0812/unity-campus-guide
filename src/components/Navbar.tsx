import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <MapPin className="h-6 w-6 text-accent" />
          Campus Navigator
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/opportunities" className="text-foreground hover:text-primary transition-colors">
            Opportunities
          </Link>
          <Link to="/map" className="text-foreground hover:text-primary transition-colors">
            Campus Map
          </Link>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
