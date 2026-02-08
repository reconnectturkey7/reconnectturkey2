import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  TrendingUp, 
  Users, 
  FileCheck,
  ArrowRight,
  CheckCircle2,
  Shield,
  Phone,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const benefits = [
  {
    icon: Users,
    title: 'Hazır Portföy',
    description: 'Analiz edilmiş, sürece hazır mülk sahipleriyle doğrudan iletişim.',
  },
  {
    icon: TrendingUp,
    title: 'Veriye Dayalı',
    description: 'Mülklerin finansal analizi önceden yapılmış, karar süreci hızlı.',
  },
  {
    icon: Shield,
    title: 'Tarafsız Platform',
    description: 'Mülk sahipleri ve müteahhitler arasında adil aracılık.',
  },
  {
    icon: FileCheck,
    title: 'Kolay Süreç',
    description: 'Teklif sürecinden sözleşmeye kadar organize yönetim.',
  },
];

const districts = [
  'Çankaya', 'Keçiören', 'Yenimahalle', 'Mamak', 'Etimesgut',
  'Sincan', 'Altındağ', 'Pursaklar', 'Gölbaşı', 'Polatlı',
  'Kahramankazan', 'Akyurt', 'Elmadağ', 'Beypazarı', 'Çubuk',
  'Haymana', 'Kalecik', 'Kızılcahamam', 'Nallıhan', 'Şereflikoçhisar'
];

const capacityOptions = [
  '1-3 proje/yıl',
  '4-6 proje/yıl',
  '7-10 proje/yıl',
  '10+ proje/yıl',
];

const shareRangeOptions = [
  '%50-55 (Müteahhit)',
  '%55-60 (Müteahhit)',
  '%60+ (Müteahhit)',
  'Esnek / Proje bazlı',
];

