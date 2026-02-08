import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Calculator, 
  TrendingUp, 
  Shield, 
  FileCheck, 
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
  ChevronRight,
  BarChart3,
  Scale,
  Wallet
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const methodologyItems = [
  {
    icon: Building2,
    title: 'İmar & Emsal Analizi',
    description: '6306 Sayılı Kanun ve 50+1 kuralı uygunluk değerlendirmesi',
  },
  {
    icon: Calculator,
    title: 'Maliyet Hesaplamaları',
    description: 'Güncel inşaat maliyetleri ve bölgesel fiyat endeksleri',
  },
  {
    icon: TrendingUp,
    title: 'Gelir Projeksiyonu',
    description: 'Satış ve kira geliri tahminleri, piyasa analizi',
  },
  {
    icon: Scale,
    title: 'Paylaşım Senaryoları',
    description: 'Farklı müteahhit payı oranlarına göre karşılaştırma',
  },
  {
    icon: Shield,
    title: 'Risk Analizi',
    description: 'Hukuki, teknik ve finansal risk değerlendirmesi',
  },
];

const steps = [
  {
    number: '01',
    title: 'Bilgi Al',
    description: 'Ücretsiz ön analiz formunu doldurun, temel bilgileri paylaşın.',
  },
  {
    number: '02',
    title: '72 Saatte Analiz',
    description: 'Uzman ekibimiz veriye dayalı ön analiz raporunuzu hazırlar.',
  },
  {
    number: '03',
    title: 'Detay Rapor & Teklif',
    description: 'Detaylı analiz ve müteahhit teklifleriyle süreci başlatın.',
  },
];

const services = [
  {
    title: 'Ön Uygunluk & Yön Haritası',
    price: 'Ücretsiz',
    description: 'Temel uygunluk analizi ve süreç yönlendirmesi',
    features: [
      '50+1 kuralı uygunluk kontrolü',
      'Temel emsal değerlendirmesi',
      'Süreç haritası',
      '72 saat içinde teslim',
    ],
    cta: 'Hemen Başla',
    href: '/ucretsiz-on-analiz',
  },
  {
    title: 'Detaylı Dönüşüm Analizi',
    price: 'Teklif Al',
    description: 'Kapsamlı finansal ve teknik değerlendirme raporu',
    features: [
      'Detaylı imar analizi',
      'Finansal modelleme',
      '3 senaryolu projeksiyon',
      'Risk matrisi',
    ],
    cta: 'Detayları Gör',
    href: '/hizmetler',
    highlighted: true,
  },
  {
    title: 'Tam Süreç Yönetimi',
    price: 'Teklif Al',
    description: 'Teklif toplama, müteahhit eşleştirme ve sözleşme kontrolü',
    features: [
      'Müteahhit teklif toplama',
      'Teknik ve finansal değerlendirme',
      'Sözleşme kontrolü',
      'Süreç takibi',
    ],
    cta: 'Detayları Gör',
    href: '/hizmetler',
  },
];

const checklistItems = [
  'Ada/parsel imar durumu ve emsal değerleri',
  '50+1 kuralı uygunluk kontrolü',
  'Mevcut bina teknik durum değerlendirmesi',
  'Bölgesel inşaat maliyet analizi',
  'Satış/kira geliri projeksiyonları',
  'Müteahhit payı oranları karşılaştırması',
  'Risk faktörleri ve azaltma stratejileri',
  'Hukuki süreç ve belge kontrol listesi',
];

