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
    { id: 1, name: "Student Center", building: "Building A, Main Level", description: "Main hub for student activities, dining, bookstore, and meeting rooms. Open 7am-11pm daily. Wheelchair accessible entrance on west side." },
    { id: 2, name: "Library", building: "Building B, 4 Floors", description: "24/7 study spaces, 500+ computer workstations, quiet zones, group study rooms (reservable online), printing services, and research help desk. Accessible study carrels on floors 2-4." },
    { id: 3, name: "Science Building", building: "Building C, East Campus", description: "State-of-the-art STEM labs, lecture halls, research facilities. Houses biology, chemistry, physics departments. Lab safety training required for access. Elevator access to all floors." },
    { id: 4, name: "Sports Complex", building: "Building D, South Campus", description: "Olympic-size pool, basketball courts, indoor track, fitness center with cardio and weight equipment, yoga studio, and locker rooms. Free for students with ID. Accessible changing facilities available." },
    { id: 5, name: "West Garden", building: "Outdoor Space, West Campus", description: "2-acre community garden with volunteer plots, greenhouse, composting area, and outdoor classroom. Sustainability Office located in adjacent shed. Paved accessible pathways throughout." },
    { id: 6, name: "Arts & Humanities Hall", building: "Building F, North Campus", description: "Art studios, music practice rooms, theater, language labs, and faculty offices. Gallery hours: Mon-Fri 9am-5pm. Performance hall seats 400. Assistive listening devices available." },
    { id: 7, name: "Engineering Lab", building: "Building G, East Campus", description: "Machine shop, 3D printing lab, robotics workspace, computer-aided design stations. Safety orientation required. Open project hours: weekdays 2-8pm. Ground floor fully accessible." },
    { id: 8, name: "Medical Simulation Center", building: "Building H, Medical Campus", description: "Nursing and pre-med training with high-fidelity mannequins, simulated hospital rooms, and pharmacy lab. Restricted access for health sciences students. Wheelchair accessible throughout." },
    { id: 9, name: "Food Pantry", building: "Student Center, Basement Level B-12", description: "Free groceries for students facing food insecurity. Open Thursday 3-6pm, Saturday 10am-1pm. Confidential service, no documentation required. Elevator access available." },
    { id: 10, name: "Career Center", building: "Building J, Suite 300", description: "Resume help, interview prep, job postings, career counseling. Walk-in hours: Mon-Fri 1-4pm. Appointments recommended. Professional clothing closet. Fully accessible third floor location." },
    { id: 11, name: "Health & Wellness Clinic", building: "Building K, First Floor", description: "Student health services, counseling center, health education. Hours: Mon-Fri 8am-5pm. After-hours nurse line available. Accepts student insurance. Accessible exam rooms and waiting area." },
    { id: 12, name: "Residence Hall East", building: "Housing Complex, East Side", description: "400-bed residential hall with dining facility, study lounges, laundry. Front desk staffed 24/7. Quiet hours after 10pm. Accessible rooms available on all floors with elevator access." },
    { id: 13, name: "Parking Structure", building: "Multi-level Garage, South Entrance", description: "1,200 spaces across 5 levels. Student permits required. Hourly visitor parking available. Electric vehicle charging stations on level 2. Accessible parking on all levels near elevators." },
    { id: 14, name: "Campus Police & Safety", building: "Public Safety Building", description: "24/7 emergency response, lost & found, parking services, safety escorts. Emergency phones located throughout campus. Non-emergency: call extension 5555. Fully accessible facility." },
    { id: 15, name: "Outdoor Amphitheater", building: "Central Quad, South End", description: "500-seat outdoor venue for concerts, lectures, and events. Accessible seating sections. Reserved for special events, open for study between events. Beautiful landscaping and shade trees." },
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

              <div className="mt-4 space-y-4">
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Navigation className="h-5 w-5 text-accent" />
                    Navigation Features
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>Turn-by-turn directions with estimated walk times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>Accessibility routes highlighting ramps, elevators, and automatic doors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>Real-time alerts for building closures and construction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>Indoor navigation for Library, Student Center, Science Building, and Medical Center</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>Parking information with available spaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>Emergency phone locations and safety escort pickup points</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <h3 className="font-semibold mb-2 text-sm">Campus Information</h3>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p><strong>Total Campus Area:</strong> 300 acres</p>
                    <p><strong>Buildings:</strong> 45 academic and support facilities</p>
                    <p><strong>Parking:</strong> 3,500+ spaces across 8 lots</p>
                    <p><strong>Emergency:</strong> Call 911 or campus extension 5555</p>
                    <p><strong>Safety Escorts:</strong> Available 6pm-2am daily</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
