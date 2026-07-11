document.addEventListener("DOMContentLoaded", () => {
    // --- 1. DIO: Animacija kartica pri skrolanju ---
    const kartice = document.querySelectorAll('.b-usluga, .b-odabir, .bm-onama, .b-onama, .bs_frezanje');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('prikazi');
                // observer.unobserve(entry.target); // Otkomentiraj ako želiš da se dogodi samo jednom
            }
        });
    }, {
        threshold: 0.1
    });

    kartice.forEach(kartica => {
        observer.observe(kartica);
    });

    // --- 2. DIO: Responzivna mobilna navigacija ---
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    // Kada kliknemo na hamburger gumb, dodajemo/mièemo klasu 'active'
    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navList.classList.toggle('active');
        });

        // Zatvori meni automatski ako korisnik klikne na neki link unutar njega
        const navLinks = document.querySelectorAll('.nav-list li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navList.classList.remove('active');
            });
        });
    }
});