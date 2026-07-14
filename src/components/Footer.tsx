import { Landmark, Globe, Mail, Phone, ChevronRight } from 'lucide-react';
import { PageType } from '../types';

interface FooterProps {
  setCurrentPage: (page: PageType) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (pageId: PageType) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-container border-t border-border-soft pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand/About */}
          <div className="lg:col-span-2 space-y-6">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 text-left group focus:outline-none"
            >
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                <Landmark className="w-5 h-5" />
              </div>
              <div>
                <span className="display-font text-2xl font-bold text-text-heading tracking-tight block leading-none">YSKSP</span>
                <span className="text-[10px] text-primary font-semibold tracking-wider uppercase block mt-1">Salib Putih</span>
              </div>
            </button>
            <p className="text-sm text-text-paragraph leading-relaxed max-w-sm">
              Membangun kualitas masyarakat yang lebih baik melalui layanan sosial, pendidikan, dan kesehatan yang terintegrasi di bawah naungan kasih Tuhan.
            </p>
            <div className="flex gap-4">
              <a
                href="https://ysksp.org"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-border-soft flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                title="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="mailto:yayasan.salibputih@gmail.com"
                className="w-10 h-10 rounded-full bg-white border border-border-soft flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+6285169436225"
                className="w-10 h-10 rounded-full bg-white border border-border-soft flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                title="Hubungi"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Program */}
          <div>
            <h4 className="font-bold text-text-heading mb-6 text-xs uppercase tracking-widest border-l-4 border-primary pl-3">Program</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <button onClick={() => handleNavClick('sosial')} className="text-text-paragraph hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-primary/60" /> Layanan Sosial
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('pendidikan')} className="text-text-paragraph hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-primary/60" /> Pendidikan Vokasi
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('kesehatan')} className="text-text-paragraph hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-primary/60" /> Klinik Kesehatan
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('kemandirian')} className="text-text-paragraph hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-primary/60" /> Usaha Mandiri
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Tentang Kami */}
          <div>
            <h4 className="font-bold text-text-heading mb-6 text-xs uppercase tracking-widest border-l-4 border-primary pl-3">Tentang</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <button onClick={() => handleNavClick('tentang')} className="text-text-paragraph hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-primary/60" /> Visi &amp; Misi
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('tentang')} className="text-text-paragraph hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-primary/60" /> Struktur Organisasi
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('tentang')} className="text-text-paragraph hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-primary/60" /> Laporan Publik
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('tentang')} className="text-text-paragraph hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-primary/60" /> Filosofi Yayasan
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Hubungi Kami */}
          <div>
            <h4 className="font-bold text-text-heading mb-6 text-xs uppercase tracking-widest border-l-4 border-primary pl-3">Kontak</h4>
            <ul className="space-y-3 text-sm text-text-paragraph">
              <li className="flex items-start gap-2">
                <span className="font-bold text-text-heading text-xs uppercase block w-16">Alamat:</span>
                <span className="text-xs leading-relaxed">Jl. Raya Salatiga-Kopeng Km. 4, Salatiga, Jawa Tengah, Indonesia</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold text-text-heading text-xs uppercase block w-16">Telepon:</span>
                <span className="text-xs">(+62) 85169436225</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold text-text-heading text-xs uppercase block w-16">Email:</span>
                <span className="text-xs">yayasan.salibputih@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border-soft text-[12px] text-text-paragraph">
          <p>© 2026 Yayasan Sosial Kristen Salib Putih. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button onClick={() => handleNavClick('tentang')} className="hover:text-primary hover:underline">Kebijakan Privasi</button>
            <button onClick={() => handleNavClick('tentang')} className="hover:text-primary hover:underline">Syarat &amp; Ketentuan</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
