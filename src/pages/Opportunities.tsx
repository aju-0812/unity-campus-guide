import { useState } from "react";
import Navbar from "@/components/Navbar";
import OpportunityCard from "@/components/OpportunityCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Opportunities = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const opportunities = [
    {
      id: 1,
      title: "Community Garden Project",
      organization: "Campus Sustainability",
      location: "West Garden, Building 5",
      date: "Every Saturday, 9:00 AM",
      duration: "3 hours",
      spots: 8,
      category: "Environmental",
      description: "Help maintain our community garden and learn about sustainable agriculture practices.",
    },
    {
      id: 2,
      title: "Peer Tutoring Program",
      organization: "Academic Services",
      location: "Library, Room 204",
      date: "Mon-Fri, 4:00 PM - 6:00 PM",
      duration: "2 hours",
      spots: 15,
      category: "Education",
      description: "Support fellow students in math, science, and writing courses.",
    },
    {
      id: 3,
      title: "Senior Center Visit",
      organization: "Community Outreach",
      location: "Sunrise Senior Center",
      date: "Wednesday, 2:00 PM",
      duration: "2 hours",
      spots: 10,
      category: "Social",
      description: "Spend time with seniors, play games, and share stories to brighten their day.",
    },
    {
      id: 4,
      title: "Campus Cleanup Initiative",
      organization: "Student Government",
      location: "Main Campus Quad",
      date: "Sunday, 10:00 AM",
      duration: "2 hours",
      spots: 20,
      category: "Environmental",
      description: "Join us for a campus-wide cleanup to keep our learning environment beautiful.",
    },
    {
      id: 5,
      title: "Food Bank Volunteer",
      organization: "Community Food Program",
      location: "Student Center Basement",
      date: "Thursday, 3:00 PM",
      duration: "3 hours",
      spots: 12,
      category: "Social",
      description: "Help sort and distribute food to students and community members in need.",
    },
    {
      id: 6,
      title: "STEM Workshop Leader",
      organization: "Youth Outreach",
      location: "Science Building, Lab 301",
      date: "Friday, 4:00 PM",
      duration: "2 hours",
      spots: 6,
      category: "Education",
      description: "Lead hands-on science experiments for local middle school students.",
    },
  ];

  const filteredOpportunities = opportunities.filter((opp) => {
    const matchesSearch = opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         opp.organization.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || opp.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Volunteer Opportunities</h1>
            <p className="text-xl text-muted-foreground">
              Discover meaningful ways to contribute to your campus community
            </p>
          </div>

          {/* Search and Filter */}
          <div className="bg-card p-6 rounded-lg shadow-elevated mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search opportunities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                  <SelectItem value="Environmental">Environmental</SelectItem>
                  <SelectItem value="Social">Social</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 text-muted-foreground">
            Showing {filteredOpportunities.length} of {opportunities.length} opportunities
          </div>

          {/* Opportunities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} {...opportunity} />
            ))}
          </div>

          {filteredOpportunities.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No opportunities found. Try adjusting your search or filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