export function Contractors() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    website: '',
    districts: [] as string[],
    capacity: '',
    shareRange: '',
    message: '',
    kvkkConsent: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const updateFormData = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleDistrict = (district: string) => {
    const newDistricts = formData.districts.includes(district)
      ? formData.districts.filter(d => d !== district)
      : [...formData.districts, district];
    updateFormData('districts', newDistricts);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 pb-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">
              Başvurunuz Alındı
            </h1>
            <p className="text-slate-400 mb-8">
              Başvurunuz incelendikten sonra en kısa sürede size dönüş yapacağız. 
              Portföy akışı hakkında bilgilendirileceksiniz.
            </p>
            <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              <a href="/">Ana Sayfaya Dön</a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

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
                <Building2 className="w-4 h-4 text-orange-500" />
                <span className="text-slate-300 text-sm">Müteahhitler İçin</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                KD Ankara Müteahhit Ağı
              </h1>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Analiz edilmiş, sürece hazır portföylere erişin. 
                Veriye dayalı platformumuzla doğru projelerle buluşun.
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

          {/* How It Works */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Portföy Akışı Nasıl Olur?
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: 'Başvuru',
                  description: 'Firma bilgilerinizi ve çalışma alanlarınızı paylaşın.',
                },
                {
                  step: '2',
                  title: 'Onay',
                  description: 'Başvurunuz incelenir ve müteahhit ağına dahil edilirsiniz.',
                },
                {
                  step: '3',
                  title: 'Eşleştirme',
                  description: 'Uygun portföyler size önerilir, teklif verirsiniz.',
                },
                {
                  step: '4',
                  title: 'Süreç',
                  description: 'Anlaşma sağlandığında süreç takibi ve destek.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <span className="text-orange-500 font-bold">{item.step}</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <Card className="bg-navy-800 border-navy-600/50">
                <CardContent className="p-6 lg:p-8">
                  <h2 className="text-xl font-semibold text-white mb-6">
                    Müteahhit Başvuru Formu
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="companyName" className="text-white mb-2 block">
                          Firma Adı <span className="text-orange-500">*</span>
                        </Label>
                        <Input
                          id="companyName"
                          value={formData.companyName}
                          onChange={(e) => updateFormData('companyName', e.target.value)}
                          placeholder="Firma adı"
                          required
                          className="bg-navy-700 border-navy-600 text-white placeholder:text-slate-500"
                        />
                      </div>

                      <div>
                        <Label htmlFor="contactName" className="text-white mb-2 block">
                          Yetkili Adı <span className="text-orange-500">*</span>
                        </Label>
                        <Input
                          id="contactName"
                          value={formData.contactName}
                          onChange={(e) => updateFormData('contactName', e.target.value)}
                          placeholder="Ad Soyad"
                          required
                          className="bg-navy-700 border-navy-600 text-white placeholder:text-slate-500"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-white mb-2 block">
                          Telefon <span className="text-orange-500">*</span>
                        </Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => updateFormData('phone', e.target.value)}
                          placeholder="05XX XXX XX XX"
                          type="tel"
                          required
                          className="bg-navy-700 border-navy-600 text-white placeholder:text-slate-500"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-white mb-2 block">
                          E-posta <span className="text-orange-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          value={formData.email}
                          onChange={(e) => updateFormData('email', e.target.value)}
                          placeholder="ornek@email.com"
                          type="email"
                          required
                          className="bg-navy-700 border-navy-600 text-white placeholder:text-slate-500"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <Label htmlFor="website" className="text-white mb-2 block">
                          Web Sitesi / Referans Projeler Linki
                        </Label>
                        <Input
                          id="website"
                          value={formData.website}
                          onChange={(e) => updateFormData('website', e.target.value)}
                          placeholder="https://..."
                          className="bg-navy-700 border-navy-600 text-white placeholder:text-slate-500"
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="text-white mb-3 block">
                        Çalışmak İstediğiniz Bölgeler
                      </Label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {districts.slice(0, 12).map((district) => (
                          <div key={district} className="flex items-center gap-2">
                            <Checkbox
                              id={`district-${district}`}
                              checked={formData.districts.includes(district)}
                              onCheckedChange={() => toggleDistrict(district)}
                              className="border-navy-500 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                            />
                            <Label
                              htmlFor={`district-${district}`}
                              className="text-slate-300 text-sm cursor-pointer"
                            >
                              {district}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="capacity" className="text-white mb-2 block">
                          Yıllık Kapasite
                        </Label>
                        <Select
                          value={formData.capacity}
                          onValueChange={(value) => updateFormData('capacity', value)}
                        >
                          <SelectTrigger className="bg-navy-700 border-navy-600 text-white">
                            <SelectValue placeholder="Seçin" />
                          </SelectTrigger>
                          <SelectContent className="bg-navy-800 border-navy-600">
                            {capacityOptions.map((option) => (
                              <SelectItem
                                key={option}
                                value={option}
                                className="text-white hover:bg-navy-700"
                              >
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="shareRange" className="text-white mb-2 block">
                          Tercih Edilen Pay Aralığı
                        </Label>
                        <Select
                          value={formData.shareRange}
                          onValueChange={(value) => updateFormData('shareRange', value)}
                        >
                          <SelectTrigger className="bg-navy-700 border-navy-600 text-white">
                            <SelectValue placeholder="Seçin" />
                          </SelectTrigger>
                          <SelectContent className="bg-navy-800 border-navy-600">
                            {shareRangeOptions.map((option) => (
                              <SelectItem
                                key={option}
                                value={option}
                                className="text-white hover:bg-navy-700"
                              >
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-white mb-2 block">
                        Ek Bilgi
                      </Label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => updateFormData('message', e.target.value)}
                        placeholder="Firmanız hakkında kısa bilgi, uzmanlık alanlarınız..."
                        rows={4}
                        className="w-full px-3 py-2 bg-navy-700 border border-navy-600 rounded-md text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="kvkk"
                        checked={formData.kvkkConsent}
                        onCheckedChange={(checked) => 
                          updateFormData('kvkkConsent', checked as boolean)
                        }
                        required
                        className="mt-1 border-navy-500 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                      />
                      <Label htmlFor="kvkk" className="text-slate-400 text-sm leading-relaxed cursor-pointer">
                        <span className="text-orange-500">*</span>{' '}
                        <a href="/kvkk" target="_blank" className="text-orange-500 hover:underline">
                          KVKK Aydınlatma Metni
                        </a>'ni okudum, kişisel verilerimin işlenmesine onay veriyorum.
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold"
                    >
                      Başvuruyu Gönder
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-navy-800 border-navy-600/50">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-4">Veri Güvenliği</h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Firma bilgileriniz güvenle saklanır ve üçüncü taraflarla 
                    paylaşılmaz. Sadece size uygun portföyler için iletişime geçilir.
                  </p>
                  <div className="flex items-center gap-2 text-green-500 text-sm">
                    <Shield className="w-4 h-4" />
                    <span>GDPR & KVKK Uyumlu</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-navy-800 border-navy-600/50">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-4">Tarafsızlık Taahhüdü</h3>
                  <p className="text-slate-400 text-sm">
                    KD Ankara, mülk sahipleri ve müteahhitler arasında tarafsız 
                    bir platformdur. Tüm müteahhit adaylarına eşit fırsat tanınır.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-navy-800 border-navy-600/50">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-4">İletişim</h3>
                  <div className="space-y-3">
                    <a href="tel:03122361017" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">0312 236 10 17</span>
                    </a>
                    <a href="mailto:info@kdankara.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">info@kdankara.com</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
