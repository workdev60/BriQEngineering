import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const pillars = [
  { num: "01", title: "Renewable Energy Integration", desc: "We design and implement solar PV systems, wind energy integration, and hybrid power solutions that reduce dependence on fossil fuels while delivering reliable power." },
  { num: "02", title: "Energy Efficiency", desc: "Our engineering approach prioritizes energy-efficient designs, smart building systems, LED retrofits, and power factor correction to minimize operational costs." },
  { num: "03", title: "Sustainable Materials", desc: "We specify environmentally responsible materials, low-impact construction methods, and waste-reduction strategies for every project." },
  { num: "04", title: "Green Building Standards", desc: "Our team holds expertise in LEED, BREEAM, and local green building certifications, helping clients achieve sustainability targets." },
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
