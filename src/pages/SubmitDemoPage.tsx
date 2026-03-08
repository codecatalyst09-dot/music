import { useState } from "react";
import { motion } from "framer-motion";
import { Mic2, CheckCircle } from "lucide-react";

const SubmitDemoPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center glass-card p-12 max-w-md mx-4"
        >
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="font-heading text-3xl text-foreground tracking-wide">Demo Received!</h2>
          <p className="text-muted-foreground mt-3">
            Your demo has been received. Our team will review it and get back to you soon.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="section-padding max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-2">
            <Mic2 className="w-8 h-8 text-primary" />
            <h1 className="font-heading text-5xl text-foreground tracking-wide">
              Submit <span className="text-gradient-gold">Demo</span>
            </h1>
          </div>
          <p className="text-muted-foreground mb-10">
            Share your talent with DesiWave Music
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { label: "Full Name", name: "name", type: "text", required: true },
            { label: "Email Address", name: "email", type: "email", required: true },
            { label: "Phone Number", name: "phone", type: "tel", required: false },
            { label: "YouTube or Google Drive Link", name: "link", type: "url", required: false },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-foreground mb-2">{field.label}</label>
              <input
                type={field.type}
                required={field.required}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                placeholder={field.label}
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Genre</label>
            <select className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
              <option value="hindi">Hindi</option>
              <option value="bhojpuri">Bhojpuri</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Message (Optional)</label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              placeholder="Tell us about yourself and your music..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-colors gold-glow"
          >
            Submit Demo
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitDemoPage;
