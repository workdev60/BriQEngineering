import { Button } from "@/components/ui/button";
import { MessageCircle, Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import aboutImg from "@/assets/about-team.jpg";

const VideoPage = () => (
  <main className="pt-20">
    <section className="section-spacing">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="label-sm mb-3">Discover BriQ Engineering</p>
            <h1 className="heading-xl mb-5">See what sets us apart</h1>
            <p className="body-lg">Watch our story and understand why leading organizations choose BriQ Engineering.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-secondary flex items-center justify-center cursor-pointer group">
            <img src={aboutImg} alt="BriQ Engineering" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-background text-foreground flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-7 h-7 ml-1" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-spacing border-t border-border">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {[
            { title: "Who we are", desc: "A full-service electrical engineering and construction consulting firm with 15+ years of experience delivering complex projects across commercial, industrial, and infrastructure sectors." },
            { title: "What we do", desc: "End-to-end engineering solutions: from electrical system design and power distribution to construction management, project execution, and sustainable energy integration." },
            { title: "Why choose us", desc: "240+ successful projects, 98% client satisfaction, and a commitment to on-time, on-budget delivery that makes us the trusted partner for organizations demanding excellence." },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <div>
                <h2 className="heading-md mb-4">{item.title}</h2>
                <p className="body-sm">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-spacing bg-secondary">
      <div className="container-site px-5 sm:px-8 lg:px-16 text-center">
        <ScrollReveal>
          <h2 className="heading-lg mb-6">Ready to start?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://wa.me/233595122484" target="_blank" rel="noopener noreferrer">
              <Button size="lg"><MessageCircle className="w-4 h-4" /> WhatsApp us</Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" size="lg">Contact us <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default VideoPage;
