document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list');

    // Toggle menu navigasi saat hamburger menu diklik
    hamburgerMenu.addEventListener('click', function () {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Menutup menu navigasi saat item menu diklik
    const navItems = document.querySelectorAll('.nav-list a');
    navItems.forEach(function (item) {
        item.addEventListener('click', function () {
            hamburgerMenu.classList.remove('active');
            navList.classList.remove('active');
        });
    });

    // Menutup menu navigasi saat klik dilakukan di luar menu
    document.addEventListener('click', function (event) {
        // Periksa apakah yang diklik bukan bagian dari menu navigasi
        if (!event.target.closest('.navbar-container')) {
            hamburgerMenu.classList.remove('active');
            navList.classList.remove('active');
        }
    });
});