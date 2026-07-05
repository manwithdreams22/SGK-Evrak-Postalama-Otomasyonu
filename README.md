# SGK Evrak Servisi Postalama Otomasyonu

## Açıklama

Bu JavaScript betiği Sosyal Güvenlik Kurumu (SGK) Evrak Servisi BELGENET web arayüzünde bulunan evrakların postalama işlemlerini otomatik olarak gerçekleştirmek amacıyla geliştirilmiştir.

Kod tarayıcı(F12 DEVTOOLS) üzerinde çalıştırılarak kullanıcı tarafından manuel olarak yapılan tekrar eden işlemleri otomatik hale getirir. Böylece işlem süresi kısalır ve kullanıcı müdahalesi en aza indirilir.

## Çalışma Mantığı

Program aşağıdaki adımları sırayla uygular:

1. Gelen evrak listesindeki ilk kaydı seçer.
2. Evrak detay ekranının açılmasını bekler.
3. "Postala" butonuna tıklar.
4. Açılan onay penceresinde "Evet" butonuna basar.
5. İşlemin tamamlanmasını bekler.
6. Sonraki kayda geçerek aynı işlemleri tekrar eder.
7. Listede kayıt kalmadığında işlemi sonlandırır.

## Hata Yönetimi

Her kayıt bağımsız olarak işlenir.

Bir kayıt sırasında;

- ilgili buton bulunamazsa,
- sayfa beklenen şekilde yüklenmezse,
- herhangi bir JavaScript hatası oluşursa,

program hatayı konsola yazar ilgili kaydı atlar ve sonraki kayıtla işlemine devam eder.

## Bekleme Süreleri

Sayfaların tam yüklenebilmesi ve sistemin işlem süreleri dikkate alınarak çeşitli bekleme süreleri kullanılmıştır.

Varsayılan süreler:

- Evrak detayının açılması: 3 saniye
- Postalama onay ekranı: 2.5 saniye
- Postalama işleminin tamamlanması: 4 saniye
- Hata sonrası geri dönüş: 3 saniye

Gerekirse bu süreler sistem performansına göre güncellenebilir.

## Kullanım

1. SGK BELGENET Postalanmayı Bekleyenler ekranını açın.
2. Tarayıcı geliştirici araçlarını (Developer Tools) açın.
3. Console sekmesine geçin.
4. JavaScript kodunu yapıştırın.
5. Eğer uyarı çıkar ve yapıştırılmaz ise consoleye 'allow pasting' yazınız.
6. Enter tuşuna basarak çalıştırın.

Program mevcut listedeki kayıtları sırayla işlemeye başlayacaktır.

## Konsol Çıktıları

Program çalışma sırasında aşağıdaki bilgilendirmeleri yapar.

```
0. kayda tıklanıyor
0. kayıt tamamlandı
1. kayda tıklanıyor
1. kayıt tamamlandı
...
Bitti
```

Hata oluşursa örnek çıktı:

```
5. kayıtta hata, geçiliyor
```

## Notlar

- Bu betik yalnızca SGK Evrak Servisi ekran yapısına uygun olarak geliştirilmiştir.
- Sayfadaki HTML id değerlerinin değişmesi durumunda seçicilerin güncellenmesi gerekir.
- Program, kullanıcı oturumu açık olduğu sürece çalışır.
- Tarayıcı konsolu üzerinden çalıştırılması amaçlanmıştır.
- İşlem sırasında sayfanın kapatılmaması önerilir.

## Amaç

Bu proje, SGK Evrak Servisi üzerinde gerçekleştirilen tekrar eden postalama işlemlerini otomatikleştirerek işlem süresini azaltmak ve kullanıcı verimliliğini artırmak amacıyla geliştirilmiştir.

## UYARI !!

Proje Postalanmayı Bekleyenler Sayfasındaki tüm postaları postalamak amacıyla geliştirilmiştir. kontrol edilmesi gereken postaları siz kontrol etmeden postalayabilir projenin yarattığı sorunlar sorumluluğum dahilinde değildir.

Projeyi Bilgi İşlem Servisinize danıştıktan sonra kullanınız. Proje BELGENET üzerinde çalışması için tasarlanmıştır BELGENET aksamaları yüzünden program yoldan çıkabilir. BELGENET aksamaları sorumluluğum dahilinde değildir
