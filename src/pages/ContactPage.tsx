import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Youtube, Instagram, CheckCircle } from "lucide-react";

const ContactPage = () => {
  const [sent, setSent] = useState(false);

  return (
    <div className="pt-24 pb-16">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-5xl sm:text-6xl text-foreground tracking-wide"
        >
          Contact <span className="text-gradient-gold">Us</span>
        </motion.h1>
        <p className="text-muted-foreground mt-2 mb-10">Get in touch with DesiWave Music</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-12 text-center"
              >
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-2xl text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground mt-2">We'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-6"
              >
                {[
                  { label: "Name", type: "text" },
                  { label: "Email", type: "email" },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="block text-sm font-medium text-foreground mb-2">{f.label}</label>
                    <input
                      type={f.type}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder={f.label}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-colors gold-glow"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl text-foreground tracking-wide mb-4">Business Inquiries</h3>
              <div className="space-y-3">
                <a href="mailto:contact@desiwavemusic.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" /> contact@desiwavemusic.com
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5" /> +91 98765 43210
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-2xl text-foreground tracking-wide mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="glass-card p-3 hover:text-primary text-muted-foreground transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="#" className="glass-card p-3 hover:text-primary text-muted-foreground transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
