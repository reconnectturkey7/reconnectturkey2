import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  LandPlot, 
  TrendingUp, 
  Calculator, 
  Scale, 
  FileCheck,
  ArrowRight,
  CheckCircle2,
  PieChart,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Değer Artışı',
    description: 'Arsanız üzerine yapılacak proje ile gayrimenkul değeriniz katlanabilir.',
  },
  {
    icon: Calculator,
    title: 'Maliyet Tasarrufu',
    description: 'İnşaat maliyetlerini müteahhit ile paylaşarak yatırım yükü azalır.',
  },
  {
    icon: Scale,
    title: 'Esnek Paylaşım',
    description: 'Farklı paylaşım oranları ile ihtiyacınıza uygun anlaşma yapılabilir.',
  },
  {
    icon: FileCheck,
    title: 'Profesyonel Yönetim',
    description: 'Süreci uzmanlarla birlikte yöneterek riskleri minimize edin.',
  },
];

const scenarios = [
  {
    title: 'Düşük Pay Senaryosu',
    ownerShare: '%40-45',
    contractorShare: '%55-60',
    description: 'Müteahhit yüksek risk alır, malik daha az pay ama güvenli süreç.',
    suitable: 'Yüksek maliyetli projeler, zorlu lokasyonlar',
  },
  {
    title: 'Dengeli Pay Senaryosu',
    ownerShare: '%50',
    contractorShare: '%50',
    description: 'Klasik ve adil paylaşım modeli.',
    suitable: 'Standart projeler, deneyimli müteahhitler',
  },
  {
    title: 'Yüksek Pay Senaryosu',
    ownerShare: '%55-60',
    contractorShare: '%40-45',
    description: 'Malik daha yüksek pay alır, müteahhit düşük marjla çalışır.',
    suitable: 'Düşük maliyetli, yüksek getirili projeler',
  },
];

const processSteps = [
  'Arsa değerleme ve potansiyel analizi',
  'İmar durumu ve yapılaşma hakkı belirleme',
  'Proje konsepti geliştirme',
  'Müteahhit adayı belirleme',
  'Teklif toplama ve değerlendirme',
  'Sözleşme müzakeresi ve imza',
  'İnşaat süreci takibi',
  'Teslimat ve pay dağıtımı',
];

export function LandDevelopment() {
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
                <LandPlot className="w-4 h-4 text-orange-500" />
                <span className="text-slate-300 text-sm">Arsa Geliştirme</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Arsa Kat Karşılığı Geliştirme
              </h1>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Boş arsanızı değerlendirin, kat karşılığı projeyle kazanç sağlayın. 
                Veriye dayalı analizle optimal paylaşım oranını belirleyin.
              </p>
            </motion.div>
          </div>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-navy-800 border-navy-600/50 h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-slate-400 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Scenarios */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Paylaşım Senaryoları
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {scenarios.map((scenario, index) => (
                <motion.div
                  key={scenario.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-navy-800 border-navy-600/50 h-full">
                    <CardContent className="p-6">
                      <h3 className="text-white font-semibold mb-4">{scenario.title}</h3>
                      
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-500">{scenario.ownerShare}</div>
                          <div className="text-slate-400 text-xs">Malik</div>
                        </div>
                        <div className="flex-1 h-px bg-navy-600" />
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-500">{scenario.contractorShare}</div>
                          <div className="text-slate-400 text-xs">Müteahhit</div>
                        </div>
                      </div>

                      <p className="text-slate-400 text-sm mb-4">{scenario.description}</p>
                      
                      <div className="bg-navy-700/50 rounded-lg p-3">
                        <div className="text-slate-500 text-xs mb-1">Uygun Olduğu Durumlar:</div>
                        <div className="text-slate-300 text-sm">{scenario.suitable}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Süreç Akışı
            </h2>
            <Card className="bg-navy-800 border-navy-600/50">
              <CardContent className="p-6 lg:p-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  {processSteps.map((step, index) => (
                    <div key={step} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-orange-500 text-xs font-medium">{index + 1}</span>
                      </div>
                      <span className="text-slate-300 text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Calculator CTA */}
          <Card className="bg-gradient-to-br from-navy-700 to-navy-800 border-orange-500/30 mb-20">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <PieChart className="w-8 h-8 text-orange-500" />
                    <h2 className="text-2xl font-bold text-white">Paylaşım Oranı Hesaplama</h2>
                  </div>
                  <p className="text-slate-400 mb-6">
                    Arsanızın değeri, proje büyüklüğü ve lokasyon faktörlerine göre 
                    optimal paylaşım oranını hesaplayın.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      'Arsa değer analizi',
                      'Proje maliyet projeksiyonu',
                      'Bölgesel karşılaştırma',
                      'Önerilen pay aralığı',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-slate-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center lg:text-right">
                  <Button
                    asChild
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8"
                  >
                    <Link to="/ucretsiz-on-analiz">
                      Hesaplamaya Başla
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Notes */}
          <Card className="bg-amber-500/10 border-amber-500/30 mb-20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-amber-500 font-semibold mb-2">Önemli Hususlar</h3>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li>• Paylaşım oranları proje özelinde değişkenlik gösterebilir.</li>
                    <li>• Arsanızın tapu durumu, imar durumu ve hukuki uygunluğu kontrol edilmelidir.</li>
                    <li>• Müteahhit seçiminde referans ve finansal güç önemlidir.</li>
                    <li>• Sözleşme şartları profesyonel destekle hazırlanmalıdır.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Arsanızın Potansiyelini Öğrenin
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Ücretsiz ön analizle arsanızın kat karşılığı potansiyelini ve 
              önerilen paylaşım aralığını öğrenin.
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
