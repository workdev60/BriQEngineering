import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import briqLogo from "@/assets/briq-logo.jpeg";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Sustainability", path: "/sustainability" },
  { label: "Team", path: "/team" },
  { label: "Contact", path: "/contact" },
];

const PHONE = "+1 (555) 123-4567";

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container-wide mx-auto flex items-center justify-between h-16 sm:h-18 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={briqLogo} alt="BriQ Engineering" className="h-10 w-10 rounded-sm object-contain" />
          <div className="hidden sm:block">
            <span className="font-display font-bold text-foreground text-lg leading-none">BriQ</span>
            <span className="block text-[10px] tracking-widest uppercase text-muted-foreground leading-none mt-0.5">Engineering & Consulting</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                location.pathname === link.path
                  ? "text-primary bg-accent"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hidden md:flex">
            <Button variant="hero" size="sm">
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-primary bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="block mt-3">
              <Button variant="hero" className="w-full">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
