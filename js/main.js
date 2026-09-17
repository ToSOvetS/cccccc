// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('open');
});

nav.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    nav.classList.remove('open');
  });
});

// Scroll animations
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll(
  '.section__header, .request-card, .credential, .format-block, .format-option, .location-card, .pricing__card, .about__text'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Contact form
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();

  const name = form.name.value.trim();
  const contact = form.contact.value.trim();
  const message = form.message.value.trim();

  const subject = encodeURIComponent('Заявка на консультацию');
  const body = encodeURIComponent(
    `Имя: ${name}\nКонтакт: ${contact}\n\nСообщение:\n${message || '—'}`
  );

  window.location.href = `mailto:dimaknr@gmail.com?subject=${subject}&body=${body}`;
});
