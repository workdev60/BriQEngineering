import { Button } from "@/components/ui/button";
import { Leaf, Sun, Gauge, Recycle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const pillars = [
  { icon: Sun, title: "Renewable Energy Integration", desc: "We design and implement solar PV systems, wind energy integration, and hybrid power solutions that reduce dependence on fossil fuels while delivering reliable power." },
  { icon: Gauge, title: "Energy Efficiency", desc: "Our engineering approach prioritizes energy-efficient designs, smart building systems, LED retrofits, and power factor correction to minimize operational costs." },
  { icon: Recycle, title: "Sustainable Materials", desc: "We specify environmentally responsible materials, low-impact construction methods, and waste-reduction strategies for every project." },
  { icon: Leaf, title: "Green Building Standards", desc: "Our team holds expertise in LEED, BREEAM, and local green building certifications, helping clients achieve sustainability targets and certifications." },
];

const SustainabilityPage = () => (
  <main className="pt-16">
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-wide mx-auto text-center">
        <ScrollReveal>
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Sustainability & Innovation</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Engineering a Sustainable Future</h1>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">At BriQ, sustainability isn't an add-on — it's embedded in every design decision, material choice, and engineering solution we deliver.</p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 80}>
              <div className="bg-card rounded-xl border border-border p-8 card-hover h-full">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5">
                  <p.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h2 className="font-display text-xl font-bold mb-3">{p.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-section-warm">
      <div className="container-narrow mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Impact by the Numbers</h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {[
            { val: "2.4MW", label: "Solar Capacity Installed" },
            { val: "38%", label: "Avg. Energy Savings" },
            { val: "12", label: "Green Certifications" },
            { val: "850+", label: "Tons CO₂ Reduced/Year" },
          ].map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 80}>
              <div className="font-display text-3xl sm:text-4xl font-bold text-primary tabular-nums">{s.val}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={200}>
          <div className="mt-12">
            <Link to="/contact">
              <Button variant="hero" size="lg">Discuss Your Green Project <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default SustainabilityPage;
