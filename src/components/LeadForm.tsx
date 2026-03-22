import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, ArrowRight } from "lucide-react";

interface LeadFormProps {
  title?: string;
}

const LeadForm = ({ title = "Get a free quote" }: LeadFormProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
        <h3 className="heading-md mb-2">Thank you</h3>
        <p className="body-sm max-w-sm mx-auto">
          We've received your request. Our team will contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="heading-md mb-6">{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input placeholder="Full name" required className="h-12 rounded-xl bg-secondary border-0 text-sm placeholder:text-muted-foreground/60" />
          <Input type="email" placeholder="Email" required className="h-12 rounded-xl bg-secondary border-0 text-sm placeholder:text-muted-foreground/60" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input type="tel" placeholder="Phone" required className="h-12 rounded-xl bg-secondary border-0 text-sm placeholder:text-muted-foreground/60" />
          <Input placeholder="Company" className="h-12 rounded-xl bg-secondary border-0 text-sm placeholder:text-muted-foreground/60" />
        </div>
        <Textarea placeholder="Tell us about your project..." rows={4} required className="rounded-xl bg-secondary border-0 text-sm placeholder:text-muted-foreground/60 resize-none" />
        <Button type="submit" size="lg">
          Send message <ArrowRight className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
};

export default LeadForm;
