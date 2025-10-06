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
      organization: "Campus Sustainability Office",
      location: "West Garden, Building 5",
      date: "Every Saturday, 9:00 AM",
      duration: "3 hours",
      spots: 8,
      category: "Environmental",
      description: "Help maintain our 2-acre community garden and learn sustainable agriculture. Tasks include planting seasonal vegetables, composting, irrigation system maintenance, and harvesting. Perfect for environmental science majors or anyone passionate about organic farming. No experience required - full training provided. Impact: Your work helps supply fresh produce to the campus food pantry serving 200+ students monthly.",
    },
    {
      id: 2,
      title: "Peer Tutoring Program",
      organization: "Academic Success Center",
      location: "Library, Room 204",
      date: "Mon-Fri, 4:00 PM - 6:00 PM",
      duration: "2 hours",
      spots: 15,
      category: "Education",
      description: "Support fellow students in math, science, writing, and foreign languages. One-on-one or small group sessions. Requires minimum 3.0 GPA in subject area and completion of training workshop. Develop leadership and communication skills while making a direct impact on student success rates. Previous tutors report 85% of students improve grades by at least one letter. Flexible scheduling with 4-hour weekly minimum commitment.",
    },
    {
      id: 3,
      title: "Senior Center Visit",
      organization: "Community Outreach & Service Learning",
      location: "Sunrise Senior Center (Shuttle provided)",
      date: "Wednesday, 2:00 PM",
      duration: "2 hours",
      spots: 10,
      category: "Social",
      description: "Spend meaningful time with local seniors through conversation, board games, arts and crafts, or technology assistance. Help bridge the generational gap while learning from life experiences. Activities include teaching smartphone basics, playing chess, facilitating book clubs, and providing companionship to combat social isolation. Transportation provided from Student Center. Especially valuable for psychology, social work, and gerontology students. Background check required.",
    },
    {
      id: 4,
      title: "Campus Cleanup Initiative",
      organization: "Student Environmental Action",
      location: "Main Campus Quad (Meet at Fountain)",
      date: "Sunday, 10:00 AM",
      duration: "2 hours",
      spots: 20,
      category: "Environmental",
      description: "Join our monthly campus beautification effort covering 50+ acres including quads, pathways, parking areas, and natural spaces. All supplies provided: gloves, trash bags, grabbers, and recycling bins. We'll sort waste for proper recycling and track our environmental impact. Last month we collected 340 lbs of litter and recycled 120 lbs of materials. Community service hours certified. Coffee and snacks provided. Rain date: Following Sunday.",
    },
    {
      id: 5,
      title: "Food Bank Volunteer",
      organization: "Campus Food Security Initiative",
      location: "Student Center Basement, Room B-12",
      date: "Thursday, 3:00 PM",
      duration: "3 hours",
      spots: 12,
      category: "Social",
      description: "Address food insecurity by sorting, organizing, and distributing nutritious food to students and local families. Tasks include inventory management, quality checking donations, creating balanced food packages, client intake, and maintaining clean organized storage. Our pantry serves 300+ students monthly and operates with 100% volunteer support. Learn about food systems, nutrition, and community resource management. Must commit to at least one shift per month. ServSafe certification offered free to regular volunteers.",
    },
    {
      id: 6,
      title: "STEM Workshop Leader",
      organization: "Youth Education Outreach Program",
      location: "Science Building, Lab 301",
      date: "Friday, 4:00 PM",
      duration: "2 hours",
      spots: 6,
      category: "Education",
      description: "Inspire the next generation by leading hands-on science experiments for local 6th-8th graders. Topics include chemistry reactions, physics demonstrations, coding basics, and robotics. All lesson plans and materials provided. Requires STEM major and enthusiasm for teaching. Training includes classroom management and age-appropriate pedagogy. Previous participants say this experience strengthened their communication skills and clarified career interests. Serves 25 students weekly from underrepresented communities in STEM.",
    },
    {
      id: 7,
      title: "Animal Shelter Assistant",
      organization: "Paws & Claws Rescue",
      location: "Community Animal Shelter (2 miles from campus)",
      date: "Tuesday & Saturday, 10:00 AM",
      duration: "3 hours",
      spots: 8,
      category: "Social",
      description: "Care for rescue dogs and cats awaiting adoption. Responsibilities include walking dogs, socializing cats, cleaning kennels, preparing meals, and assisting with adoption events. Perfect for pre-vet, animal science, or anyone who loves animals. Physical activity required. Shelter cares for 50+ animals. Volunteers report reduced stress and improved mental wellbeing. Training session required before first shift. Must commit to weekly shifts for minimum 3 months to build trust with animals.",
    },
    {
      id: 8,
      title: "Homework Help Program",
      organization: "After School Achievers",
      location: "Lincoln Elementary School (Carpool available)",
      date: "Monday & Wednesday, 3:30 PM",
      duration: "2 hours",
      spots: 12,
      category: "Education",
      description: "Support K-5 students with homework, reading practice, and educational games in a structured after-school program. Help with math concepts, reading comprehension, and study skills development. Build mentoring relationships with consistent students throughout semester. Background check and 4-hour orientation required. Valuable experience for education majors and anyone considering teaching careers. Program serves 60 children from working families who need academic support and positive role models.",
    },
    {
      id: 9,
      title: "Trail Maintenance Crew",
      organization: "Parks & Recreation Department",
      location: "Greenway Trail System (Various locations)",
      date: "First Saturday of Month, 8:00 AM",
      duration: "4 hours",
      spots: 15,
      category: "Environmental",
      description: "Maintain 15 miles of community hiking and biking trails through brush clearing, erosion repair, boardwalk maintenance, and signage installation. Heavy outdoor work requiring physical fitness. All tools and safety equipment provided. Learn trail building techniques and outdoor recreation management. Great for outdoor recreation, environmental studies, and forestry majors. Work directly with Parks Department professionals. Lunch provided. Weather-dependent with indoor alternative activities during severe conditions.",
    },
    {
      id: 10,
      title: "Hospital Volunteer",
      organization: "County Medical Center",
      location: "Main Hospital, Volunteer Services Desk",
      date: "Flexible scheduling, 4-hour shifts",
      duration: "4 hours",
      spots: 20,
      category: "Healthcare",
      description: "Assist hospital staff and patients in various departments including emergency, pediatrics, and patient transport. Duties include wayfinding, delivering flowers, patient companionship, and administrative support. Excellent opportunity for pre-med, nursing, and healthcare majors to observe clinical environments. Comprehensive orientation and department-specific training provided. Professional dress required. Must commit to 4 hours weekly for minimum one semester. Potential for recommendation letters for medical school applications.",
    },
    {
      id: 11,
      title: "Refugee Resettlement Support",
      organization: "International Welcome Center",
      location: "Community Resource Center, Suite 200",
      date: "Various times, coordinate with coordinator",
      duration: "2-3 hours",
      spots: 10,
      category: "Social",
      description: "Welcome new Americans by assisting with apartment setup, English conversation practice, job search support, cultural orientation, and transportation to appointments. Help families navigate healthcare, education, and employment systems. Multilingual volunteers especially needed (Arabic, Spanish, Karen, Somali). Cultural sensitivity training provided. Make lasting connections while gaining global perspective. Flexible volunteer times arranged with families. Background check required. Perfect for international studies, social work, and foreign language majors.",
    },
    {
      id: 12,
      title: "Tech Literacy Program",
      organization: "Digital Inclusion Initiative",
      location: "Public Library Computer Lab",
      date: "Thursday, 6:00 PM",
      duration: "2 hours",
      spots: 8,
      category: "Education",
      description: "Teach basic computer skills, internet navigation, email, and online safety to adults with limited technology experience. Topics include job applications, telehealth access, online banking safety, and social media basics. Patient teaching approach required. All lesson plans provided with flexibility to adapt to student needs. Gain valuable experience simplifying technical concepts for non-technical audiences. Serves community members seeking employment and seniors maintaining independence. Computer science and education majors strongly encouraged to apply.",
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
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
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
