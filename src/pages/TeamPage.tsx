import ScrollReveal from "@/components/ScrollReveal";

const team = [
  { name: "Khalid Al-Mansour", role: "Founder & CEO", expertise: "30+ years in electrical engineering and construction management. Licensed PE with expertise in high-voltage systems.", initials: "KA" },
  { name: "Dr. Elena Vasquez", role: "Chief Engineer", expertise: "PhD in Power Systems Engineering. Specializes in sustainable energy design and smart grid integration.", initials: "EV" },
  { name: "James Mwangi", role: "Director of Operations", expertise: "20 years managing large-scale construction projects across commercial and industrial sectors.", initials: "JM" },
  { name: "Priya Sharma", role: "Senior Electrical Engineer", expertise: "Expert in building electrical systems, fire alarm design, and code compliance. LEED AP certified.", initials: "PS" },
  { name: "Robert Tanaka", role: "Project Manager", expertise: "PMP certified with 15 years delivering complex engineering projects on time and within budget.", initials: "RT" },
  { name: "Fatima Al-Zahrani", role: "Sustainability Lead", expertise: "Specialist in green building certifications, energy auditing, and renewable energy integration.", initials: "FA" },
];

const TeamPage = () => (
  <main className="pt-16">
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-wide mx-auto text-center">
        <ScrollReveal>
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Team</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Meet the Experts Behind BriQ</h1>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">Our multidisciplinary team of licensed engineers, project managers, and consultants brings decades of combined experience.</p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <ScrollReveal key={m.name} delay={i * 80}>
              <div className="bg-card rounded-xl border border-border p-6 card-hover text-center h-full">
                <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-2xl font-bold text-accent-foreground">{m.initials}</span>
                </div>
                <h3 className="font-display text-lg font-bold">{m.name}</h3>
                <p className="text-primary text-sm font-medium mt-1">{m.role}</p>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{m.expertise}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default TeamPage;
