import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Youtube, Instagram, Music2 } from "lucide-react";
import { artists, songs } from "@/data/mockData";
import SongCard from "@/components/SongCard";

const ArtistProfile = () => {
  const { id } = useParams();
  const artist = artists.find((a) => a.id === id);
  const artistSongs = songs.filter((s) => s.artistId === id);

  if (!artist) {
    return (
      <div className="pt-24 section-padding text-center">
        <p className="text-muted-foreground">Artist not found.</p>
        <Link to="/artists" className="text-primary mt-4 inline-block">← Back to Artists</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="relative h-[50vh] overflow-hidden">
        <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          <Link to="/artists" className="text-muted-foreground hover:text-primary text-sm mb-4 inline-flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Back to Artists
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl sm:text-7xl text-foreground tracking-wide"
          >
            {artist.name}
          </motion.h1>
          <p className="text-primary font-medium mt-1">{artist.genre}</p>
        </div>
      </div>

      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-3xl text-foreground tracking-wide mb-4">Biography</h2>
            <p className="text-muted-foreground leading-relaxed">{artist.bio}</p>

            {artistSongs.length > 0 && (
              <div className="mt-12">
                <h2 className="font-heading text-3xl text-foreground tracking-wide mb-6">Popular Songs</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {artistSongs.map((song) => (
                    <SongCard key={song.id} song={song} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <h2 className="font-heading text-3xl text-foreground tracking-wide mb-4">Connect</h2>
            <div className="space-y-3">
              {artist.socialLinks.youtube && (
                <a href={artist.socialLinks.youtube} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Youtube className="w-5 h-5" /> YouTube
                </a>
              )}
              {artist.socialLinks.instagram && (
                <a href={artist.socialLinks.instagram} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" /> Instagram
                </a>
              )}
              {artist.socialLinks.spotify && (
                <a href={artist.socialLinks.spotify} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Music2 className="w-5 h-5" /> Spotify
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistProfile;
