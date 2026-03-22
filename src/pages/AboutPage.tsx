import ScrollReveal from "@/components/ScrollReveal";
import StatsBar from "@/components/StatsBar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";

const AboutPage = () => (
  <main className="pt-16">
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-wide mx-auto text-center">
        <ScrollReveal>
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">About BriQ</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Building the Future, One Project at a Time</h1>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">Founded in 2008, BriQ Engineering & Consulting has grown into one of the most trusted names in electrical engineering and construction consulting.</p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <img src={aboutImg} alt="BriQ Engineering team" className="rounded-xl shadow-xl w-full object-cover aspect-[4/3]" loading="lazy" />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              BriQ was founded by Khalid Al-Mansour with a clear mission: deliver engineering excellence that clients can trust. Starting with a team of three engineers, we've grown to a multidisciplinary firm of 50+ professionals serving clients across commercial, industrial, and infrastructure sectors.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Today, we're proud of our track record of 240+ successful projects, industry-leading safety record, and reputation for on-time, on-budget delivery. Our commitment to sustainability and innovation ensures our clients receive forward-thinking solutions built for the future.
            </p>
            <Link to="/team">
              <Button variant="hero" size="lg">Meet Our Team <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <StatsBar />

    {/* Certifications & Partners */}
    <section className="section-padding bg-section-warm">
      <div className="container-wide mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-3">Certifications & Affiliations</h2>
          <p className="text-muted-foreground mb-10">We maintain the highest industry standards and professional certifications.</p>
        </ScrollReveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {["IEEE Member", "NFPA Certified", "LEED AP", "PMP Certified", "ISO 9001", "OSHA Compliant"].map((cert, i) => (
            <ScrollReveal key={cert} delay={i * 60}>
              <div className="bg-card rounded-lg border border-border p-4 h-20 flex items-center justify-center text-sm font-medium text-muted-foreground">
                {cert}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default AboutPage;
