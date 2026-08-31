const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
        siteNav.classList.toggle('active');
    });

    siteNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => siteNav.classList.remove('active'));
    });
}

const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

for (const tabButton of tabButtons) {
    tabButton.addEventListener('click', () => {
        const target = tabButton.dataset.tab;

        tabButtons.forEach((button) => button.classList.toggle('active', button === tabButton));
        tabPanels.forEach((panel) => {
            panel.classList.toggle('active', panel.id === target);
        });
    });
}

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealItems.forEach((item) => observer.observe(item));

document.getElementById('year').textContent = new Date().getFullYear();