const faqItems = [
  {
    question: 'Komşularım anlaşamıyor, süreç başlar mı?',
    answer: 'Sistem, 50+1 çoğunluk senaryosunu 2026 mevzuatına göre modeller. Anlaşmazlık durumunda alternatif yollar ve haklı tarafın lehine çözüm önerileri sunulur.',
  },
  {
    question: 'Arsamın değerini nasıl öğrenirim?',
    answer: 'Sistem, inşaat maliyetleri ve bölgesel verilerle oran hesaplar. Ücretsiz ön analizde temel değer aralığı, detaylı raporda kesin projeksiyon sunulur.',
  },
  {
    question: 'Emsal artışı garanti mi?',
    answer: 'Hayır. Emsal artışı belediye ve ilgili kurumların onayına tabidir. Analizler mevcut imar durumu ve olası senaryolar üzerinden yapılır.',
  },
  {
    question: 'Ne kadar sürede sonuç alırım?',
    answer: 'Ücretsiz ön analiz 72 saat içinde, detaylı rapor 5-7 iş günü içinde teslim edilir. Acil durumlar için WhatsApp hattımızdan hızlandırma talep edebilirsiniz.',
  },
];

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800 via-navy-900 to-navy-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-700/50 border border-navy-600/50 rounded-full mb-6">
                  <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                  <span className="text-slate-300 text-sm">Ankara'nın En Gelişmiş Gayrimenkul Strateji Platformu</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Duygusal Değil,{' '}
                  <span className="text-orange-500">Veriye Dayalı</span>{' '}
                  Dönüşüm Analizi
                </h1>
                
                <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
                  Kentsel dönüşüm ve arsa geliştirmede tam şeffaf, veriye dayalı analiz sistemi. 
                  Kişisel yorumlardan arınmış, tamamen sistemsel raporlama.
                </p>

                <p className="text-sm text-slate-400 mb-8">
                  Bu platform, mülk sahiplerinin bilgi asimetrisi nedeniyle değer kaybetmesini önlemek için tasarlanmıştır.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 text-base animate-pulse-glow"
                  >
                    <Link to="/ucretsiz-on-analiz">
                      Ücretsiz Ön Analiz Başlat
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-navy-600 text-white hover:bg-navy-700 px-8 py-6 text-base"
                  >
                    <Link to="/hizmetler">Paketleri Gör</Link>
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-6 mt-8 pt-8 border-t border-navy-600/30">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-slate-400 text-sm">72 Saatte Rapor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-slate-400 text-sm">Veri Tabanlı</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-slate-400 text-sm">Tarafsız</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Content - Stats Cards */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:block"
              >
                <div className="relative">
                  {/* Decorative Elements */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-navy-800/80 border-navy-600/50 backdrop-blur">
                      <CardContent className="p-6">
                        <BarChart3 className="w-8 h-8 text-orange-500 mb-4" />
                        <div className="text-3xl font-bold text-white mb-1">500+</div>
                        <div className="text-slate-400 text-sm">Tamamlanan Analiz</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-navy-800/80 border-navy-600/50 backdrop-blur">
                      <CardContent className="p-6">
                        <Building2 className="w-8 h-8 text-orange-500 mb-4" />
                        <div className="text-3xl font-bold text-white mb-1">25</div>
                        <div className="text-slate-400 text-sm">Ankara İlçesi</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-navy-800/80 border-navy-600/50 backdrop-blur">
                      <CardContent className="p-6">
                        <Wallet className="w-8 h-8 text-orange-500 mb-4" />
                        <div className="text-3xl font-bold text-white mb-1">2.5B+</div>
                        <div className="text-slate-400 text-sm">TL Değer Analizi</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-navy-800/80 border-navy-600/50 backdrop-blur">
                      <CardContent className="p-6">
                        <Shield className="w-8 h-8 text-orange-500 mb-4" />
                        <div className="text-3xl font-bold text-white mb-1">%98</div>
                        <div className="text-slate-400 text-sm">Müşteri Memnuniyeti</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Strip */}
      <section className="py-16 bg-navy-800/50 border-y border-navy-600/30">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                kdAnkara Yöntemimiz
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Sistematik analiz yaklaşımımızla her adımı veriye dayalı değerlendiriyoruz.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {methodologyItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-4 bg-navy-700 rounded-xl flex items-center justify-center border border-navy-600/50">
                    <item.icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Nasıl Çalışır?
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Üç basit adımda kentsel dönüşüm potansiyelinizi öğrenin.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="bg-navy-800 border border-navy-600/50 rounded-2xl p-8 h-full">
                    <div className="text-5xl font-bold text-orange-500/20 mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ChevronRight className="w-8 h-8 text-navy-600" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8"
              >
                <Link to="/ucretsiz-on-analiz">
                  Hemen Başlayın
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-navy-800/30">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Hizmet Paketlerimiz
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                İhtiyacınıza uygun çözümü seçin, süreci birlikte yönetelim.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`h-full ${
                    service.highlighted 
                      ? 'bg-navy-700 border-orange-500/50' 
                      : 'bg-navy-800 border-navy-600/50'
                  }`}>
                    <CardContent className="p-6 flex flex-col h-full">
                      {service.highlighted && (
                        <div className="inline-flex items-center gap-1 px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded-full mb-4 w-fit">
                          En Popüler
                        </div>
                      )}
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {service.title}
                      </h3>
                      <div className="text-2xl font-bold text-orange-500 mb-4">
                        {service.price}
                      </div>
                      <p className="text-slate-400 text-sm mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-8 flex-1">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        asChild
                        variant={service.highlighted ? 'default' : 'outline'}
                        className={`w-full ${
                          service.highlighted
                            ? 'bg-orange-500 hover:bg-orange-600 text-white'
                            : 'border-navy-600 text-white hover:bg-navy-700'
                        }`}
                      >
                        <Link to={service.href}>{service.cta}</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Neleri Kontrol Ediyoruz?
                </h2>
                <p className="text-slate-400 mb-8">
                  Her analizde kapsamlı kontrol listemizi uyguluyor, 
                  hiçbir detayı atlamıyoruz.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {checklistItems.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <FileCheck className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-orange-500/10 rounded-2xl blur-3xl" />
                <Card className="relative bg-navy-800 border-navy-600/50">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Tarafsız ve Şeffaf</h3>
                        <p className="text-slate-400 text-sm">Veriye dayalı analiz garantisi</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-3 border-b border-navy-600/30">
                        <span className="text-slate-400 text-sm">Müteahhit bağımsızlığı</span>
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-navy-600/30">
                        <span className="text-slate-400 text-sm">Veri kaynakları şeffaflığı</span>
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-navy-600/30">
                        <span className="text-slate-400 text-sm">Metodoloji açıklığı</span>
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>
                      <div className="flex items-center justify-between py-3">
                        <span className="text-slate-400 text-sm">Güncel veri kullanımı</span>
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Illustration */}
      <section className="py-20 bg-navy-800/30">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Riskten Potansiyele
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Doğru analiz ve stratejiyle dönüşüm potansiyelinizi maksimize edin.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-navy-800 border-navy-600/50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-red-500 rotate-180" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Risk Senaryosu</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-slate-400 text-sm">
                      <span className="text-red-500">•</span>
                      Bilgi asimetrisi nedeniyle düşük paylaşım oranı
                    </li>
                    <li className="flex items-start gap-2 text-slate-400 text-sm">
                      <span className="text-red-500">•</span>
                      Hukuki eksikliklerden kaynaklanan süreç uzaması
                    </li>
                    <li className="flex items-start gap-2 text-slate-400 text-sm">
                      <span className="text-red-500">•</span>
                      Maliyet hesaplamalarındaki sapmalar
                    </li>
                    <li className="flex items-start gap-2 text-slate-400 text-sm">
                      <span className="text-red-500">•</span>
                      Piyasa koşullarına uygun olmayan projeksiyonlar
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-navy-800 border-orange-500/30">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Potansiyel Senaryosu</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                      Veriye dayalı optimal paylaşım oranı
                    </li>
                    <li className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                      Öngörülen hukuki süreç yönetimi
                    </li>
                    <li className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                      Güncel maliyet ve gelir projeksiyonları
                    </li>
                    <li className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                      Risk azaltma stratejileri ile güvenli süreç
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Sıkça Sorulan Sorular
              </h2>
              <p className="text-slate-400">
                Kentsel dönüşüm süreciyle ilgili merak edilenler.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-navy-800 border border-navy-600/50 rounded-lg px-6 data-[state=open]:border-orange-500/30"
                >
                  <AccordionTrigger className="text-white hover:text-orange-500 text-left py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400 pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-8">
              <Link
                to="/sss"
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium"
              >
                Tüm Soruları Gör
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Dönüşüm Potansiyelinizi Öğrenmeye Hazır mısınız?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Ücretsiz ön analizle süreci başlatın, veriye dayalı kararlar alın.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-orange-600 hover:bg-slate-100 font-semibold px-8"
              >
                <Link to="/ucretsiz-on-analiz">
                  Ücretsiz Ön Analiz Başlat
                </Link>
              </Button>
              <a
                href="https://wa.me/905336820942"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp'tan Yaz
              </a>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8">
              <a
                href="tel:03122361017"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">0312 236 10 17</span>
              </a>
              <a
                href="tel:05336820942"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">0533 682 09 42</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
