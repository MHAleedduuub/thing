/* ============================================
   MD THING - الملف الرئيسي للجافاسكريبت
   ============================================ */

// === بيانات الترجمة ===
const translations = {
    ar: {
        'logo': 'MD THING',
        'nav-home': 'الرئيسية',
        'nav-about': 'عن الأونر',
        'nav-projects': 'المشاريع المجانية',
        'nav-contact': 'تواصل',
        'login': 'تسجيل الدخول',
        'logout': 'خروج',
        'hero-badge': 'مبرمج محترف',
        'hero-title': 'Owner',
        'hero-subtitle': 'صانع هوستات ومواقع | مصمم حلول تقنية | مبرمج شامل',
        'hero-description': 'مبرمج محترف جداً، متخصص في صناعة الهوستات والمواقع الاحترافية. أقدم حلولاً تقنية متكاملة بجودة عالية وأسعار تنافسية.',
        'hero-projects': 'تصفح المشاريع المجانية',
        'hero-about': 'اعرف المزيد عني',
        'stat-projects': 'مشروع منجز',
        'stat-clients': 'عميل سعيد',
        'stat-support': 'دعم فني',
        'about-title': 'عن <span>الأونر</span>',
        'about-name': 'Owner - المبرمج المحترف',
        'about-desc1': 'مبرمج محترف جداً بخبرة واسعة في مجال البرمجة وتطوير المواقع وصناعة الهوستات. أتمتع بمهارات عالية في لغات البرمجة المختلفة وأسعى دائماً لتقديم أفضل الحلول التقنية.',
        'about-desc2': 'متخصص في تصميم وتطوير المواقع الاحترافية، أنظمة إدارة المحتوى، تطبيقات الويب، وحلول الاستضافة المتكاملة. أضمن لعملائي أعلى معايير الجودة والأمان.',
        'projects-title': 'المشاريع <span>المجانية</span>',
        'projects-desc': 'مجموعة من المشاريع المجانية المقدمة من الأونر للجميع',
        'contact-title': 'تواصل <span>معي</span>',
        'footer-text': '© 2024 <strong>MD THING</strong> - جميع الحقوق محفوظة. صُنع بواسطة <strong>Owner</strong>',
        'login-title': 'تسجيل الدخول',
        'username': 'اسم المستخدم',
        'password': 'كلمة المرور',
        'login-submit': 'دخول',
        'login-hint': 'الحساب التجريبي: <strong>Owner</strong> / <strong>Owner123</strong>',
        'welcome-title': 'مرحباً بعودتك!',
        'welcome-text': 'تم تسجيل الدخول بنجاح. أهلاً بك في لوحة تحكم MD THING.',
        'go-dashboard': 'الذهاب للوحة التحكم',
        'login-error': 'اسم المستخدم أو كلمة المرور غير صحيحة',
    },
    en: {
        'logo': 'MD THING',
        'nav-home': 'Home',
        'nav-about': 'About Owner',
        'nav-projects': 'Free Projects',
        'nav-contact': 'Contact',
        'login': 'Login',
        'logout': 'Logout',
        'hero-badge': 'Professional Developer',
        'hero-title': 'Owner',
        'hero-subtitle': 'Host & Website Maker | Tech Solutions Designer | Full-Stack Developer',
        'hero-description': 'A highly professional programmer, specialized in creating hosting services and professional websites. I provide integrated technical solutions with high quality and competitive prices.',
        'hero-projects': 'Browse Free Projects',
        'hero-about': 'Learn More About Me',
        'stat-projects': 'Completed Projects',
        'stat-clients': 'Happy Clients',
        'stat-support': 'Technical Support',
        'about-title': 'About <span>Owner</span>',
        'about-name': 'Owner - Professional Developer',
        'about-desc1': 'A highly professional programmer with extensive experience in programming, web development, and hosting services. I possess high skills in various programming languages and always strive to provide the best technical solutions.',
        'about-desc2': 'Specialized in designing and developing professional websites, content management systems, web applications, and integrated hosting solutions. I guarantee my clients the highest quality and security standards.',
        'projects-title': 'Free <span>Projects</span>',
        'projects-desc': 'A collection of free projects provided by the Owner for everyone',
        'contact-title': 'Contact <span>Me</span>',
        'footer-text': '© 2024 <strong>MD THING</strong> - All rights reserved. Made by <strong>Owner</strong>',
        'login-title': 'Login',
        'username': 'Username',
        'password': 'Password',
        'login-submit': 'Sign In',
        'login-hint': 'Demo account: <strong>Owner</strong> / <strong>Owner123</strong>',
        'welcome-title': 'Welcome Back!',
        'welcome-text': 'Successfully logged in. Welcome to the MD THING dashboard.',
        'go-dashboard': 'Go to Dashboard',
        'login-error': 'Invalid username or password',
    }
};

