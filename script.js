(function () {
  "use strict";

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Menu mobile ---------- */
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Modal de demonstração de projeto ---------- */
  var modal = document.getElementById('demoModal');
  var backdrop = document.getElementById('demoBackdrop');
  var closeBtn = document.getElementById('demoClose');
  var iframe = document.getElementById('demoIframe');
  var urlBar = document.getElementById('demoUrl');
  var loading = document.getElementById('demoLoading');
  var lastFocused = null;

  function openDemo(card) {
    var src = card.getAttribute('data-src');
    var url = card.getAttribute('data-url') || 'narifyweb.com';
    lastFocused = document.activeElement;
    loading.style.display = 'flex';
    iframe.src = src;
    urlBar.textContent = url;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeDemo() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(function () { iframe.src = ''; }, 300);
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll('.port-item').forEach(function (card) {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.addEventListener('click', function () { openDemo(card); });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDemo(card); }
    });
  });

  iframe.addEventListener('load', function () {
    if (iframe.src) loading.style.display = 'none';
  });

  backdrop.addEventListener('click', closeDemo);
  closeBtn.addEventListener('click', closeDemo);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeDemo();
  });
})();
