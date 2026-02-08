import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Ön Uygunluk Analizi', href: '/hizmetler' },
    { label: 'Detaylı Dönüşüm Raporu', href: '/hizmetler' },
    { label: 'Teklif Toplama', href: '/hizmetler' },
    { label: 'Sözleşme Kontrolü', href: '/hizmetler' },
    { label: 'Süreç Yönetimi', href: '/hizmetler' },
  ],
  company: [
    { label: 'Hakkımızda', href: '/hakkimizda' },
    { label: 'Kentsel Dönüşüm Süreci', href: '/surec' },
    { label: 'Arsa Kat Karşılığı', href: '/arsa-kat-karsiligi' },
    { label: 'Müteahhitler İçin', href: '/muteahhitler' },
    { label: 'Örnek Raporlar', href: '/ornek-raporlar' },
  ],
  support: [
    { label: 'Sıkça Sorulan Sorular', href: '/sss' },
    { label: 'İletişim', href: '/iletisim' },
    { label: 'Gizlilik Politikası', href: '/gizlilik' },
    { label: 'KVKK Aydınlatma', href: '/kvkk' },
    { label: 'Kullanım Koşulları', href: '/kullanim-kosullari' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-800 border-t border-navy-600/30">
      {/* Main Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-700 to-navy-600 border-2 border-gold/30 flex items-center justify-center">
                <span className="text-gold font-bold text-xl">KD</span>
              </div>
              <div>
                <span className="text-white font-semibold text-xl tracking-tight">KD Ankara</span>
                <span className="block text-slate-400 text-xs">Kentsel Dönüşüm Strateji Merkezi</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Ankara'nın en gelişmiş veriye dayalı kentsel dönüşüm analiz platformu. 
              Kişisel yorumlardan arınmış, tamamen sistemsel raporlama.
            </p>
            <div className="space-y-3">
              <a
                href="tel:03122361017"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-orange-500" />
                <span className="text-sm">0312 236 10 17</span>
              </a>
              <a
                href="tel:05336820942"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-orange-500" />
                <span className="text-sm">0533 682 09 42</span>
              </a>
              <a
                href="mailto:info@kdankara.com"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-orange-500" />
                <span className="text-sm">info@kdankara.com</span>
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-orange-500 mt-0.5" />
                <span className="text-sm">Ankara, Türkiye</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Clock className="w-4 h-4 text-orange-500" />
                <span className="text-sm">Pzt-Cum: 09:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hizmetler</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kurumsal</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Destek</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-600/30">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} KD Ankara. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/gizlilik" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                Gizlilik
              </Link>
              <Link to="/kvkk" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                KVKK
              </Link>
              <Link to="/kullanim-kosullari" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                Koşullar
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-navy-900/50 border-t border-navy-600/20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-4">
          <p className="text-slate-500 text-xs text-center leading-relaxed">
            KD Ankara, bağımsız bir danışmanlık firmasıdır. Belediye veya resmi kurum değildir. 
            Analiz sonuçları ön bilgi niteliğindedir, kesin kararlar için resmi belgeler gereklidir. 
            Emsal artışı garanti edilmez.
          </p>
        </div>
      </div>
    </footer>
  );
}
