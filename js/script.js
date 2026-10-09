// --- SCROLLSPY ---
const sections = document.querySelectorAll('header, section');
const navLinks = document.querySelectorAll('.menu ul li a');

const observerOptions = {
  root: null,
  rootMargin: '-30% 0px -60% 0px',
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const currentId = entry.target.getAttribute('id');
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, observerOptions);

sections.forEach(section => {
  if (section.getAttribute('id')) {
    observer.observe(section);
  }
});

// --- HAMBURGER MENU ---
const menu = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const iconBars = document.querySelector('.icon-bars');
const iconClose = document.querySelector('.icon-close');

function displayMenu() {
  menu.classList.toggle('tampil');

  // Cek apakah menu sedang tampil
  if (menu.classList.contains('tampil')) {
    iconBars.style.display = 'none';
    iconClose.style.display = 'inline';
  } else {
    iconBars.style.display = 'inline';
    iconClose.style.display = 'none';
  }
}

hamburgerMenu.addEventListener('click', displayMenu);

// Menutup menu otomatis saat salah satu link diklik di HP
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('tampil');
    iconBars.style.display = 'inline';
    iconClose.style.display = 'none';
  });
});