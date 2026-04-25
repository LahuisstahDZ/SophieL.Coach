/* ══════════════════════════════════════
   Sophie L. — Coach professionnelle · script.js
══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  document.body.classList.add('js-loaded');

  /* NAV scroll */
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* Reveal au scroll */
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal, .reveal-l, .reveal-r').forEach(el => obs.observe(el));

  ['.presta-card', '.temoignage-card', '.article-card', '.contact-item'].forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${i * 0.08}s`;
      obs.observe(el);
    });
  });

  /* Formulaire */
  const btn = document.querySelector('.btn-submit');
  if (btn) {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const orig = btn.textContent;
      btn.textContent = '✓ Message envoyé — je vous réponds sous 48h !';
      btn.style.background = '#3a6b5a';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
        btn.disabled = false;
      }, 5000);
    });
  }

  /* Smooth scroll */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

});
