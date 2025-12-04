// scripts.js — navbar dropdowns and mobile toggle for DOJRP-style site

document.addEventListener('DOMContentLoaded', function () {
  const navMain = document.getElementById('nav-main');
  const mobileToggle = document.getElementById('mobile-toggle');

  // Mobile toggle open/close
  mobileToggle?.addEventListener('click', function (e) {
    e.stopPropagation();
    if (navMain.classList.contains('mobile-open')) {
      navMain.classList.remove('mobile-open');
    } else {
      navMain.classList.add('mobile-open');
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!navMain.contains(e.target)) {
      navMain.classList.remove('mobile-open');
      // close any mobile dropdowns
      document.querySelectorAll('.has-dropdown.open').forEach(d => d.classList.remove('open'));
    }
  });

  // Mobile: toggle dropdown when clicking parent
  document.querySelectorAll('.has-dropdown > a').forEach(parentLink => {
    parentLink.addEventListener('click', function (e) {
      // Only intercept on small widths
      if (window.innerWidth <= 920) {
        e.preventDefault();
        const parent = parentLink.parentElement;
        parent.classList.toggle('open');
      }
    });
  });

  // Accessibility: keyboard open for dropdowns
  document.querySelectorAll('.has-dropdown').forEach(item => {
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (window.innerWidth <= 920) {
          item.classList.toggle('open');
        }
      }
    });
  });
});
