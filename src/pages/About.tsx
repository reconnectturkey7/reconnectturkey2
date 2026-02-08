import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Shield, 
  TrendingUp,
  Users,
  Award,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const values = [
  {
    icon: Shield,
    title: 'Tarafsızlık',
    description: 'Mülk sahiplerinin çıkarlarını koruyan, bağımsız ve objektif yaklaşım.',
  },
  {
    icon: BarChart3,
    title: 'Veriye Dayalı',
    description: 'Kişisel yorumlardan uzak, tamamen veri ve analiz temelli değerlendirme.',
  },
  {
    icon: Eye,
    title: 'Şeffaflık',
    description: 'Tüm süreçler ve analiz metodolojileri açık ve anlaşılır.',
  },
  {
    icon: TrendingUp,
    title: 'Sürekli Gelişim',
    description: 'Güncel veriler ve mevzuat takibi ile sürekli iyileştirme.',
  },
];

const stats = [
  { value: '500+', label: 'Tamamlanan Analiz', icon: BarChart3 },
  { value: '25', label: 'İlçe Kapsamı', icon: MapPin },
  { value: '2.5B+', label: 'TL Değer Analizi', icon: TrendingUp },
  { value: '%98', label: 'Müşteri Memnuniyeti', icon: Users },
];

const methodology = [
  {
    step: '01',
    title: 'Veri Toplama',
    description: 'Ada/parsel bilgileri, imar durumu, bölgesel veriler ve piyasa koşullarının toplanması.',
  },
  {
    step: '02',
    title: 'Analiz',
    description: 'Finansal modelleme, risk değerlendirmesi ve senaryo analizinin yapılması.',
  },
  {
    step: '03',
    title: 'Raporlama',
    description: 'Detaylı, anlaşılır ve eyleme dönüştürülebilir raporların hazırlanması.',
  },
  {
    step: '04',
    title: 'Danışmanlık',
    description: 'Süreç boyunca müşteriye rehberlik ve destek sağlanması.',
  },
];

export function About() {
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
                Hakkımızda
              </h1>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Ankara'nın en gelişmiş veriye dayalı kentsel dönüşüm analiz platformu.
              </p>
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-navy-800 border-navy-600/50 h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-orange-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">Misyonumuz</h2>
                  <p className="text-slate-400 leading-relaxed">
                    Mülk sahiplerinin kentsel dönüşüm sürecinde bilgi asimetrisi 
                    nedeniyle değer kaybetmesini önlemek. Veriye dayalı, şeffaf ve 
                    tarafsız analiz hizmetleriyle müşterilerimizin en doğru kararları 
                    vermesini sağlamak.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-navy-800 border-navy-600/50 h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7 text-orange-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">Vizyonumuz</h2>
                  <p className="text-slate-400 leading-relaxed">
                    Ankara'nın ve Türkiye'nin en güvenilir kentsel dönüşüm danışmanlık 
                    markası olmak. Teknoloji ve veri analitiği ile sektörde yeni 
                    standartlar belirlemek.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-navy-800 border-navy-600/50 text-center">
                  <CardContent className="p-6">
                    <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Değerlerimiz
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-navy-800 border-navy-600/50 h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-navy-700 rounded-xl flex items-center justify-center mb-4">
                        <value.icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                      <p className="text-slate-400 text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Methodology */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Çalışma Metodolojimiz
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {methodology.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-orange-500/30 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <Card className="bg-gradient-to-br from-navy-700 to-navy-800 border-orange-500/30 mb-20">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Neden KD Ankara?
                  </h2>
                  <ul className="space-y-3">
                    {[
                      'Bağımsız ve tarafsız danışmanlık',
                      'Veriye dayalı sistematik analiz',
                      'Ankara\'ya özel uzmanlık',
                      'Şeffaf ve anlaşılır raporlama',
                      'Süreç boyunca destek',
                      'Güncel mevzuat takibi',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center lg:text-right">
                  <div className="inline-block p-8 bg-navy-900/50 rounded-2xl">
                    <Award className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                    <div className="text-white font-semibold">Güvenilir Ortak</div>
                    <div className="text-slate-400 text-sm">500+ memnun müşteri</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Tanışalım
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Kentsel dönüşüm sürecinizde size nasıl yardımcı olabileceğimizi 
              konuşalım.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-orange-600 hover:bg-slate-100 font-semibold px-8"
            >
              <Link to="/iletisim">
                İletişime Geç
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
