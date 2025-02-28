// Initialize starting color scheme (Dark Greyish mode)
let currentScheme = 'dark-grey'; // Initial theme
const body = document.body;

// Function to set color scheme based on the currentScheme value
function applyTheme() {
  if (currentScheme === 'dark-grey') {
    body.style.backgroundColor = "#2a2a2a"; // Dark grey background
    body.style.color = "#e0e0e0"; // Light grey text
  } else if (currentScheme === 'dark-blue') {
    body.style.backgroundColor = "#1d1f2d"; // Dark blue background
    body.style.color = "#c9d1d9"; // Light text color
  } else if (currentScheme === 'dark-green') {
    body.style.backgroundColor = "#1b2a23"; // Deep green background
    body.style.color = "#c8e1d3"; // Light greenish text color
  } else if (currentScheme === 'beige-brown') {
    body.style.backgroundColor = "#f4f1e1"; // Beige background
    body.style.color = "#4f4a3b"; // Dark brown text
  }
}

// Event listener for Shift + D key press to toggle themes
document.addEventListener("keydown", (e) => {
  if (e.shiftKey && e.key === "D") {
    // Cycle through themes
    if (currentScheme === 'dark-grey') {
      currentScheme = 'dark-blue';  // Change to dark blue
    } else if (currentScheme === 'dark-blue') {
      currentScheme = 'dark-green';  // Change to deep green
    } else if (currentScheme === 'dark-green') {
      currentScheme = 'beige-brown';  // Change to beige and brown
    } else if (currentScheme === 'beige-brown') {
      currentScheme = 'dark-grey';  // Go back to dark grey
    }
    
    // Apply the selected theme
    applyTheme();
  }
});

// Apply the initial theme when the page loads
applyTheme();
