import { Link } from "react-router-dom";
import briqLogo from "@/assets/briq-logo.jpeg";
import { Instagram, Linkedin, Facebook, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const SiteFooter = () => (
  <footer className="border-t border-border">
    <div className="container-site px-5 sm:px-8 lg:px-16 py-16 sm:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-5">
            <img src={briqLogo} alt="BriQ" className="h-8 w-8 rounded object-contain" />
            <span className="font-display font-bold text-[15px] tracking-tight">BriQ Engineering</span>
          </div>
          <p className="body-sm max-w-[260px] mb-6">
            Full-service construction and engineering management firm. We own your project from start to finish.
          </p>
          {/* Social */}
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/briqengineering"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/company/briq-engineering-consultancy-limited/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.facebook.com/briqengineering"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://wa.me/233595122484"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[hsl(142,70%,40%)]/10 flex items-center justify-center hover:bg-[hsl(142,70%,40%)] hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="label-sm mb-5">Services</h4>
          <ul className="space-y-3">
            {[
              "Building Construction",
              "Plumbing Works",
              "Electrical & Lighting",
              "Power Infrastructure",
              "Project Management",
              "Engineering Consultancy",
            ].map((s) => (
              <li key={s}>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="label-sm mb-5">Company</h4>
          <ul className="space-y-3">
            {[
              { label: "About", path: "/about" },
              { label: "Projects", path: "/projects" },
              { label: "Our Team", path: "/team" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="label-sm mb-5">Get in touch</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li>
              <a href="tel:0595122484" className="flex items-start gap-2 hover:text-foreground transition-colors">
                <Phone className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-accent" />
                059 512 2484
              </a>
            </li>
            <li>
              <a href="mailto:projects@briqengineering.com" className="flex items-start gap-2 hover:text-foreground transition-colors">
                <Mail className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-accent" />
                projects@briqengineering.com
              </a>
            </li>
            <li>
              <a href="mailto:info@briqengineering.com" className="flex items-start gap-2 hover:text-foreground transition-colors">
                <Mail className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-accent" />
                info@briqengineering.com
              </a>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-accent" />
                <div className="leading-tight">
                  <span className="block">Oyarifa — Accra, Ghana</span>
                  <span className="text-[11px] text-muted-foreground/70 block mt-0.5">GE-068-1979</span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-accent" />
                <div className="leading-tight">
                  <span className="block">Tema — Accra, Ghana</span>
                  <span className="text-[11px] text-muted-foreground/70 block mt-0.5">GT-000-0831</span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-accent" />
                <div className="leading-tight">
                  <span className="block">Bolgatanga — Sunyani, Ghana</span>
                  <span className="text-[11px] text-muted-foreground/70 block mt-0.5">Regional Branch</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="divider mt-14 mb-8" />
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} BriQ Engineering & Consultancy. All rights reserved.</p>
        <p className="italic">Build Smart. Build Stress-Free.</p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
