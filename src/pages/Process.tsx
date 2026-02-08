import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  FileSearch, 
  Users, 
  Calculator, 
  FileCheck, 
  Handshake,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const processSteps = [
  {
    number: '01',
    title: 'Ön Değerlendirme',
    description: 'Gayrimenkulünüzün temel bilgileri ile ön uygunluk analizi yapılır.',
    icon: FileSearch,
    details: [
      'Ada/parsel bilgilerinin toplanması',
      'İmar durumu sorgulaması',
      '50+1 kuralı uygunluk kontrolü',
      'Temel fizibilite değerlendirmesi',
    ],
    duration: '1-3 gün',
  },
  {
    number: '02',
    title: 'Keşif ve Analiz',
    description: 'Mevcut yapının teknik durumu ve çevre analizi yapılır.',
    icon: Building2,
    details: [
      'Bina teknik keşfi',
      'Zemin etüdü değerlendirmesi (gerekirse)',
      'Çevre yapılaşma analizi',
      'Risk faktörlerinin belirlenmesi',
    ],
    duration: '3-5 gün',
  },
  {
    number: '03',
    title: 'Finansal Modelleme',
    description: 'Detaylı maliyet-gelir analizi ve senaryolar oluşturulur.',
    icon: Calculator,
    details: [
      'Güncel maliyet endeksleri ile hesaplama',
      'Satış/kira geliri projeksiyonları',
      'Farklı paylaşım oranları senaryoları',
      'Risk-getiri analizi',
    ],
    duration: '5-7 gün',
  },
  {
    number: '04',
    title: 'Toplu Katılım',
    description: 'Tüm maliklerin sürece dahil edilmesi sağlanır.',
    icon: Users,
    details: [
      'Malik bilgilerinin toplanması',
      'Bilgilendirme toplantıları',
      'Karar alma süreci yönetimi',
      'Yetki belgesi hazırlığı',
    ],
    duration: 'Değişken',
  },
  {
    number: '05',
    title: 'Müteahhit Seçimi',
    description: 'Uygun müteahhit adayları belirlenir ve teklifler toplanır.',
    icon: Handshake,
    details: [
      'Müteahhit adayı araştırması',
      'Teklif isteme ve değerlendirme',
      'Teknik ve finansal kıyaslama',
      'En uygun adayın seçimi',
    ],
    duration: '2-4 hafta',
  },
  {
    number: '06',
    title: 'Sözleşme ve Uygulama',
    description: 'Sözleşme imzalanır ve inşaat süreci başlar.',
    icon: FileCheck,
    details: [
      'Sözleşme taslağı kontrolü',
      'Yasal prosedürlerin tamamlanması',
      'İnşaat izinleri',
      'Süreç takibi ve kontrol',
    ],
    duration: 'Proje süresi',
  },
];

const legalNotes = [
  {
    title: '6306 Sayılı Kanun',
    description: 'Afet Riski Altındaki Alanların Dönüştürülmesi Hakkında Kanun kapsamında haklar ve yükümlülükler.',
  },
  {
    title: '50+1 Kuralı',
    description: 'Bina yenilemesi için maliklerin en az %50+1 çoğunluğu ile karar alınması gerekliliği.',
  },
  {
    title: 'Arsa Payı Karşılığı',
    description: 'Müteahhit ile malikler arasındaki paylaşım oranlarının belirlenmesi ve sözleşme esasları.',
  },
];

export function Process() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Kentsel Dönüşüm Süreci
              </h1>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Veriye dayalı sistematik yaklaşımımızla kentsel dönüşüm sürecinin 
                her aşamasında yanınızdayız.
              </p>
            </motion.div>
          </div>

          {/* Process Steps */}
          <div className="space-y-8 mb-20">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-navy-800 border-navy-600/50 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-12 gap-0">
                      {/* Left - Number & Icon */}
                      <div className="lg:col-span-3 bg-navy-700/50 p-6 lg:p-8 flex items-center gap-4 lg:flex-col lg:items-start lg:justify-center">
                        <div className="text-4xl lg:text-5xl font-bold text-orange-500/30">
                          {step.number}
                        </div>
                        <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-orange-500" />
                        </div>
                      </div>

                      {/* Middle - Content */}
                      <div className="lg:col-span-6 p-6 lg:p-8">
                        <h3 className="text-xl font-semibold text-white mb-3">
                          {step.title}
                        </h3>
                        <p className="text-slate-400 mb-4">
                          {step.description}
                        </p>
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-slate-300 text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right - Duration */}
                      <div className="lg:col-span-3 p-6 lg:p-8 bg-navy-700/30 flex items-center lg:justify-center">
                        <div className="flex items-center gap-2 text-slate-400">
                          <Clock className="w-5 h-5" />
                          <span className="text-sm">{step.duration}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Legal Notes */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8">
              Hukuki Çerçeve
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {legalNotes.map((note, index) => (
                <motion.div
                  key={note.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-navy-800 border-navy-600/50 h-full">
                    <CardContent className="p-6">
                      <h3 className="text-white font-semibold mb-3">{note.title}</h3>
                      <p className="text-slate-400 text-sm">{note.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Important Notice */}
          <Card className="bg-amber-500/10 border-amber-500/30 mb-20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-amber-500 font-semibold mb-2">Önemli Bilgilendirme</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Kentsel dönüşüm süreci belediye ve ilgili kurumların onayına tabidir. 
                    Sunduğumuz analizler ön bilgi niteliğindedir ve kesin kararlar için 
                    resmi belgeler gereklidir. Emsal artışı veya imar değişikliği garanti edilmez. 
                    Her proje özelinde hukuki ve teknik değerlendirme yapılması önerilir.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Sürecinizi Başlatın
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Ücretsiz ön analizle gayrimenkulünüzün potansiyelini öğrenin, 
              doğru adımlarla ilerleyin.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-orange-600 hover:bg-slate-100 font-semibold px-8"
            >
              <Link to="/ucretsiz-on-analiz">
                Ücretsiz Analiz Başlat
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
