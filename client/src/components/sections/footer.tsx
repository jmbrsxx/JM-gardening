import { Sprout, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 border-t border-white/10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center bg-primary/20 rounded-full">
                 <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="JM Garden Logo" className="w-6 h-6 object-contain" />
              </div>
              <span className="font-serif text-xl font-bold">JM Garden</span>
            </div>
            <p className="text-white/60 max-w-sm">
              Creating beautiful, sustainable, and functional outdoor spaces that connect people with nature.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-white/60">
              <li><a href="#" className="hover:text-primary transition-colors">Landscape Design</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Garden Maintenance</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Hardscaping</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Irrigation Systems</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-white/60">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-white/60">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-white/60">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} JM Garden. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}