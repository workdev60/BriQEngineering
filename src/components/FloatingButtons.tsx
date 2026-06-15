import WhatsAppIcon from "@/components/WhatsAppIcon";

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3">
    <a
      href="https://wa.me/233595122484"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-[hsl(142,70%,40%)] text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
      aria-label="WhatsApp"
    >
      <WhatsAppIcon className="w-5 h-5" />
    </a>
  </div>
);

export default FloatingButtons;
