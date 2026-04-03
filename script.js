/* ══════════════════════════════════════════════════════════
   script.js — All interactive JS for Radhe Krishna School
   ══════════════════════════════════════════════════════════ */

/* ── PAGE LOADER ──────────────────────────────────────────── */
(function initLoader() {
  const loader = document.getElementById("pageLoader");
  const fill = document.getElementById("loaderFill");
  if (!loader || !fill) return;

  let pct = 0;
  const interval = setInterval(() => {
    pct += Math.random() * 18;
    if (pct >= 100) {
      pct = 100;
      clearInterval(interval);
    }
    fill.style.width = pct + "%";
    if (pct >= 100) {
      setTimeout(() => {
        loader.classList.add("loaded");
        document.body.classList.add("hero-loaded");
        initHeroParticles();
        initHeroCounters();
      }, 280);
    }
  }, 60);
})();

/* ── NAVBAR ───────────────────────────────────────────────── */
(function initNavbar() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("menuToggle");
  const links = document.getElementById("navLinks");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
    updateActiveNav();
    toggleBackTop();
  });

  toggle &&
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
      toggle.classList.toggle("open");
    });

  // Close menu on link click
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle && toggle.classList.remove("open");
    });
  });

  // Active nav on scroll
  function updateActiveNav() {
    const sections = document.querySelectorAll(
      "section, .hero, .about, .academic, .teachers, .toppers, .gallery, .contact",
    );
    const navLinks = document.querySelectorAll(".nav-link");
    const scrollY = window.scrollY + 90;

    let current = "";
    sections.forEach((sec) => {
      if (!sec.id) return;
      if (scrollY >= sec.offsetTop) current = sec.id;
    });

    navLinks.forEach((l) => {
      l.classList.remove("is-active");
      if (l.getAttribute("href") === "#" + current)
        l.classList.add("is-active");
    });
  }
})();

/* ── BACK TO TOP ──────────────────────────────────────────── */
function toggleBackTop() {
  const btn = document.getElementById("backTop");
  if (!btn) return;
  btn.classList.toggle("visible", window.scrollY > 400);
}
document.getElementById("backTop")?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ── HERO PARTICLES ───────────────────────────────────────── */
function initHeroParticles() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const PARTICLE_COUNT = 55;
  const particles = Array.from({ length: PARTICLE_COUNT }, () =>
    createParticle(canvas),
  );

  function createParticle(c, x, y) {
    return {
      x: x ?? Math.random() * c.width,
      y: y ?? Math.random() * c.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.15,
      gold: Math.random() < 0.3,
    };
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.gold
        ? `rgba(200,150,60,${p.opacity})`
        : `rgba(255,255,255,${p.opacity})`;
      ctx.fill();

      p.x += p.speedX;
      p.y += p.speedY;
      if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
    });

    // Draw lines between near particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(200,150,60,${0.08 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

/* ── HERO STAT COUNTERS (on hero load) ────────────────────── */
function initHeroCounters() {
  document.querySelectorAll(".h-stat strong[data-count]").forEach((el) => {
    animateCount(el, 0, parseInt(el.dataset.count), 1400, (n) => n + "+");
  });
}

function animateCount(el, from, to, duration, fmt) {
  const start = performance.now();
  function step(ts) {
    const progress = Math.min((ts - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const cur = Math.round(from + (to - from) * ease);
    el.textContent = fmt ? fmt(cur) : cur;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* ── SCROLL REVEAL ────────────────────────────────────────── */
(function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = parseInt(el.dataset.delay || "0");
        setTimeout(() => el.classList.add("visible"), delay);
        observer.unobserve(el);

        // Trigger counter if stat-num
        if (el.classList.contains("stat-num")) animateStatNum(el);
        // Trigger bar fill
        const bar = el.closest(".stat-card")?.querySelector(".stat-fill");
        if (bar && el.classList.contains("stat-num")) {
          setTimeout(() => {
            bar.style.width = bar.dataset.width + "%";
          }, delay + 200);
        }
      });
    },
    { threshold: 0.15 },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // Stat cards reveal also triggers counter & bar
  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const card = entry.target;
        const numEl = card.querySelector(".stat-num");
        const barEl = card.querySelector(".stat-fill");
        const delay = parseInt(card.dataset.delay || "0");

        if (numEl && !numEl.dataset.counted) {
          numEl.dataset.counted = "1";
          setTimeout(() => animateStatNum(numEl), delay + 100);
        }
        if (barEl && !barEl.dataset.filled) {
          barEl.dataset.filled = "1";
          setTimeout(() => {
            barEl.style.width = barEl.dataset.width + "%";
          }, delay + 300);
        }
        statObserver.unobserve(card);
      });
    },
    { threshold: 0.3 },
  );

  document
    .querySelectorAll(".stat-card")
    .forEach((c) => statObserver.observe(c));
})();

