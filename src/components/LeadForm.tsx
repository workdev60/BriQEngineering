import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";

interface LeadFormProps {
  variant?: "default" | "dark";
  title?: string;
}

const LeadForm = ({ variant = "default", title = "Get a Free Quote" }: LeadFormProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`rounded-xl p-8 text-center ${variant === "dark" ? "bg-secondary-foreground/5" : "bg-card border border-border"}`}>
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="font-display text-xl font-bold mb-2">Thank You!</h3>
        <p className="text-muted-foreground text-sm max-w-sm mx-auto">
          We've received your request. Our team will contact you within 24 hours with a personalized quote.
        </p>
      </div>
    );
  }

  return (
    <div className={`rounded-xl p-6 sm:p-8 ${variant === "dark" ? "bg-secondary-foreground/5" : "bg-card border border-border shadow-lg"}`}>
      <h3 className="font-display text-xl sm:text-2xl font-bold mb-1">{title}</h3>
      <p className="text-muted-foreground text-sm mb-6">Fill out the form and we'll get back to you within 24 hours.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input placeholder="Full Name" required className="h-12" />
          <Input type="email" placeholder="Email Address" required className="h-12" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input type="tel" placeholder="Phone Number" required className="h-12" />
          <Input placeholder="Company (Optional)" className="h-12" />
        </div>
        <Textarea placeholder="Tell us about your project..." rows={4} required />
        <Button type="submit" variant="hero" size="lg" className="w-full">
          Request a Quote
        </Button>
      </form>
    </div>
  );
};

export default LeadForm;
