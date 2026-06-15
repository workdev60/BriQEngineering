import { Mail, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import BookingForm from "@/components/BookingForm";

const ContactPage = () => (
  <main className="pt-20">
    <section className="section-spacing">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="heading-xl mb-5">Let's talk about your project</h1>
            <p className="body-lg max-w-xl mx-auto">
              Book a free consultation call and our team will reach out within 24 hours to discuss your project, provide a quote, and take things forward.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,380px] gap-16">
          <ScrollReveal>
            <BookingForm title="Book a consultation call" />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="space-y-8">
              <div>
                <p className="label-sm mb-5">Contact details</p>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/233595122484"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[hsl(142,70%,40%)]/10 flex items-center justify-center flex-shrink-0">
                      <WhatsAppIcon className="w-4 h-4 text-[hsl(142,70%,40%)]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium group-hover:text-accent transition-colors">WhatsApp us</p>
                      <p className="text-xs text-muted-foreground">Quick responses · Mon–Sat, 8AM–6PM GMT</p>
                    </div>
                  </a>
                  <a href="mailto:projects@briqengineering.com" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium group-hover:text-accent transition-colors">projects@briqengineering.com</p>
                    </div>
                  </a>
                  <a href="mailto:info@briqengineering.com" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium group-hover:text-accent transition-colors">info@briqengineering.com</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/233595122484"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[hsl(142,70%,40%)]/10 flex items-center justify-center flex-shrink-0">
                      <WhatsAppIcon className="w-4 h-4 text-[hsl(142,70%,40%)]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium group-hover:text-accent transition-colors">WhatsApp us</p>
                      <p className="text-xs text-muted-foreground">Quick responses</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="divider" />

              <div>
                <p className="label-sm mb-4">Locations</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Oyarifa — Accra, Ghana</p>
                      <p className="text-xs text-muted-foreground">Digital Address: GE-068-1979</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Tema — Accra, Ghana</p>
                      <p className="text-xs text-muted-foreground">Digital Address: GT-000-0831</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Bolgatanga — Sunyani, Ghana</p>
                      <p className="text-xs text-muted-foreground">Regional Branch</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="divider" />

              <div>
                <p className="label-sm mb-4">Follow us</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/briq_engineeringandco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/briq-engineering-consultancy-limited/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.facebook.com/briqengineering"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <section className="section-spacing-sm bg-brand-orange text-center">
      <div className="container-site px-5 sm:px-8 lg:px-16">
        <ScrollReveal>
          <h2 className="heading-lg mb-4">Prefer to reach us instantly?</h2>
          <p className="body-sm mb-6">Our team is available Mon–Sat, 8AM to 6PM. Message us on WhatsApp for quick responses.</p>
          <a href="https://wa.me/233595122484" target="_blank" rel="noopener noreferrer">
            <Button size="lg"><WhatsAppIcon className="w-4 h-4" /> WhatsApp us now</Button>
          </a>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default ContactPage;
