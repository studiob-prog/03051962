// ── NAV SCROLL ──
const nav = document.querySelector('.sb-nav');
window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 60);
});

// ── HAMBURGER ──
const ham = document.querySelector('.sb-hamburger');
const navLinks = document.querySelector('.sb-nav-links');
ham?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
  ham.classList.toggle('open');
});
navLinks?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    ham?.classList.remove('open');
  });
});

// ── ACTIVE NAV LINK ──
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.sb-nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// ── REVEAL ON SCROLL ──
const revealEls = document.querySelectorAll('.reveal');
const revObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('in'), i * 70);
      revObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
revealEls.forEach(el => revObs.observe(el));

// ── MODAL ──
function openModal(servicio) {
  const sel = document.getElementById('modal-servicio');
  if (sel) {
    for (let i = 0; i < sel.options.length; i++) {
      if (sel.options[i].value === servicio) { sel.selectedIndex = i; break; }
    }
  }
  document.getElementById('sb-modal')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('sb-modal')?.classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('sb-modal')?.addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
