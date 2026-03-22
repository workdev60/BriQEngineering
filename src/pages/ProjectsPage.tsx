import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const categories = ["All", "Commercial", "Industrial", "Renewable Energy", "Infrastructure"];

const projects = [
  { img: project1, title: "Metropolitan Office Complex", category: "Commercial", desc: "Full electrical design and installation for a 42-story mixed-use development.", outcome: "Completed 3 weeks ahead of schedule" },
  { img: project2, title: "Industrial Power Distribution", category: "Industrial", desc: "High-voltage switchgear and distribution network for a 200,000 sq ft manufacturing facility.", outcome: "Zero safety incidents" },
  { img: project3, title: "Corporate Solar Integration", category: "Renewable Energy", desc: "1.2MW rooftop solar system with smart grid integration for a tech campus.", outcome: "34% reduction in energy costs" },
  { img: project4, title: "Highway Interchange Lighting", category: "Infrastructure", desc: "Complete LED lighting system design and installation for a major highway interchange.", outcome: "42% energy savings" },
  { img: project1, title: "Medical Center Expansion", category: "Commercial", desc: "Critical power systems design for a 120-bed hospital expansion with full redundancy.", outcome: "100% uptime since commissioning" },
  { img: project2, title: "Data Center Power Systems", category: "Industrial", desc: "Tier III data center electrical infrastructure with dual UPS and generator backup.", outcome: "99.999% power availability" },
  { img: project3, title: "Municipal Solar Farm", category: "Renewable Energy", desc: "5MW ground-mounted solar installation with battery storage.", outcome: "Powers 1,200+ homes annually" },
  { img: project4, title: "Transit Station Upgrade", category: "Infrastructure", desc: "Electrical modernization of 12 transit stations including signaling.", outcome: "Delivered 4 months early" },
];

const ProjectsPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <main className="pt-20">
      <section className="section-spacing">
        <div className="container-site px-5 sm:px-8 lg:px-16">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <p className="label-sm mb-3">Portfolio</p>
              <h1 className="heading-xl mb-5">Our work</h1>
              <p className="body-lg max-w-xl mx-auto">Explore our track record of delivering complex engineering projects across multiple sectors.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="flex flex-wrap gap-2 justify-center mb-14">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    active === c
                      ? "bg-foreground text-background"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-12">
            {filtered.map((p, i) => (
              <ScrollReveal key={p.title + i} delay={i * 60}>
                <div className="group">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-secondary mb-4">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out" loading="lazy" />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="label-sm text-accent mb-1">{p.category}</p>
                      <h3 className="font-display font-semibold text-base tracking-tight mb-1">{p.title}</h3>
                      <p className="text-sm text-muted-foreground">{p.desc}</p>
                      <p className="text-xs font-medium text-accent mt-2">✓ {p.outcome}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing-sm bg-secondary text-center">
        <div className="container-site px-5 sm:px-8 lg:px-16">
          <ScrollReveal>
            <h2 className="heading-lg mb-6">Have a project in mind?</h2>
            <Link to="/contact"><Button size="lg">Let's talk <ArrowRight className="w-4 h-4" /></Button></Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
