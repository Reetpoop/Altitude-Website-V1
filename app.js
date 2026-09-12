/* Shared progressive enhancements for the standalone HTML pages. */
(() => {
  'use strict';
  const root = document.getElementById('altitude-concept');
  if (!root) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const servicesToggle = document.getElementById('ar-services-toggle');
  const servicesMenu = document.getElementById('ar-services-menu');
  const mobileToggle = document.getElementById('ar-menu-toggle');
  const links = document.getElementById('ar-main-links');
  const actions = document.getElementById('ar-nav-actions');

  function closeMenus() {
    servicesMenu.hidden = true;
    servicesToggle.setAttribute('aria-expanded', 'false');
    links.classList.remove('ar-mobile-open');
    actions.classList.remove('ar-mobile-open');
    mobileToggle.setAttribute('aria-expanded', 'false');
  }
  servicesToggle.addEventListener('click', () => {
    servicesMenu.hidden = !servicesMenu.hidden;
    servicesToggle.setAttribute('aria-expanded', String(!servicesMenu.hidden));
  });
  mobileToggle.addEventListener('click', () => {
    const open = links.classList.toggle('ar-mobile-open');
    actions.classList.toggle('ar-mobile-open', open);
    mobileToggle.setAttribute('aria-expanded', String(open));
  });
  root.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenus();
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.ar-nav')) closeMenus();
  });
  const header = root.querySelector('.ar-nav');
  const measureHeader = () => root.style.setProperty('--ar-nav-height', header.getBoundingClientRect().height + 'px');
  measureHeader();
  if (window.ResizeObserver) new ResizeObserver(measureHeader).observe(header);
  else window.addEventListener('resize', measureHeader);

  function refreshIcons() {
    if (window.lucide) window.lucide.createIcons({attrs: {width: 16, height: 16}});
  }
  function setupVideo(video, control, service) {
    if (!video || !control) return;
    video.muted = true;
    const sync = () => {
      const playing = !video.paused;
      control.setAttribute('aria-label', (playing ? 'Pause ' : 'Play ') + (service ? 'cleaning video' : 'background video'));
      control.innerHTML = '<i data-lucide="' + (playing ? 'pause' : 'play') + '" aria-hidden="true"></i>' + (service ? '<span>' + (playing ? 'Pause video' : 'Play video') + '</span>' : '');
      refreshIcons();
    };
    video.addEventListener('play', sync);
    video.addEventListener('pause', sync);
    video.addEventListener('error', () => {
      video.hidden = true;
      control.disabled = true;
      control.setAttribute('aria-label', 'Video unavailable');
      if (service) control.textContent = 'Video unavailable';
    });
    control.addEventListener('click', () => {
      if (video.paused) video.play().catch(sync);
      else video.pause();
    });
    if (!reduced) video.play().catch(sync);
  }
  setupVideo(document.getElementById('ar-hero-video'), document.getElementById('ar-video-toggle'), false);
  setupVideo(root.querySelector('[data-service-video]'), root.querySelector('.ar-service-play'), true);

  const form = document.getElementById('ar-enquiry-form');
  if (form) {
    const selected = new URLSearchParams(location.search).get('service');
    const service = form.elements.namedItem('service');
    if (selected && Array.from(service.options).some(option => option.value === selected)) service.value = selected;
    form.addEventListener('submit', event => {
      event.preventDefault();
      // Preserve the existing preview-only behaviour: no transmission or storage.
      document.getElementById('ar-form-result').hidden = false;
    });
    form.querySelector('button[type="submit"]').disabled = false;
  }

  // Keep old hash links useful when they are opened on the exported homepage.
  const oldRoutes = {home:'index.html',commercial:'commercial.html',industrial:'industrial.html',residential:'residential.html',solar:'solar-panels.html',about:'company.html',safety:'safety-permits.html',resources:'resources.html',purewater:'pure-water.html',preparation:'site-preparation.html',quote:'get-a-quote.html',demo:'request-a-demo.html',film:'cleaning-video.html'};
  const legacyRoute = location.hash.slice(1);
  if (root.dataset.page === 'home' && legacyRoute !== 'home' && Object.hasOwn(oldRoutes, legacyRoute)) location.replace(oldRoutes[legacyRoute] + location.search);
})();
