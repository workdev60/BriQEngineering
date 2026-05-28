import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Instagram, Twitter } from "lucide-react";
import brightImg from "@/assets/bright-quansah.jpeg";

const team = [
  {
    name: "Bright Quansah",
    role: "Founder & CEO",
    expertise: "Electrical engineering and construction management. Bright leads project oversight, client relationships, and ensures BriQ's delivery standards are upheld on every project.",
    img: brightImg,
    social: {
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "David Numo",
    role: "Co-Founder & Operations",
    expertise: "Engineering and operations management. David manages artisan teams, site logistics, procurement, and ensures projects run on schedule and within budget.",
    img: null,
    initials: "DN",
    social: {
      linkedin: "#",
    },
  },
];

const TeamPage = () => (
  <main className="pt-20">
    <section className="section-spacing">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="label-sm mb-3">Leadership</p>
            <h1 className="heading-xl mb-5">The people behind BriQ</h1>
            <p className="body-lg max-w-xl mx-auto">
              BriQ is founder-led. Our principals are directly involved in every project — you're not handed off to a junior team.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-16 max-w-3xl mx-auto">
          {team.map((m, i) => (
            <ScrollReveal key={m.name} delay={i * 100}>
              <div className="group">
                <div className="aspect-[3/4] rounded-2xl bg-secondary mb-6 overflow-hidden">
                  {m.img ? (
                    <img
                      src={m.img}
                      alt={m.name}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-display text-5xl font-bold text-muted-foreground/30">{m.initials}</span>
                    </div>
                  )}
                </div>
                <h3 className="font-display font-semibold text-lg tracking-tight">{m.name}</h3>
                <p className="text-sm text-accent font-medium mt-0.5 mb-3">{m.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{m.expertise}</p>
                <div className="flex gap-3">
                  {m.social.linkedin && (
                    <a href={m.social.linkedin} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-white transition-colors" aria-label="LinkedIn">
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {m.social.instagram && (
                    <a href={m.social.instagram} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-white transition-colors" aria-label="Instagram">
                      <Instagram className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Why founder-led matters */}
    <section className="section-spacing bg-brand-orange">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="label-sm mb-3">Our commitment</p>
            <h2 className="heading-lg mb-6">Founder-led means you get the best</h2>
            <p className="body-lg mb-10">
              When you work with BriQ, you work directly with our founders. No intermediaries. No hand-offs. The people who built this firm are the ones supervising your project.
            </p>
            <Link to="/contact">
              <Button size="lg">Start a conversation <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default TeamPage;
