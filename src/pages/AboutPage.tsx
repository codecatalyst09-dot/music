import { motion } from "framer-motion";
import { Music2, Video, Globe, Users, Megaphone } from "lucide-react";

const services = [
  { icon: Music2, title: "Music Production", desc: "World-class studios and producers" },
  { icon: Video, title: "Video Production", desc: "Cinematic music videos" },
  { icon: Globe, title: "Digital Distribution", desc: "Release on all major platforms" },
  { icon: Users, title: "Artist Promotion", desc: "Build your fan base globally" },
  { icon: Megaphone, title: "Music Marketing", desc: "Strategic marketing campaigns" },
];

const AboutPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-5xl sm:text-6xl text-foreground tracking-wide"
        >
          About <span className="text-gradient-gold">DesiWave</span>
        </motion.h1>

        <div className="mt-10 max-w-3xl">
          <h2 className="font-heading text-3xl text-foreground tracking-wide mb-4">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed">
            We are a modern music label focused on producing high quality Hindi and Bhojpuri music
            and promoting talented artists worldwide. Founded with a passion for authentic sound,
            DesiWave Music bridges traditional melodies with contemporary production to create music
            that resonates across generations.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Our mission is to discover, nurture, and elevate artists who carry the soul of Hindi and
            Bhojpuri music into the future. We believe great music knows no boundaries.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="font-heading text-3xl text-foreground tracking-wide mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 hover-lift"
              >
                <service.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading text-xl text-foreground tracking-wide">{service.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
