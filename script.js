let clickCount = 0;

// Check localStorage for theme preference
const theme = localStorage.getItem('theme') || 'dark';

// Apply the current theme on page load
document.body.classList.add(theme);

// Detect Ctrl + W for theme switch (Desktop)
window.addEventListener('keydown', function (e) {
  if (e.ctrlKey && e.key === 'w') {
    toggleTheme();
  }
});

// Detect 10 taps/clicks for theme switch (Mobile)
document.body.addEventListener('click', function () {
  clickCount++;
  if (clickCount >= 10) {
    toggleTheme();
    clickCount = 0; // Reset click count
  }
});

// Function to toggle theme
function toggleTheme() {
  const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  // Toggle the class on the body
  document.body.classList.remove(currentTheme);
  document.body.classList.add(newTheme);

  // Save the preference to localStorage
  localStorage.setItem('theme', newTheme);
}
