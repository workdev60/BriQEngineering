import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Zap, Building2, Shield, Award, Wrench, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import LeadForm from "@/components/LeadForm";

const PHONE = "+1 (555) 123-4567";

const services = [
  {
    icon: Zap,
    title: "Electrical Engineering",
    desc: "Comprehensive electrical system design, power distribution analysis, load calculations, and optimization for commercial, industrial, and infrastructure projects.",
    benefits: ["Power system design & analysis", "Load flow & short circuit studies", "Electrical system audits", "Code compliance review"],
  },
  {
    icon: Building2,
    title: "Construction Consulting",
    desc: "Expert advisory services for construction projects including feasibility studies, cost estimation, risk assessment, and regulatory compliance guidance.",
    benefits: ["Feasibility & viability studies", "Cost estimation & value engineering", "Regulatory compliance", "Risk assessment & mitigation"],
  },
  {
    icon: Shield,
    title: "Project Management",
    desc: "End-to-end project execution with rigorous scheduling, quality control, budget management, and stakeholder coordination to deliver results on time.",
    benefits: ["Schedule & budget management", "Quality assurance & control", "Stakeholder coordination", "Progress reporting & analytics"],
  },
  {
    icon: Wrench,
    title: "Installation & Execution",
    desc: "Professional installation of electrical systems, switchgear, transformers, and distribution networks with full safety compliance and testing.",
    benefits: ["Switchgear & panel installation", "Transformer commissioning", "Cable management systems", "Testing & commissioning"],
  },
  {
    icon: Lightbulb,
    title: "Energy Solutions",
    desc: "Sustainable energy design including solar integration, energy management systems, LED retrofits, and energy auditing for reduced operational costs.",
    benefits: ["Solar PV system design", "Energy management systems", "LED lighting retrofits", "Energy audits & optimization"],
  },
  {
    icon: Award,
    title: "Technical Advisory",
    desc: "Specialized consulting for complex electrical challenges, expert witness services, technical due diligence, and independent design reviews.",
    benefits: ["Independent design review", "Technical due diligence", "Expert witness services", "Specification development"],
  },
];

const ServicesPage = () => (
  <main className="pt-16">
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-wide mx-auto text-center">
        <ScrollReveal>
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Services</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Engineering Solutions That Deliver</h1>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">From concept to commissioning, BriQ provides the full spectrum of electrical engineering and construction consulting services.</p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-wide mx-auto space-y-8">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 60}>
            <div className="bg-card rounded-xl border border-border p-6 sm:p-8 lg:p-10 card-hover">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-6 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                      <s.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold">{s.title}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">{s.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {s.benefits.map((b) => (
                      <div key={b} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
                  <Link to="/contact">
                    <Button variant="hero" size="lg" className="w-full">Get a Quote</Button>
                  </Link>
                  <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
                    <Button variant="outline" size="lg" className="w-full"><Phone className="w-4 h-4" /> Call Now</Button>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    <section className="section-padding bg-section-warm">
      <div className="container-narrow mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold">Request a Service Quote</h2>
            <p className="text-muted-foreground mt-3">Tell us about your project and we'll provide a detailed proposal.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="max-w-2xl mx-auto">
            <LeadForm title="Request a Service Quote" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default ServicesPage;
