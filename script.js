let clickCount = 0;

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

document.addEventListener("keydown", (e) => {
  if (e.shiftKey && e.key === "D") {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
  }
});
