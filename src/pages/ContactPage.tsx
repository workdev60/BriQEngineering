import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import LeadForm from "@/components/LeadForm";

const ContactPage = () => (
  <main className="pt-20">
    <section className="section-spacing">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="heading-xl mb-5">Let's talk</h1>
            <p className="body-lg max-w-xl mx-auto">Tell us about your project. Our team responds within 24 hours.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,380px] gap-16">
          <ScrollReveal>
            <LeadForm title="Send us a message" />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="space-y-8">
              <div>
                <p className="label-sm mb-4">Contact</p>
                <div className="space-y-4">
                  <a href="tel:+15551234567" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium group-hover:text-accent transition-colors">+1 (555) 123-4567</p>
                      <p className="text-xs text-muted-foreground">Mon–Fri, 8AM–6PM</p>
                    </div>
                  </a>
                  <a href="mailto:info@briqengineering.com" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium group-hover:text-accent transition-colors">info@briqengineering.com</p>
                    </div>
                  </a>
                  <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium group-hover:text-accent transition-colors">WhatsApp</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="divider" />

              <div>
                <p className="label-sm mb-4">Office</p>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <p className="text-sm text-muted-foreground">123 Engineering Blvd, Suite 400<br />New York, NY 10001</p>
                </div>
              </div>

              <div className="divider" />

              <div>
                <p className="label-sm mb-4">Social</p>
                <div className="flex gap-4">
                  {["LinkedIn", "X", "Instagram", "Facebook"].map((s) => (
                    <a key={s} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{s}</a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <section className="section-spacing-sm bg-secondary text-center">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <h2 className="heading-lg mb-4">Prefer to call?</h2>
          <a href="tel:+15551234567">
            <Button size="lg"><Phone className="w-4 h-4" /> +1 (555) 123-4567</Button>
          </a>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default ContactPage;
