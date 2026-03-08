import { useState } from "react";
import { motion } from "framer-motion";
import SongCard from "@/components/SongCard";
import { songs } from "@/data/mockData";

const filters = ["All", "Hindi", "Bhojpuri", "Latest", "Trending"] as const;

const MusicPage = () => {
  const [active, setActive] = useState<string>("All");

  const filtered = active === "All" || active === "Trending"
    ? songs
    : active === "Latest"
    ? [...songs].sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())
    : songs.filter((s) => s.genre === active);

  return (
    <div className="pt-24 pb-16">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-5xl sm:text-6xl text-foreground tracking-wide"
        >
          Our <span className="text-gradient-gold">Music</span>
        </motion.h1>
        <p className="text-muted-foreground mt-2 mb-8">Explore our catalog</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                active === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {filtered.map((song, i) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <SongCard song={song} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
