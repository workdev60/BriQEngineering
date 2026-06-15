import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import StatsBar from "@/components/StatsBar";
import BookingForm from "@/components/BookingForm";
import heroBg from "@/assets/hero-bg-v2.png";
import serviceBuilding from "@/assets/project-1.jpg";
import servicePlumbing from "@/assets/project-2.jpg";
import serviceElectrical from "@/assets/project-4.jpg";
import servicePower from "@/assets/project-3.jpg";
import oldProject1 from "@/assets/project-1.jpg";
import oldProject2 from "@/assets/project-2.jpg";
import oldProject3 from "@/assets/project-3.jpg";
import oldProject4 from "@/assets/project-4.jpg";

const services = [
  { title: "Residential and Commercial Development", desc: "Residential and commercial structures, fully managed from foundation to roofing. We bring in vetted artisans, supervise quality, and deliver results." },
  { title: "Interior Plumbing", desc: "Full plumbing installation within buildings — interior and exterior finishing works, handled by our certified plumbing teams." },
  { title: "Electrical Installations Works", desc: "Internal building wiring, lighting installations, and electrical system design for homes and commercial facilities." },
  { title: "Power Distribution Network", desc: "High tension lines, low voltage distribution, substation construction, and power network installations for large-scale projects." },
];

const whyUs = [
  { icon: Award, title: "Multidisciplinary Expertise", desc: "Our team brings together construction management, electrical engineering, quantity surveying, and intelligent systems — giving every project the full range of specialist knowledge it needs." },
  { icon: Shield, title: "Commitment to Innovation & Safety", desc: "We are ISO 45001:2018 aligned in our safety practices. Every site operates under a structured Safety, Health & Environment (SHE) policy with zero tolerance for preventable incidents." },
  { icon: Users, title: "Tailored Solutions for Local & Global Markets", desc: "Whether you're a homeowner in Accra or an institutional client with international standards, BriQ designs and delivers solutions that fit your specific context and requirements." },
  { icon: Clock, title: "Transparent, Ethical Business Practices", desc: "We operate with full honesty in every quote, contract, and conversation. No hidden costs. No inflated estimates. What we say is what you get." },
];

const featuredProjects = [
  { img: serviceBuilding, title: "Housing Development", category: "Residential and Commercial Development" },
  { img: servicePlumbing, title: "Commercial Plumbing", category: "Interior Plumbing" },
  { img: serviceElectrical, title: "Electrical Installation", category: "Electrical Installations Works" },
  { img: servicePower, title: "Power Infrastructure", category: "Power Distribution Network" },
];

const fieldWork = [oldProject1, oldProject2, oldProject3, oldProject4];

const clients = ["Individual Homeowners", "Real Estate Developers", "Corporate Clients", "Government Projects", "Institutional Facilities"];

const Index = () => (
  <main>
    {/* Hero */}
    <section className="min-h-[90vh] flex items-center pt-20 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="container-site px-5 sm:px-8 lg:px-16 py-16 sm:py-24 relative z-10">
        <div className="max-w-4xl">
          <ScrollReveal>
            <p className="label-sm mb-5 text-accent">Build Smart. Build Stress-Free.</p>
            <h1 className="heading-xl mb-6">
              We Manage Your{" "}
              <span className="text-accent">Construction</span>{" "}
              From Start to Finish
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="body-lg max-w-xl mb-10">
              BriQ is a full-service construction and engineering management firm. We take on your project and manage it completely — from planning to handover. No stress. No chasing workers.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact">
                <Button size="lg">Book a Consultation <ArrowRight className="w-4 h-4" /></Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg">Our Services <ArrowRight className="w-4 h-4" /></Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Target Clients */}
    <section className="border-t border-border py-12 sm:py-16">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <p className="label-sm text-center mb-6">Who we work with</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {clients.map((c) => (
              <span key={c} className="text-sm font-medium text-muted-foreground/60 tracking-tight">{c}</span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Stats */}
    <StatsBar />

    {/* Services */}
    <section className="section-spacing border-t border-border">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <div className="max-w-xl mb-16">
            <p className="label-sm mb-3">Services</p>
            <h2 className="heading-lg">Everything your project needs, handled.</h2>
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
    <section className="section-spacing bg-brand-orange">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="label-sm mb-3">Selected work</p>
              <h2 className="heading-lg">Projects we've delivered</h2>
            </div>
            <Link to="/projects" className="hidden sm:flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              All projects <ArrowRight className="w-4 h-4" />
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
                    <p className="text-sm text-accent-foreground/80 mt-0.5">{p.category}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 mt-1 text-accent-foreground/80 group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <div className="sm:hidden mt-8 text-center">
          <Link to="/projects"><Button variant="outline">All projects <ArrowRight className="w-4 h-4" /></Button></Link>
        </div>
      </div>
    </section>

    {/* Recent Field Work (Original Images) */}
    <section className="section-spacing border-t border-border">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <div className="max-w-xl mb-14">
            <p className="label-sm mb-3">On-Site Reality</p>
            <h2 className="heading-lg">Recent field work</h2>
            <p className="body-sm mt-4">A glimpse into our active sites across Ghana. We don't just plan; we get our hands dirty.</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {fieldWork.map((img, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="aspect-square rounded-2xl overflow-hidden bg-secondary">
                <img src={img} alt={`Field work ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose BriQ */}
    <section className="section-spacing">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <div className="max-w-xl mb-16">
            <p className="label-sm mb-3">Why BriQ</p>
            <h2 className="heading-lg">You focus on the vision. We handle everything else.</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          {whyUs.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 80}>
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <item.icon className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="heading-md mb-2">{item.title}</h3>
                  <p className="body-sm">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Booking CTA */}
    <section className="section-spacing bg-secondary">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <p className="label-sm mb-3">Start your project</p>
            <h2 className="heading-lg mb-4">Ready to build?</h2>
            <p className="body-lg mb-8 max-w-md">
              Book a free consultation call with our team. We'll assess your project, give you a quote, and take full responsibility from there.
            </p>
            <div className="space-y-3 text-sm">
              <a href="https://wa.me/233595122484" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-medium hover:text-accent transition-colors">
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp us
              </a>
              <a href="mailto:projects@briqengineering.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                projects@briqengineering.com
              </a>
              <p className="text-muted-foreground">Oyarifa, Tema — Accra, Ghana</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <BookingForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  </main>
);

export default Index;
