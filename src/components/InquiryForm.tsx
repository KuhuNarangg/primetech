import { useState } from "react";
import { Send } from "lucide-react";

const InquiryForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Inquiry from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`;
    
    // Explicitly open Gmail interface in a new tab instead of default system mail client
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=primetechinfraenergy@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Send Us an Inquiry
            </h2>
            <p className="text-muted-foreground text-lg">
              Interested in our Biochar or Light Diesel Oil solutions? Fill out the form below and we'll get back to you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow-lg p-8 space-y-5">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>
            <button
              type="submit"
              className="w-full eco-gradient text-primary-foreground font-heading font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-lg"
            >
              <Send size={20} /> Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
