# İrem Ünal - Data Analyst Portfolio

Merhaba! Ben İrem Ünal, bir data analyst olarak portfolyo websitemi sizlerle paylaşıyorum. Modern ve minimal bir tasarımla projelerimi sergilemek için hazırladım.

## 🎨 Özellikler

- ✅ Minimal ve profesyonel tasarım
- ✅ Tamamen responsive (mobil, tablet, desktop)
- ✅ Tableau dashboard entegrasyonu
- ✅ Detaylı proje sayfaları
- ✅ Smooth scroll ve mobil menü
- ✅ SEO dostu yapı
- ✅ Hızlı yükleme

## 📁 Dosya Yapısı

```
portfolio/
│
├── index.html                          # Ana sayfa
├── style.css                           # Tüm stiller
├── script.js                           # JavaScript fonksiyonları
│
├── project-customer-churn.html         # Proje: Customer Churn Analysis
├── project-sales-dashboard.html        # Proje: Sales Performance Dashboard
├── project-sentiment-analysis.html     # Proje: Sentiment Analysis
├── project-supply-chain.html           # Proje: Supply Chain Optimization
│
└── README.md                           # Bu dosya
```

## 🚀 Nasıl Kullanılır

### GitHub Pages'de Yayınlama

1. GitHub'da yeni bir repository oluşturdum
2. Repository adını `kullaniciadi.github.io` yaptım
3. Tüm dosyaları bu repository'e yükledim
4. Settings > Pages bölümünden GitHub Pages'i aktif ettim
5. Birkaç dakika sonra sitem `https://kullaniciadi.github.io` adresinde yayına girdi!

## ✏️ Kendi Bilgilerinizi Nasıl Eklersiniz

### 1. Kişisel Bilgilerinizi Güncelleyin

**index.html** dosyasında şunları değiştirin:
- Hero bölümündeki başlık ve alt başlığı
- About bölümündeki tanıtım metnini
- Skills bölümündeki yetenekleri
- Contact bölümündeki email, LinkedIn, GitHub linklerini

### 2. Projelerinizi Ekleyin

**Ana sayfada (index.html):**
Projects bölümünde kendi projelerinizi ekleyebilirsiniz:

```html
<a href="yeni-proje.html" class="project-card">
    <h3 class="project-title">Proje Adı</h3>
    <p class="project-description">Kısa açıklama</p>
    <ul class="project-details">
        <li><span class="detail-label">Dataset:</span> Veri seti bilgisi</li>
        <li><span class="detail-label">Tools:</span> Kullanılan araçlar</li>
        <li><span class="detail-label">Outcome:</span> Sonuçlar</li>
    </ul>
</a>
```

### 3. Tableau Dashboard'larımı Nasıl Eklerim

Proje detay sayfalarında `YOUR_TABLEAU_PUBLIC_EMBED_URL` yazan yere kendi Tableau Public embed linkimi ekliyorum:

**Tableau Public'den embed link alma:**
1. Tableau Public'de dashboard'umu açıyorum
2. Share butonuna tıklıyorum
3. "Embed Code" seçeneğini seçiyorum
4. `src="..."` içindeki linki kopyalıyorum
5. Proje sayfasındaki placeholder'a yapıştırıyorum

```html
<iframe 
    src="https://public.tableau.com/views/YourDashboard/Dashboard1?:embed=y&:display_count=yes"
    width="100%" 
    height="100%" 
    frameborder="0"
    allowfullscreen>
</iframe>
```

### 4. Kendi Görsellerimi Nasıl Eklerim

**İki seçeneğim var:**

**Seçenek A: Doğrudan URL kullanırım**
```html
<img src="https://sirketadi.com/gorsel.png" alt="Açıklama">
```

**Seçenek B: Dosya yükleme (tercih ettiğim)**
1. Repository'mde `images` klasörü oluşturuyorum
2. Görsellerimi bu klasöre yüklüyorum
3. HTML'de şöyle kullanıyorum:
```html
<img src="images/gorsel.png" alt="Açıklama">
```

### 5. Yeni Proje Sayfası Nasıl Eklerim

1. Mevcut bir proje sayfasını kopyalıyorum (örn: `project-customer-churn.html`)
2. Yeni isimle kaydediyorum (örn: `yeni-projemiz.html`)
3. İçeriği kendi projeme göre düzenliyorum
4. Ana sayfadaki Projects bölümüne linkini ekliyorum

### 6. Renkleri Değiştirmek İstersem

**style.css** dosyasının başındaki `:root` bölümünde renkleri özelleştirebilirim:

```css
:root {
    --bg-main: #E6E6E4;        /* Ana arka plan */
    --bg-card: #F2F2F0;        /* Kart arka planı */
    --text-main: #111111;      /* Ana metin rengi */
    --text-muted: #6A6A6A;     /* Soluk metin */
    --border-soft: #D1D1CF;    /* Kenarlık rengi */
    --accent-soft: #9A9A9A;    /* Vurgu rengi */
}
```

## 📱 Responsive Tasarım

Sitem otomatik olarak farklı cihazlarda optimize görünüyor:
- **Desktop:** 900px+ geniş container
- **Tablet:** 768px - 900px arası
- **Mobil:** 768px ve altı (hamburger menü aktif)

## 🔧 Teknik Detaylar

- **HTML5** semantic markup
- **CSS3** modern özellikler (Grid, Flexbox)
- **Vanilla JavaScript** (framework yok)
- **Google Fonts:** Inter ve IBM Plex Mono
- **Özel font boyutları ve spacing** minimal estetik için

## 💡 Öğrendiklerim

1. **Görseller:** Yüksek kaliteli görseller kullanıyorum ama optimize ediyorum (PNG/JPG, 100KB altı ideal)
2. **Tableau:** Dashboard'larımı public yapmayı unutmuyorum yoksa embed çalışmıyor
3. **Git:** Her değişiklikten sonra commit + push yapıyorum
4. **Test:** Değişiklikleri önce local'de test ediyorum
5. **SEO:** Her sayfanın `<title>` tag'ini farklılaştırıyorum

## 📞 İletişim

Benimle iletişime geçmek isterseniz:
- Email: your.email@example.com
- LinkedIn: linkedin.com/in/yourprofile
- GitHub: github.com/yourusername

## 📄 Lisans

Bu portfolyo websitesi açık kaynaklıdır. İsteyen kullanabilir, düzenleyebilir ve paylaşabilir.

---

**Not:** Bu portfolyo sitesini yapay zeka destekli araçlar kullanarak oluşturdum ve kendi projelerime göre özelleştirdim. 🚀
