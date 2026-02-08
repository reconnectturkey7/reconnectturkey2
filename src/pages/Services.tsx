import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Clock, 
  Users, 
  FileText, 
  ArrowRight,
  MessageCircle,
  Shield,
  Calculator
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const packages = [
  {
    id: 'basic',
    name: 'Ön Uygunluk & Yön Haritası',
    price: 'Ücretsiz',
    description: 'Kentsel dönüşüm sürecine başlamak için temel analiz',
    timeline: '72 saat',
    targetAudience: 'Süreci keşfetmek isteyen mülk sahipleri',
    icon: FileText,
    features: [
      'Ada/parsel temel imar durumu kontrolü',
      '50+1 kuralı uygunluk değerlendirmesi',
      'Temel emsal ve yapılaşma hakkı analizi',
      'Süreç haritası ve adım adım yönlendirme',
      'Ön maliyet-gelir aralığı tahmini',
      'Sonraki adımlar önerisi',
    ],
    deliverables: [
      'PDF formatında ön analiz raporu',
      'Süreç akış şeması',
      'Gerekli belgeler listesi',
    ],
    cta: 'Hemen Başla',
    ctaLink: '/ucretsiz-on-analiz',
    highlighted: false,
  },
  {
    id: 'professional',
    name: 'Detaylı Dönüşüm Analiz Raporu',
    price: 'Teklif Al',
    description: 'Kapsamlı finansal ve teknik değerlendirme',
    timeline: '5-7 iş günü',
    targetAudience: 'Karar verme aşamasındaki mülk sahipleri',
    icon: Calculator,
    features: [
      'Tüm Temel Paket özellikleri',
      'Detaylı imar durumu ve mevzuat analizi',
      '3 senaryolu finansal modelleme (iyimser, gerçekçi, kötümser)',
      'Güncel inşaat maliyet endeksleri ile detaylı maliyet hesabı',
      'Bölgesel satış/kira geliri projeksiyonları',
      'Farklı müteahhit payı oranları karşılaştırması',
      'Risk matrisi ve azaltma stratejileri',
      'Hukuki süreç ve belge kontrol listesi',
    ],
    deliverables: [
      'Kapsamlı PDF analiz raporu (30+ sayfa)',
      'Excel finansal modeli',
      'Karşılaştırmalı senaryo tablosu',
      'Risk değerlendirme matrisi',
    ],
    cta: 'Teklif Al',
    ctaLink: '/iletisim',
    highlighted: true,
  },
  {
    id: 'enterprise',
    name: 'Tam Süreç Yönetimi',
    price: 'Teklif Al',
    description: 'Teklif toplama, müteahhit eşleştirme ve sözleşme kontrolü',
    timeline: 'Proje süresi boyunca',
    targetAudience: 'Süreci profesyonel yönetmek isteyenler',
    icon: Shield,
    features: [
      'Tüm Profesyonel Paket özellikleri',
      'Müteahhit adayı belirleme ve davet',
      'Teknik ve finansal teklif değerlendirmesi',
      'Teklif karşılaştırma raporu',
      'Sözleşme taslağı kontrolü ve önerileri',
      'Müteahhit-mülk sahibi arası koordinasyon',
      'Süreç takibi ve periyodik raporlama',
      'İhtiyaç halinde uzman yönlendirmesi',
    ],
    deliverables: [
      'Detaylı analiz raporu',
      'Müteahhit teklif karşılaştırma tablosu',
      'Sözleşme kontrol raporu',
      'Aylık süreç raporları',
      '7/24 danışmanlık desteği',
    ],
    cta: 'Görüşme Planla',
    ctaLink: '/iletisim',
    highlighted: false,
  },
];

const comparisonFeatures = [
  { name: 'Temel imar analizi', basic: true, professional: true, enterprise: true },
  { name: '50+1 uygunluk kontrolü', basic: true, professional: true, enterprise: true },
  { name: 'Süreç haritası', basic: true, professional: true, enterprise: true },
  { name: 'Detaylı finansal modelleme', basic: false, professional: true, enterprise: true },
  { name: '3 senaryolu projeksiyon', basic: false, professional: true, enterprise: true },
  { name: 'Risk matrisi', basic: false, professional: true, enterprise: true },
  { name: 'Müteahhit teklif toplama', basic: false, professional: false, enterprise: true },
  { name: 'Sözleşme kontrolü', basic: false, professional: false, enterprise: true },
  { name: 'Süreç yönetimi', basic: false, professional: false, enterprise: true },
  { name: '7/24 destek', basic: false, professional: false, enterprise: true },
];

