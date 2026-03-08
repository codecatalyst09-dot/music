import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, Mic2, Youtube, Music2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import WaveformAnimation from "@/components/WaveformAnimation";
import SongCard from "@/components/SongCard";
import ArtistCard from "@/components/ArtistCard";
import { artists, songs } from "@/data/mockData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 w-full h-full bg-background z-0" />
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Hero Background" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
        </div>

        {/* Animated glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse z-0" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md text-primary text-sm font-medium tracking-wide"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Premium Global Entertainment
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <WaveformAnimation />
            <h1 className="font-heading text-6xl sm:text-8xl lg:text-9xl text-foreground mt-8 tracking-wider leading-[0.9] uppercase drop-shadow-2xl">
              The Sound of<br />
              <span className="text-gradient-gold drop-shadow-lg">A New Era</span>
            </h1>
            <p className="text-lg sm:text-2xl text-muted-foreground mt-8 max-w-3xl mx-auto font-light leading-relaxed">
              Experience the cinematic pulse of <span className="text-foreground font-medium">Hindi & Bhojpuri</span> music. High fidelity, unmatched energy.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12 w-full sm:w-auto">
              <Link
                to="/music"
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,215,0,0.4)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <Play className="w-5 h-5 fill-current" />
                <span className="relative z-10">Start Listening</span>
              </Link>
              <Link
                to="/submit-demo"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full border border-border bg-background/30 backdrop-blur-lg text-foreground font-bold text-lg hover:bg-white/10 hover:border-white/30 transition-all hover:scale-105"
              >
                <Mic2 className="w-5 h-5" />
                <span>Submit Demo</span>
              </Link>
            </div>
          </motion.div>
        </div>

      </section>

      {/* Latest Releases */}
      <section className="section-padding max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} custom={0} className="font-heading text-4xl sm:text-5xl text-foreground tracking-wide">
            Latest <span className="text-gradient-gold">Releases</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground mt-2 mb-8">
            Fresh tracks from our artists
          </motion.p>
        </motion.div>

        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
          {songs.map((song) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[220px]"
            >
              <SongCard song={song} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Artists */}
      <section className="section-padding max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} custom={0} className="font-heading text-4xl sm:text-5xl text-foreground tracking-wide">
            Featured <span className="text-gradient-gold">Artists</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground mt-2 mb-8">
            Meet the talent behind the music
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.map((artist) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ArtistCard artist={artist} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Streaming Platforms */}
      <section className="section-padding text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} custom={0} className="font-heading text-4xl sm:text-5xl text-foreground tracking-wide">
            Listen <span className="text-gradient-gold">Everywhere</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground mt-2 mb-10">
            Our music is available on all major platforms
          </motion.p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
          {[
            { name: "YouTube", icon: Youtube },
            { name: "Spotify", icon: Music2 },
            { name: "Apple Music", icon: Music2 },
            { name: "JioSaavn", icon: Music2 },
            { name: "Gaana", icon: Music2 },
          ].map((platform) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <platform.icon className="w-10 h-10" />
              <span className="text-sm font-medium">{platform.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join Our Label */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center glass-card p-8 sm:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h2 variants={fadeUp} custom={0} className="font-heading text-4xl sm:text-5xl text-foreground tracking-wide">
                Are You the Next{" "}
                <span className="text-gradient-gold">Big Star?</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-muted-foreground mt-4 mb-8 max-w-xl mx-auto">
                We're always looking for fresh talent. Submit your demo and join the DesiWave family.
              </motion.p>
              <motion.div variants={fadeUp} custom={2}>
                <Link
                  to="/submit-demo"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-colors gold-glow"
                >
                  <Mic2 className="w-5 h-5" /> Submit Your Demo
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
