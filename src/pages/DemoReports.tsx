import { motion } from 'framer-motion';
import { 
  FileText, 
  BarChart3, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle2,
  Building2,
  Calculator,
  MapPin,
  Eye
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const sampleReports = [
  {
    id: 1,
    title: 'Çankaya Örnek Analiz Raporu',
    type: 'Bina Dönüşümü',
    location: 'Çankaya, Ankara',
    summary: {
      landArea: '850 m²',
      currentFloors: '5 kat',
      potentialFloors: '8 kat',
      estimatedValue: '45-55 Milyon TL',
    },
    highlights: [
      '50+1 kuralına uygun, süreç başlatılabilir',
      'Emsal 2.0 → 2.5 artış potansiyeli',
      'Tahmini inşaat süresi: 24-30 ay',
      'Müteahhit payı önerisi: %52-55',
    ],
    icon: Building2,
  },
  {
    id: 2,
    title: 'Keçiören Arsa Kat Karşılığı Analizi',
    type: 'Arsa Kat Karşılığı',
    location: 'Keçiören, Ankara',
    summary: {
      landArea: '1.200 m²',
      currentFloors: 'Boş arsa',
      potentialFloors: '10 kat',
      estimatedValue: '38-48 Milyon TL',
    },
    highlights: [
      'Yüksek gelir potansiyeli',
      'Emsal 2.75 hakkı mevcut',
      'Tahmini inşaat süresi: 30-36 ay',
      'Müteahhit payı önerisi: %55-58',
    ],
    icon: MapPin,
  },
  {
    id: 3,
    title: 'Yenimahalle Karma Proje Değerlendirmesi',
    type: 'Karma Kullanım',
    location: 'Yenimahalle, Ankara',
    summary: {
      landArea: '2.500 m²',
      currentFloors: '3 kat (ticari)',
      potentialFloors: '12 kat',
      estimatedValue: '120-150 Milyon TL',
    },
    highlights: [
      'Ticari + konut karma kullanım potansiyeli',
      'Metro yakınlığı değer artışı',
      'Tahmini inşaat süresi: 36-42 ay',
      'Müteahhit payı önerisi: %50-53',
    ],
    icon: BarChart3,
  },
];

const reportSections = [
  {
    icon: MapPin,
    title: 'Lokasyon Analizi',
    description: 'Bölgesel değerler, ulaşım erişimi, çevre yapılaşma değerlendirmesi.',
  },
  {
    icon: Building2,
    title: 'İmar Durumu',
    description: 'Mevcut emsal, yapılaşma hakkı, olası artış senaryoları.',
  },
  {
    icon: Calculator,
    title: 'Finansal Modelleme',
    description: 'Maliyet hesaplamaları, gelir projeksiyonları, getiri analizi.',
  },
  {
    icon: TrendingUp,
    title: 'Senaryo Analizi',
    description: 'İyimser, gerçekçi ve kötümser senaryoların karşılaştırması.',
  },
  {
    icon: AlertTriangle,
    title: 'Risk Değerlendirmesi',
    description: 'Tespit edilen riskler ve azaltma önerileri.',
  },
  {
    icon: CheckCircle2,
    title: 'Öneriler ve Sonuç',
    description: 'Sonraki adımlar, paylaşım oranı önerisi, yol haritası.',
  },
];

export function DemoReports() {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-700/50 border border-navy-600/50 rounded-full mb-6">
                <FileText className="w-4 h-4 text-orange-500" />
                <span className="text-slate-300 text-sm">Örnek Çıktılar</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Demo Raporlar
              </h1>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Analiz raporlarımızın yapısını ve içeriğini inceleyin. 
                Gerçek raporlar, mülkünüze özel detaylı bilgiler içerir.
              </p>
            </motion.div>
          </div>

          {/* Sample Reports */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {sampleReports.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-navy-800 border-navy-600/50 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                        <report.icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <span className="px-3 py-1 bg-navy-700 text-slate-300 text-xs rounded-full">
                        {report.type}
                      </span>
                    </div>

                    <h3 className="text-white font-semibold mb-2">{report.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{report.location}</p>

                    <div className="bg-navy-700/50 rounded-lg p-4 mb-4">
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <div className="text-slate-500 text-xs">Arsa</div>
                          <div className="text-slate-300">{report.summary.landArea}</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Mevcut</div>
                          <div className="text-slate-300">{report.summary.currentFloors}</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Potansiyel</div>
                          <div className="text-green-400">{report.summary.potentialFloors}</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Değer</div>
                          <div className="text-orange-400">{report.summary.estimatedValue}</div>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {report.highlights.slice(0, 3).map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-400 text-xs">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant="outline"
                      className="w-full border-navy-600 text-slate-300 hover:text-white hover:bg-navy-700"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Önizle
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Report Structure */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Rapor Yapısı
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reportSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-navy-800 border-navy-600/50 h-full">
                    <CardContent className="p-6">
                      <div className="w-10 h-10 bg-navy-700 rounded-lg flex items-center justify-center mb-4">
                        <section.icon className="w-5 h-5 text-orange-500" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">{section.title}</h3>
                      <p className="text-slate-400 text-sm">{section.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <Card className="bg-amber-500/10 border-amber-500/30 mb-20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-amber-500 font-semibold mb-2">Önemli Not</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Yukarıda gösterilen raporlar örnek amaçlıdır ve gerçek mülk bilgileri 
                    içermemektedir. Gerçek analiz raporları, mülkünüze özel detaylı 
                    değerlendirmeler içerir. Raporlardaki değerler ve projeksiyonlar 
                    tahmini olup, kesin kararlar için resmi belgeler ve uzman görüşü 
                    gereklidir.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Kendi Raporunuzu Alın
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Gayrimenkulünüz için özel hazırlanmış detaylı analiz raporu alın, 
              doğru kararlar verin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-orange-600 hover:bg-slate-100 font-semibold px-8"
              >
                <a href="/ucretsiz-on-analiz">
                  Ücretsiz Ön Analiz
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <a href="/hizmetler">
                  Tüm Paketleri Gör
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
