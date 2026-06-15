import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, ArrowRight, Calendar } from "lucide-react";
import { submitBookingCall } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

const SERVICE_TYPES = [
  "Residential and Commercial Development",
  "Interior Plumbing",
  "Electrical Installations Works",
  "Power Distribution Network",
  "General Inquiry",
];

interface BookingFormProps {
  title?: string;
}

const BookingForm = ({ title = "Book a Consultation Call" }: BookingFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitBookingCall(form);
      setSubmitted(true);
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
        <h3 className="heading-md mb-2">Call Booked!</h3>
        <p className="body-sm max-w-sm mx-auto">
          We've received your request. Our team will reach out within 24 hours to confirm your consultation.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="heading-md mb-2">{title}</h3>
      <p className="body-sm mb-6">Tell us about your project and we'll schedule a call at your convenience.</p>
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
        <Button type="submit" size="lg" disabled={loading}>
          <Calendar className="w-4 h-4" />
          {loading ? "Booking..." : "Book a Call"} <ArrowRight className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
