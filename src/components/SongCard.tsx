import { Play } from "lucide-react";
import type { Song } from "@/data/mockData";

const SongCard = ({ song }: { song: Song }) => {
  return (
    <div className="group glass-card overflow-hidden hover-lift cursor-pointer min-w-[200px]">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={song.cover}
          alt={song.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center gold-glow">
            <Play className="w-6 h-6 text-primary-foreground ml-1" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground truncate">{song.title}</h3>
        <p className="text-sm text-muted-foreground truncate">{song.artist}</p>
        <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
          {song.genre}
        </span>
      </div>
    </div>
  );
};

export default SongCard;
