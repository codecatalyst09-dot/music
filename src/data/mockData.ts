import artist1 from "@/assets/artist1.jpg";
import artist2 from "@/assets/artist2.jpg";
import artist3 from "@/assets/artist3.jpg";
import cover1 from "@/assets/cover1.jpg";
import cover2 from "@/assets/cover2.jpg";
import cover3 from "@/assets/cover3.jpg";
import cover4 from "@/assets/cover4.jpg";
import cover5 from "@/assets/cover5.jpg";
import cover6 from "@/assets/cover6.jpg";

export interface Artist {
  id: string;
  name: string;
  genre: string;
  image: string;
  bio: string;
  socialLinks: { youtube?: string; instagram?: string; spotify?: string };
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  artistId: string;
  cover: string;
  releaseDate: string;
  genre: "Hindi" | "Bhojpuri";
  youtubeId?: string;
}

export interface Video {
  id: string;
  title: string;
  artist: string;
  youtubeId: string;
  thumbnail: string;
}

export const artists: Artist[] = [
  {
    id: "1",
    name: "Arjun Kapoor",
    genre: "Hindi Pop / Romantic",
    image: artist1,
    bio: "Arjun Kapoor is a rising star in the Hindi music scene known for soulful melodies and heartfelt lyrics. With millions of streams across platforms, he continues to captivate audiences with his unique vocal style.",
    socialLinks: { youtube: "#", instagram: "#", spotify: "#" },
  },
  {
    id: "2",
    name: "Priya Sharma",
    genre: "Hindi Classical / Folk",
    image: artist2,
    bio: "Priya Sharma brings the richness of Indian classical music to modern audiences. Her powerful voice and emotive performances have earned her a devoted following across India and beyond.",
    socialLinks: { youtube: "#", instagram: "#", spotify: "#" },
  },
  {
    id: "3",
    name: "RK Rapper",
    genre: "Bhojpuri Hip-Hop",
    image: artist3,
    bio: "RK Rapper is revolutionizing Bhojpuri music by fusing traditional folk elements with modern hip-hop beats. His energetic performances and catchy hooks have made him a viral sensation.",
    socialLinks: { youtube: "#", instagram: "#", spotify: "#" },
  },
];

export const songs: Song[] = [
  { id: "1", title: "Dil Ki Awaaz", artist: "Arjun Kapoor", artistId: "1", cover: cover1, releaseDate: "2026-02-14", genre: "Hindi", youtubeId: "dQw4w9WgXcQ" },
  { id: "2", title: "Prem Kahani", artist: "Priya Sharma", artistId: "2", cover: cover2, releaseDate: "2026-01-26", genre: "Hindi", youtubeId: "dQw4w9WgXcQ" },
  { id: "3", title: "Gaon Ki Yaadein", artist: "RK Rapper", artistId: "3", cover: cover3, releaseDate: "2025-12-25", genre: "Bhojpuri", youtubeId: "dQw4w9WgXcQ" },
  { id: "4", title: "Party Anthem", artist: "Arjun Kapoor", artistId: "1", cover: cover4, releaseDate: "2026-03-01", genre: "Hindi", youtubeId: "dQw4w9WgXcQ" },
  { id: "5", title: "Mandir Ki Ghanti", artist: "Priya Sharma", artistId: "2", cover: cover5, releaseDate: "2025-11-15", genre: "Hindi", youtubeId: "dQw4w9WgXcQ" },
  { id: "6", title: "Street King", artist: "RK Rapper", artistId: "3", cover: cover6, releaseDate: "2026-02-28", genre: "Bhojpuri", youtubeId: "dQw4w9WgXcQ" },
];

export const videos: Video[] = [
  { id: "1", title: "Dil Ki Awaaz - Official Music Video", artist: "Arjun Kapoor", youtubeId: "dQw4w9WgXcQ", thumbnail: cover1 },
  { id: "2", title: "Prem Kahani - Lyrical Video", artist: "Priya Sharma", youtubeId: "dQw4w9WgXcQ", thumbnail: cover2 },
  { id: "3", title: "Street King - Official Video", artist: "RK Rapper", youtubeId: "dQw4w9WgXcQ", thumbnail: cover6 },
];
