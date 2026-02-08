import { Link } from 'react-router-dom';
import { MessageCircle, ClipboardList } from 'lucide-react';

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-navy-800/95 backdrop-blur-md border-t border-navy-600/30 safe-area-pb">
      <div className="flex items-center">
        <a
          href="https://wa.me/905336820942"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-green-600 hover:bg-green-700 text-white font-medium transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm">WhatsApp</span>
        </a>
        <Link
          to="/ucretsiz-on-analiz"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors"
        >
          <ClipboardList className="w-5 h-5" />
          <span className="text-sm">Ön Analiz</span>
        </Link>
      </div>
    </div>
  );
}
