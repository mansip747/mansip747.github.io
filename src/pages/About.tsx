import { Layout } from "@/components/layout/Layout";
import { Highlight } from "@/components/ui/Highlight";

const About = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif mb-12 animate-fade-in">
            About <Highlight>Mansi</Highlight>
          </h1>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <div className="bg-muted overflow-hidden sticky top-8">
                <img
                  src="/profilepicture2.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-8">
              <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <h2 className="section-title mb-4">Background</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  With over 2 years of experience in product management and business analysis, I've worked at startups and established companies 
                  creating meaningful products that users love. My background spans technology, analytics, and business strategy.</p>
                  
                  <p className="text-lg leading-relaxed mb-4">I am a <Highlight>product manager</Highlight> with a background in analytics, front-end web development, and a little bit of product design. My 
                  grounding in the <Highlight>Computer Science program</Highlight> provided me with a firm foundation in technical concepts software development lifecycle 
                  and analytics which I have been able to leverage to help build impactful products. And my <Highlight>Master's </Highlight>in specialization of <Highlight>Management of Technology</Highlight> helped 
                  me understand <Highlight>storytelling and innovation</Highlight> in product!</p>
                  
                  <p className="text-lg leading-relaxed mb-4">With every product I work on, I begin with a <Highlight>holistic overview of stakeholder needs</Highlight>, from business requirements to end user 
                  pain points to production team skillsets and beyond. This allows me to help craft <Highlight>product specifications</Highlight> and <Highlight>roadmaps that are highly adaptive</Highlight> 
                  and tailored to the unique characteristics of the team that will be working to deliver the final product. 
                  </p>

                  <p className="text-lg leading-relaxed mb-4">
                  Throughout the product lifecycle, my goal is always to ensure that all my product stakeholders feel heard and their opinions 
                  are carefully considered in context of the broader product vision, and I <Highlight>will do what is necessary to find a solution that 
                  satisfies my stakeholders</Highlight>, whether that necessitates 12+ hours of air travel twice in 72 hours or complete product overhauls 
                  after a year of intense product development. </p>
                  
                  <p className="text-lg leading-relaxed mb-4">In the smaller teams I've had the opportunity to manage, I'm excited to be able to work alongside designers, engineers, and UX 
                  researchers, which helps maintain my hands-on skills and gives me a <Highlight>deep experiential understanding of the day-to-day challenges</Highlight>  
                  and growth opportunities within the team. In larger teams where the management of the product and an embedded product team 
                  consumes the bulk of my day and working alongside my team on a regular basis is not feasible, <Highlight>regular one-on-ones with each team member</Highlight>  
                  becomes all the more crucial.</p>
                  
                  <p className="text-lg leading-relaxed mb-4">My favourite projects are ones that taught me a <Highlight>valuable lesson</Highlight>, had particularly <Highlight>challenging solutions</Highlight>, helped impact a group 
                  of users for the better, or some combination of the above. Some of these projects were not particularly fun to work through, 
                  but all of them have been more than worth the effort in retrospect.</p>
                  
                  <p className="text-lg leading-relaxed mb-4">I am passionate about doing what I can to help make the world a better place. Have an idea? Talk to me!</p>
                  
                  <p className="text-lg leading-relaxed mb-4">I get disproportionately excited about good movies/series, books, building team culture (especially in terms of building people up), and embroidery.</p>
                  
                  <p className="text-lg leading-relaxed">Have a recommendation, knowledge to share, or just want to be excited with me?
                </p>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <h2 className="section-title mb-4">Experience</h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-highlight pl-6">
                    <h3 className="font-serif text-xl">Product Manager</h3>
                    <p className="text-muted-foreground">AI Acceleration • 2025 - Present</p>
                  </div>
                  <div className="border-l-2 border-border pl-6">
                    <h3 className="font-serif text-xl">Technical Product Manager</h3>
                    <p className="text-muted-foreground">FinEd (FinTech Startup) • 2024 - 2025</p>
                  </div>
                  <div className="border-l-2 border-border pl-6">
                    <h3 className="font-serif text-xl">Product Analyst</h3>
                    <p className="text-muted-foreground">Learning Enterprise • 2023 - 2024</p>
                  </div>
                  <div className="border-l-2 border-border pl-6">
                    <h3 className="font-serif text-xl">Business Data Analyst</h3>
                    <p className="text-muted-foreground">Vrinsoft • 2021 - 2022</p>
                  </div>
                </div>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <h2 className="section-title mb-4">Education</h2>
                <div className="border-l-2 border-highlight pl-6">
                  <h3 className="font-serif text-xl">Management of Technology</h3>
                  <p className="text-muted-foreground">Arizona State University • 2024</p>
                  <div className="border-l-2 border-highlight pl-6">
                    <h3 className="font-serif text-xl">Computer Science</h3>
                    <p className="text-muted-foreground">Gujarat Technological University • 2022</p>
                  </div>
                </div>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <h2 className="section-title mb-4">Skills</h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Product Strategy",
                    "User Research",
                    "Documentation",
                    "Cross-Functional Collaboration",
                    "Agile/Scrum",
                    "Data Analysis",
                    "Wireframing",
                    "Figma",
                    "Stakeholder Management",
                    "Software Development Lifecycle",
                    "Python", "SQL",
                    "Customer Empathy",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 border border-border text-sm hover:bg-highlight hover:border-highlight transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
