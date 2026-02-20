---
trigger: model_decision
description: this description should be used when updating critical changes in the 20.02.2026 workspace
---

LYNC (Social Shield) - Geliştirici ve Uygulama Kuralları
Bu belge, LYNC uygulamasının geliştirilmesi sırasındaki çalışma prensiplerini, algoritma kurallarını ve versiyon kontrol (GitHub) stratejisini içerir. Yapay Zeka asistanları bu kuralları kesin bir şekilde uygulamakla yükümlüdür.

1. Versiyon Kontrol ve GitHub Kuralları (ZORUNLU)
Geçmişteki veri kaybı sorunlarını önlemek amacıyla aşağıdaki kurallar istisnasız uygulanacaktır:

Düzenli Commit: Her anlamlı kod parçası (örneğin tek bir sayfanın tamamlanması, bir component'in eklenmesi, bug çözümü) başarıyla test edildikten sonra derhal commit edilmelidir.
Büyük Hamleler Öncesi Geri Dönüş Noktası (Restore Point): Projenin mimarisini değiştirecek, kütüphane ekleyecek veya büyük bir entegrasyon (örn: Supabase bağlama, auth akışını değiştirme) yapılacaksa, bu işlemden hemen önce mutlaka git add . && git commit -m "chore: savepoint before [X feature]" şeklinde commit atılmalı ve pushlanmalıdır.
Açıklayıcı Mesajlar: Commit mesajları anlaşılır olmalı ve neyin yapıldığını tam olarak belirtmelidir (Örn: feat: add swipe calibration screen).
Sürekli Push: Sadece local commit yeterli değildir. Her başarılı commit adımından sonra kodlar git push origin main ile uzak sunucuya yedeklenmelidir.
2. Uygulama İçi Algoritma ve Core Logics
LYNC uygulamasının MVP aşamasındaki temel özellikleri ve bu özelliklerin arka plandaki çalışma mantıkları aşağıda tanımlanmıştır:

A. Eşleşme (Matching) Algoritması (Social Tab)
Kullanıcıların Ana Dili (Native) ve Öğrenmek İstedikleri Dil (Learning) çapraz eşlenir.
Örnek: İngilizce öğrenmek isteyen ve ana dili İspanyolca olan (User A) ile İspanyolca öğrenmek isteyen ve ana dili İngilizce olan (User B) öncelikli eşleşir.
Ortak ilgi alanları (Calibration aşamasında belirlenen B2 seviye iş ingilizcesi vb.) profilleri feed'de öne çıkarır.
Mesafe hesabı şimdilik (MVP) öncelikli değildir, ancak UI'da "X miles away" olarak gösterilir. Gerçek algoritmada dil uyumu > ilgi alanı > mesafe şeklinde sıralanır.
B. Gamification & XP Sistemi (Learn Tab)
Streak (Günlük Seri): Kullanıcı uygulamaya her gün arka arkaya girdiğinde Streak artar. 1 gün girilmezse Streak sıfırlanır.
Flashcards (Kelime Kartları):
Kartı başarılı tamamlama (Swipe-Right / Learn): +10 XP
Kartı atlama (Swipe-Left / Skip): +0 XP
Belirli bir XP limitine (örn: 100 XP) ulaştıktan sonra yeni seviyelere geçilir.
Kullanıcılar öğrendikleri kelime sayılarını profil ekranlarında sergilerler. Bu sayılar backend tarafında (Supabase) tutulacak ve her başarılı "Learn" işleminde increment (artış) edilecektir.
C. İletişim Kuralları (Messages Tab)
Sadece her iki taraf da eşleşmeyi onayladığında (Match) mesajlaşma ekranı açılır.
İlk aşamada (MVP) güvenlik/sansür algoritmaları aktif değildir ancak tasarımda bu yapıların yeri (Report/Block butonları) hazır bulundurulmalıdır.
D. Kullanıcı Profili (Profile Tab)
Native ve Learning dillerinde herhangi bir seviye kısıtlaması (Native, Beginner, B1, vb.) sadece beyan usulüdür (Sertifika vs. istenmez MVP'de).
3. Mimari Kurallar
Tasarım Sistemi: Ekranlar arası geçişler ve tasarımlar kesinlikle 
constants/Colors.ts
 ve 
constants/Typography.ts
 dosyalarındaki Contextual Clean Theme kurallarına bağlı kalmalıdır. Renk dışına çıkılmamalıdır.
Bileşen (Component) Yapısı: Birden fazla ekranda kullanılan yapılar (Butonlar, Card'lar, Input'lar) önce components/ klasöründe modellenmeli, sonra sayfalarda kullanılmalıdır.
Tailwind Kullanımı: Yoktur. Tüm stiller StyleSheet.create ile React Native Vanilla CSS mantığıyla yazılacaktır.
Bu kurallar proje boyunca asistanın ana referans kaynağıdır. Anlaşılmayan veya eksik bir durum varsa kullanıcıya sorulmadan işlem yapılmamalıdır.