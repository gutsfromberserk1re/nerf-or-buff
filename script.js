// Set initial theme to light mode
document.body.style.backgroundColor = "#fff"; // Light background
document.body.style.color = "#000"; // Dark text

let clickCount = 0;
let isDarkMode = false; // Flag to toggle dark mode

// Toggle theme based on Shift + D key press
document.addEventListener("keydown", (e) => {
  if (e.shiftKey && e.key === "D") {
    if (isDarkMode) {
      // Switch to light mode
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    } else {
      // Switch to dark mode
      document.body.style.backgroundColor = "#121212"; // Dark background
      document.body.style.color = "#fff"; // Light text color
    }
    isDarkMode = !isDarkMode; // Toggle the dark mode flag
  }
});

// Reset background to light on 10 clicks for mobile
document.addEventListener("click", (e) => {
  if (e.target.tagName === "BODY") {
    clickCount++;
    if (clickCount >= 10) {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
      clickCount = 0;  // Reset after toggling
    }
  }
});
