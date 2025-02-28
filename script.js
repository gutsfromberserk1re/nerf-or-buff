let clickCount = 0;

document.addEventListener("click", (e) => {
  if (e.target.tagName === "BODY") {
    clickCount++;
    if (clickCount >= 10) {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
      document.querySelectorAll('.article-box').forEach(box => {
        box.style.backgroundColor = "#fff"; // Light mode for article boxes
      });
      clickCount = 0;  // Reset after toggling
    }
  }
});

document.addEventListener("keydown", (e) => {
  if (e.shiftKey && e.key === "D") {
    document.body.style.backgroundColor = "#121212"; // Dark background for dark mode
    document.body.style.color = "#fff"; // Light text color

    // Set the article boxes to dark blue in dark mode
    document.querySelectorAll('.article-box').forEach(box => {
      box.style.backgroundColor = "#1E2A47"; // Dark blue for article boxes
    });
  }
});
