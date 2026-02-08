import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Building2, 
  Calculator, 
  Target, 
  User, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2,
  Info,
  Home,
  LandPlot,
  FileText,
  MessageSquare,
  HelpCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const steps = [
  { id: 1, title: 'Konum', icon: MapPin },
  { id: 2, title: 'Tip Seçimi', icon: Building2 },
  { id: 3, title: 'Bilinen Veriler', icon: Calculator },
  { id: 4, title: 'Hedef', icon: Target },
  { id: 5, title: 'İletişim', icon: User },
];

const districts = [
  'Çankaya', 'Keçiören', 'Yenimahalle', 'Mamak', 'Etimesgut',
  'Sincan', 'Altındağ', 'Pursaklar', 'Gölbaşı', 'Polatlı',
  'Kahramankazan', 'Akyurt', 'Elmadağ', 'Beypazarı', 'Çubuk',
  'Haymana', 'Kalecik', 'Kızılcahamam', 'Nallıhan', 'Şereflikoçhisar'
];

const buildingAges = [
  '0-10 yıl', '11-20 yıl', '21-30 yıl', '31-40 yıl', '40+ yıl', 'Bilmiyorum'
];

const floorCounts = [
  '1-3 kat', '4-6 kat', '7-10 kat', '11+ kat', 'Bilmiyorum'
];

