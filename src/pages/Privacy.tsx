import { Card, CardContent } from '@/components/ui/card';

export function Privacy() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            Gizlilik Politikası
          </h1>

          <Card className="bg-navy-800 border-navy-600/50">
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">1. Giriş</h2>
                <p className="text-slate-400 leading-relaxed">
                  KD Ankara olarak, kullanıcılarımızın gizliliğine büyük önem veriyoruz. 
                  Bu Gizlilik Politikası, web sitemizi kullanırken topladığımız bilgilerin 
                  nasıl kullanıldığını, saklandığını ve korunduğunu açıklamaktadır.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">2. Toplanan Bilgiler</h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Aşağıdaki bilgileri toplayabiliriz:
                </p>
                <ul className="list-disc list-inside text-slate-400 space-y-2">
                  <li>Ad, soyad, iletişim bilgileri (telefon, e-posta)</li>
                  <li>Gayrimenkul bilgileri (konum, ada/parsel, vb.)</li>
                  <li>IP adresi ve tarayıcı bilgileri</li>
                  <li>Web sitesi kullanım istatistikleri</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">3. Bilgilerin Kullanımı</h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Topladığımız bilgileri şu amaçlarla kullanıyoruz:
                </p>
                <ul className="list-disc list-inside text-slate-400 space-y-2">
                  <li>Analiz ve danışmanlık hizmetlerinin sunulması</li>
                  <li>Müşteri iletişimi ve destek</li>
                  <li>Hizmet kalitesinin iyileştirilmesi</li>
                  <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">4. Bilgi Güvenliği</h2>
                <p className="text-slate-400 leading-relaxed">
                  Bilgilerinizin güvenliğini sağlamak için uygun teknik ve organizasyonel 
                  önlemler alıyoruz. Ancak, internet üzerinden veri iletiminin tamamen 
                  güvenli olduğunu garanti edemeyiz.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">5. Üçüncü Taraflarla Paylaşım</h2>
                <p className="text-slate-400 leading-relaxed">
                  Bilgilerinizi, yasal zorunluluklar dışında, izniniz olmadan üçüncü 
                  taraflarla paylaşmıyoruz. Hizmet sağlayıcılarımız da gizlilik 
                  yükümlülüklerine tabidir.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">6. Haklarınız</h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  KVKK kapsamında aşağıdaki haklara sahipsiniz:
                </p>
                <ul className="list-disc list-inside text-slate-400 space-y-2">
                  <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                  <li>Kişisel verileriniz düzeltilmesini isteme</li>
                  <li>Kişisel verilerinizin silinmesini isteme</li>
                  <li>İşlemeye itiraz etme</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">7. İletişim</h2>
                <p className="text-slate-400 leading-relaxed">
                  Gizlilik politikamız hakkında sorularınız için{' '}
                  <a href="mailto:info@kdankara.com" className="text-orange-500 hover:underline">
                    info@kdankara.com
                  </a>{' '}
                  adresine yazabilirsiniz.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">8. Güncellemeler</h2>
                <p className="text-slate-400 leading-relaxed">
                  Bu politika zaman zaman güncellenebilir. Değişiklikler web sitemizde 
                  yayınlanacaktır.
                </p>
              </section>

              <p className="text-slate-500 text-sm">
                Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
