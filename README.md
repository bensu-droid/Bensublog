# Blog Sitesi — Kurulum Notları

## Yeni yazı eklemek (kolay yol)

`yazi-olusturucu.html` dosyasını çift tıklayıp tarayıcıda aç. Formu doldur,
"Kodu Oluştur"a bas. Çıkan iki kod bloğunu ekrandaki talimata göre kullan:
biri yeni yazı dosyası olur, diğeri yazilar.html'e eklenecek karttır.
Bu araç sadece senin için — sitede görünmüyor, kimse bulamaz.

## Dosya yapısı

```
site/
├── index.html          → Ana sayfa
├── yazilar.html         → Tüm yazıların listesi
├── hakkimda.html        → Hakkımda sayfası
├── iletisim.html        → İletişim sayfası
├── css/style.css        → Tüm tasarım burada
└── yazilar/
    └── ornek-yazi.html  → Şablon yazı — yeni yazı için bunu kopyala
```

## Kendi bilgilerinle değiştirmen gerekenler

- ✅ İsim tüm sayfalarda "Bensu" olarak güncellendi
- ✅ İletişim sayfası Instagram'a (@Lbensul) yönlendiriyor
- `hakkimda.html` içindeki köşeli parantezli `[ne hakkında yazdığını...]` kısmı → kendi konu tanımın
- İstersen `denemeler, gözlemler, arada kalan düşünceler` tagline'ını da değiştirebilirsin
- X (Twitter) hesabını açtığında, `iletisim.html` içindeki "Yakında buraya bir X hesabı da eklenecek" satırını bir linke çevirebiliriz

## Yeni yazı eklemek

1. `yazilar/ornek-yazi.html` dosyasını kopyala, yeni bir isimle kaydet
   (örn. `yazilar/ikinci-yazi.html` — Türkçe karakter ve boşluk kullanma, tire kullan)
2. İçindeki başlığı, tarihi, kategoriyi ve metni değiştir
3. `yazilar.html` dosyasına ve `index.html`'deki "Son Yazılar" bölümüne
   yeni bir `<li class="post-list-item">` bloğu ekle, en yeni yazı en üstte olacak şekilde

## Yayına alma (önerilen yol: GitHub Pages, ücretsiz)

1. github.com'da ücretsiz bir hesap aç
2. Yeni bir repository oluştur (örn. `bensu-blog`)
3. Bu klasördeki tüm dosyaları repository'ye yükle
   (GitHub'ın web arayüzünden sürükle-bırak ile de yapılabilir — git bilmene gerek yok)
4. Repository → Settings → Pages → "Deploy from branch" → main → Save
5. Birkaç dakika içinde siten `kullaniciadi.github.io/bensu-blog` adresinde yayında olur
6. bensu.com alan adını bağlamak için: Settings → Pages → "Custom domain" alanına
   `bensu.com` yaz, sonra domain'i satın aldığın sağlayıcıda (Natro, GoDaddy vb.)
   GitHub'ın verdiği talimatlara göre CNAME/A kayıtlarını ayarla
