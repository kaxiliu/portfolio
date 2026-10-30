function switchLang(lang) {
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });

    document.getElementById('lang-zh').classList.remove('active');
    document.getElementById('lang-en').classList.remove('active');
    document.getElementById('lang-es').classList.remove('active');
    document.getElementById(`lang-${lang}`).classList.add('active');

    document.documentElement.lang = lang;

    localStorage.setItem('lang', lang);
}

const savedLang = localStorage.getItem('lang') || 'en';
switchLang(savedLang);


const themeToggleBtn = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        rootElement.classList.toggle('dark-mode');

        if (rootElement.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}