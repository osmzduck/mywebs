const translatorLink = document.getElementById('translator-link');

translatorLink.addEventListener('click', function(e) {
    e.preventDefault();

    const translateAnimation = document.createElement('div');
    translateAnimation.classList.add('translate-animation');
    document.body.appendChild(translateAnimation);

    setTimeout(() => {
        translateAnimation.classList.add('active');
    }, 100);

    setTimeout(() => {
        window.location.href = translatorLink.getAttribute('href');
    }, 600);
});

function translatePage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[lang][key];
    });

    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

const translations = {
    en: {
        'header-title': 'Essam Turki',
        'header-subtitle': 'Cybersecurity Enthusiast & IT Professional',
        'about-title': 'About Me',
        'about-text': 'Passionate about cybersecurity and experienced in IT infrastructure, I have completed several professional courses from Google, enhancing my skills in system administration, networking, and security.',
        'certificates-title': 'Certificates',
        'contact-title': 'Contact Me',
        'contact-name': 'Your Name',
        'contact-email': 'Your Email',
        'contact-message': 'Your Message',
        'contact-send': 'Send',
        'timeline-title': 'My Journey',
        'footer-text': '© 2024 Essam Turki. All rights reserved.',
        'secret-link': '🎮 Ooh, a secret I see!? 🎮',
        'close-button': 'Close',
        'game-title': 'Decrypt the Message!',
        'game-description': 'Find the correct key to decrypt the message.',
        'game-placeholder': 'Enter decryption key...',
        'game-button': 'Decrypt',
    },
    ar: {
        'header-title': 'عصام تركي',
        'header-subtitle': 'مهتم بالأمن السيبراني ومحترف تكنولوجيا المعلومات',
        'about-title': 'نبذة عني',
        'about-text': 'شغوف بالأمن السيبراني وذو خبرة في البنية التحتية لتكنولوجيا المعلومات، أكملت العديد من الدورات المهنية من جوجل، مما عزز مهاراتي في إدارة الأنظمة والشبكات والأمن.',
        'certificates-title': 'الشهادات',
        'contact-title': 'تواصل معي',
        'contact-name': 'اسمك',
        'contact-email': 'بريدك الإلكتروني',
        'contact-message': 'رسالتك',
        'contact-send': 'إرسال',
        'timeline-title': 'رحلتي',
        'footer-text': '© 2024 عصام تركي. جميع الحقوق محفوظة.',
        'secret-link': '🎮 أوه، هل سر أراه!؟ 🎮',
        'close-button': 'إغلاق',
        'game-title': 'فك تشفير الرسالة!',
        'game-description': 'ابحث عن المفتاح الصحيح لفك تشفير الرسالة.',
        'game-placeholder': 'أدخل مفتاح فك التشفير...',
        'game-button': 'فك التشفير',
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const lang = document.documentElement.lang;
    translatePage(lang);
});
