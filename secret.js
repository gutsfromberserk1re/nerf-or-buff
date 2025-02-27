// Function to toggle background color between white and black
function toggleBackgroundColor(event) {
  // Check if Shift and D keys are pressed simultaneously
  if (event.shiftKey && event.key === 'D') {
    // Toggle between white and black background
    if (document.body.style.backgroundColor === 'black') {
      document.body.style.backgroundColor = 'white';
    } else {
      document.body.style.backgroundColor = 'black';
    }
  }
}

// Add event listener for keydown event
window.addEventListener('keydown', toggleBackgroundColor);
