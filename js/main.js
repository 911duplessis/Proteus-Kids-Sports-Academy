/* Shared navigation, scroll effects, and page behavior */

(function () {
  /* --- Mobile nav toggle --- */
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
      toggle.setAttribute('aria-label', expanded ? 'Open menu' : 'Close menu');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  /* --- Nav scroll shadow --- */
  var nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  /* --- Progressive reveal (visible by default, JS enhances) --- */
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    reveals.forEach(function (el) { el.classList.add('js-reveal'); });
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { revealObserver.observe(el); });
  }

  /* --- FAQ accordion --- */
  document.querySelectorAll('.faq-item h3').forEach(function (heading) {
    heading.setAttribute('role', 'button');
    heading.setAttribute('tabindex', '0');
    var answer = heading.nextElementSibling;
    if (answer && answer.classList.contains('faq-answer')) {
      answer.setAttribute('role', 'region');
    }
    function toggleFaq() {
      heading.parentElement.classList.toggle('open');
    }
    heading.addEventListener('click', toggleFaq);
    heading.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleFaq(); }
    });
  });

  /* --- Scroll progress bar --- */
  var progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', function () {
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = docHeight > 0 ? (scrollTop / docHeight * 100) + '%' : '0%';
    }, { passive: true });
  }

  /* --- Back to top button --- */
  var backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.classList.toggle('show', window.scrollY > 500);
    }, { passive: true });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* --- Badge unlock animation --- */
  var badgeRows = document.querySelectorAll('.badge-row');
  if (badgeRows.length && 'IntersectionObserver' in window) {
    var badgeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('.badge-chip').forEach(function (chip) {
          chip.classList.add('animate-in');
        });
        badgeObserver.unobserve(entry.target);
      });
    }, { threshold: 0.3 });
    badgeRows.forEach(function (row) { badgeObserver.observe(row); });
  }

  /* --- Animated counters --- */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseInt(el.getAttribute('data-count'), 10);
        var suffix = el.getAttribute('data-suffix') || '';
        var duration = 1600;
        var start = performance.now();
        function step(now) {
          var progress = Math.min((now - start) / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.3 });
    counters.forEach(function (el) { counterObserver.observe(el); });
  }

  /* --- Staggered card reveals --- */
  var staggerGrids = document.querySelectorAll('.pathway-grid, .delivery-grid, .sport-grid');
  if (staggerGrids.length && 'IntersectionObserver' in window) {
    var staggerObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var children = entry.target.children;
        for (var i = 0; i < children.length; i++) {
          (function (child, delay) {
            setTimeout(function () { child.classList.add('stagger-in'); }, delay);
          })(children[i], i * 120);
        }
        staggerObserver.unobserve(entry.target);
      });
    }, { threshold: 0.15 });
    staggerGrids.forEach(function (grid) {
      for (var i = 0; i < grid.children.length; i++) {
        grid.children[i].classList.add('stagger-ready');
      }
      staggerObserver.observe(grid);
    });
  }

  /* --- 3D card tilt --- */
  var tiltCards = document.querySelectorAll('.pathway-card, .delivery-card');
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    tiltCards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = 'perspective(600px) rotateY(' + (x * 6) + 'deg) rotateX(' + (-y * 6) + 'deg) translateY(-4px)';
      });
      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

  /* --- Active nav scroll tracking (homepage only) --- */
  var navLinksAll = document.querySelectorAll('.nav-links a');
  var sections = document.querySelectorAll('section[id]');
  if (sections.length > 1 && navLinksAll.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.getAttribute('id');
        navLinksAll.forEach(function (link) {
          var href = link.getAttribute('href');
          if (href === '#' + id || href.endsWith('#' + id)) {
            link.classList.add('nav-active');
          } else {
            link.classList.remove('nav-active');
          }
        });
      });
    }, { threshold: 0.3, rootMargin: '-20% 0px -60% 0px' });
    sections.forEach(function (sec) { sectionObserver.observe(sec); });
  }
})();
