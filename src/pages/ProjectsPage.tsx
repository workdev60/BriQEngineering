import { useState } from "react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const categories = ["All", "Commercial", "Industrial", "Renewable Energy", "Infrastructure"];

const projects = [
  { img: project1, title: "Metropolitan Office Complex", category: "Commercial", desc: "Full electrical design and installation for a 42-story mixed-use development.", outcome: "Completed 3 weeks ahead of schedule" },
  { img: project2, title: "Industrial Power Distribution", category: "Industrial", desc: "High-voltage switchgear and distribution network for a 200,000 sq ft manufacturing facility.", outcome: "Zero safety incidents during installation" },
  { img: project3, title: "Corporate Solar Integration", category: "Renewable Energy", desc: "1.2MW rooftop solar system with smart grid integration for a tech campus.", outcome: "34% reduction in energy costs" },
  { img: project4, title: "Highway Interchange Lighting", category: "Infrastructure", desc: "Complete LED lighting system design and installation for a major highway interchange.", outcome: "42% energy savings vs. original design" },
  { img: project1, title: "Medical Center Expansion", category: "Commercial", desc: "Critical power systems design for a 120-bed hospital expansion with full redundancy.", outcome: "100% uptime since commissioning" },
  { img: project2, title: "Data Center Power Systems", category: "Industrial", desc: "Tier III data center electrical infrastructure with dual UPS and generator backup.", outcome: "99.999% power availability achieved" },
  { img: project3, title: "Municipal Solar Farm", category: "Renewable Energy", desc: "5MW ground-mounted solar installation with battery storage for municipal grid support.", outcome: "Powers 1,200+ homes annually" },
  { img: project4, title: "Transit Station Upgrade", category: "Infrastructure", desc: "Electrical modernization of 12 transit stations including signaling and emergency systems.", outcome: "Delivered on budget, 4 months ahead" },
];

const ProjectsPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <main className="pt-16">
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-wide mx-auto text-center">
          <ScrollReveal>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Portfolio</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Our Project Portfolio</h1>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">Explore our track record of delivering complex engineering projects across multiple sectors.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {categories.map((c) => (
                <Button
                  key={c}
                  variant={active === c ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActive(c)}
                >
                  {c}
                </Button>
              ))}
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p, i) => (
              <ScrollReveal key={p.title + i} delay={i * 60}>
                <div className="group bg-card rounded-xl overflow-hidden border border-border card-hover h-full flex flex-col">
                  <div className="overflow-hidden aspect-[4/3]">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">{p.category}</span>
                    <h3 className="font-display font-bold text-lg mt-1 mb-2">{p.title}</h3>
                    <p className="text-muted-foreground text-sm flex-1">{p.desc}</p>
                    <div className="mt-3 pt-3 border-t border-border text-xs font-medium text-primary">
                      ✓ {p.outcome}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
