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