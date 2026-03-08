import { Link } from "react-router-dom";
import type { Artist } from "@/data/mockData";

const ArtistCard = ({ artist }: { artist: Artist }) => {
  return (
    <Link to={`/artists/${artist.id}`} className="group glass-card overflow-hidden hover-lift">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-colors duration-300 gold-glow opacity-0 group-hover:opacity-100" />
      </div>
      <div className="p-5">
        <h3 className="font-heading text-xl text-foreground tracking-wide">{artist.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{artist.genre}</p>
        <span className="inline-block mt-3 text-sm text-primary font-medium group-hover:underline">
          View Profile →
        </span>
      </div>
    </Link>
  );
};

export default ArtistCard;
