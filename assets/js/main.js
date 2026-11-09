document.addEventListener("DOMContentLoaded", () => {
  // Responsive navigation
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open", !expanded);
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Central highlight carousel. Each article is a replaceable editorial feature.
  const carousel = document.querySelector(".spotlight-carousel");
  if (!carousel) return;
  const slides = Array.from(carousel.querySelectorAll("[data-spotlight-slide]"));
  const dots = Array.from(document.querySelectorAll("[data-spotlight-to]"));
  const previous = document.querySelector("[data-spotlight-prev]");
  const next = document.querySelector("[data-spotlight-next]");
  const current = document.getElementById("current-slide");
  const total = document.getElementById("total-slides");
  if (slides.length < 2) return;

  let activeIndex = 0;
  let timer = null;
  const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (total) total.textContent = String(slides.length).padStart(2, "0");

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const active = i === activeIndex;
      slide.hidden = !active;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });
    dots.forEach((dot, i) => {
      const active = i === activeIndex;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-pressed", String(active));
    });
    if (current) current.textContent = String(activeIndex + 1).padStart(2, "0");
  };
  const stopTimer = () => { if (timer) window.clearInterval(timer); timer = null; };
  const startTimer = () => {
    stopTimer();
    if (reducedMotion || document.hidden) return;
    timer = window.setInterval(() => showSlide(activeIndex + 1), 8000);
  };

  previous?.addEventListener("click", () => { showSlide(activeIndex - 1); startTimer(); });
  next?.addEventListener("click", () => { showSlide(activeIndex + 1); startTimer(); });
  dots.forEach((dot) => dot.addEventListener("click", () => {
    const index = Number.parseInt(dot.getAttribute("data-spotlight-to") || "0", 10);
    if (Number.isFinite(index)) showSlide(index);
    startTimer();
  }));
  carousel.addEventListener("mouseenter", stopTimer);
  carousel.addEventListener("mouseleave", startTimer);
  carousel.addEventListener("focusin", stopTimer);
  carousel.addEventListener("focusout", startTimer);
  document.addEventListener("visibilitychange", () => document.hidden ? stopTimer() : startTimer());
  showSlide(0);
  startTimer();
});
