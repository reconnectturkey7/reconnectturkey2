import React, { useState } from 'react';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusColor, setStatusColor] = useState('');

  // Senin oluşturduğun Webhook URL
  const scriptURL = 'https://script.google.com/macros/s/AKfycbybyxuN7PcFHKp2iYEJyTmJiC9M2MMp0_eMwvN2DHXohaQoiT9JEmuk2FFg4P-JGo_4/exec';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('Gönderiliyor...');
    setStatusColor('blue');

    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => {
        setStatusMessage('Başvurunuz alındı! Ekibimiz 48 saat içinde size dönecek.');
        setStatusColor('green');
        form.reset();
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error!', error.message);
        setStatusMessage('Hata oluştu! Lütfen WhatsApp\'tan ulaşın.');
        setStatusColor('red');
        setIsLoading(false);
      });
  };

  return (
    <div className="contact-page" style={{ padding: '40px 20px', background: '#f4f4f4', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      
      <div style={{ maxWidth: '600px', width: '100%', padding: '30px', background: '#fff', borderLeft: '5px solid #2c3e50', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
        
        <h3 style={{ color: '#2c3e50', fontFamily: 'Helvetica Neue, sans-serif', marginBottom: '10px' }}>
          Ücretsiz Gayrimenkul Analizi
        </h3>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
          Parseliniz için teknik ve finansal potansiyel raporu hazırlıyoruz.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '15px' }}>
          
          <input 
            type="text" 
            name="adsoyad" 
            placeholder="Adınız Soyadınız" 
            required 
            style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '4px', width: '100%' }} 
          />
          
          <input 
            type="tel" 
            name="telefon" 
            placeholder="Telefon Numaranız (WhatsApp)" 
            required 
            style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '4px', width: '100%' }} 
          />
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <input 
              type="text" 
              name="bolge" 
              placeholder="İlçe / Mahalle" 
              style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '4px', width: '100%' }} 
            />
            <input 
              type="text" 
              name="adaparsel" 
              placeholder="Ada / Parsel No" 
              required 
              style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#fff3cd', width: '100%' }} 
            />
          </div>

          <select 
            name="mulkiyet" 
            defaultValue="" 
            style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '4px', width: '100%' }}
          >
            <option value="" disabled>Mülkiyet Durumu</option>
            <option value="Arsa Sahibi">Arsa Sahibi</option>
            <option value="Bina Sakini">Bina Sakini / Yönetici</option>
            <option value="Emlakçı/Aracı">Emlakçı / Aracı</option>
          </select>

          <textarea 
            name="notlar" 
            placeholder="Özel notlarınız veya beklentileriniz..." 
            style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '4px', height: '80px', width: '100%' }}
          ></textarea>

          <button 
            type="submit" 
            disabled={isLoading}
            style={{ 
              backgroundColor: isLoading ? '#95a5a6' : '#c0392b', 
              color: 'white', 
              padding: '15px', 
              border: 'none', 
              borderRadius: '4px', 
              fontWeight: 'bold', 
              cursor: isLoading ? 'not-allowed' : 'pointer', 
              transition: 'background 0.3s' 
            }}
          >
            {isLoading ? "GÖNDERİLİYOR..." : "ANALİZİ BAŞLAT"}
          </button>

          {statusMessage && (
            <p style={{ textAlign: 'center', marginTop: '10px', fontWeight: 'bold', color: statusColor }}>
              {statusMessage}
            </p>
          )}

        </form>
      </div>
    </div>
  );
};

export default Contact;
