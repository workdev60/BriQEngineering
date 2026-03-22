import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Zap, Building2, Shield, Award, Star, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import StatsBar from "@/components/StatsBar";
import LeadForm from "@/components/LeadForm";
import heroBg from "@/assets/hero-bg.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const PHONE = "+1 (555) 123-4567";

const services = [
  { icon: Zap, title: "Electrical Engineering", desc: "Complete electrical system design, analysis, and optimization for commercial and industrial facilities." },
  { icon: Building2, title: "Construction Consulting", desc: "Expert guidance throughout every phase of your construction project, from planning to completion." },
  { icon: Shield, title: "Project Management", desc: "End-to-end project execution with rigorous quality control, budgeting, and timeline management." },
  { icon: Award, title: "Installation & Execution", desc: "Professional installation of electrical systems with full compliance and safety standards." },
];

const trustFactors = [
  "Licensed & certified engineers",
  "15+ years of industry experience",
  "On-time, on-budget delivery",
  "24/7 emergency support",
  "Full regulatory compliance",
  "Sustainable engineering practices",
];

const testimonials = [
  { name: "Marcus Chen", role: "VP Operations, Meridian Group", text: "BriQ delivered our $4.2M electrical overhaul three weeks ahead of schedule. Their technical expertise and project management are world-class.", rating: 5 },
  { name: "Sarah Al-Rashid", role: "Director, Oasis Developments", text: "We've partnered with BriQ on seven projects. Their consistency, professionalism, and attention to detail set them apart from every other firm we've worked with.", rating: 5 },
  { name: "David Okafor", role: "CEO, Atlas Construction", text: "The sustainability-focused electrical design BriQ created for our headquarters reduced energy costs by 34%. Outstanding engineering.", rating: 5 },
];

const featuredProjects = [
  { img: project1, title: "Metropolitan Office Complex", category: "Commercial", desc: "Full electrical design and installation for a 42-story mixed-use development." },
  { img: project2, title: "Industrial Power Systems", category: "Industrial", desc: "High-voltage switchgear installation and distribution network for manufacturing facility." },
  { img: project3, title: "Solar Integration Project", category: "Renewable Energy", desc: "1.2MW rooftop solar installation with smart grid integration for corporate campus." },
];

const Index = () => (
  <main>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(0,0%,4%,0.92)] via-[hsl(0,0%,4%,0.75)] to-[hsl(0,0%,4%,0.4)]" />
      </div>
      <div className="relative container-wide mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/15 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6" style={{ animationDelay: "0.1s", animation: "fadeInUp 0.7s cubic-bezier(0.16,1,0.3,1) both" }}>
            <Zap className="w-4 h-4" /> Trusted Engineering Partner
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[hsl(0,0%,100%)] leading-[1.05] mb-6" style={{ animationDelay: "0.2s", animation: "fadeInUp 0.7s cubic-bezier(0.16,1,0.3,1) both" }}>
            Engineering Excellence,{" "}
            <span className="text-primary">Built to Last</span>
          </h1>
          <p className="text-lg sm:text-xl text-[hsl(0,0%,80%)] mb-8 max-w-xl leading-relaxed" style={{ animationDelay: "0.35s", animation: "fadeInUp 0.7s cubic-bezier(0.16,1,0.3,1) both" }}>
            BriQ Engineering delivers world-class electrical engineering, construction consulting, and project execution — on time, on budget, every time.
          </p>
          <div className="flex flex-wrap gap-3" style={{ animationDelay: "0.5s", animation: "fadeInUp 0.7s cubic-bezier(0.16,1,0.3,1) both" }}>
            <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
              <Button variant="hero" size="xl"><Phone className="w-5 h-5" /> Call Now</Button>
            </a>
            <Link to="/contact">
              <Button variant="hero-outline" size="xl" className="border-[hsl(0,0%,100%,0.3)] text-[hsl(0,0%,100%)] hover:bg-[hsl(0,0%,100%,0.1)] hover:text-[hsl(0,0%,100%)]">Get a Quote</Button>
            </Link>
            <Link to="/projects">
              <Button variant="ghost" size="xl" className="text-[hsl(0,0%,80%)] hover:text-[hsl(0,0%,100%)] hover:bg-[hsl(0,0%,100%,0.05)]">View Projects <ArrowRight className="w-5 h-5" /></Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <StatsBar />

    {/* Services */}
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Comprehensive Engineering Services</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 80}>
              <div className="group bg-card rounded-xl p-6 border border-border card-hover h-full">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <s.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 hover:gap-2 transition-all duration-200">
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-section-warm">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Why BriQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">The Engineering Partner You Can Trust</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With over 15 years of experience delivering complex engineering projects, BriQ combines deep technical expertise with proven project management methodologies to ensure every project exceeds expectations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {trustFactors.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  {f}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/about">
                <Button variant="hero" size="lg">About Our Firm <ArrowRight className="w-4 h-4" /></Button>
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="relative">
              <img src={heroBg} alt="BriQ Engineering team at work" className="rounded-xl shadow-2xl w-full object-cover aspect-[4/3]" loading="lazy" />
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-xl p-4 shadow-xl">
                <div className="font-display text-2xl font-bold">15+</div>
                <div className="text-xs opacity-80">Years of Excellence</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Featured Projects */}
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 100}>
              <div className="group rounded-xl overflow-hidden bg-card border border-border card-hover">
                <div className="overflow-hidden aspect-[4/3]">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{p.category}</span>
                  <h3 className="font-display font-bold text-lg mt-1 mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm">{p.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="text-center mt-10">
            <Link to="/projects">
              <Button variant="outline" size="lg">View All Projects <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-wide mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Client Testimonials</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Trusted by Industry Leaders</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100}>
              <div className="bg-secondary-foreground/5 rounded-xl p-6 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed opacity-80 flex-1">"{t.text}"</p>
                <div className="mt-4 pt-4 border-t border-secondary-foreground/10">
                  <div className="font-display font-semibold text-sm">{t.name}</div>
                  <div className="text-xs opacity-60">{t.role}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Lead Capture */}
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Start Your Project</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to Build Something Great?</h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">Get a free consultation and detailed quote for your engineering project. Our experts respond within 24 hours.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="max-w-2xl mx-auto">
            <LeadForm />
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="bg-primary text-primary-foreground py-12 sm:py-16">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">Need an Engineering Expert? Call Now.</h2>
          <p className="opacity-80 mb-6 max-w-lg mx-auto">Our team is ready to discuss your project requirements and provide a detailed proposal.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
              <Button variant="secondary" size="xl"><Phone className="w-5 h-5" /> {PHONE}</Button>
            </a>
            <Link to="/contact">
              <Button variant="hero-outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">Contact Us</Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Index;
