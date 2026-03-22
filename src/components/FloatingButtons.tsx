import { Phone, MessageCircle } from "lucide-react";

const PHONE = "+1 (555) 123-4567";
const WHATSAPP = "15551234567";

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-3">
    <a
      href={`https://wa.me/${WHATSAPP}`}
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-full bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
    <a
      href={`tel:${PHONE.replace(/\s/g, "")}`}
      className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 animate-pulse"
      aria-label="Call Now"
    >
      <Phone className="w-6 h-6" />
    </a>
  </div>
);

export default FloatingButtons;
