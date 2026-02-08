import { Card, CardContent } from '@/components/ui/card';

export function Terms() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            Kullanım Koşulları
          </h1>

          <Card className="bg-navy-800 border-navy-600/50">
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">1. Kabul Edilmesi</h2>
                <p className="text-slate-400 leading-relaxed">
                  Web sitemizi kullanarak bu kullanım koşullarını kabul etmiş sayılırsınız. 
                  Koşulları kabul etmiyorsanız, lütfen sitemizi kullanmayın.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">2. Hizmet Tanımı</h2>
                <p className="text-slate-400 leading-relaxed">
                  KD Ankara, kentsel dönüşüm ve arsa geliştirme projelerinde analiz ve 
                  danışmanlık hizmetleri sunar. Hizmetlerimiz şunları içerir:
                </p>
                <ul className="list-disc list-inside text-slate-400 space-y-2 mt-4">
                  <li>Ön uygunluk analizi</li>
                  <li>Detaylı dönüşüm analiz raporu</li>
                  <li>Süreç yönetimi ve danışmanlık</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">3. Sorumluluk Sınırlaması</h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Aşağıdaki hususları kabul ve beyan edersiniz:
                </p>
                <ul className="list-disc list-inside text-slate-400 space-y-2">
                  <li>Sunduğumuz analizler ön bilgi niteliğindedir.</li>
                  <li>Kesin kararlar için resmi belgeler ve uzman görüşü gereklidir.</li>
                  <li>Emsal artışı veya imar değişikliği garanti edilmez.</li>
                  <li>Belediye ve resmi kurum onayları zorunludur.</li>
                  <li>Finansal projeksiyonlar tahmini değerlerdir.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">4. Fikri Mülkiyet</h2>
                <p className="text-slate-400 leading-relaxed">
                  Web sitemizdeki tüm içerik (metin, görsel, logo, vb.) KD Ankara'ya 
                  aittir. İzinsiz kullanımı yasaktır.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">5. Kullanıcı Yükümlülükleri</h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Kullanıcılar şunları taahhüt eder:
                </p>
                <ul className="list-disc list-inside text-slate-400 space-y-2">
                  <li>Doğru ve güncel bilgi sağlamak</li>
                  <li>Web sitesini yasal amaçlarla kullanmak</li>
                  <li>Başkalarının haklarına saygı göstermek</li>
                  <li>Güvenlik önlemlerini ihlal etmemek</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">6. Ücretlendirme</h2>
                <p className="text-slate-400 leading-relaxed">
                  Ön uygunluk analizi ücretsizdir. Detaylı hizmetler için ücretlendirme 
                  proje bazında belirlenir ve önceden bildirilir.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">7. İptal ve İade</h2>
                <p className="text-slate-400 leading-relaxed">
                  Hizmet iptalleri ve iade koşulları, hizmet sözleşmesinde belirtilen 
                  şartlara tabidir.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">8. Değişiklikler</h2>
                <p className="text-slate-400 leading-relaxed">
                  Bu koşullar zaman zaman güncellenebilir. Değişiklikler web sitemizde 
                  yayınlandığında yürürlüğe girer.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">9. Uygulanacak Hukuk</h2>
                <p className="text-slate-400 leading-relaxed">
                  Bu koşullar Türkiye Cumhuriyeti kanunlarına tabidir ve Ankara 
                  mahkemeleri yetkilidir.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">10. İletişim</h2>
                <p className="text-slate-400 leading-relaxed">
                  Sorularınız için{' '}
                  <a href="mailto:info@kdankara.com" className="text-orange-500 hover:underline">
                    info@kdankara.com
                  </a>{' '}
                  adresine yazabilirsiniz.
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
