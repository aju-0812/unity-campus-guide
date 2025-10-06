import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  program: string;
}

const TestimonialCard = ({ quote, name, role, program }: TestimonialCardProps) => {
  return (
    <Card className="p-6 bg-gradient-card shadow-elevated h-full">
      <Quote className="h-8 w-8 text-accent mb-4" />
      <p className="text-foreground/90 mb-4 italic">"{quote}"</p>
      <div className="mt-auto">
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
        <p className="text-xs text-accent mt-1">{program}</p>
      </div>
    </Card>
  );
};

export default TestimonialCard;
