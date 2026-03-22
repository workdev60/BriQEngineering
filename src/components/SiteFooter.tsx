import { Link } from "react-router-dom";
import briqLogo from "@/assets/briq-logo.jpeg";

const SiteFooter = () => (
  <footer className="border-t border-border">
    <div className="container-site px-5 sm:px-8 lg:px-16 py-16 sm:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-5">
            <img src={briqLogo} alt="BriQ" className="h-8 w-8 rounded object-contain" />
            <span className="font-display font-bold text-[15px] tracking-tight">BriQ</span>
          </div>
          <p className="body-sm max-w-[260px]">
            Electrical engineering and construction consulting excellence since 2008.
          </p>
        </div>

        <div>
          <h4 className="label-sm mb-5">Services</h4>
          <ul className="space-y-3">
            {["Electrical Engineering", "Construction Consulting", "Project Management", "Installation & Execution"].map((s) => (
              <li key={s}><Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{s}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="label-sm mb-5">Company</h4>
          <ul className="space-y-3">
            {[
              { label: "About", path: "/about" },
              { label: "Work", path: "/projects" },
              { label: "Team", path: "/team" },
              { label: "Sustainability", path: "/sustainability" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.path}><Link to={l.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="label-sm mb-5">Get in touch</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><a href="tel:+15551234567" className="hover:text-foreground transition-colors">+1 (555) 123-4567</a></li>
            <li><a href="mailto:info@briqengineering.com" className="hover:text-foreground transition-colors">info@briqengineering.com</a></li>
            <li>New York, NY</li>
          </ul>
          <div className="flex gap-4 mt-6">
            {["LinkedIn", "X", "Instagram"].map((s) => (
              <a key={s} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="divider mt-14 mb-8" />
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} BriQ Engineering & Consulting</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