function animateStatNum(el) {
  const target = parseInt(el.dataset.target || "0");
  const suffix = el.dataset.suffix || "";
  animateCount(el, 0, target, 1500, (n) => n + suffix);
}

/* ── PARALLAX HERO BG ─────────────────────────────────────── */
(function initParallax() {
  const bg = document.getElementById("heroBg");
  if (!bg) return;
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        bg.style.transform = `scale(1.06) translateY(${scrolled * 0.25}px)`;
        ticking = false;
      });
      ticking = true;
    }
  });
})();

/* ── GALLERY LIGHTBOX ─────────────────────────────────────── */
(function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImage");
  const lbClose = document.getElementById("lbClose");
  const lbPrev = document.getElementById("lbPrev");
  const lbNext = document.getElementById("lbNext");
  if (!lightbox || !lbImg) return;

  const allImages = [];
  let currentIdx = 0;

  // Collect gallery images (deferred — runs after DOM fully loaded)
  function collectImages() {
    document.querySelectorAll(".gallery-item").forEach((item, idx) => {
      const img = item.querySelector("img");
      if (img) allImages.push(img.src);

      item.addEventListener("click", () => openLightbox(idx));
    });
  }

  function openLightbox(idx) {
    currentIdx = idx;
    lbImg.src = allImages[idx];
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  function navigate(dir) {
    currentIdx = (currentIdx + dir + allImages.length) % allImages.length;
    lbImg.style.opacity = "0";
    lbImg.style.transform = "scale(0.96)";
    setTimeout(() => {
      lbImg.src = allImages[currentIdx];
      lbImg.style.opacity = "1";
      lbImg.style.transform = "scale(1)";
    }, 180);
  }

  lbImg.style.transition = "opacity 0.22s ease, transform 0.22s ease";
  lbClose.addEventListener("click", closeLightbox);
  lbPrev.addEventListener("click", () => navigate(-1));
  lbNext.addEventListener("click", () => navigate(1));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigate(-1);
    if (e.key === "ArrowRight") navigate(1);
  });

  // Wait for DOM + scripts to finish building gallery items
  window.addEventListener("load", collectImages);
})();

/* ── CARD TILT EFFECT ─────────────────────────────────────── */
(function initTilt() {
  document
    .querySelectorAll(".owner-card, .teacher-card, .topper-card, .contact-card")
    .forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const rx = ((e.clientY - cy) / (rect.height / 2)) * 4;
        const ry = ((e.clientX - cx) / (rect.width / 2)) * -4;
        card.style.transform = `translateY(-6px) perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
})();

/* ── SMOOTH ANCHOR SCROLL ─────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (!target) return;
    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

/* ── TEACHER CARD STAGGER ON REVEAL ──────────────────────── */
(function initTeacherStagger() {
  const groupObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const cards = entry.target.querySelectorAll(
          ".teacher-card, .topper-card",
        );
        cards.forEach((card, i) => {
          card.style.opacity = "0";
          card.style.transform = "translateY(20px)";
          card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "none";
          }, i * 60);
        });
        groupObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.1 },
  );

  document
    .querySelectorAll(".teacher-grid, .topper-cards")
    .forEach((g) => groupObserver.observe(g));
})();

/* ── SCROLL PROGRESS BAR (thin top bar) ──────────────────── */
(function initScrollProgress() {
  const bar = document.createElement("div");
  bar.style.cssText = `
    position: fixed; top: 0; left: 0; height: 2px; z-index: 99999;
    background: linear-gradient(90deg, #c8963c, #e8b55a);
    width: 0%; transition: width 0.08s linear;
    pointer-events: none;
  `;
  document.body.appendChild(bar);

  window.addEventListener("scroll", () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = (window.scrollY / total) * 100;
    bar.style.width = Math.min(pct, 100) + "%";
  });
})();
