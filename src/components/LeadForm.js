import { useState } from 'react';

export default function LeadForm({ kaynak = 'Genel', onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    adSoyad: '',
    telefon: '',
    email: '',
    adaParsel: '',
    ilce: '',
    mahalle: '',
    mulkDurumu: 'Mulk Sahibi',
    ekBilgi: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Google Apps Script URL'in - DEPLOY SONRASI GUNCELLE
    const SCRIPT_URL = 'https://script.google.com/macros/s/SENIN_SCRIPT_ID/exec';
    
    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          kaynak: kaynak
        })
      });
      
      const result = await response.json();
      
      if (result.status === 'success') {
        setSubmitted(true);
        if (onSuccess) onSuccess();
      }
    } catch (error) {
      console.error('Hata:', error);
      alert('Bir hata oluştu. Lütfen WhatsApp üzerinden ulaşın.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Başvurunuz Alındı!</h3>
        <p className="text-green-700">
          72 saat içinde uzman ekibimiz size dönüş yapacak.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-4 text-green-600 underline"
        >
          Yeni başvuru yap
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ad Soyad *
          </label>
          <input
            type="text"
            required
            value={formData.adSoyad}
            onChange={(e) => setFormData({...formData, adSoyad: e.target.value})}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Adınız Soyadınız"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Telefon *
          </label>
          <input
            type="tel"
            required
            value={formData.telefon}
            onChange={(e) => setFormData({...formData, telefon: e.target.value})}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="05XX XXX XX XX"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="ornek@email.com"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ada / Parsel No
          </label>
          <input
            type="text"
            value={formData.adaParsel}
            onChange={(e) => setFormData({...formData, adaParsel: e.target.value})}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="123/4"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            İlçe
          </label>
          <input
            type="text"
            value={formData.ilce}
            onChange={(e) => setFormData({...formData, ilce: e.target.value})}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Çankaya"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mahalle
          </label>
          <input
            type="text"
            value={formData.mahalle}
            onChange={(e) => setFormData({...formData, mahalle: e.target.value})}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Kızılay"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Mülk Durumu
        </label>
        <select
          value={formData.mulkDurumu}
          onChange={(e) => setFormData({...formData, mulkDurumu: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="Mulk Sahibi">Mülk Sahibiyim</option>
          <option value="Kiraci">Kiracıyım</option>
          <option value="Potansiyel Yatirimci">Potansiyel Yatırımcıyım</option>
          <option value="Emlakci">Emlakçıyım</option>
          <option value="Diger">Diğer</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Ek Bilgi
        </label>
        <textarea
          rows={3}
          value={formData.ekBilgi}
          onChange={(e) => setFormData({...formData, ekBilgi: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Bina yaşı, kat sayısı, özel durumlar..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all ${
          loading 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
        }`}
      >
        {loading ? 'Gönderiliyor...' : 'Ücretsiz Analiz İsteği Gönder'}
      </button>
      
      <p className="text-xs text-gray-500 text-center">
        * Bilgileriniz 3. şahıslarla paylaşılmaz. WhatsApp üzerinden de ulaşabilirsiniz: 0533 682 09 42
      </p>
    </form>
  );
}
