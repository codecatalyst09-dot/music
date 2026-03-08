import { Link } from "react-router-dom";
import { Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="DesiWave Logo" className="w-7 h-7 object-contain" />
              <span className="font-heading text-2xl text-primary">DesiWave</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              The Sound of Hindi & Bhojpuri Entertainment.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg text-foreground mb-4 tracking-wide">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "Artists", "Music", "Videos", "About"].map((link) => (
                <Link
                  key={link}
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg text-foreground mb-4 tracking-wide">For Artists</h4>
            <div className="space-y-2">
              <Link to="/submit-demo" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Submit Demo
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg text-foreground mb-4 tracking-wide">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 DesiWave Music. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
