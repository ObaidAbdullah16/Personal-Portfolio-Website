// ========================================
// Portfolio — Obaid Abdullah
// Vanilla JavaScript
// ========================================

document.addEventListener("DOMContentLoaded", function () {
  // --- Elements ---
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const navItems = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section[id]");
  const fadeElements = document.querySelectorAll(".fade-in");

  // --- Create overlay element for mobile menu ---
  const overlay = document.createElement("div");
  overlay.classList.add("nav-overlay");
  document.body.appendChild(overlay);

  // --- Mobile Menu Toggle ---
  function toggleMenu() {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("open");
    overlay.classList.toggle("active");
    document.body.style.overflow = navLinks.classList.contains("open")
      ? "hidden"
      : "";
  }

  function closeMenu() {
    hamburger.classList.remove("active");
    navLinks.classList.remove("open");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeMenu);

  // Close menu when a nav link is clicked
  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      closeMenu();
    });
  });

  // --- Navbar scroll effect ---
  function handleNavScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleNavScroll);
  handleNavScroll();

  // --- Active nav link on scroll ---
  function highlightActiveLink() {
    var scrollPos = window.scrollY + 150;

    sections.forEach(function (section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;
      var sectionId = section.getAttribute("id");

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navItems.forEach(function (link) {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + sectionId) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightActiveLink);
  highlightActiveLink();

  // --- Scroll fade-in animations using IntersectionObserver ---
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: just show everything
    fadeElements.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  // --- Smooth scroll for anchor links (fallback for older browsers) ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href");
      if (targetId === "#") return;

      var targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        var navHeight = navbar.offsetHeight;
        var targetPosition =
          targetEl.getBoundingClientRect().top + window.scrollY - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // --- Close mobile menu on resize to desktop ---
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });

  // --- Close mobile menu on Escape key ---
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navLinks.classList.contains("open")) {
      closeMenu();
    }
  });
});
