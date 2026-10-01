/* Visual presentation only. No network requests, analytics or production controls. */
(() => {
  'use strict';
  const dialog = document.querySelector('.art-dialog');
  const expanded = document.querySelector('#art-expanded');
  const original = document.querySelector('#art-original');
  const position = document.querySelector('#art-position');
  const images = [...document.querySelectorAll('.identity-mark img, .identity-art img, .identity-banner img')];
  let current = 0;
  let opener = null;
  const show = index => {
    current = (index + images.length) % images.length;
    const image = images[current];
    expanded.src = image.getAttribute('src');
    expanded.alt = image.alt;
    original.href = expanded.src;
    position.textContent = `${String(current + 1).padStart(2, '0')} / ${String(images.length).padStart(2, '0')}`;
  };
  if (dialog && typeof dialog.showModal === 'function') {
    images.forEach((image, index) => {
      let link = image.closest('a');
      if (!link) {
        link = document.createElement('a');
        link.href = image.getAttribute('src');
        link.className = 'art-trigger';
        link.setAttribute('aria-label', 'View ' + image.alt);
        const visual = image.closest('picture') || image;
        visual.before(link);
        link.append(visual);
      }
      link.setAttribute('aria-haspopup', 'dialog');
      link.setAttribute('aria-label', 'View artwork: ' + image.alt);
      link.addEventListener('click', event => {
        event.preventDefault();
        opener = link;
        show(index);
        dialog.showModal();
        document.body.classList.add('viewer-open');
      });
    });
    document.querySelector('.art-close').addEventListener('click', () => dialog.close());
    document.querySelector('.art-prev').addEventListener('click', () => show(current - 1));
    document.querySelector('.art-next').addEventListener('click', () => show(current + 1));
    dialog.addEventListener('keydown', event => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        show(current + (event.key === 'ArrowRight' ? 1 : -1));
      }
    });
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => {
      document.body.classList.remove('viewer-open');
      expanded.removeAttribute('src');
      if (opener) opener.focus({preventScroll: true});
    });
  }
  const workspace = document.querySelector('#engineering-workspace');
  const resolveAnchor = hash => {
    if (!hash || hash === '#') return null;
    try { return document.getElementById(decodeURIComponent(hash.slice(1))); } catch { return null; }
  };
  const revealAnchor = hash => {
    const target = resolveAnchor(hash);
    if (target && workspace.contains(target)) workspace.open = true;
  };
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => revealAnchor(link.hash));
  });
  window.addEventListener('hashchange', () => revealAnchor(location.hash));
  revealAnchor(location.hash);
  if (location.hash) requestAnimationFrame(() => resolveAnchor(location.hash)?.scrollIntoView());
  // Preserve the existing keyboard shortcut when the workspace is collapsed.
  document.addEventListener('keydown', event => {
    const editing = event.target.closest('input, textarea, [contenteditable]');
    if (event.key === '/' && !editing && !dialog.open) workspace.open = true;
  }, true);
  const progress = document.querySelector('.reading-progress span');
  let ticking = false;
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${max > 0 ? Math.min(100, Math.max(0, scrollY / max * 100)) : 0}%`;
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(updateProgress); }
  }, {passive: true});
  window.addEventListener('resize', updateProgress);
  workspace.addEventListener('toggle', updateProgress);
  updateProgress();
  if ('IntersectionObserver' in window) {
    const links = [...document.querySelectorAll('.navlinks a')];
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        links.forEach(link => {
          if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    }, {rootMargin: '-15% 0px -55% 0px', threshold: 0});
    links.forEach(link => { const section = resolveAnchor(link.hash); if (section) observer.observe(section); });
  }
})();
