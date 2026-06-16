import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import safetyOutfit from "@/assets/safety-outfit.jpeg";

const pillars = [
  { num: "01", title: "Renewable Energy Solutions", desc: "We design and install renewable energy systems for sustainable living — solar PV, hybrid power solutions, and energy-efficient lighting systems that reduce dependence on fossil fuels." },
  { num: "02", title: "Safety, Health & Environment (SHE) Policy", desc: "Our operations are governed by a comprehensive SHE policy aligned with ISO 45001:2018. We believe all workplace injuries are preventable, and we manage every site with proactive risk assessment and continuous improvement." },
  { num: "03", title: "Environmental Protection", desc: "We are committed to preventing pollution and environmental damage, managing waste responsibly, using resources efficiently, and complying with all environmental regulations including EPA standards — aligned with ISO 14001:2015." },
  { num: "04", title: "Sustainable Materials & Methods", desc: "We specify environmentally responsible materials and low-impact construction methods on every project — minimising waste and operational costs without sacrificing quality or durability." },
];

const SustainabilityPage = () => (
  <main className="pt-20">
    <section className="section-spacing">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="label-sm mb-3">Sustainability & Innovation</p>
            <h1 className="heading-xl mb-5">Engineering a sustainable future</h1>
            <p className="body-lg max-w-xl mx-auto">Sustainability isn't an add-on — it's embedded in every design decision, material choice, and engineering solution we deliver.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="px-5 sm:px-8 lg:px-16 pb-20 sm:pb-28">
      <div className="container-site">
        {pillars.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 60}>
            <div className="py-10 sm:py-14 border-t border-border last:border-b">
              <div className="grid grid-cols-1 lg:grid-cols-[200px,1fr] gap-4 lg:gap-16">
                <span className="label-sm text-accent">{p.num}</span>
                <div>
                  <h2 className="heading-md mb-3">{p.title}</h2>
                  <p className="body-sm max-w-xl">{p.desc}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    <section className="section-spacing border-t border-border">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden bg-secondary aspect-[4/3]">
              <img src={safetyOutfit} alt="BriQ Engineering Safety Compliance Outfit" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="label-sm mb-3 text-accent">Our Safety Culture</p>
            <h2 className="heading-lg mb-5">Safety Compliance Outfit</h2>
            <p className="body-lg mb-6 text-muted-foreground/90">
              We take the safety of our engineers, artisans, and clients very seriously. Our official Safety Compliance Outfit is a physical testament to our commitment to a zero-incident work environment.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "High-visibility reflective elements",
                "Industrial-grade protective materials",
                "ISO 45001:2018 aligned safety standards",
                "Mandatory on all active BriQ sites"
              ].map((item) => (
                <li key={item} className="text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="/BRIQ%20COMPANY%20-%20SAFETY%20POLICY%20%20(1).pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">View Full Safety Policy <ArrowRight className="w-4 h-4" /></Button>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <section className="section-spacing bg-secondary">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <p className="label-sm mb-3 text-center">Our impact</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mt-10">
            {[
              { val: "2.4MW", label: "Solar capacity installed" },
              { val: "38%", label: "Avg. energy savings" },
              { val: "12", label: "Green certifications" },
              { val: "850+", label: "Tons CO₂ reduced/year" },
            ].map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 80}>
                <div>
                  <p className="label-sm mb-3">{s.label}</p>
                  <p className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-none tracking-[-0.04em] tabular-nums">{s.val}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-spacing-sm text-center">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <h2 className="heading-lg mb-6">Ready to go green?</h2>
          <Link to="/contact">
            <Button size="lg">Discuss your project <ArrowRight className="w-4 h-4" /></Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default SustainabilityPage;
