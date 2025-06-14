// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Animate stats counting
function animateStats() {
  const statItems = document.querySelectorAll(".stat-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const statNumber = entry.target.querySelector(".stat-number");
          const target = parseInt(statNumber.getAttribute("data-count"));
          const suffix = statNumber.textContent.includes("%") ? "%" : "";
          const duration = 2000;
          const start = 0;
          const increment = target / (duration / 16);

          let current = start;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              clearInterval(timer);
              current = target;
            }
            statNumber.textContent = Math.floor(current) + suffix;
          }, 16);

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statItems.forEach((item) => {
    observer.observe(item);
  });
}

// Initialize animations when page loads
document.addEventListener("DOMContentLoaded", function () {
  animateStats();

  // Add smooth scroll to all links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
