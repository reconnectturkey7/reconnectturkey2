import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Clock, 
  MessageCircle, 
  FileText, 
  Package,
  ArrowRight,
  Mail,
  Phone
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function AnalysisConfirmation() {
  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Analiz Talebiniz Alındı
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto">
              Ön analiz raporunuz hazırlanıyor. En kısa sürede size dönüş yapacağız.
            </p>
          </motion.div>

          {/* Timeline Card */}
          <Card className="bg-navy-800 border-navy-600/50 mb-8">
            <CardContent className="p-6 lg:p-8">
              <h2 className="text-xl font-semibold text-white mb-6">
                Süreç Akışı
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Talep Alındı</h3>
                    <p className="text-slate-400 text-sm">
                      Bilgileriniz sistemimize kaydedildi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Analiz Hazırlanıyor</h3>
                    <p className="text-slate-400 text-sm">
                      Uzman ekibimiz veriye dayalı analizinizi hazırlıyor. 
                      <span className="text-orange-500 font-medium"> 72 saat</span> içinde teslim.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy-700 rounded-full flex items-center justify-center flex-shrink-0 border border-navy-600">
                    <Mail className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-slate-300 font-medium">Rapor Teslimi</h3>
                    <p className="text-slate-500 text-sm">
                      Ön analiz raporunuz telefon veya e-posta ile iletilecek.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy-700 rounded-full flex items-center justify-center flex-shrink-0 border border-navy-600">
                    <Phone className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-slate-300 font-medium">Değerlendirme Görüşmesi</h3>
                    <p className="text-slate-500 text-sm">
                      İsterseniz rapor sonrası ücretsiz danışmanlık görüşmesi planlayabilirsiniz.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <a
              href="https://wa.me/905336820942"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-green-600 hover:bg-green-700 rounded-xl transition-colors"
            >
              <MessageCircle className="w-8 h-8 text-white" />
              <div>
                <h3 className="text-white font-semibold">WhatsApp'tan Hızlandır</h3>
                <p className="text-green-100 text-sm">Anlık destek alın</p>
              </div>
            </a>

            <Link
              to="/hizmetler"
              className="flex items-center gap-4 p-5 bg-navy-700 hover:bg-navy-600 border border-navy-600 rounded-xl transition-colors"
            >
              <Package className="w-8 h-8 text-orange-500" />
              <div>
                <h3 className="text-white font-semibold">Paketleri İncele</h3>
                <p className="text-slate-400 text-sm">Detaylı hizmetlerimiz</p>
              </div>
            </Link>
          </div>

          {/* What Happens Next */}
          <Card className="bg-navy-800 border-navy-600/50 mb-8">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-orange-500" />
                <h2 className="text-xl font-semibold text-white">
                  Raporunuzda Neler Olacak?
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'İmar durumu ve emsal değerlendirmesi',
                  '50+1 kuralı uygunluk analizi',
                  'Tahmini inşaat maliyeti projeksiyonu',
                  'Gelir potansiyeli değerlendirmesi',
                  'Risk faktörleri ve öneriler',
                  'Sonraki adımlar yol haritası',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="text-center">
            <p className="text-slate-400 mb-4">
              Sorularınız mı var? Bize ulaşın:
            </p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="tel:03122361017"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">0312 236 10 17</span>
              </a>
              <a
                href="tel:05336820942"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">0533 682 09 42</span>
              </a>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium"
            >
              Ana Sayfaya Dön
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
