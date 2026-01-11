function toggleMenu() {
    document.getElementById("nav").classList.toggle("active");
}

/* Mobile dropdown */
document.querySelectorAll(".dropdown > a").forEach(link => {
    link.addEventListener("click", function (e) {
        if (window.innerWidth <= 1024) {
            e.preventDefault();
            this.parentElement.classList.toggle("active");
        }
    });
});

/* SEARCH FUNCTIONALITY */
function searchProducts() {
    const value = document.getElementById("searchInput").value.toLowerCase();
    const links = document.querySelectorAll(".dropdown-menu a, .nav > ul > li > a");

    links.forEach(link => {
        if (link.textContent.toLowerCase().includes(value)) {
            link.style.display = "block";
        } else {
            link.style.display = "none";
        }
    });
}