export function Services() {
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
                Hizmet Paketlerimiz
              </h1>
              <p className="text-slate-400 max-w-2xl mx-auto">
                İhtiyacınıza ve süreç aşamanıza uygun çözümler. 
                Ücretsiz ön analizle başlayın, ihtiyaç duydukça yükseltin.
              </p>
            </motion.div>
          </div>

          {/* Packages Grid */}
          <div className="grid lg:grid-cols-3 gap-6 mb-20">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full ${
                  pkg.highlighted 
                    ? 'bg-navy-700 border-orange-500/50 shadow-glow' 
                    : 'bg-navy-800 border-navy-600/50'
                }`}>
                  <CardContent className="p-6 lg:p-8 flex flex-col h-full">
                    {pkg.highlighted && (
                      <div className="inline-flex items-center gap-1 px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full mb-4 w-fit">
                        En Çok Tercih Edilen
                      </div>
                    )}

                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                      pkg.highlighted ? 'bg-orange-500/20' : 'bg-navy-700'
                    }`}>
                      <pkg.icon className={`w-7 h-7 ${
                        pkg.highlighted ? 'text-orange-500' : 'text-slate-400'
                      }`} />
                    </div>

                    <h2 className="text-xl font-bold text-white mb-2">
                      {pkg.name}
                    </h2>

                    <div className="text-3xl font-bold text-orange-500 mb-4">
                      {pkg.price}
                    </div>

                    <p className="text-slate-400 text-sm mb-6">
                      {pkg.description}
                    </p>

                    <div className="space-y-3 mb-6 pb-6 border-b border-navy-600/30">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-slate-500" />
                        <span className="text-slate-300">{pkg.timeline}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-slate-500" />
                        <span className="text-slate-300">{pkg.targetAudience}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8 flex-1">
                      {pkg.features.slice(0, 5).map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant={pkg.highlighted ? 'default' : 'outline'}
                          className={`w-full ${
                            pkg.highlighted
                              ? 'bg-orange-500 hover:bg-orange-600 text-white'
                              : 'border-navy-600 text-white hover:bg-navy-700'
                          }`}
                        >
                          Detayları Gör
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-navy-800 border-navy-600 max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-white text-2xl">{pkg.name}</DialogTitle>
                          <DialogDescription className="text-slate-400">
                            {pkg.description}
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-6 mt-4">
                          <div className="flex items-center gap-4">
                            <div className="text-3xl font-bold text-orange-500">
                              {pkg.price}
                            </div>
                            <div className="text-slate-400 text-sm">
                              <div>{pkg.timeline}</div>
                              <div>{pkg.targetAudience}</div>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-white font-semibold mb-3">Özellikler</h4>
                            <ul className="space-y-2">
                              {pkg.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                  <span className="text-slate-300 text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-white font-semibold mb-3">Teslimatlar</h4>
                            <ul className="space-y-2">
                              {pkg.deliverables.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                  <FileText className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                  <span className="text-slate-300 text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-3 pt-4">
                            <Button
                              asChild
                              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
                            >
                              <Link to={pkg.ctaLink}>{pkg.cta}</Link>
                            </Button>
                            <a
                              href="https://wa.me/905336820942"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                            >
                              <MessageCircle className="w-5 h-5" />
                            </a>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Paket Karşılaştırması
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-navy-600">
                    <th className="text-left py-4 px-4 text-slate-400 font-medium">Özellik</th>
                    <th className="text-center py-4 px-4 text-white font-medium">Temel</th>
                    <th className="text-center py-4 px-4 text-orange-500 font-medium">Profesyonel</th>
                    <th className="text-center py-4 px-4 text-white font-medium">Tam Süreç</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature) => (
                    <tr key={feature.name} className="border-b border-navy-700">
                      <td className="py-4 px-4 text-slate-300">{feature.name}</td>
                      <td className="text-center py-4 px-4">
                        {feature.basic ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-navy-600">—</span>
                        )}
                      </td>
                      <td className="text-center py-4 px-4 bg-navy-700/30">
                        {feature.professional ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-navy-600">—</span>
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {feature.enterprise ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-navy-600">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Hangi Paket Size Uygun?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Kararsız mısınız? Ücretsiz ön analizle başlayın, 
              uzmanlarımız size en uygun paketi önerelim.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              <a
                href="https://wa.me/905336820942"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Danışmanlık
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
