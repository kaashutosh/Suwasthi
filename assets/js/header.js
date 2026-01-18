document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navBar = document.getElementById('main-nav');
    const dropdown = document.querySelector('.dropdown');

    // Toggle Mobile Navbar
    menuToggle.addEventListener('click', () => {
        navBar.classList.toggle('active');
    });

    // Toggle Dropdown for Mobile (click instead of hover)
    dropdown.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            const content = dropdown.querySelector('.dropdown-content');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            e.stopPropagation();
        }
    });
});