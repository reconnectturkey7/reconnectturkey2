import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

interface ContactItem {
  label: string;
  value: string;
  href?: string;
}

interface ContactSection {
  icon: typeof Phone;
  title: string;
  items: ContactItem[];
}

const contactInfo: ContactSection[] = [
  {
    icon: Phone,
    title: 'Telefon',
    items: [
      { label: 'Sabit', value: '0312 236 10 17', href: 'tel:+903122361017' },
      { label: 'Mobil', value: '0533 682 09 42', href: 'tel:+905336820942' },
    ],
  },
  {
    icon: Mail,
    title: 'E-posta',
    items: [
      { label: 'Genel', value: 'info@kdankara.com', href: 'mailto:info@kdankara.com' },
    ],
  },
  {
    icon: MapPin,
    title: 'Adres',
    items: [
      { label: '', value: 'Ankara, Türkiye' },
    ],
  },
  {
    icon: Clock,
    title: 'Çalışma Saatleri',
    items: [
      { label: 'Hafta İçi', value: '09:00 - 18:00' },
      { label: 'Cumartesi', value: '10:00 - 14:00' },
    ],
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    kvkkConsent: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const subject = `Yeni İletişim Formu: ${formData.subject || 'Genel'}`;
    const body = `
Ad Soyad: ${formData.name}
E-posta: ${formData.email || 'Belirtilmedi'}
Telefon: ${formData.phone}
Konu: ${formData.subject || 'Belirtilmedi'}

Mesaj:
${formData.message}
    `.trim();
    
    const mailtoLink = `mailto:info@kdankara.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1000);
  };

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
              Teşekkürler!
            </h1>
            <p className="text-slate-400 mb-8">
              E-posta istemciniz açıldı. Mesajınızı göndererek bize ulaşabilirsiniz.
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
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                İletişim
              </h1>
              <p className="text-slate-400 max-w-xl mx-auto">
                Sorularınız veya proje talepleriniz için bize ulaşın.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <Card className="bg-navy-800 border-navy-600/50">
                <CardContent className="p-6 lg:p-8">
                  <h2 className="text-xl font-semibold text-white mb-6">
                    Bize Yazın
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-white mb-2 block">
                          Ad Soyad <span className="text-orange-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => updateFormData('name', e.target.value)}
                          placeholder="Adınız"
                          required
                          className="bg-navy-700 border-navy-600 text-white placeholder:text-slate-500"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-white mb-2 block">
                          E-posta
                        </Label>
                        <Input
                          id="email"
                          value={formData.email}
                          onChange={(e) => updateFormData('email', e.target.value)}
                          placeholder="ornek@email.com"
                          type="email"
                          className="bg-navy-700 border-navy-600 text-white placeholder:text-slate-500"
                        />
                      </div>
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
                      <Label htmlFor="subject" className="text-white mb-2 block">
                        Konu
                      </Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => updateFormData('subject', e.target.value)}
                        placeholder="Mesaj konusu"
                        className="bg-navy-700 border-navy-600 text-white placeholder:text-slate-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-white mb-2 block">
                        Mesaj <span className="text-orange-500">*</span>
                      </Label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => updateFormData('message', e.target.value)}
                        placeholder="Mesajınız..."
                        rows={5}
                        required
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
                      disabled={isLoading}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold disabled:opacity-50"
                    >
                      {isLoading ? (
                        'Hazırlanıyor...'
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Gönder
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-navy-800 border-navy-600/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-navy-700 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-5 h-5 text-orange-500" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                          <div className="space-y-1">
                            {info.items.map((item) => (
                              item.href ? (
                                <a
                                  key={item.value}
                                  href={item.href}
                                  className="block text-slate-400 hover:text-white transition-colors"
                                >
                                  {item.label && <span className="text-slate-500">{item.label}: </span>}
                                  {item.value}
                                </a>
                              ) : (
                                <div key={item.value} className="text-slate-400">
                                  {item.label && <span className="text-slate-500">{item.label}: </span>}
                                  {item.value}
                                </div>
                              )
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              <a
                href="https://wa.me/905336820942"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="bg-green-600 hover:bg-green-700 border-green-600 transition-colors cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <MessageCircle className="w-8 h-8 text-white" />
                      <div>
                        <h3 className="text-white font-semibold">WhatsApp Hattı</h3>
                        <p className="text-green-100 text-sm">Hızlı destek için tıklayın</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
