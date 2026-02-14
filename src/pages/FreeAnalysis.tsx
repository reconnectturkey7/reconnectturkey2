import React, { useState } from 'react';

const FreeAnalysis = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusColor, setStatusColor] = useState('');

  // Webhook URL
  const scriptURL = 'https://script.google.com/macros/s/AKfycbybyxuN7PcFHKp2iYEJyTmJiC9M2MMp0_eMwvN2DHXohaQoiT9JEmuk2FFg4P-JGo_4/exec';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('Analiz talebiniz merkeze iletiliyor...');
    setStatusColor('#3498db'); // Mavi bilgilendirme

    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(() => {
        setStatusMessage('BAŞVURUNUZ ALINDI. Uzman ekibimiz teknik dosyayı hazırlıyor.');
        setStatusColor('#27ae60'); // Yeşil onay
        form.reset();
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error!', error.message);
        setStatusMessage('Sistem yoğunluğu var. Lütfen WhatsApp hattımızdan ulaşın.');
        setStatusColor('#c0392b'); // Kırmızı hata
        setIsLoading(false);
      });
  };

  // Tasarım Stilleri (CSS-in-JS)
  const styles = {
    pageContainer: {
      background: 'linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)', // Modern Gradient Arkaplan
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    },
    card: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '20px',
      boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
      maxWidth: '800px',
      width: '100%',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column' as 'column', // TypeScript fix
    },
    header: {
      background: '#2c3e50',
      padding: '40px',
      textAlign: 'center' as 'center',
      borderBottom: '5px solid #e67e22' // KD Ankara Turuncusu
    },
    headerTitle: {
      color: '#fff',
      margin: 0,
      fontSize: '28px',
      fontWeight: '700',
      letterSpacing: '1px'
    },
    headerSubtitle: {
      color: '#bdc3c7',
      marginTop: '10px',
      fontSize: '16px',
      fontWeight: '300'
    },
    formBody: {
      padding: '40px',
    },
    inputGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontSize: '13px',
      fontWeight: '600',
      color: '#34495e',
      textTransform: 'uppercase' as 'uppercase'
    },
    input: {
      width: '100%',
      padding: '15px',
      border: '2px solid #ecf0f1',
      borderRadius: '8px',
      fontSize: '15px',
      transition: 'border-color 0.3s',
      outline: 'none',
      boxSizing: 'border-box' as 'border-box'
    },
    gridTwo: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px'
    },
    highlightBox: {
      backgroundColor: '#fffcf0',
      border: '1px dashed #f39c12',
      padding: '20px',
      borderRadius: '10px',
      marginBottom: '20px'
    },
    button: {
      width: '100%',
      padding: '18px',
      backgroundColor: isLoading ? '#95a5a6' : '#c0392b', // Startkey Kırmızısı
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: isLoading ? 'not-allowed' : 'pointer',
      boxShadow: '0 4px 15px rgba(192, 57, 43, 0.4)',
      transition: 'transform 0.2s',
      marginTop: '10px'
    },
    statusBox: {
      marginTop: '20px',
      padding: '15px',
      borderRadius: '8px',
      backgroundColor: statusColor,
      color: '#fff',
      textAlign: 'center' as 'center',
      fontWeight: 'bold',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.card}>
        
        {/* Header Kısmı */}
        <div style={styles.header}>
          <h2 style={styles.headerTitle}>GAYRİMENKUL ANALİZ RAPORU</h2>
          <p style={styles.headerSubtitle}>Arsanızın gerçek potansiyelini "KD Ankara" güvencesiyle keşfedin.</p>
        </div>

        {/* Form Alanı */}
        <div style={styles.formBody}>
          <form onSubmit={handleSubmit}>
            
            {/* Kişisel Bilgiler */}
            <div style={styles.gridTwo}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Ad Soyad / Kurum</label>
                <input style={styles.input} type="text" name="adsoyad" required placeholder="Tam Adınız" />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>İletişim (WhatsApp)</label>
                <input style={styles.input} type="tel" name="telefon" required placeholder="05__ ___ __ __" />
              </div>
            </div>

            {/* Tapu Bilgileri - Önemli Alan */}
            <div style={styles.highlightBox}>
              <p style={{margin: '0 0 15px 0', color: '#e67e22', fontWeight: 'bold', fontSize: '14px'}}>📍 TEKNİK DETAYLAR (Eksiksiz doldurunuz)</p>
              <div style={styles.gridTwo}>
                <div style={styles.inputGroup}>
                  <input style={{...styles.input, borderColor: '#f39c12'}} type="text" name="bolge" placeholder="İlçe / Mahalle (Örn: Çankaya)" required />
                </div>
                <div style={styles.inputGroup}>
                  <input style={{...styles.input, borderColor: '#f39c12'}} type="text" name="adaparsel" placeholder="Ada / Parsel No" required />
                </div>
              </div>
            </div>

            {/* Mülkiyet Durumu */}
            <div style={styles.inputGroup}>
              <label style={styles.label}>Mülkiyet Durumu</label>
              <select name="mulkiyet" style={{...styles.input, backgroundColor: '#fff'}} defaultValue="">
                <option value="" disabled>Lütfen Seçiniz</option>
                <option value="Arsa Sahibi">Arsa Sahibi (Tek/Hisseli)</option>
                <option value="Bina Sakini">Kat Maliki / Bina Yöneticisi</option>
                <option value="Yatırımcı">Yatırımcı / Alıcı</option>
              </select>
            </div>

            {/* Notlar */}
            <div style={styles.inputGroup}>
              <label style={styles.label}>Özel İstekler & Beklentiler</label>
              <textarea 
                name="notlar" 
                style={{...styles.input, height: '100px', fontFamily: 'inherit'}} 
                placeholder="Örn: Kat karşılığı %50 istiyoruz, nakit satış düşünüyoruz..."
              ></textarea>
            </div>

            {/* Buton */}
            <button type="submit" style={styles.button} disabled={isLoading}>
              {isLoading ? "SİSTEM İŞLİYOR..." : "ÜCRETSİZ ANALİZİ BAŞLAT"}
            </button>

            {/* Sonuç Mesajı */}
            {statusMessage && (
              <div style={styles.statusBox}>
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
