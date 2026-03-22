import { Button } from "@/components/ui/button";
import { Phone, Play, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import aboutImg from "@/assets/about-team.jpg";

const PHONE = "+1 (555) 123-4567";

const VideoPage = () => (
  <main className="pt-16">
    {/* Hero Video Section */}
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-wide mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Discover BriQ</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">See What Sets Us Apart</h1>
            <p className="text-lg opacity-70">Watch our story and learn why leading organizations trust BriQ Engineering for their most critical projects.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden aspect-video bg-secondary-foreground/10 flex items-center justify-center cursor-pointer group">
            <img src={aboutImg} alt="BriQ Engineering" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[hsl(0,0%,0%,0.5)] group-hover:bg-[hsl(0,0%,0%,0.4)] transition-colors duration-300 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 ml-1" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Who We Are */}
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            { title: "Who We Are", desc: "BriQ Engineering & Consulting is a full-service electrical engineering and construction consulting firm with 15+ years of experience delivering complex projects across commercial, industrial, and infrastructure sectors." },
            { title: "What We Do", desc: "We provide end-to-end engineering solutions: from electrical system design and power distribution to construction management, project execution, and sustainable energy integration." },
            { title: "Why Choose Us", desc: "Our track record of 240+ successful projects, 98% client satisfaction rate, and commitment to on-time, on-budget delivery makes us the trusted partner for organizations that demand excellence." },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <div className="bg-card rounded-xl p-8 border border-border h-full">
                <h2 className="font-display text-xl font-bold mb-4 text-primary">{item.title}</h2>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Key Differentiators */}
    <section className="section-padding bg-section-warm">
      <div className="container-narrow mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">The BriQ Difference</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
          {[
            "Certified engineers with deep industry expertise",
            "Proven track record across 240+ projects",
            "Dedicated project managers for every engagement",
            "Transparent pricing with no hidden costs",
            "24/7 emergency engineering support",
            "Sustainable and energy-efficient design focus",
          ].map((item, i) => (
            <ScrollReveal key={item} delay={i * 60}>
              <div className="flex items-start gap-3 p-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container-wide mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="opacity-80 mb-6 max-w-md mx-auto">Talk to our engineering experts today and get a free consultation.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
              <Button variant="secondary" size="xl"><Phone className="w-5 h-5" /> Call Now</Button>
            </a>
            <Link to="/contact">
              <Button variant="hero-outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">Contact Us <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default VideoPage;
