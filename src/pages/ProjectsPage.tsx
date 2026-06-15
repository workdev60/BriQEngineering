import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import imgResidential from "@/assets/project-5.jpg";
import imgCommercial from "@/assets/project-commercial.jpg";
import imgPlumbing1 from "@/assets/project-plumbing.jpg";
import imgPlumbing2 from "@/assets/project-plumbing2.jpg";
import imgElectrical1 from "@/assets/project-4.jpg";
import imgElectrical2 from "@/assets/project-electrical2.jpg";
import imgPower1 from "@/assets/project-power.jpg";
import imgPower2 from "@/assets/project-substation.jpg";

const categories = ["All", "Residential and Commercial Development", "Interior Plumbing", "Electrical Installations Works", "Power Distribution Network"];

const projects = [
  { img: imgResidential, title: "Residential Development", category: "Residential and Commercial Development", desc: "Complete construction management for a residential development in Accra — from foundation to roofing and exterior finishing.", outcome: "Delivered on schedule" },
  { img: imgCommercial, title: "Commercial Facility Build", category: "Residential and Commercial Development", desc: "Full contractor management for a commercial facility including structural works, roofing, and interior finishing.", outcome: "Zero safety incidents" },

  { img: imgPlumbing1, title: "Commercial Plumbing Installation", category: "Interior Plumbing", desc: "Complete plumbing installation within buildings, both interior and exterior for commercial facilities.", outcome: "No punch-list items at handover" },
  { img: imgPlumbing2, title: "Interior Plumbing Works", category: "Interior Plumbing", desc: "Full plumbing installation for a multi-storey residential building — supply, drainage, and sanitation systems.", outcome: "Leak-free certification" },

  { img: imgElectrical1, title: "Electrical Systems — Office Block", category: "Electrical Installations Works", desc: "Full internal wiring, lighting systems, and distribution board installation for a multi-storey office block.", outcome: "Fully code-compliant handover" },
  { img: imgElectrical2, title: "Building Electrical & Lighting", category: "Electrical Installations Works", desc: "Complete lighting design and electrical installation for a new commercial build, including smart control systems.", outcome: "Exceeded client expectations" },

  { img: imgPower1, title: "Power Network Installation", category: "Power Distribution Network", desc: "High tension line installation and low voltage distribution network for an institutional client.", outcome: "Commissioned within budget" },
  { img: imgPower2, title: "Substation Construction", category: "Power Distribution Network", desc: "Substation design and construction for industrial power supply in the Greater Accra region.", outcome: "Operational within 90 days" },
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
              <h1 className="heading-xl mb-5">Projects we've delivered</h1>
              <p className="body-lg max-w-xl mx-auto">
                Every project on this page was managed end-to-end by BriQ — from the first site visit to the final handover.
              </p>
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
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
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

      <section className="section-spacing-sm bg-brand-orange text-center">
        <div className="container-site px-5 sm:px-8 lg:px-16">
          <ScrollReveal>
            <h2 className="heading-lg mb-4">Have a project in mind?</h2>
            <p className="body-sm mb-6">Book a free consultation and let's assess your project together.</p>
            <Link to="/contact"><Button size="lg">Book a call <ArrowRight className="w-4 h-4" /></Button></Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
