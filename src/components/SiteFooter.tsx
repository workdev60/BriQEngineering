import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import briqLogo from "@/assets/briq-logo.jpeg";

const PHONE = "+1 (555) 123-4567";

const SiteFooter = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={briqLogo} alt="BriQ" className="h-10 w-10 rounded-sm object-contain" />
            <div>
              <span className="font-display font-bold text-lg">BriQ</span>
              <span className="block text-[10px] tracking-widest uppercase opacity-60">Engineering & Consulting</span>
            </div>
          </div>
          <p className="text-sm opacity-70 leading-relaxed max-w-xs">
            Delivering excellence in electrical engineering and construction consulting since 2008.
          </p>
          <div className="flex gap-3 mt-6">
            {["linkedin", "twitter", "facebook", "instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="w-9 h-9 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-200 text-xs font-bold uppercase"
                aria-label={social}
              >
                {social[0].toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/services" className="hover:text-primary transition-colors">Electrical Engineering</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Construction Consulting</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Project Management</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Installation & Execution</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">Company</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
            <li><Link to="/team" className="hover:text-primary transition-colors">Our Team</Link></li>
            <li><Link to="/sustainability" className="hover:text-primary transition-colors">Sustainability</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 text-primary" />
              <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">{PHONE}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5 text-primary" />
              <a href="mailto:info@briqengineering.com" className="hover:text-primary transition-colors">info@briqengineering.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-primary" />
              <span>123 Engineering Blvd, Suite 400<br />New York, NY 10001</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs opacity-50">
        <p>© {new Date().getFullYear()} BriQ Engineering & Consulting. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
