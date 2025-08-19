// Announcement bar
document.addEventListener("DOMContentLoaded", () => {
  const alertMessages = [
    "Scan your loyalty QR in store, to get 5% off your orders.", 
    "Free shipping on all Z.A. orders of R1000 or more"
  ];
  
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

// Modal
// Get elements
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close-btn");

// Open modal
openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close modal when clicking the close button
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Optional: Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Generating QR
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.qr-section form');
  form.addEventListener('submit', () => {
    console.log('Generating QR...');
  });
});