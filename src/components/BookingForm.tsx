import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Calendar } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const SERVICE_TYPES = [
  "Residential and Commercial Development",
  "Interior Plumbing",
  "Electrical Installations Works",
  "Power Distribution Network",
  "General Inquiry",
];

const WHATSAPP_NUMBER = "233595122484";

interface BookingFormProps {
  title?: string;
}

const BookingForm = ({ title = "Book a Consultation Call" }: BookingFormProps) => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    company: "",
    service_type: "",
    preferred_date: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Build a structured WhatsApp message from the form details
    const lines = [
      `👋 *New Consultation Request — BriQ Engineering*`,
      ``,
      `*Name:* ${form.full_name}`,
      `*Email:* ${form.email}`,
      `*Phone:* ${form.phone}`,
      form.company ? `*Company:* ${form.company}` : null,
      `*Service:* ${form.service_type}`,
      form.preferred_date ? `*Preferred Date:* ${form.preferred_date}` : null,
      ``,
      `*Project Details:*`,
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    const encodedMessage = encodeURIComponent(lines);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab with the pre-filled message
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setLoading(false);
  };

  return (
    <div>
      <h3 className="heading-md mb-2">{title}</h3>
      <p className="body-sm mb-6">Fill in your details and we'll open WhatsApp with everything ready to send.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            name="full_name"
            placeholder="Full name *"
            required
            value={form.full_name}
            onChange={handleChange}
            className="h-12 rounded-xl bg-secondary border-0 text-sm placeholder:text-muted-foreground/60"
          />
          <Input
            type="email"
            name="email"
            placeholder="Email address *"
            required
            value={form.email}
            onChange={handleChange}
            className="h-12 rounded-xl bg-secondary border-0 text-sm placeholder:text-muted-foreground/60"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            type="tel"
            name="phone"
            placeholder="Phone number *"
            required
            value={form.phone}
            onChange={handleChange}
            className="h-12 rounded-xl bg-secondary border-0 text-sm placeholder:text-muted-foreground/60"
          />
          <Input
            name="company"
            placeholder="Company / Organization"
            value={form.company}
            onChange={handleChange}
            className="h-12 rounded-xl bg-secondary border-0 text-sm placeholder:text-muted-foreground/60"
          />
        </div>
        <select
          name="service_type"
          required
          value={form.service_type}
          onChange={handleChange}
          className="w-full h-12 rounded-xl bg-secondary border-0 text-sm px-3 text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">Select a service *</option>
          {SERVICE_TYPES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <Input
          type="date"
          name="preferred_date"
          value={form.preferred_date}
          onChange={handleChange}
          className="h-12 rounded-xl bg-secondary border-0 text-sm placeholder:text-muted-foreground/60"
        />
        <Textarea
          name="message"
          placeholder="Describe your project briefly... *"
          rows={4}
          required
          value={form.message}
          onChange={handleChange}
          className="rounded-xl bg-secondary border-0 text-sm placeholder:text-muted-foreground/60 resize-none"
        />
        <Button type="submit" size="lg" disabled={loading} className="bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,34%)] text-white">
          <WhatsAppIcon className="w-4 h-4" />
          {loading ? "Opening WhatsApp..." : "Send via WhatsApp"} <ArrowRight className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
