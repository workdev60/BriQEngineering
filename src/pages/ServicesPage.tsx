import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import LeadForm from "@/components/LeadForm";

const services = [
  {
    title: "Electrical Engineering",
    desc: "Comprehensive electrical system design, power distribution analysis, load calculations, and optimization for commercial, industrial, and infrastructure projects.",
    items: ["Power system design & analysis", "Load flow & short circuit studies", "Electrical system audits", "Code compliance review"],
  },
  {
    title: "Construction Consulting",
    desc: "Expert advisory services for construction projects including feasibility studies, cost estimation, risk assessment, and regulatory compliance guidance.",
    items: ["Feasibility & viability studies", "Cost estimation & value engineering", "Regulatory compliance", "Risk assessment & mitigation"],
  },
  {
    title: "Project Management",
    desc: "End-to-end project execution with rigorous scheduling, quality control, budget management, and stakeholder coordination.",
    items: ["Schedule & budget management", "Quality assurance & control", "Stakeholder coordination", "Progress reporting & analytics"],
  },
  {
    title: "Installation & Execution",
    desc: "Professional installation of electrical systems, switchgear, transformers, and distribution networks with full safety compliance.",
    items: ["Switchgear & panel installation", "Transformer commissioning", "Cable management systems", "Testing & commissioning"],
  },
  {
    title: "Energy Solutions",
    desc: "Sustainable energy design including solar integration, energy management systems, LED retrofits, and energy auditing.",
    items: ["Solar PV system design", "Energy management systems", "LED lighting retrofits", "Energy audits & optimization"],
  },
  {
    title: "Technical Advisory",
    desc: "Specialized consulting for complex electrical challenges, expert witness services, technical due diligence, and independent design reviews.",
    items: ["Independent design review", "Technical due diligence", "Expert witness services", "Specification development"],
  },
];

const ServicesPage = () => (
  <main className="pt-20">
    <section className="section-spacing">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="label-sm mb-3">Services</p>
            <h1 className="heading-xl mb-5">Engineering solutions that deliver</h1>
            <p className="body-lg max-w-xl mx-auto">From concept to commissioning, BriQ provides the full spectrum of electrical engineering and construction consulting services.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="px-5 sm:px-8 lg:px-16 pb-20 sm:pb-28">
      <div className="container-site">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 40}>
            <div className="py-10 sm:py-14 border-t border-border last:border-b">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr,1fr] gap-8 lg:gap-16">
                <div>
                  <span className="label-sm text-accent mb-2 block">0{i + 1}</span>
                  <h2 className="heading-md mb-3">{s.title}</h2>
                  <p className="body-sm max-w-md">{s.desc}</p>
                </div>
                <div className="flex flex-col justify-between">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {s.items.map((item) => (
                      <li key={item} className="text-sm flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <Link to="/contact"><Button size="sm">Get a quote <ArrowRight className="w-3.5 h-3.5" /></Button></Link>
                    <a href="tel:+15551234567"><Button variant="outline" size="sm"><Phone className="w-3.5 h-3.5" /> Call</Button></a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    <section className="section-spacing bg-secondary">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <div className="max-w-xl mx-auto">
          <ScrollReveal>
            <LeadForm title="Request a service quote" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  </main>
);

export default ServicesPage;
