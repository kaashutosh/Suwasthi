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
/*
function toggleMenu() {
    document.getElementById("nav").classList.toggle("active");
}

/* Mobile dropdown *
document.querySelectorAll(".dropdown > a").forEach(link => {
    link.addEventListener("click", function (e) {
        if (window.innerWidth <= 1024) {
            e.preventDefault();
            this.parentElement.classList.toggle("active");
        }
    });
});

/* SEARCH FUNCTIONALITY *
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

/*  For helth goal video  *
const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            const video = card.querySelector('video');

            card.addEventListener('mouseenter', () => {
                video.muted = false; // Enable voice
                video.play().catch(e => console.log("User interaction needed for audio"));
            });

            card.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
                video.muted = true;
            });
        });

        */
    const modal = document.getElementById('videoModal');
    const popupVideo = document.getElementById('popupVideo');

    function openPopup(src) {
        popupVideo.src = src;
        modal.style.display = "flex";
        popupVideo.play();
    }

    function closePopup() {
        modal.style.display = "none";
        popupVideo.pause();
        popupVideo.src = "";
    }

    // Close on background click
    window.onclick = function(e) {
        if (e.target == modal) closePopup();
    }