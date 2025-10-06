import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

interface OpportunityCardProps {
  title: string;
  organization: string;
  location: string;
  date: string;
  duration: string;
  spots: number;
  category: string;
  description: string;
}

const OpportunityCard = ({
  title,
  organization,
  location,
  date,
  duration,
  spots,
  category,
  description,
}: OpportunityCardProps) => {
  return (
    <Card className="p-6 bg-gradient-card hover:shadow-elevated transition-all duration-300 cursor-pointer group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm">{organization}</p>
        </div>
        <Badge variant="secondary">{category}</Badge>
      </div>
      
      <p className="text-foreground/80 mb-4 line-clamp-2">{description}</p>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-accent" />
          {location}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 text-accent" />
          {date}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4 text-accent" />
          {duration}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4 text-accent" />
          {spots} spots available
        </div>
      </div>
      
      <Button className="w-full" variant="default">
        Learn More
      </Button>
    </Card>
  );
};

export default OpportunityCard;
