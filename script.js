/**
 * Atharva Lakade — Minimalist Portfolio Scripts
 * Handles: Theme toggle, clipboard interactions, mobile navigation, scroll spy.
 */

(function () {
  'use strict';

  // 1. Theme Management (Light / Dark)
  const themeToggle = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Initial Theme Setup
  const initialTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // 2. Year update
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 3. Mobile Navigation Toggle
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const siteNav = document.getElementById('siteNav');

  if (mobileNavToggle && siteNav) {
    mobileNavToggle.addEventListener('click', () => {
      siteNav.classList.toggle('open');
    });

    // Close mobile nav when clicking any nav link
    const navLinks = siteNav.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('open');
      });
    });
  }

  // 4. Toast Notification & Copy Email
  const toast = document.getElementById('toast');
  let toastTimeout = null;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  function copyToClipboard(text, successMessage) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMessage || 'Copied to clipboard');
      }).catch(() => {
        fallbackCopy(text, successMessage);
      });
    } else {
      fallbackCopy(text, successMessage);
    }
  }

  function fallbackCopy(text, successMessage) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast(successMessage || 'Copied to clipboard');
    } catch (err) {
      showToast('Could not copy email');
    }
    document.body.removeChild(tempInput);
  }

  const copyButtons = document.querySelectorAll('[data-email]');
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email');
      if (email) {
        copyToClipboard(email, 'Email copied to clipboard: ' + email);
      }
    });
  });

  // 5. Active Link Highlight on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
})();
