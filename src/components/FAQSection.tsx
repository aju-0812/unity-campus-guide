import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I sign up for volunteer opportunities?",
      answer: "Browse opportunities on the Opportunities page, click 'Learn More' on any listing that interests you, and follow the registration instructions. Some opportunities require background checks or orientation sessions, which will be clearly indicated. You'll receive confirmation emails with all the details you need to get started.",
    },
    {
      question: "Can volunteer hours count toward my degree requirements?",
      answer: "Yes! Many academic programs accept volunteer work for service-learning credits. Check with your academic advisor about specific requirements. We provide detailed hour logs and supervisor verification letters. Community service hours are tracked automatically through our system once you check in at volunteer sites.",
    },
    {
      question: "How does the campus navigation system work?",
      answer: "Our interactive map provides turn-by-turn directions to any campus location. Simply search for your destination, and the system will calculate the best route considering accessibility needs, current building closures, and real-time updates. Indoor navigation is available for major buildings including the library, student center, and medical complex.",
    },
    {
      question: "What if I need to cancel my volunteer commitment?",
      answer: "We understand schedules change. Please provide at least 24 hours notice by logging into your account and updating your registration. Last-minute emergencies are understood, but repeated no-shows may affect your ability to register for future opportunities. Organizations depend on volunteer commitments for their planning.",
    },
    {
      question: "Are there opportunities for students with disabilities?",
      answer: "Absolutely! All volunteer opportunities include detailed accessibility information. Our map system highlights wheelchair-accessible routes and building entrances. If you have specific needs or concerns, contact the Volunteer Coordinator at volunteer@campus.edu or call extension 3456 to discuss accommodations. We're committed to inclusive engagement opportunities.",
    },
    {
      question: "How much time do I need to commit?",
      answer: "It varies by opportunity. Some are one-time events requiring just 2 hours, while others are ongoing programs requesting weekly commitments. Each listing clearly states time requirements and minimum commitments. We recommend starting with one-time opportunities to explore different types of service before committing to regular positions.",
    },
    {
      question: "Can I volunteer with friends or organize a group?",
      answer: "Yes! Many opportunities welcome groups. When registering, indicate you're part of a group and coordinate with the organization directly. Student organizations looking to fulfill service requirements can contact the Volunteer Center to arrange custom group opportunities. Group volunteering is a great way to build team bonding while making an impact.",
    },
    {
      question: "What safety measures are in place?",
      answer: "Your safety is our priority. All partner organizations are vetted by the university. Transportation is provided for off-campus sites when needed. Volunteers receive safety orientations specific to their roles. Emergency contact information is required for all registrations. Campus Police escort services are available for evening return trips. Safety concerns can be reported confidentially to the Volunteer Center.",
    },
  ];

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about volunteering and navigating campus
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card px-6 rounded-lg shadow-elevated border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