// === الحالة العامة للتطبيق ===
const state = {
    currentLang: 'ar',
    currentTheme: 'light',
    isLoggedIn: false,
};

// === عناصر DOM الرئيسية ===
const DOM = {
    html: document.documentElement,
    body: document.body,
    navbar: document.getElementById('navbar'),
    langToggle: document.getElementById('langToggle'),
    themeToggle: document.getElementById('themeToggle'),
    menuToggle: document.getElementById('menuToggle'),
    navLinks: document.querySelector('.nav-links'),
    loginBtnNav: document.getElementById('loginBtnNav'),
    logoutBtnNav: document.getElementById('logoutBtnNav'),
    loginModal: document.getElementById('loginModal'),
    closeModal: document.getElementById('closeModal'),
    loginForm: document.getElementById('loginForm'),
    loginError: document.getElementById('loginError'),
    usernameInput: document.getElementById('username'),
    passwordInput: document.getElementById('password'),
    welcomeModal: document.getElementById('welcomeModal'),
    closeWelcomeModal: document.getElementById('closeWelcomeModal'),
    goToDashboard: document.getElementById('goToDashboard'),
};

// === دالة ترجمة النصوص ===
function translatePage(lang) {
    state.currentLang = lang;
    
    // تحديث اتجاه الصفحة
    if (lang === 'ar') {
        DOM.html.setAttribute('dir', 'rtl');
        DOM.body.classList.remove('lang-en');
    } else {
        DOM.html.setAttribute('dir', 'ltr');
        DOM.body.classList.add('lang-en');
    }
    
    // تحديث نص زر اللغة
    DOM.langToggle.querySelector('.lang-text').textContent = lang === 'ar' ? 'EN' : 'AR';
    
    // تحديث جميع العناصر المترجمة
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            // للعناصر التي تحتوي على span داخلها (مثل العناوين)
            if (translations[lang][key].includes('<span>')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // تخزين اللغة المختارة
    localStorage.setItem('md-thing-lang', lang);
}

// === دالة تغيير الوضع (ليلي/نهاري) ===
function toggleTheme() {
    const newTheme = state.currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

function setTheme(theme) {
    state.currentTheme = theme;
    DOM.html.setAttribute('data-theme', theme);
    
    // تحديث أيقونة الزر
    const icon = DOM.themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
        DOM.themeToggle.title = 'الوضع النهاري';
    } else {
        icon.className = 'fas fa-moon';
        DOM.themeToggle.title = 'الوضع الليلي';
    }
    
    // تخزين الوضع المختار
    localStorage.setItem('md-thing-theme', theme);
}

// === دوال النوافذ المنبثقة ===
function openModal(modal) {
    modal.classList.add('active');
    DOM.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.classList.remove('active');
    DOM.body.style.overflow = '';
}

// === دالة تسجيل الدخول ===
function handleLogin(e) {
    e.preventDefault();
    
    const username = DOM.usernameInput.value.trim();
    const password = DOM.passwordInput.value.trim();
    
    // التحقق من بيانات الدخول
    if (username === 'Owner' && password === 'Owner123') {
        // تسجيل دخول ناجح
        state.isLoggedIn = true;
        DOM.body.classList.add('logged-in');
        
        // إغلاق نافذة تسجيل الدخول
        closeModal(DOM.loginModal);
        
        // مسح حقول الإدخال والخطأ
        DOM.loginForm.reset();
        DOM.loginError.textContent = '';
        
        // إظهار نافذة الترحيب بعد لحظة
        setTimeout(() => {
            openModal(DOM.welcomeModal);
        }, 300);
        
        // تخزين حالة تسجيل الدخول
        localStorage.setItem('md-thing-logged-in', 'true');
        
        console.log('✅ تم تسجيل الدخول بنجاح - مرحباً Owner');
    } else {
        // فشل تسجيل الدخول
        const errorMsg = state.currentLang === 'ar' ? 
            'اسم المستخدم أو كلمة المرور غير صحيحة' : 
            'Invalid username or password';
        DOM.loginError.textContent = errorMsg;
        
        // اهتزاز النافذة للتأثير البصري
        const modal = DOM.loginModal.querySelector('.modal');
        modal.style.animation = 'none';
        modal.offsetHeight; // trigger reflow
        modal.style.animation = 'shake 0.5s ease';
    }
}

// === دالة تسجيل الخروج ===
function handleLogout() {
    state.isLoggedIn = false;
    DOM.body.classList.remove('logged-in');
    
    // حذف حالة تسجيل الدخول من التخزين
    localStorage.removeItem('md-thing-logged-in');
    
    console.log('👋 تم تسجيل الخروج');
    
    // إظهار رسالة بسيطة
    alert(state.currentLang === 'ar' ? 'تم تسجيل الخروج بنجاح' : 'Logged out successfully');
}

// === دالة الذهاب للوحة التحكم ===
function goToDashboard() {
    closeModal(DOM.welcomeModal);
    // هنا يمكن توجيه المستخدم للوحة التحكم
    // window.location.href = '/dashboard';
    alert(state.currentLang === 'ar' ? 
        'سيتم توجيهك للوحة التحكم قريباً!' : 
        'You will be redirected to the dashboard soon!');
}

// === أحداث النقر على الروابط (إغلاق القائمة في الجوال) ===
function handleNavLinkClick(e) {
    // إغلاق قائمة الجوال
    DOM.navLinks.classList.remove('active');
    
    // تحديث الرابط النشط
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    e.target.classList.add('active');
}

// === تأثير التمرير على النافبار ===
function handleScroll() {
    if (window.scrollY > 50) {
        DOM.navbar.classList.add('scrolled');
    } else {
        DOM.navbar.classList.remove('scrolled');
    }
    
    // تحديث الرابط النشط بناءً على القسم المرئي
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// === إضافة أنيميشن الاهتزاز ===
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        20% { transform: translateX(-8px); }
        40% { transform: translateX(8px); }
        60% { transform: translateX(-6px); }
        80% { transform: translateX(6px); }
    }
`;
document.head.appendChild(shakeStyle);

// === تهيئة التطبيق ===
function initApp() {
    // استعادة اللغة المحفوظة
    const savedLang = localStorage.getItem('md-thing-lang') || 'ar';
    translatePage(savedLang);
    
    // استعادة الوضع المحفوظ
    const savedTheme = localStorage.getItem('md-thing-theme') || 'light';
    setTheme(savedTheme);
    
    // استعادة حالة تسجيل الدخول
    const savedLoginState = localStorage.getItem('md-thing-logged-in');
    if (savedLoginState === 'true') {
        state.isLoggedIn = true;
        DOM.body.classList.add('logged-in');
    }
    
    // إضافة مستمعي الأحداث
    setupEventListeners();
    
    console.log('🚀 MD THING - Ready');
    console.log('👤 Owner Account: Owner / Owner123');
    console.log('🌐 Languages: العربية / English');
    console.log('🌓 Themes: Light / Dark');
}

// === إعداد مستمعي الأحداث ===
function setupEventListeners() {
    // زر تغيير اللغة
    DOM.langToggle.addEventListener('click', () => {
        const newLang = state.currentLang === 'ar' ? 'en' : 'ar';
        translatePage(newLang);
    });
    
    // زر تغيير الوضع
    DOM.themeToggle.addEventListener('click', toggleTheme);
    
    // زر القائمة في الجوال
    DOM.menuToggle.addEventListener('click', () => {
        DOM.navLinks.classList.toggle('active');
    });
    
    // أزرار تسجيل الدخول والخروج
    DOM.loginBtnNav.addEventListener('click', () => openModal(DOM.loginModal));
    DOM.logoutBtnNav.addEventListener('click', handleLogout);
    
    // إغلاق النوافذ المنبثقة
    DOM.closeModal.addEventListener('click', () => closeModal(DOM.loginModal));
    DOM.closeWelcomeModal.addEventListener('click', () => closeModal(DOM.welcomeModal));
    
    // إغلاق النافذة عند النقر خارجها
    DOM.loginModal.addEventListener('click', (e) => {
        if (e.target === DOM.loginModal) closeModal(DOM.loginModal);
    });
    DOM.welcomeModal.addEventListener('click', (e) => {
        if (e.target === DOM.welcomeModal) closeModal(DOM.welcomeModal);
    });
    
    // إرسال نموذج تسجيل الدخول
    DOM.loginForm.addEventListener('submit', handleLogin);
    
    // زر الذهاب للوحة التحكم
    DOM.goToDashboard.addEventListener('click', goToDashboard);
    
    // روابط التنقل
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', handleNavLinkClick);
    });
    
    // التمرير
    window.addEventListener('scroll', handleScroll);
    
    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', (e) => {
        if (!DOM.navLinks.contains(e.target) && 
            !DOM.menuToggle.contains(e.target) && 
            DOM.navLinks.classList.contains('active')) {
            DOM.navLinks.classList.remove('active');
        }
    });
    
    // اختصار لوحة المفاتيح - Escape لإغلاق النوافذ
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (DOM.loginModal.classList.contains('active')) closeModal(DOM.loginModal);
            if (DOM.welcomeModal.classList.contains('active')) closeModal(DOM.welcomeModal);
        }
    });
}

// === بدء التشغيل عند تحميل الصفحة ===
document.addEventListener('DOMContentLoaded', initApp);
