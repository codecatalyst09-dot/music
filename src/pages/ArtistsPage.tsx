import { motion } from "framer-motion";
import ArtistCard from "@/components/ArtistCard";
import { artists } from "@/data/mockData";

const ArtistsPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-5xl sm:text-6xl text-foreground tracking-wide"
        >
          Our <span className="text-gradient-gold">Artists</span>
        </motion.h1>
        <p className="text-muted-foreground mt-2 mb-10">
          The talent behind the DesiWave sound
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.map((artist, i) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <ArtistCard artist={artist} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistsPage;
