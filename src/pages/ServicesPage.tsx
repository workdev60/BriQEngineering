import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import BookingForm from "@/components/BookingForm";

const services = [
  {
    title: "Building Construction",
    desc: "From foundation to roofing, we handle the full construction process for residential and commercial buildings. BriQ takes full contractor responsibility — you don't need to source workers, supervise quality, or manage timelines.",
    items: ["Foundation & structural works", "Residential & commercial buildings", "Masonry & roofing", "Interior & exterior finishing"],
  },
  {
    title: "Plumbing Works",
    desc: "Complete plumbing installation within buildings, both interior and exterior. Our certified plumbing teams work under direct BriQ supervision to ensure compliance and quality at every stage.",
    items: ["Water supply & drainage systems", "Interior pipe installation", "Exterior plumbing works", "Sanitation & sewage systems"],
  },
  {
    title: "Electrical & Lighting Systems",
    desc: "Full internal building wiring, circuit design, and lighting installations for homes and commercial facilities. We ensure every installation is safe, code-compliant, and professionally executed.",
    items: ["Internal wiring & circuit design", "Lighting installation & control", "Distribution boards & panels", "Safety & compliance checks"],
  },
  {
    title: "Power Infrastructure",
    desc: "Large-scale power infrastructure including high tension lines, low voltage distribution networks, substation construction, and complete power network installations for industrial and institutional clients.",
    items: ["High tension line installation", "Low voltage distribution networks", "Substation construction", "Power network commissioning"],
  },
  {
    title: "Project Management",
    desc: "End-to-end project execution with rigorous scheduling, cost control, and quality assurance. Our engineers supervise the entire execution — artisans work under BriQ, not independently.",
    items: ["Site supervision & coordination", "Timeline & budget management", "Quality assurance & control", "Project handover & documentation"],
  },
  {
    title: "Engineering Consultancy",
    desc: "Technical advisory and feasibility studies for clients assessing new construction projects. We provide honest assessments, detailed cost estimates, and clear engineering recommendations.",
    items: ["Feasibility & site assessment", "Cost estimation & budgeting", "Engineering design review", "Contractor vetting support"],
  },
];

const ServicesPage = () => (
  <main className="pt-20">
    <section className="section-spacing">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="label-sm mb-3">Services</p>
            <h1 className="heading-xl mb-5">Full-service construction management</h1>
            <p className="body-lg max-w-xl mx-auto">
              We don't just consult — we execute. BriQ takes on your project, brings in our vetted teams, and delivers the finished result. You deal with us, not the chaos.
            </p>
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
                    <Link to="/contact"><Button size="sm">Book a call <ArrowRight className="w-3.5 h-3.5" /></Button></Link>
                    <a href="tel:0595122484"><Button variant="outline" size="sm"><Phone className="w-3.5 h-3.5" /> Call us</Button></a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    <section className="section-spacing bg-brand-orange">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <div className="max-w-xl mx-auto">
          <ScrollReveal>
            <BookingForm title="Request a consultation" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  </main>
);

export default ServicesPage;
