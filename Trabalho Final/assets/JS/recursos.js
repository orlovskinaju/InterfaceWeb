
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach((item, index) => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');

        header.setAttribute('aria-expanded', false);
        header.setAttribute('aria-controls', 'accordion-content-' + index);
        content.id = 'accordion-content-' + index;

        header.addEventListener('click', () => {
            const isActive = header.classList.contains('active');

            accordionItems.forEach((i, idx) => {
                const h = i.querySelector('.accordion-header');
                const c = i.querySelector('.accordion-content');
                h.classList.remove('active');
                h.setAttribute('aria-expanded', false);
                c.style.maxHeight = null;
            });

            if (!isActive) {
                header.classList.add('active');
                header.setAttribute('aria-expanded', true);
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    if (accordionItems.length > 0) {
        const firstItem = accordionItems[0];
        const header = firstItem.querySelector('.accordion-header');
        const content = firstItem.querySelector('.accordion-content');
        header.classList.add('active');
        header.setAttribute('aria-expanded', true);
        content.style.maxHeight = content.scrollHeight + 'px';
    }

    // Scroll Animation
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.resource-card, .demo-feature, .platform-image');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    document.querySelectorAll('.resource-card, .demo-feature, .platform-image').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    const updateThemeImages = () => {
        const darkMode = document.body.classList.contains('dark-mode');
        document.querySelectorAll('.theme-img').forEach(img => {
            const lightSrc = img.getAttribute("src");
            const darkSrc = img.getAttribute("data-dark");
            if (darkMode && darkSrc) img.setAttribute("src", darkSrc);
            else img.setAttribute("src", lightSrc);
        });
    };

    document.getElementById('themeToggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        updateThemeImages();
    });

    updateThemeImages();
});
