/* Dark / Light Toggle */
const toggleBtn = document.getElementById("themeToggle");
const html = document.documentElement;

toggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");
  toggleBtn.textContent = html.classList.contains("dark")
    ? "☀️ Light"
    : "🌙 Dark";
});

/* Countdown Timer */
const launchDate = new Date("2026-03-02T00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = launchDate - now;

  document.getElementById("days").textContent =
    Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("hours").textContent =
    Math.floor((diff / (1000 * 60 * 60)) % 24);

  document.getElementById("minutes").textContent =
    Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("seconds").textContent =
    Math.floor((diff / 1000) % 60);
}, 1000);
const form = document.getElementById("notifyForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop page reload

  successMessage.classList.remove("hidden");

  // Optional: reset form
  form.reset();
});


