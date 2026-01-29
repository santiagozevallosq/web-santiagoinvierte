console.log("Santiago Invierte Web Loaded");

// Mobile Menu Logic
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const overlay = document.getElementById('mobile-menu-overlay');

    if (mobileMenuBtn && mobileMenu && overlay) {
        // Open Menu
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
            document.body.classList.add('overflow-hidden'); // Prevent scrolling
        });

        // Close Menu Function
        const closeMenu = () => {
            mobileMenu.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        };

        // Close Events
        closeMenuBtn.addEventListener('click', closeMenu);
        overlay.addEventListener('click', closeMenu);

        // Close when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
});
