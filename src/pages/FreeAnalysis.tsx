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

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbybyxuN7PcFHKp2iYEJyTmJiC9M2MMp0_eMwvN2DHXohaQoiT9JEmuk2FFg4P-JGo_4/exec';

export function FreeAnalysis() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
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
    setSubmitError('');
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
    setSubmitError('');
    
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.result === 'success') {
        navigate('/analiz-onay');
      } else {
        throw new Error(result.message || 'Bir hata oluştu');
      }
      
    } catch (error) {
      console.error('Form gönderim hatası:', error);
      setSubmitError('Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin veya WhatsApp üzerinden bize ulaşın.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ücretsiz Ön Analiz
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto">
              5 dakikanızı ayırın, gayrimenkulünüzün dönüşüm potansiyelini öğrenin. 
              72 saat içinde detaylı ön analiz raporunuz hazır.
            </p>
          </div>

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

          <Card className="bg-navy-800 border-navy-600/50">
            <CardContent className="p-6 lg:p-8">
              {submitError && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <p className="text-red-400 text-sm">{submitError}</p>
                </div>
              )}

              <AnimatePresence mode="wait">
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
                        onClick={() => updateFormData('projectType', 'Bina Dönüşümü')}
                        className={`p-6 rounded-xl border-2 text-left transition-all ${
                          formData.projectType === 'Bina Dönüşümü'
                            ? 'border-orange-500 bg-orange-500/10'
                            : 'border-navy-600 bg-navy-700 hover:border-navy-500'
                        }`}
                      >
                        <Home className={`w-10 h-10 mb-4 ${
                          formData.projectType === 'Bina Dönüşümü' ? 'text-orange-500' : 'text-slate-400'
                        }`} />
                        <h3 className="text-white font-semibold mb-2">Bina Dönüşümü</h3>
                        <p className="text-slate-400 text-sm">
                          Mevcut binanızın yenilenmesi veya yeni bina inşası
                        </p>
                      </button>

                      <button
                        onClick={() => updateFormData('projectType', 'Arsa Kat Karşılığı')}
                        className={`p-6 rounded-xl border-2 text-left transition-all ${
                          formData.projectType === 'Arsa Kat Karşılığı'
                            ? 'border-orange-500 bg-orange-500/10'
                            : 'border-navy-600 bg-navy-700 hover:border-navy-500'
                        }`}
                      >
                        <LandPlot className={`w-10 h-10 mb-4 ${
                          formData.projectType === 'Arsa Kat Karşılığı' ? 'text-orange-500' : 'text-slate-400'
                        }`} />
                        <h3 className="text-white font-semibold mb-2">Arsa Kat Karşılığı</h3>
                        <p className="text-slate-400 text-sm">
                          Boş arsanız üzerine kat karşılığı inşaat projesi
                        </p>
                      </button>
                    </div>
                  </motion.div>
                )}

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
                        value: 'Teklif almak istiyorum',
                        label: 'Teklif almak istiyorum',
                        description: 'Müteahhitlerden teklif toplama sürecini başlatmak',
                        icon: FileText,
                      },
                      {
                        value: 'Detaylı rapor istiyorum',
                        label: 'Detaylı rapor istiyorum',
                        description: 'Kapsamlı finansal ve teknik analiz raporu',
                        icon: FileText,
                      },
                      {
                        value: 'Sadece ön bilgi',
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
                            ? 'border
