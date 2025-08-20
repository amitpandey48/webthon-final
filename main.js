// ==================== Navbar Toggle ====================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close menu on link click (mobile fix)
document.querySelectorAll(".nav-link").forEach(link =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  })
);

// ==================== Smooth Scroll ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href") !== "#") {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// ==================== Stats Counter ====================
const counters = document.querySelectorAll(".stat-number");
const speed = 150; // lower is faster

const startCounting = (counter) => {
  const target = +counter.getAttribute("data-target");
  const count = +counter.innerText.replace(/\D/g, "");
  const increment = Math.ceil(target / speed);

  if (count < target) {
    counter.innerText = `${count + increment}+`;
    setTimeout(() => startCounting(counter), 30);
  } else {
    counter.innerText = `${target}+`;
  }
};

// Use Intersection Observer to start counter when visible
const statsSection = document.querySelector(".stats");
let statsStarted = false;

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !statsStarted) {
      counters.forEach(counter => startCounting(counter));
      statsStarted = true;
    }
  });
}, { threshold: 0.4 });

if (statsSection) {
  statsObserver.observe(statsSection);
}

// ==================== Floating Icons Animation ====================
const floatingIcons = document.querySelectorAll(".floating-icons i");

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

floatingIcons.forEach(icon => {
  icon.style.setProperty("--x", `${randomFloat(-30, 30)}px`);
  icon.style.setProperty("--y", `${randomFloat(-30, 30)}px`);
  icon.style.animation = `float ${randomFloat(4, 8)}s ease-in-out infinite alternate`;
});

// ==================== Scroll Reveal Animation ====================
const revealElements = document.querySelectorAll(
  ".section-header, .about-content, .event-category, .gallery-item, .cta-content"
);

const revealOnScroll = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
      revealOnScroll.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

revealElements.forEach(el => revealOnScroll.observe(el));
