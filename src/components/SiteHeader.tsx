import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import briqLogo from "@/assets/briq-logo.jpeg";

const NAV_LINKS = [
  { label: "Work", path: "/projects" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Team", path: "/team" },
  { label: "Sustainability", path: "/sustainability" },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="container-site flex items-center justify-between h-16 sm:h-20 px-5 sm:px-8 lg:px-16">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={briqLogo} alt="BriQ" className="h-8 w-8 rounded object-contain" />
          <span className="font-display font-bold text-foreground text-[15px] tracking-tight hidden sm:block">BriQ</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 text-[13px] font-medium rounded-full transition-colors duration-200 ${
                location.pathname === link.path
                  ? "text-foreground bg-foreground/5"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="tel:+15551234567" className="hidden sm:flex">
            <Button variant="ghost" size="sm">
              <Phone className="w-3.5 h-3.5" />
            </Button>
          </a>
          <Link to="/contact">
            <Button size="sm">
              Contact <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-full hover:bg-foreground/5 transition-colors ml-1"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="px-5 py-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-foreground bg-foreground/5"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <a href="tel:+15551234567">
                <Button variant="outline" className="w-full">
                  <Phone className="w-4 h-4" /> Call Us
                </Button>
              </a>
              <Link to="/contact" onClick={() => setOpen(false)}>
                <Button className="w-full">Contact <ArrowRight className="w-4 h-4" /></Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
