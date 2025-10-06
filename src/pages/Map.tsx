import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, MapPin, Navigation, Info } from "lucide-react";
import campusMapImage from "@/assets/campus-map.jpg";

const Map = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const locations = [
    { id: 1, name: "Student Center", building: "Building A", description: "Main hub for student activities" },
    { id: 2, name: "Library", building: "Building B", description: "Main campus library with study spaces" },
    { id: 3, name: "Science Building", building: "Building C", description: "Labs and classrooms for STEM" },
    { id: 4, name: "Sports Complex", building: "Building D", description: "Gym, pool, and fitness facilities" },
    { id: 5, name: "West Garden", building: "Building E", description: "Community garden and green space" },
  ];

  const filteredLocations = locations.filter((loc) =>
    loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    loc.building.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Campus Navigator</h1>
            <p className="text-xl text-muted-foreground">
              Find your way around campus with turn-by-turn directions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Search Panel */}
            <div className="lg:col-span-1 space-y-4">
              <Card className="p-4">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search locations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {filteredLocations.map((location) => (
                    <button
                      key={location.id}
                      onClick={() => setSelectedLocation(location.name)}
                      className={`w-full text-left p-4 rounded-lg transition-all ${
                        selectedLocation === location.name
                          ? "bg-primary text-primary-foreground shadow-elevated"
                          : "bg-secondary hover:bg-secondary/80"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-1">{location.name}</h3>
                          <p className={`text-sm ${
                            selectedLocation === location.name
                              ? "text-primary-foreground/80"
                              : "text-muted-foreground"
                          }`}>
                            {location.building}
                          </p>
                          <p className={`text-xs mt-1 ${
                            selectedLocation === location.name
                              ? "text-primary-foreground/70"
                              : "text-muted-foreground"
                          }`}>
                            {location.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </Card>

              {selectedLocation && (
                <Card className="p-4 bg-gradient-card">
                  <div className="flex items-center gap-2 mb-3">
                    <Info className="h-5 w-5 text-accent" />
                    <h3 className="font-semibold">Quick Actions</h3>
                  </div>
                  <div className="space-y-2">
                    <Button variant="default" className="w-full justify-start">
                      <Navigation className="mr-2 h-4 w-4" />
                      Get Directions
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Info className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </Card>
              )}
            </div>

            {/* Map Display */}
            <div className="lg:col-span-2">
              <Card className="p-2 h-[600px] overflow-hidden">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <img
                    src={campusMapImage}
                    alt="Campus map"
                    className="w-full h-full object-contain"
                  />
                  {selectedLocation && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-elevated">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span className="font-semibold">{selectedLocation}</span>
                      </div>
                    </div>
                  )}
                </div>
              </Card>

              <div className="mt-4 p-4 bg-secondary/50 rounded-lg">
                <h3 className="font-semibold mb-2">Navigation Features</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Turn-by-turn directions to all campus locations</li>
                  <li>• Accessibility routes for wheelchair users</li>
                  <li>• Real-time updates on building closures</li>
                  <li>• Indoor navigation for major buildings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
