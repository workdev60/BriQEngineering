import ScrollReveal from "@/components/ScrollReveal";
import StatsBar from "@/components/StatsBar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";

const AboutPage = () => (
  <main className="pt-20">
    <section className="section-spacing">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">About</h1>
            <p className="body-lg max-w-2xl mx-auto">
              BriQ Engineering & Consulting combines expertise in electrical engineering, construction, and technology to deliver measurable results for commercial and industrial clients.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <StatsBar />

    <section className="section-spacing border-t border-border">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={aboutImg} alt="BriQ Engineering team" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="label-sm mb-3">Our story</p>
            <h2 className="heading-lg mb-6">Building the future since 2008</h2>
            <p className="body-sm mb-4">
              Founded by Khalid Al-Mansour with a clear mission: deliver engineering excellence clients can trust. Starting with a team of three engineers, we've grown to a multidisciplinary firm of 50+ professionals.
            </p>
            <p className="body-sm mb-8">
              Today, we're proud of our 240+ successful projects, industry-leading safety record, and reputation for on-time, on-budget delivery. Our commitment to sustainability ensures clients receive forward-thinking solutions.
            </p>
            <Link to="/team">
              <Button size="lg">Meet our team <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-spacing bg-secondary">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <h2 className="heading-lg text-center mb-16">Our values</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {[
            { title: "Mastery", desc: "We pursue deep technical expertise, investing continuously in our engineers' development and staying at the forefront of engineering practice." },
            { title: "Dependability", desc: "On-time, on-budget, every time. We build trust through consistent delivery and transparent communication at every project phase." },
            { title: "Innovation", desc: "We embrace sustainable technologies and forward-thinking design approaches that reduce costs and environmental impact for our clients." },
          ].map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 80}>
              <div>
                <h3 className="heading-md mb-3">{v.title}</h3>
                <p className="body-sm">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Certifications */}
    <section className="section-spacing-sm border-t border-border">
      <div className="container-site px-5 sm:px-8 lg:px-16 text-center">
        <ScrollReveal>
          <p className="label-sm mb-10">Certifications & affiliations</p>
        </ScrollReveal>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
          {["IEEE Member", "NFPA Certified", "LEED AP", "PMP Certified", "ISO 9001", "OSHA Compliant"].map((cert, i) => (
            <ScrollReveal key={cert} delay={i * 50}>
              <span className="text-sm font-medium text-muted-foreground">{cert}</span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default AboutPage;
