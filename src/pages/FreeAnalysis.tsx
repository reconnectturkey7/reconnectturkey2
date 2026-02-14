import React, { useState } from 'react';
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
  Home,
  LandPlot,
  FileText,
  MessageSquare,
  HelpCircle,
  Loader2,
  Info
} from 'lucide-react';

// --- CEO'NUN ÖZEL UI PARÇALARI (Bağımlılık Yok) ---
const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl ${className}`}>
    {children}
  </div>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-sm font-medium text-slate-300 mb-2">{children}</label>
);

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input 
    {...props} 
    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
  />
);

const Select = ({ value, onChange, options, placeholder }: any) => (
  <div className="relative">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all cursor-pointer"
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((opt: string) => (
        <option key={opt} value={opt} className="bg-slate-800 text-white py-2">{opt}</option>
      ))}
    </select>
    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
      <ChevronRight className="w-4 h-4 text-slate-500 rotate-90" />
    </div>
  </div>
);

// --- ANA KOD BAŞLANGICI ---

const steps = [
  { id: 1, title: 'Konum', icon: MapPin },
  { id: 2, title: 'Tip Seçimi', icon: Building2 },
  { id: 3, title: 'Veriler', icon: Calculator },
  { id: 4, title: 'Hedef', icon: Target },
  { id: 5, title: 'İletişim', icon: User },
];

const districts = [
  'Çankaya', 'Keçiören', 'Yenimahalle', 'Mamak', 'Etimesgut',
  'Sincan', 'Altındağ', 'Pursaklar', 'Gölbaşı', 'Polatlı', 'Kahramankazan'
];

const buildingAges = ['0-10 yıl', '11-20 yıl', '21-30 yıl', '31-40 yıl', '40+ yıl', 'Bilmiyorum'];
const floorCounts = ['1-3 kat', '4-6 kat', '7-10 kat', '11+ kat', 'Bilmiyorum'];

export default function FreeAnalysis() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Google Script Webhook URL
  const scriptURL = 'https://script.google.com/macros/s/AKfycbybyxuN7PcFHKp2iYEJyTmJiC9M2MMp0_eMwvN2DHXohaQoiT9JEmuk2FFg4P-JGo_4/exec';

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
  });

  const progress = (currentStep / steps.length) * 100;

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return formData.district && formData.neighborhood;
      case 2: return formData.projectType;
      case 3: return formData.landArea;
      case 4: return formData.goal;
      case 5: return formData.fullName && formData.phone && formData.kvkkConsent;
      default: return false;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const dataToSend = new FormData();
    dataToSend.append('adsoyad', formData.fullName);
    dataToSend.append('telefon', formData.phone);
    dataToSend.append('bolge', `${formData.district} / ${formData.neighborhood}`);
    dataToSend.append('adaparsel', `Ada: ${formData.ada} / Parsel: ${formData.parsel}`);
    dataToSend.append('mulkiyet', formData.projectType === 'building' ? 'Bina' : 'Arsa');
    
    const details = `Hedef: ${formData.goal}, Alan: ${formData.landArea}, Emsal: ${formData.emsal}, Kat: ${formData.floorCount}, Not: ${formData.address}`;
    dataToSend.append('notlar', details);

    try {
      await fetch(scriptURL, { method: 'POST', body: dataToSend });
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      alert("Hata oluştu. WhatsApp'tan ulaşın.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center shadow-2xl">
          <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Başvurunuz Alındı!</h2>
          <p className="text-slate-400 mb-8">Uzman ekibimiz <span className="text-orange-500 font-bold">48 saat içinde</span> raporunuzu hazırlayıp size dönecektir.</p>
          <a href="/" className="block w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all">
            Ana Sayfaya Dön
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-32 px-4 font-sans text-slate-200">
      <div className="max-w-3xl mx-auto">
        
        {/* Başlık */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Ücretsiz Dönüşüm Analizi</h1>
          <p className="text-slate-400 text-lg">Parselinizin gerçek potansiyelini veri odaklı hesaplayın.</p>
        </div>

        {/* İlerleme Çubuğu */}
        <div className="mb-10">
          <div className="flex justify-between mb-4 px-2">
            {steps.map((step, i) => (
              <div key={step.id} className={`flex flex-col items-center gap-2 ${currentStep === step.id ? 'text-orange-500' : step.id < currentStep ? 'text-green-500' : 'text-slate-600'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${currentStep === step.id ? 'border-orange-500 bg-orange-500/10' : step.id < currentStep ? 'border-green-500 bg-green-500/10' : 'border-slate-700 bg-slate-900'}`}>
                  {step.id < currentStep ? <CheckCircle2 size={18} /> : <step.icon size={18} />}
                </div>
                <span className="text-xs font-medium hidden sm:block">{step.title}</span>
              </div>
            ))}
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-orange-600 to-orange-400 transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Form Alanı */}
        <Card className="p-8">
          <AnimatePresence mode="wait">
            
            {/* ADIM 1: KONUM */}
            {currentStep === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                <div>
                  <Label>İlçe <span className="text-orange-500">*</span></Label>
                  <Select 
                    value={formData.district} 
                    onChange={(val: string) => updateFormData('district', val)} 
                    options={districts} 
                    placeholder="Seçiniz" 
                  />
                </div>
                <div>
                  <Label>Mahalle <span className="text-orange-500">*</span></Label>
                  <Input 
                    value={formData.neighborhood} 
                    onChange={e => updateFormData('neighborhood', e.target.value)} 
                    placeholder="Örn: Büyükesat" 
                  />
                </div>
                <div>
                  <Label>Adres Detayı</Label>
                  <textarea 
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-orange-500 outline-none"
                    rows={3}
                    placeholder="Cadde, sokak vb."
                    value={formData.address}
                    onChange={e => updateFormData('address', e.target.value)}
                  />
                </div>
              </motion.div>
            )}

            {/* ADIM 2: TİP */}
            {currentStep === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { id: 'building', title: 'Bina Dönüşümü', desc: 'Eski binanızın yenilenmesi', icon: Home },
                    { id: 'land', title: 'Arsa Projesi', desc: 'Boş arsa üzerine inşaat', icon: LandPlot }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => updateFormData('projectType', item.id)}
                      className={`p-6 rounded-xl border-2 text-left transition-all ${formData.projectType === item.id ? 'border-orange-500 bg-orange-500/10' : 'border-slate-700 hover:border-slate-500'}`}
                    >
                      <item.icon className={`w-10 h-10 mb-4 ${formData.projectType === item.id ? 'text-orange-500' : 'text-slate-400'}`} />
                      <h3 className="text-white font-bold">{item.title}</h3>
                      <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ADIM 3: VERİLER */}
            {currentStep === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label>Ada No</Label>
                  <Input value={formData.ada} onChange={e => updateFormData('ada', e.target.value)} placeholder="Tapudaki Ada" />
                </div>
                <div>
                  <Label>Parsel No</Label>
                  <Input value={formData.parsel} onChange={e => updateFormData('parsel', e.target.value)} placeholder="Tapudaki Parsel" />
                </div>
                <div className="sm:col-span-2">
                  <Label>Arsa Alanı (m²) <span className="text-orange-500">*</span></Label>
                  <Input type="number" value={formData.landArea} onChange={e => updateFormData('landArea', e.target.value)} placeholder="Örn: 500" />
                </div>
                <div>
                  <Label>Emsal (Varsa)</Label>
                  <Input value={formData.emsal} onChange={e => updateFormData('emsal', e.target.value)} placeholder="Örn: 2.0" />
                </div>
                <div>
                  <Label>Mevcut Kat</Label>
                  <Select value={formData.floorCount} onChange={(v: string) => updateFormData('floorCount', v)} options={floorCounts} placeholder="Seçiniz" />
                </div>
              </motion.div>
            )}

            {/* ADIM 4: HEDEF */}
            {currentStep === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                 {[
                    { id: 'teklif', title: 'Teklif Almak İstiyorum', icon: FileText },
                    { id: 'rapor', title: 'Detaylı Rapor İstiyorum', icon: Calculator },
                    { id: 'bilgi', title: 'Sadece Bilgi Alacağım', icon: HelpCircle }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => updateFormData('goal', item.id)}
                      className={`w-full p-5 rounded-xl border-2 flex items-center gap-4 transition-all ${formData.goal === item.id ? 'border-orange-500 bg-orange-500/10' : 'border-slate-700 hover:bg-slate-800'}`}
                    >
                      <div className={`p-2 rounded-full ${formData.goal === item.id ? 'bg-orange-500 text-white' : 'bg-slate-800 text-slate-400'}`}>
                        <item.icon size={20} />
                      </div>
                      <span className="font-bold text-lg text-white">{item.title}</span>
                    </button>
                  ))}
              </motion.div>
            )}

            {/* ADIM 5: İLETİŞİM */}
            {currentStep === 5 && (
              <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                <div>
                  <Label>Ad Soyad <span className="text-orange-500">*</span></Label>
                  <Input value={formData.fullName} onChange={e => updateFormData('fullName', e.target.value)} placeholder="Tam Adınız" />
                </div>
                <div>
                  <Label>Telefon (WhatsApp) <span className="text-orange-500">*</span></Label>
                  <Input type="tel" value={formData.phone} onChange={e => updateFormData('phone', e.target.value)} placeholder="05__ ___ __ __" />
                </div>
                <div className="flex items-center gap-3 pt-4">
                  <input 
                    type="checkbox" 
                    id="kvkk"
                    checked={formData.kvkkConsent}
                    onChange={e => updateFormData('kvkkConsent', e.target.checked)}
                    className="w-5 h-5 rounded border-slate-600 text-orange-600 focus:ring-orange-500 bg-slate-800"
                  />
                  <label htmlFor="kvkk" className="text-sm text-slate-400 cursor-pointer select-none">
                    Kişisel verilerimin analiz amacıyla işlenmesini onaylıyorum.
                  </label>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* BUTONLAR */}
          <div className="flex justify-between mt-10 pt-6 border-t border-slate-800">
            <button
              onClick={() => setCurrentStep(p => p - 1)}
              disabled={currentStep === 1}
              className="px-6 py-3 rounded-lg text-slate-400 hover:text-white disabled:opacity-30 font-medium transition-colors flex items-center gap-2"
            >
              <ChevronLeft size={20} /> Geri
            </button>

            {currentStep < 5 ? (
              <button
                onClick={() => setCurrentStep(p => p + 1)}
                disabled={!isStepValid()}
                className="px-8 py-3 bg-orange-600 hover:bg-orange-700 disabled:bg-slate-800 disabled:text-slate-500 text-white rounded-lg font-bold transition-all flex items-center gap-2"
              >
                Devam Et <ChevronRight size={20} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!isStepValid() || isSubmitting}
                className="px-8 py-3 bg-green-600 hover:bg-green-700 disabled:bg-slate-800 text-white rounded-lg font-bold transition-all flex items-center gap-2"
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : <CheckCircle2 />}
                Analizi Başlat
              </button>
            )}
          </div>
        </Card>

        {/* Bilgi Kutusu */}
        <div className="mt-8 bg-slate-900/50 border border-slate-800 rounded-xl p-5 flex items-start gap-4">
          <MessageSquare className="text-orange-500 shrink-0 mt-1" />
          <div>
            <h4 className="text-white font-bold mb-1">Destek Hattı</h4>
            <p className="text-slate-400 text-sm mb-2">Formu doldururken takıldınız mı? WhatsApp üzerinden bize yazabilirsiniz.</p>
            <a href="https://wa.me/905336820942" className="text-green-500 hover:text-green-400 font-bold text-sm inline-flex items-center gap-1">WhatsApp'tan Yaz <ChevronRight size={14}/></a>
          </div>
        </div>

      </div>
    </div>
  );
}