export function FreeAnalysis() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    district: '',
    neighborhood: '',
    address: '',
    projectType: '',
    ada: '',
    parsel: '',
    emsal: '',
    floorCount: '',
    landArea: '',
    buildingAge: '',
    apartmentCount: '',
    goal: '',
    fullName: '',
    phone: '',
    email: '',
    kvkkConsent: false,
    marketingConsent: false,
  });

  const progress = (currentStep / steps.length) * 100;

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.district && formData.neighborhood;
      case 2:
        return formData.projectType;
      case 3:
        return formData.landArea;
      case 4:
        return formData.goal;
      case 5:
        return formData.fullName && formData.phone && formData.kvkkConsent;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Store form data (in real app, send to backend)
    console.log('Form submitted:', formData);
    
    // Navigate to confirmation page
    navigate('/analiz-onay');
  };

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ücretsiz Ön Analiz
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto">
              5 dakikanızı ayırın, gayrimenkulünüzün dönüşüm potansiyelini öğrenin. 
              72 saat içinde detaylı ön analiz raporunuz hazır.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      step.id < currentStep
                        ? 'bg-green-500 text-white'
                        : step.id === currentStep
                        ? 'bg-orange-500 text-white'
                        : 'bg-navy-700 text-slate-400 border border-navy-600'
                    }`}
                  >
                    {step.id < currentStep ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <step.icon className="w-5 h-5" />
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-full h-1 mx-2 transition-all ${
                        step.id < currentStep ? 'bg-green-500' : 'bg-navy-700'
                      }`}
                      style={{ width: '40px' }}
                    />
                  )}
                </div>
              ))}
            </div>
            <Progress value={progress} className="h-2 bg-navy-700" />
            <div className="text-center mt-2">
              <span className="text-slate-400 text-sm">
                Adım {currentStep} / {steps.length}: {steps[currentStep - 1].title}
              </span>
            </div>
          </div>

          {/* Form Card */}
          <Card className="bg-navy-800 border-navy-600/50">
            <CardContent className="p-6 lg:p-8">
              <AnimatePresence mode="wait">
                {/* Step 1: Location */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="district" className="text-white mb-2 block">
                          İlçe <span className="text-orange-500">*</span>
                        </Label>
                        <Select
                          value={formData.district}
                          onValueChange={(value) => updateFormData('district', value)}
                        >
                          <SelectTrigger className="bg-navy-700 border-navy-600 text-white">
                            <SelectValue placeholder="İlçe seçin" />
                          </SelectTrigger>
                          <SelectContent className="bg-navy-800 border-navy-600">
                            {districts.map((district) => (
                              <SelectItem
                                key={district}
                                value={district}
                                className="text-white hover:bg-navy-700"
                              >
                                {district}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="neighborhood" className="text-white mb-2 block">
                          Mahalle <span className="text-orange-500">*</span>
                        </Label>
                        <Input
                          id="neighborhood"
                          value={formData.neighborhood}
                          onChange={(e) => updateFormData('neighborhood', e.target.value)}
                          placeholder="Mahalle adı"
                          className="bg-navy-700 border-navy-600 text-white placeholder:text-slate-500"
                        />
                      </div>

                      <div>
                        <Label htmlFor="address" className="text-white mb-2 block">
                          Adres (Opsiyonel)
                        </Label>
                        <textarea
                          id="address"
                          value={formData.address}
                          onChange={(e) => updateFormData('address', e.target.value)}
                          placeholder="Sokak, bina no vb. detaylar..."
                          rows={3}
                          className="w-full px-3 py-2 bg-navy-700 border border-navy-600 rounded-md text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Project Type */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <button
                        onClick={() => updateFormData('projectType', 'building')}
                        className={`p-6 rounded-xl border-2 text-left transition-all ${
                          formData.projectType === 'building'
                            ? 'border-orange-500 bg-orange-500/10'
                            : 'border-navy-600 bg-navy-700 hover:border-navy-500'
                        }`}
                      >
                        <Home className={`w-10 h-10 mb-4 ${
                          formData.projectType === 'building' ? 'text-orange-500' : 'text-slate-400'
                        }`} />
                        <h3 className="text-white font-semibold mb-2">Bina Dönüşümü</h3>
                        <p className="text-slate-400 text-sm">
                          Mevcut binanızın yenilenmesi veya yeni bina inşası
                        </p>
                      </button>

                      <button
                        onClick={() => updateFormData('projectType', 'land')}
                        className={`p-6 rounded-xl border-2 text-left transition-all ${
                          formData.projectType === 'land'
                            ? 'border-orange-500 bg-orange-500/10'
                            : 'border-navy-600 bg-navy-700 hover:border-navy-500'
                        }`}
                      >
                        <LandPlot className={`w-10 h-10 mb-4 ${
                          formData.projectType === 'land' ? 'text-orange-500' : 'text-slate-400'
                        }`} />
                        <h3 className="text-white font-semibold mb-2">Arsa Kat Karşılığı</h3>
                        <p className="text-slate-400 text-sm">
                          Boş arsanız üzerine kat karşılığı inşaat projesi
                        </p>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Known Data */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="ada" className="text-white mb-2 block flex items-center gap-2">
                          Ada No
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="w-4 h-4 text-slate-500" />
                              </TooltipTrigger>
                              <TooltipContent className="bg-navy-800 border-navy-600">
                                <p className="text-slate-300 text-sm">Tapu üzerindeki ada numarası</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Label>
                        <Input
                          id="ada"
                          value={formData.ada}
                          onChange={(e) => updateFormData('ada', e.target.value)}
                          placeholder="Örn: 123"
                          className="bg-navy-700 border-navy-600 text-white placeholder:text-slate-500"
                        />
                      </div>

                      <div>
                        <Label htmlFor="parsel" className="text-white mb-2 block flex items-center gap-2">
                          Parsel No
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="w-4 h-4 text-slate-500" />
                              </TooltipTrigger>
                              <TooltipContent className="bg-navy-800 border-navy-600">
                                <p className="text-slate-300 text-sm">Tapu üzerindeki parsel numarası</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Label>
                        <Input
                          id="parsel"
                          value={formData.parsel}
                          onChange={(e) => updateFormData('parsel', e.target.value)}
                          placeholder="Örn: 45"
                          className="bg-navy-700 border-navy-600 text-white placeholder:text-slate-500"
                        />
                      </div>

                      <div>
                        <Label htmlFor="emsal" className="text-white mb-2 block flex items-center gap-2">
                          Emsal (Haks)
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="w-4 h-4 text-slate-500" />
                              </TooltipTrigger>
                              <TooltipContent className="bg-navy-800 border-navy-600">
                                <p className="text-slate-300 text-sm">İmar durumundaki emsal değeri</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Label>
                        <Input
                          id="emsal"
                          value={formData.emsal}
                          onChange={(e) => updateFormData('emsal', e.target.value)}
                          placeholder="Örn: 2.5"
                          className="bg-navy-700 border-navy-600 text-white placeholder:text-slate-500"
                        />
                      </div>

                      <div>
                        <Label htmlFor="landArea" className="text-white mb-2 block">
                          Arsa Alanı (m²) <span className="text-orange-500">*</span>
                        </Label>
                        <Input
                          id="landArea"
                          value={formData.landArea}
                          onChange={(e) => updateFormData('landArea', e.target.value)}
                          placeholder="Örn: 500"
                          type="number"
                          className="bg-navy-700 border-navy-600 text-white placeholder:text-slate-500"
                        />
                      </div>

                      <div>
                        <Label htmlFor="floorCount" className="text-white mb-2 block">
                          Kat Adedi
                        </Label>
                        <Select
                          value={formData.floorCount}
                          onValueChange={(value) => updateFormData('floorCount', value)}
                        >
                          <SelectTrigger className="bg-navy-700 border-navy-600 text-white">
                            <SelectValue placeholder="Seçin" />
                          </SelectTrigger>
                          <SelectContent className="bg-navy-800 border-navy-600">
                            {floorCounts.map((count) => (
                              <SelectItem
                                key={count}
                                value={count}
                                className="text-white hover:bg-navy-700"
                              >
                                {count}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="buildingAge" className="text-white mb-2 block">
                          Bina Yaşı
                        </Label>
                        <Select
                          value={formData.buildingAge}
                          onValueChange={(value) => updateFormData('buildingAge', value)}
                        >
                          <SelectTrigger className="bg-navy-700 border-navy-600 text-white">
                            <SelectValue placeholder="Seçin" />
                          </SelectTrigger>
                          <SelectContent className="bg-navy-800 border-navy-600">
                            {buildingAges.map((age) => (
                              <SelectItem
                                key={age}
                                value={age}
                                className="text-white hover:bg-navy-700"
                              >
                                {age}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="sm:col-span-2">
                        <Label htmlFor="apartmentCount" className="text-white mb-2 block">
                          Mevcut Daire Sayısı (Opsiyonel)
                        </Label>
                        <Input
                          id="apartmentCount"
                          value={formData.apartmentCount}
                          onChange={(e) => updateFormData('apartmentCount', e.target.value)}
                          placeholder="Örn: 8"
                          type="number"
                          className="bg-navy-700 border-navy-600 text-white placeholder:text-slate-500"
                        />
                      </div>
                    </div>

                    <div className="bg-navy-700/50 rounded-lg p-4 flex items-start gap-3">
                      <Info className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-400 text-sm">
                        Bilmediğiniz alanları boş bırakabilirsiniz. Eksik bilgileri 
                        ön analiz sürecinde tamamlayabiliriz.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Goal */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <p className="text-slate-400 mb-4">
                      Analiz sonrası ne yapmak istediğinizi belirtin:
                    </p>

                    {[
                      {
                        value: 'teklif',
                        label: 'Teklif almak istiyorum',
                        description: 'Müteahhitlerden teklif toplama sürecini başlatmak',
                        icon: FileText,
                      },
                      {
                        value: 'rapor',
                        label: 'Detaylı rapor istiyorum',
                        description: 'Kapsamlı finansal ve teknik analiz raporu',
                        icon: FileText,
                      },
                      {
                        value: 'info',
                        label: 'Sadece ön bilgi',
                        description: 'Potansiyelimi öğrenmek, karar vermek için zaman istiyorum',
                        icon: HelpCircle,
                      },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => updateFormData('goal', option.value)}
                        className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-start gap-4 ${
                          formData.goal === option.value
                            ? 'border-orange-500 bg-orange-500/10'
                            : 'border-navy-600 bg-navy-700 hover:border-navy-500'
                        }`}
                      >
                        <option.icon className={`w-6 h-6 mt-1 ${
                          formData.goal === option.value ? 'text-orange-500' : 'text-slate-400'
                        }`} />
                        <div>
                          <h4 className="text-white font-medium mb-1">{option.label}</h4>
                          <p className="text-slate-400 text-sm">{option.description}</p>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* Step 5: Contact */}
                {currentStep === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="fullName" className="text-white mb-2 block">
                          Ad Soyad <span className="text-orange-500">*</span>
                        </Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => updateFormData('fullName', e.target.value)}
                          placeholder="Adınız ve soyadınız"
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
                          className="bg-navy-700 border-navy-600 text-white placeholder:text-slate-500"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-white mb-2 block">
                          E-posta (Opsiyonel)
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

                      <div className="space-y-4 pt-4">
                        <div className="flex items-start gap-3">
                          <Checkbox
                            id="kvkk"
                            checked={formData.kvkkConsent}
                            onCheckedChange={(checked) => 
                              updateFormData('kvkkConsent', checked as boolean)
                            }
                            className="mt-1 border-navy-500 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                          />
                          <Label htmlFor="kvkk" className="text-slate-400 text-sm leading-relaxed cursor-pointer">
                            <span className="text-orange-500">*</span>{' '}
                            <a href="/kvkk" target="_blank" className="text-orange-500 hover:underline">
                              KVKK Aydınlatma Metni
                            </a>'ni okudum, kişisel verilerimin işlenmesine onay veriyorum.
                          </Label>
                        </div>

                        <div className="flex items-start gap-3">
                          <Checkbox
                            id="marketing"
                            checked={formData.marketingConsent}
                            onCheckedChange={(checked) => 
                              updateFormData('marketingConsent', checked as boolean)
                            }
                            className="mt-1 border-navy-500 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                          />
                          <Label htmlFor="marketing" className="text-slate-400 text-sm leading-relaxed cursor-pointer">
                            Kampanya ve duyurularınızdan haberdar olmak istiyorum.
                          </Label>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-navy-600/30">
                <Button
                  variant="outline"
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                  className="border-navy-600 text-white hover:bg-navy-700 disabled:opacity-50"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Geri
                </Button>

                {currentStep < steps.length ? (
                  <Button
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className="bg-orange-500 hover:bg-orange-600 text-white disabled:opacity-50"
                  >
                    Devam
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!isStepValid() || isSubmitting}
                    className="bg-orange-500 hover:bg-orange-600 text-white disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        Analizi Başlat
                        <CheckCircle2 className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Info Box */}
          <div className="mt-8 bg-navy-800/50 border border-navy-600/30 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <MessageSquare className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-medium mb-2">Sorularınız mı var?</h4>
                <p className="text-slate-400 text-sm mb-4">
                  Formu doldurmadan önce veya süreç hakkında bilgi almak için 
                  WhatsApp hattımızdan bize ulaşabilirsiniz.
                </p>
                <a
                  href="https://wa.me/905336820942"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 font-medium"
                >
                  WhatsApp'tan Yaz
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
