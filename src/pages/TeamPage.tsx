import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const team = [
  { name: "Khalid Al-Mansour", role: "Founder & CEO", expertise: "30+ years in electrical engineering and construction management. Licensed PE with expertise in high-voltage systems.", initials: "KA" },
  { name: "Dr. Elena Vasquez", role: "Chief Engineer", expertise: "PhD in Power Systems Engineering. Specializes in sustainable energy design and smart grid integration.", initials: "EV" },
  { name: "James Mwangi", role: "Director of Operations", expertise: "20 years managing large-scale construction projects across commercial and industrial sectors.", initials: "JM" },
  { name: "Priya Sharma", role: "Senior Electrical Engineer", expertise: "Expert in building electrical systems, fire alarm design, and code compliance. LEED AP certified.", initials: "PS" },
  { name: "Robert Tanaka", role: "Project Manager", expertise: "PMP certified with 15 years delivering complex engineering projects on time and within budget.", initials: "RT" },
  { name: "Fatima Al-Zahrani", role: "Sustainability Lead", expertise: "Specialist in green building certifications, energy auditing, and renewable energy integration.", initials: "FA" },
];

const TeamPage = () => (
  <main className="pt-20">
    <section className="section-spacing">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="label-sm mb-3">Our team</p>
            <h1 className="heading-xl mb-5">The experts behind BriQ</h1>
            <p className="body-lg max-w-xl mx-auto">A multidisciplinary team of licensed engineers, project managers, and consultants with decades of combined experience.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
          {team.map((m, i) => (
            <ScrollReveal key={m.name} delay={i * 60}>
              <div className="group">
                <div className="aspect-[3/4] rounded-2xl bg-secondary flex items-center justify-center mb-5 overflow-hidden">
                  <span className="font-display text-4xl font-bold text-muted-foreground/30">{m.initials}</span>
                </div>
                <h3 className="font-display font-semibold text-base tracking-tight">{m.name}</h3>
                <p className="text-sm text-accent font-medium mt-0.5 mb-2">{m.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.expertise}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-spacing-sm bg-secondary text-center">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <h2 className="heading-lg mb-6">Want to work with us?</h2>
          <Link to="/contact"><Button size="lg">Get in touch <ArrowRight className="w-4 h-4" /></Button></Link>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default TeamPage;
