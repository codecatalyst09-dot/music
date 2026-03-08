import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { videos } from "@/data/mockData";

const VideosPage = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="pt-24 pb-16">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-5xl sm:text-6xl text-foreground tracking-wide"
        >
          Music <span className="text-gradient-gold">Videos</span>
        </motion.h1>
        <p className="text-muted-foreground mt-2 mb-10">Watch our latest music videos</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group glass-card overflow-hidden hover-lift cursor-pointer"
              onClick={() => setActiveVideo(video.youtubeId)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center gold-glow">
                    <Play className="w-7 h-7 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground">{video.title}</h3>
                <p className="text-sm text-muted-foreground">{video.artist}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-foreground hover:text-primary"
            >
              <X className="w-8 h-8" />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              className="w-full h-full rounded-lg"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideosPage;
