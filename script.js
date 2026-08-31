const menuToggle = document.querySelector('[data-menu-toggle]');
const siteNav = document.querySelector('[data-nav]');

if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
        const isHidden = siteNav.classList.contains('hidden');

        siteNav.classList.toggle('hidden', !isHidden);
        siteNav.classList.toggle('flex', isHidden);
        siteNav.classList.toggle('flex-col', isHidden);
        siteNav.classList.toggle('absolute', isHidden);
        siteNav.classList.toggle('top-[74px]', isHidden);
        siteNav.classList.toggle('left-4', isHidden);
        siteNav.classList.toggle('right-4', isHidden);
        siteNav.classList.toggle('p-4', isHidden);
        siteNav.classList.toggle('rounded-2xl', isHidden);
        siteNav.classList.toggle('border', isHidden);
        siteNav.classList.toggle('border-white/10', isHidden);
        siteNav.classList.toggle('bg-slate-950/95', isHidden);
        siteNav.classList.toggle('shadow-[0_25px_45px_rgba(0,0,0,0.28)]', isHidden);
    });

    siteNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                siteNav.classList.add('hidden');
                siteNav.classList.remove('flex', 'flex-col', 'absolute', 'top-[74px]', 'left-4', 'right-4', 'p-4', 'rounded-2xl', 'border', 'border-white/10', 'bg-slate-950/95', 'shadow-[0_25px_45px_rgba(0,0,0,0.28)]');
            }
        });
    });
}

const tabButtons = document.querySelectorAll('[data-tab-button]');
const tabPanels = document.querySelectorAll('[data-tab-panel]');

for (const tabButton of tabButtons) {
    tabButton.addEventListener('click', () => {
        const target = tabButton.getAttribute('data-tab-button');

        tabButtons.forEach((button) => {
            const isActive = button === tabButton;
            button.classList.toggle('border-[#ff4d8d]/40', isActive);
            button.classList.toggle('bg-[linear-gradient(135deg,rgba(255,77,141,0.18),rgba(255,0,92,0.08))]', isActive);
            button.classList.toggle('text-white', isActive);
            button.classList.toggle('border-white/10', !isActive);
            button.classList.toggle('bg-transparent', !isActive);
            button.classList.toggle('text-[#b9c4d8]', !isActive);
        });

        tabPanels.forEach((panel) => {
            const isTarget = panel.getAttribute('data-tab-panel') === target;
            panel.classList.toggle('hidden', !isTarget);
            panel.classList.toggle('block', isTarget);
        });
    });
}

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-[18px]');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealItems.forEach((item) => observer.observe(item));

document.getElementById('year').textContent = new Date().getFullYear();
