import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import StatsBar from "@/components/StatsBar";
import LeadForm from "@/components/LeadForm";
import heroBg from "@/assets/hero-bg.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const services = [
  { title: "Electrical Engineering", desc: "Complete electrical system design, analysis, and optimization for commercial and industrial facilities." },
  { title: "Construction Consulting", desc: "Expert guidance throughout every phase of your construction project, from planning to completion." },
  { title: "Project Management", desc: "End-to-end project execution with rigorous quality control, budgeting, and timeline management." },
  { title: "Installation & Execution", desc: "Professional installation of electrical systems with full compliance and safety standards." },
];

const testimonials = [
  { name: "Marcus Chen", role: "VP Operations, Meridian Group", text: "BriQ delivered our $4.2M electrical overhaul three weeks ahead of schedule. Their technical expertise and project management are world-class." },
  { name: "Sarah Al-Rashid", role: "Director, Oasis Developments", text: "We've partnered with BriQ on seven projects. Their consistency, professionalism, and attention to detail set them apart from every other firm." },
  { name: "David Okafor", role: "CEO, Atlas Construction", text: "The sustainability-focused electrical design BriQ created for our headquarters reduced energy costs by 34%. Outstanding engineering." },
];

const featuredProjects = [
  { img: project1, title: "Metropolitan Office Complex", category: "Commercial" },
  { img: project2, title: "Industrial Power Systems", category: "Industrial" },
  { img: project3, title: "Solar Integration Project", category: "Renewable Energy" },
  { img: project4, title: "Highway Infrastructure", category: "Infrastructure" },
];

const clients = ["Meridian Group", "Oasis Developments", "Atlas Construction", "Nova Industries", "Pacific Holdings", "Vertex Engineering"];

const Index = () => (
  <main>
    {/* Hero */}
    <section className="min-h-[85vh] flex items-center pt-20">
      <div className="container-site px-5 sm:px-8 lg:px-16 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="heading-xl mb-6">
              Electrical engineering{" "}
              <span className="text-accent">&</span>{" "}
              construction consulting
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="body-lg max-w-xl mx-auto mb-10">
              We deliver world-class engineering solutions for commercial, industrial, and infrastructure projects — on time, on budget, every time.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact">
                <Button size="lg">Contact us <ArrowRight className="w-4 h-4" /></Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" size="lg">View work <ArrowRight className="w-4 h-4" /></Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Clients */}
    <section className="border-t border-border py-12 sm:py-16">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {clients.map((c) => (
              <span key={c} className="text-sm font-medium text-muted-foreground/50 tracking-tight">{c}</span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Featured Image */}
    <section className="px-5 sm:px-8 lg:px-16 pb-20">
      <ScrollReveal>
        <div className="container-site">
          <div className="rounded-2xl overflow-hidden aspect-[16/7]">
            <img src={heroBg} alt="BriQ Engineering at work" className="w-full h-full object-cover" />
          </div>
        </div>
      </ScrollReveal>
    </section>

    {/* Stats */}
    <StatsBar />

    {/* Services */}
    <section className="section-spacing border-t border-border">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <div className="max-w-xl mb-16">
            <p className="label-sm mb-3">Services</p>
            <h2 className="heading-lg">Comprehensive engineering solutions</h2>
          </div>
        </ScrollReveal>
        <div className="space-y-0">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 60}>
              <Link to="/services" className="group block py-8 border-t border-border last:border-b">
                <div className="flex items-start justify-between gap-8">
                  <div className="flex-1">
                    <h3 className="heading-md mb-2 group-hover:text-accent transition-colors duration-300">{s.title}</h3>
                    <p className="body-sm max-w-xl">{s.desc}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 mt-1 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Projects Grid */}
    <section className="section-spacing bg-secondary">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="label-sm mb-3">Selected work</p>
              <h2 className="heading-lg">Featured projects</h2>
            </div>
            <Link to="/projects" className="hidden sm:flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              All works <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuredProjects.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 80}>
              <Link to="/projects" className="group block">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-4 bg-background">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out" loading="lazy" />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display font-semibold text-base tracking-tight">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{p.category}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 mt-1 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <div className="sm:hidden mt-8 text-center">
          <Link to="/projects"><Button variant="outline">All works <ArrowRight className="w-4 h-4" /></Button></Link>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-spacing">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <div className="max-w-xl mb-16">
            <p className="label-sm mb-3">What our partners say</p>
            <h2 className="heading-lg">Trusted by industry leaders</h2>
          </div>
        </ScrollReveal>
        <div className="space-y-0">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 80}>
              <div className="py-10 border-t border-border last:border-b">
                <blockquote className="text-lg sm:text-xl lg:text-2xl font-display font-medium leading-snug tracking-tight max-w-3xl mb-6">
                  "{t.text}"
                </blockquote>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Lead Capture */}
    <section className="section-spacing bg-secondary">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <p className="label-sm mb-3">Start a project</p>
            <h2 className="heading-lg mb-4">Let's build something exceptional</h2>
            <p className="body-lg mb-8 max-w-md">
              Tell us about your project and get a detailed proposal from our engineering team within 24 hours.
            </p>
            <div className="flex items-center gap-4">
              <a href="tel:+15551234567" className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
                <Phone className="w-4 h-4" /> +1 (555) 123-4567
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <LeadForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  </main>
);

export default Index;
