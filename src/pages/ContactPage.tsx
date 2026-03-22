import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import LeadForm from "@/components/LeadForm";

const PHONE = "+1 (555) 123-4567";

const ContactPage = () => (
  <main className="pt-16">
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-wide mx-auto text-center">
        <ScrollReveal>
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Contact Us</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Let's Discuss Your Project</h1>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">Reach out today for a free consultation. Our team responds within 24 hours.</p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <ScrollReveal>
              <LeadForm title="Send Us a Message" />
            </ScrollReveal>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal delay={100}>
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-display font-bold text-lg mb-6">Get in Touch</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-0.5">Phone</div>
                      <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="text-primary font-semibold text-lg hover:underline">{PHONE}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-0.5">Email</div>
                      <a href="mailto:info@briqengineering.com" className="text-primary font-semibold hover:underline">info@briqengineering.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-0.5">Office</div>
                      <p className="text-muted-foreground text-sm">123 Engineering Blvd, Suite 400<br />New York, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[hsl(142,70%,90%)] flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-[hsl(142,70%,30%)]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-0.5">WhatsApp</div>
                      <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="text-[hsl(142,70%,35%)] font-semibold hover:underline">Chat with us</a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-display font-bold text-lg mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Monday – Friday</span><span className="font-medium">8:00 AM – 6:00 PM</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Saturday</span><span className="font-medium">9:00 AM – 2:00 PM</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Sunday</span><span className="font-medium">Closed</span></div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">Emergency support available 24/7 for existing clients.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="flex gap-3">
                {["LinkedIn", "Twitter", "Facebook", "Instagram"].map((s) => (
                  <a key={s} href="#" className="flex-1 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-xs font-medium text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                    {s}
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary text-primary-foreground py-12">
      <div className="container-wide mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Prefer to Talk? Call Us Now.</h2>
          <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
            <Button variant="secondary" size="xl"><Phone className="w-5 h-5" /> {PHONE}</Button>
          </a>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default ContactPage;
