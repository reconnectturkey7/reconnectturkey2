import React, { useState } from 'react';

const FreeAnalysis = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusColor, setStatusColor] = useState('');

  // Google Apps Script Webhook URL'imiz
  const scriptURL = 'https://script.google.com/macros/s/AKfycbybyxuN7PcFHKp2iYEJyTmJiC9M2MMp0_eMwvN2DHXohaQoiT9JEmuk2FFg4P-JGo_4/exec';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('Analiz talebiniz iletiliyor...');
    setStatusColor('blue');

    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(() => {
        setStatusMessage('Talebiniz alındı! Uzmanlarımız 48 saat içinde size rapor sunacak.');
        setStatusColor('green');
        form.reset();
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error!', error.message);
        setStatusMessage('Bir hata oluştu. Lütfen WhatsApp üzerinden iletişime geçin.');
        setStatusColor('red');
        setIsLoading(false);
      });
  };

  return (
    <div className="analysis-page" style={{ padding: '40px 20px', background: '#ecf0f1', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      
      <div style={{ maxWidth: '700px', width: '100%', background: '#fff', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        
        {/* Üst Başlık Alanı */}
        <div style={{ background: '#2c3e50', padding: '30px', textAlign: 'center' }}>
          <h2 style={{ color: '#ecf0f1', margin: 0, fontSize: '24px', fontFamily: 'Helvetica Neue, sans-serif' }}>
            KD ANKARA | Parsel Analizi
          </h2>
          <p style={{ color: '#bdc3c7', marginTop: '10px', fontSize: '14px' }}>
            Arsanızın veya binanızın gerçek dönüşüm değerini öğrenin.
          </p>
        </div>

        {/* Form Alanı */}
        <div style={{ padding: '30px' }}>
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
            
            {/* Kişisel Bilgiler */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px', fontWeight: 'bold', color: '#7f8c8d' }}>AD SOYAD</label>
                <input 
                  type="text" 
                  name="adsoyad" 
                  required 
                  style={{ width: '100%', padding: '12px', border: '1px solid #dfe6e9', borderRadius: '6px', background: '#f9f9f9' }} 
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px', fontWeight: 'bold', color: '#7f8c8d' }}>TELEFON (WhatsApp)</label>
                <input 
                  type="tel" 
                  name="telefon" 
                  required 
                  style={{ width: '100%', padding: '12px', border: '1px solid #dfe6e9', borderRadius: '6px', background: '#f9f9f9' }} 
                />
              </div>
            </div>

            {/* Konum Bilgileri */}
            <div style={{ background: '#fff3cd', padding: '15px', borderRadius: '8px', border: '1px solid #ffeeba' }}>
              <p style={{ margin: '0 0 10px 0', fontSize: '12px', color: '#856404', fontWeight: 'bold' }}>📍 TAPU BİLGİLERİ (Zorunlu)</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <input 
                  type="text" 
                  name="bolge" 
                  placeholder="İlçe / Mahalle (Örn: Çankaya)" 
                  required
                  style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '6px' }} 
                />
                <input 
                  type="text" 
                  name="adaparsel" 
                  placeholder="Ada / Parsel No" 
                  required 
                  style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '6px' }} 
                />
              </div>
            </div>

            {/* Mülkiyet Durumu */}
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px', fontWeight: 'bold', color: '#7f8c8d' }}>SİZİN DURUMUNUZ</label>
              <select 
                name="mulkiyet" 
                defaultValue="" 
                style={{ width: '100%', padding: '12px', border: '1px solid #dfe6e9', borderRadius: '6px', background: '#fff' }}
              >
                <option value="" disabled>Seçiniz</option>
                <option value="Arsa Sahibi">Arsa Sahibi</option>
                <option value="Kat Maliki">Kat Maliki / Bina Sakini</option>
                <option value="Müteahhit/Yatırımcı">Müteahhit / Yatırımcı</option>
                <option value="Emlakçı">Emlak Ofisi</option>
              </select>
            </div>

            {/* Notlar */}
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px', fontWeight: 'bold', color: '#7f8c8d' }}>ÖZEL NOTLAR & BEKLENTİLER</label>
              <textarea 
                name="notlar" 
                placeholder="Örn: Kat karşılığı oran beklentim %50..." 
                style={{ width: '100%', padding: '12px', border: '1px solid #dfe6e9', borderRadius: '6px', height: '100px', fontFamily: 'inherit' }}
              ></textarea>
            </div>

            {/* Gönder Butonu */}
            <button 
              type="submit" 
              disabled={isLoading}
              style={{ 
                backgroundColor: isLoading ? '#95a5a6' : '#e67e22', // KD Ankara Turuncusu
                color: 'white', 
                padding: '16px', 
                border: 'none', 
                borderRadius: '6px', 
                fontWeight: 'bold', 
                fontSize: '16px',
                cursor: isLoading ? 'not-allowed' : 'pointer', 
                transition: 'all 0.3s',
                marginTop: '10px'
              }}
            >
              {isLoading ? "İŞLENİYOR..." : "ÜCRETSİZ ANALİZİ BAŞLAT"}
            </button>

            {/* Durum Mesajı */}
            {statusMessage && (
              <div style={{ 
                marginTop: '15px', 
                padding: '10px', 
                borderRadius: '4px', 
                backgroundColor: statusColor === 'green' ? '#d4edda' : statusColor === 'red' ? '#f8d7da' : '#cce5ff',
                color: statusColor === 'green' ? '#155724' : statusColor === 'red' ? '#721c24' : '#004085',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '14px'
              }}>
                {statusMessage}
              </div>
            )}

          </form>
        </div>
      </div>
    </div>
  );
};

export default FreeAnalysis;
