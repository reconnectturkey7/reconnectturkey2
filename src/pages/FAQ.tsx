import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  MessageCircle,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';

const faqCategories = [
  {
    id: 'general',
    name: 'Genel',
    questions: [
      {
        q: 'KD Ankara ne iş yapar?',
        a: 'KD Ankara, kentsel dönüşüm ve arsa geliştirme projelerinde veriye dayalı analiz ve danışmanlık hizmeti sunar. Mülk sahiplerinin bilgi asimetrisi nedeniyle değer kaybetmesini önlemek amacıyla kurulmuştur.',
      },
      {
        q: 'Hizmetleriniz ücretli mi?',
        a: 'Ön uygunluk analizi tamamen ücretsizdir. Detaylı rapor ve süreç yönetimi hizmetlerimiz için teklif alabilirsiniz.',
      },
      {
        q: 'Hangi bölgelerde hizmet veriyorsunuz?',
        a: 'Ankara il sınırları içinde tüm ilçelerde hizmet vermekteyiz.',
      },
    ],
  },
  {
    id: 'process',
    name: 'Süreç',
    questions: [
      {
        q: 'Komşularım anlaşamıyor, süreç başlar mı?',
        a: 'Sistem, 50+1 çoğunluk senaryosunu 2026 mevzuatına göre modeller. Anlaşmazlık durumunda alternatif yollar ve haklı tarafın lehine çözüm önerileri sunulur.',
      },
      {
        q: 'Süreç ne kadar sürer?',
        a: 'Proje büyüklüğüne ve karmaşıklığına göre değişir. Tipik bir bina dönüşümü 24-36 ay, arsa kat karşılığı projeler 30-48 ay sürebilir.',
      },
      {
        q: 'Belediye ile iletişimi siz mi sağlıyorsunuz?',
        a: 'Belediye ile resmi iletişim mülk sahibi veya yetkilendirdiği kişi tarafından yapılır. Biz, hazırlanan rapor ve belgelerle süreci destekleriz.',
      },
    ],
  },
  {
    id: 'analysis',
    name: 'Analiz',
    questions: [
      {
        q: 'Arsamın değerini nasıl öğrenirim?',
        a: 'Sistem, inşaat maliyetleri ve bölgesel verilerle oran hesaplar. Ücretsiz ön analizde temel değer aralığı, detaylı raporda kesin projeksiyon sunulur.',
      },
      {
        q: 'Emsal artışı garanti mi?',
        a: 'Hayır. Emsal artışı belediye ve ilgili kurumların onayına tabidir. Analizler mevcut imar durumu ve olası senaryolar üzerinden yapılır.',
      },
      {
        q: 'Analiz raporunda neler var?',
        a: 'Rapor; imar durumu, finansal modelleme, risk değerlendirmesi, senaryo analizi ve öneriler içerir. Detaylı rapor 30+ sayfa olabilir.',
      },
    ],
  },
  {
    id: 'contractor',
    name: 'Müteahhit',
    questions: [
      {
        q: 'Müteahhit seçiminde yardımcı oluyor musunuz?',
        a: 'Evet. Tam süreç yönetimi paketimizde müteahhit adayı belirleme, teklif toplama ve değerlendirme hizmetleri yer alır.',
      },
      {
        q: 'Paylaşım oranı nasıl belirlenir?',
        a: 'Arsa değeri, proje maliyeti, lokasyon ve piyasa koşullarına göre analiz yapılır. Optimal pay aralığı raporda önerilir.',
      },
      {
        q: 'Sözleşme kontrolü yapıyor musunuz?',
        a: 'Evet. Süreç yönetimi paketinde sözleşme taslağı kontrolü ve önerileri yer alır. Ancak hukuki danışmanlık yerine geçmez.',
      },
    ],
  },
  {
    id: 'legal',
    name: 'Hukuki',
    questions: [
      {
        q: '50+1 kuralı nedir?',
        a: '6306 Sayılı Kanun kapsamında, bina yenilemesi için maliklerin en az %50+1 çoğunluğu ile karar alması gerekliliğidir.',
      },
      {
        q: 'Tapu kaydı gerekli mi?',
        a: 'Ön analiz için hayır. Detaylı analiz ve süreç ilerledikçe tapu ve diğer resmi belgeler gereklidir.',
      },
      {
        q: 'Belediye onayı zorunlu mu?',
        a: 'Evet. Tüm kentsel dönüşüm projeleri ilgili belediye ve kurumların onayına tabidir.',
      },
    ],
  },
];

export function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredFAQs = faqCategories.flatMap(cat => 
    cat.questions.map(q => ({ ...q, category: cat.name }))
  ).filter(faq => {
    const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-700/50 border border-navy-600/50 rounded-full mb-6">
                <HelpCircle className="w-4 h-4 text-orange-500" />
                <span className="text-slate-300 text-sm">Sıkça Sorulan Sorular</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                SSS
              </h1>
              <p className="text-slate-400 max-w-xl mx-auto">
                Kentsel dönüşüm süreciyle ilgili merak edilen sorular ve yanıtları.
              </p>
            </motion.div>
          </div>

          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Soru ara..."
              className="pl-12 bg-navy-800 border-navy-600 text-white placeholder:text-slate-500"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'all'
                  ? 'bg-orange-500 text-white'
                  : 'bg-navy-800 text-slate-400 hover:text-white hover:bg-navy-700'
              }`}
            >
              Tümü
            </button>
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.name
                    ? 'bg-orange-500 text-white'
                    : 'bg-navy-800 text-slate-400 hover:text-white hover:bg-navy-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-navy-800 border border-navy-600/50 rounded-lg px-6 data-[state=open]:border-orange-500/30"
              >
                <AccordionTrigger className="text-white hover:text-orange-500 text-left py-4">
                  <div>
                    <span className="text-orange-500 text-xs font-medium block mb-1">
                      {faq.category}
                    </span>
                    {faq.q}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-400">Sonuç bulunamadı.</p>
            </div>
          )}

          {/* Contact CTA */}
          <Card className="bg-navy-800 border-navy-600/50 mt-12">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Cevabını bulamadınız mı?
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Size yardımcı olmaktan memnuniyet duyarız.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button
                    asChild
                    variant="outline"
                    className="border-navy-600 text-white hover:bg-navy-700"
                  >
                    <Link to="/iletisim">
                      İletişim
                    </Link>
                  </Button>
                  <a
                    href="https://wa.me/905336820942"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
