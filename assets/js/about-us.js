function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
}

document.querySelectorAll('.dropdown').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});