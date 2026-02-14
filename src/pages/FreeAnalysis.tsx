import React, { useState } from 'react';

const FreeAnalysis = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusColor, setStatusColor] = useState('');

  // Google Script Webhook URL
  const scriptURL = 'https://script.google.com/macros/s/AKfycbybyxuN7PcFHKp2iYEJyTmJiC9M2MMp0_eMwvN2DHXohaQoiT9JEmuk2FFg4P-JGo_4/exec';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('Verileriniz şifreli olarak analiz merkezine iletiliyor...');
    setStatusColor('#2980b9'); // Bilgilendirme Mavisi

    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(() => {
        setStatusMessage('BAŞVURUNUZ ALINDI. Uzman ekibimiz 48 saat içinde size rapor sunacak.');
        setStatusColor('#27ae60'); // Onay Yeşili
        form.reset();
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error!', error.message);
        setStatusMessage('Bir hata oluştu. Lütfen doğrudan ofisimizle iletişime geçin.');
        setStatusColor('#c0392b'); // Hata Kırmızısı
        setIsLoading(false);
      });
  };

  // Kurumsal Renk Paleti (KD Ankara)
  const colors = {
    primary: '#2c3e50', // Antrasit (Ana Başlıklar)
    accent: '#e67e22',  // Turuncu (Butonlar/Vurgular)
    bg: '#f8f9fa',      // Açık Gri (Arkaplan)
    white: '#ffffff',
    border: '#dfe6e9',
    text: '#7f8c8d'
  };

  // Basit Stil Objeleri
  const styles = {
    container: {
      backgroundColor: colors.bg,
      minHeight: '100vh',
      fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'center',
      paddingBottom: '50px'
    },
    topBar: {
      width: '100%',
      backgroundColor: colors.white,
      borderBottom: `1px solid ${colors.border}`,
      padding: '15px 0',
      textAlign: 'center' as 'center',
      marginBottom: '40px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
    },
    logoText: {
      color: colors.primary,
      fontSize: '24px',
      fontWeight: '800',
      textDecoration: 'none',
      letterSpacing: '-0.5px'
    },
    contentWrapper: {
      maxWidth: '800px',
      width: '90%',
      backgroundColor: colors.white,
      borderRadius: '8px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
      overflow: 'hidden',
      border: `1px solid ${colors.border}`
    },
    headerSection: {
      padding: '40px 40px 20px 40px',
      textAlign: 'center' as 'center',
      borderBottom: `1px solid ${colors.border}`
    },
    mainTitle: {
      color: colors.primary,
      fontSize: '28px',
      fontWeight: '700',
      margin: '0 0 10px 0'
    },
    subTitle: {
      color: colors.text,
      fontSize: '16px',
      lineHeight: '1.5'
    },
    formSection: {
      padding: '40px'
    },
    inputGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      color: colors.primary,
      fontWeight: '600',
      fontSize: '14px'
    },
    input: {
      width: '100%',
      padding: '12px 15px',
      borderRadius: '4px',
      border: `1px solid ${colors.border}`,
      fontSize: '15px',
      color: '#333',
      backgroundColor: '#fff',
      boxSizing: 'border-box' as 'border-box',
      transition: 'border-color 0.2s'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr', // Mobilde bunu medya sorgusu ile değiştirmek gerekebilir ama şimdilik standart bırakalım.
      gap: '20px'
    },
    infoBox: {
      backgroundColor: '#fff8e1', // Çok açık sarı/turuncu
      borderLeft: `4px solid ${colors.accent}`,
      padding: '15px',
      marginBottom: '25px',
      fontSize: '14px',
      color: '#856404'
    },
    submitButton: {
      width: '100%',
      padding: '16px',
      backgroundColor: isLoading ? '#95a5a6' : colors.accent,
      color: colors.white,
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: isLoading ? 'not-allowed' : 'pointer',
      transition: 'background 0.3s'
    },
    trustBadges: {
      marginTop: '30px',
      paddingTop: '20px',
      borderTop: `1px solid ${colors.border}`,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      color: '#bdc3c7',
      fontSize: '12px',
      textAlign: 'center' as 'center'
    },
    statusBox: {
      marginTop: '20px',
      padding: '15px',
      borderRadius: '4px',
      backgroundColor: statusColor,
      color: colors.white,
      textAlign: 'center' as 'center',
      fontWeight: 'bold'
    },
    backLink: {
      display: 'inline-block',
      marginTop: '20px',
      color: colors.text,
      textDecoration: 'none',
      fontSize: '14px'
    }
  };

  return (
    <div style={styles.container}>
      
      {/* Üst Menü Simülasyonu */}
      <div style={styles.topBar}>
        <a href="/" style={styles.logoText}>KD <span style={{color: colors.accent}}>ANKARA</span></a>
      </div>

      <div style={styles.contentWrapper}>
        
        {/* Başlık */}
        <div style={styles.headerSection}>
          <h1 style={styles.mainTitle}>Ücretsiz Dönüşüm Analizi</h1>
          <p style={styles.subTitle}>
            Arsanızın veya binanızın potansiyelini "veri odaklı" algoritmamızla hesaplayın. 
            <br />Tamamen şeffaf, tamamen teknik.
          </p>
        </div>

        {/* Form */}
        <div style={styles.formSection}>
          <form onSubmit={handleSubmit}>
            
            <div style={styles.grid}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Ad Soyad / Kurum</label>
                <input required type="text" name="adsoyad" style={styles.input} placeholder="Tam Adınız" />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Telefon (WhatsApp)</label>
                <input required type="tel" name="telefon" style={styles.input} placeholder="05__ ___ __ __" />
              </div>
            </div>

            <div style={styles.infoBox}>
              <strong>Teknik Analiz İçin Gereklidir:</strong> Lütfen Ada/Parsel numarasını tapunuzda yazdığı şekilde giriniz.
            </div>

            <div style={styles.grid}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>İlçe / Mahalle</label>
                <input required type="text" name="bolge" style={styles.input} placeholder="Örn: Çankaya / Büyükesat" />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Ada / Parsel No</label>
                <input required type="text" name="adaparsel" style={styles.input} placeholder="Örn: 26231 / 8" />
              </div>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Mülkiyet Durumu</label>
              <select name="mulkiyet" style={styles.input} defaultValue="">
                <option value="" disabled>Seçiniz</option>
                <option value="Arsa Sahibi">Arsa Sahibi</option>
                <option value="Kat Maliki">Kat Maliki (Bina Sakini)</option>
                <option value="Yatırımcı">Yatırımcı / Müteahhit</option>
              </select>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Eklemek İstedikleriniz</label>
              <textarea 
                name="notlar" 
                style={{...styles.input, height: '100px', resize: 'vertical'}} 
                placeholder="Özel bir beklentiniz veya notunuz varsa belirtiniz..."
              ></textarea>
            </div>

            <button type="submit" style={styles.submitButton}>
              {isLoading ? "ANALİZ BAŞLATILIYOR..." : "ÜCRETSİZ ANALİZİ TALEP ET"}
            </button>

            {statusMessage && (
              <div style={styles.statusBox}>
                {statusMessage}
              </div>
            )}

            {/* Güven Rozetleri */}
            <div style={styles.trustBadges}>
              <div>
                <span style={{display: 'block', fontSize: '20px'}}>🔒</span>
                KVKK Uyumlu
              </div>
              <div>
                <span style={{display: 'block', fontSize: '20px'}}>📊</span>
                Veri Tabanlı Analiz
              </div>
              <div>
                <span style={{display: 'block', fontSize: '20px'}}>🛡️</span>
                %100 Gizlilik
              </div>
            </div>

          </form>
        </div>
      </div>
      
      <a href="/" style={styles.backLink}>← Ana Sayfaya Dön</a>
    </div>
  );
};

export default FreeAnalysis;
