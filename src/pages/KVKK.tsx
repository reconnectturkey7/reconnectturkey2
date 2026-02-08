import { Card, CardContent } from '@/components/ui/card';

export function KVKK() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            KVKK Aydınlatma Metni
          </h1>

          <Card className="bg-navy-800 border-navy-600/50">
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Veri Sorumlusu</h2>
                <p className="text-slate-400 leading-relaxed">
                  6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, 
                  kişisel verileriniz; veri sorumlusu olarak KD Ankara tarafından 
                  aşağıda açıklanan kapsamda işlenebilecektir.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">İşlenen Kişisel Veriler</h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Aşağıdaki kişisel verileriniz işlenebilmektedir:
                </p>
                <ul className="list-disc list-inside text-slate-400 space-y-2">
                  <li>Kimlik bilgileri (ad, soyad)</li>
                  <li>İletişim bilgileri (telefon, e-posta adresi)</li>
                  <li>Gayrimenkul bilgileri</li>
                  <li>IP adresi ve kullanım verileri</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Veri İşleme Amaçları</h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
                </p>
                <ul className="list-disc list-inside text-slate-400 space-y-2">
                  <li>Analiz ve danışmanlık hizmetlerinin sunulması</li>
                  <li>Müşteri ilişkileri yönetimi</li>
                  <li>Hukuki yükümlülüklerin yerine getirilmesi</li>
                  <li>Hizmet kalitesinin iyileştirilmesi</li>
                  <li>Bilgi güvenliği süreçlerinin yürütülmesi</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Veri Aktarımı</h2>
                <p className="text-slate-400 leading-relaxed">
                  Kişisel verileriniz, yasal yükümlülükler ve hizmet sağlayıcılarımız 
                  (sunucu, hosting, vb.) ile sınırlı olmak üzere aktarılabilir. 
                  Hizmet sağlayıcılarımız da KVKK'ya uygun hareket etmektedir.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Veri Saklama Süresi</h2>
                <p className="text-slate-400 leading-relaxed">
                  Kişisel verileriniz, işleme amaçlarının gerektirdiği süre boyunca 
                  ve yasal saklama süreleri dahilinde saklanmaktadır.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Haklarınız</h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
                </p>
                <ul className="list-disc list-inside text-slate-400 space-y-2">
                  <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                  <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                  <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                  <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
                  <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                  <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
                  <li>Düzeltme, silme veya yok etme taleplerinin kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
                  <li>İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
                  <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Başvuru Yöntemi</h2>
                <p className="text-slate-400 leading-relaxed">
                  Haklarınızı kullanmak için{' '}
                  <a href="mailto:info@kdankara.com" className="text-orange-500 hover:underline">
                    info@kdankara.com
                  </a>{' '}
                  adresine yazılı başvuruda bulunabilirsiniz. Başvurunuz en kısa sürede 
                  yanıtlanacaktır.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Çerezler</h2>
                <p className="text-slate-400 leading-relaxed">
                  Web sitemizde çerezler kullanılmaktadır. Çerezler, kullanıcı deneyimini 
                  iyileştirmek ve site kullanımını analiz etmek amacıyla kullanılır. 
                  Tarayıcı ayarlarınızdan çerezleri yönetebilirsiniz.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Güncellemeler</h2>
                <p className="text-slate-400 leading-relaxed">
                  Bu aydınlatma metni yasal düzenlemeler ve uygulamalar doğrultusunda 
                  güncellenebilir. Güncel versiyon web sitemizde yayınlanmaktadır.
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
