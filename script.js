document.addEventListener('DOMContentLoaded', () => {
  const navbarNav = document.querySelector('.navbar-nav');
  const hamburger = document.querySelector('#hamburger-menu');

  if (hamburger) {
    hamburger.onclick = () => {
      navbarNav.classList.toggle('active');
    };
  }

  document.addEventListener('click', function(e) {
    // Pastikan elemen tersedia sebelum digunakan
    if (hamburger && navbarNav && !hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active'); 
    }
  });

  // Ganti ikon feather (pastikan feather icons sudah di-load di HTML)
  feather.replace();
});
