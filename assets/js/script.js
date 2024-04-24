// Animation

const animate = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { once: true }
);

animate.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});
