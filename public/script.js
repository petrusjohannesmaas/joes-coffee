document.addEventListener("DOMContentLoaded", () => {
  const alertMessages = ["Alert message 1", "Alert message 2"];
  const alertText = document.getElementById("alert-text");

  if (!alertText) return;

  let currentIndex = 0;
  alertText.innerText = alertMessages[currentIndex];

  setInterval(() => {
    alertText.style.opacity = 0;
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % alertMessages.length;
      alertText.innerText = alertMessages[currentIndex];
      alertText.style.opacity = 1;
    }, 500); // match transition duration
  }, 5000);
});
