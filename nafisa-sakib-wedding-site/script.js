const TARGET_DATE = new Date("2026-12-24T19:30:00+06:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const messageEl = document.getElementById("countdown-message");

function updateCountdown() {
  const now = Date.now();
  let remaining = TARGET_DATE - now;

  if (remaining <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    messageEl.textContent = "today is the day ♡";
    return;
  }

  const totalHours = Math.floor(remaining / (1000 * 60 * 60));
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 60 * 1000);
