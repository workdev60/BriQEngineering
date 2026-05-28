import ScrollReveal from "@/components/ScrollReveal";
import StatsBar from "@/components/StatsBar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import brightImg from "@/assets/bright-quansah.jpeg";

const AboutPage = () => (
  <main className="pt-20">
    <section className="section-spacing">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">About BriQ</h1>
            <p className="body-lg max-w-2xl mx-auto">
              BriQ Engineering & Consultancy is a full-service construction and engineering management firm based in Accra, Ghana. We take on building and infrastructure projects and manage them completely — from start to finish.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <StatsBar />

    {/* Our Story */}
    <section className="section-spacing border-t border-border">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-secondary">
              <img src={brightImg} alt="Bright Quansah — Founder, BriQ Engineering" className="w-full h-full object-cover object-top" loading="lazy" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="label-sm mb-3">Our story</p>
            <h2 className="heading-lg mb-6">Built on full responsibility</h2>
            <p className="body-sm mb-4">
              BriQ was founded with a simple but powerful conviction: clients deserve a construction firm they can hand their project to and trust completely. Not a marketplace. Not a referral platform. A real firm that owns the work.
            </p>
            <p className="body-sm mb-4">
              We are the main contractor and engineering supervisors. When a client gives us a project, we bring in our own vetted artisans, supervise execution, ensure quality, and deliver results. Clients don't have to worry about finding workers, chasing timelines, or managing quality — BriQ handles everything.
            </p>
            <p className="body-sm mb-8">
              Operating from Oyarifa, Tema — Accra, we serve individual homeowners, real estate developers, corporate facilities, and institutional clients across Ghana.
            </p>
            <Link to="/team">
              <Button size="lg">Meet the founders <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="section-spacing bg-brand-orange">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <h2 className="heading-lg text-center mb-16">How we work</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {[
            { title: "We own it", desc: "BriQ is the main contractor. When you give us a project, we take full responsibility — not just consultation." },
            { title: "We supervise everything", desc: "Our licensed engineers are on-site at every phase. Artisans work under BriQ, not independently." },
            { title: "We deliver results", desc: "On time, on budget, with full quality handover. That's the BriQ standard — no exceptions." },
          ].map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 80}>
              <div>
                <span className="label-sm text-accent block mb-3">0{i + 1}</span>
                <h3 className="heading-md mb-3">{v.title}</h3>
                <p className="body-sm">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Business Model */}
    <section className="section-spacing border-t border-border">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <div className="max-w-xl mb-14">
            <p className="label-sm mb-3">How it works</p>
            <h2 className="heading-lg">From enquiry to handover</h2>
          </div>
        </ScrollReveal>
        <div className="space-y-0">
          {[
            { step: "01", title: "You bring the project", desc: "Contact BriQ with your project brief — whether it's a residential build, commercial facility, or power infrastructure." },
            { step: "02", title: "We assess & quote", desc: "Our engineers conduct a site assessment, prepare a detailed cost estimate, and present a clear project plan." },
            { step: "03", title: "We take full ownership", desc: "Once engaged, BriQ handles everything — procurement, artisan management, site supervision, and quality control." },
            { step: "04", title: "We deliver & hand over", desc: "The completed project is inspected, documented, and handed over to you with full warranties and support." },
          ].map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 60}>
              <div className="py-8 border-t border-border last:border-b grid grid-cols-1 sm:grid-cols-[80px,1fr] gap-4">
                <span className="label-sm text-accent">{s.step}</span>
                <div>
                  <h3 className="heading-md mb-2">{s.title}</h3>
                  <p className="body-sm max-w-xl">{s.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default AboutPage;
