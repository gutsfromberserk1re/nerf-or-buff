// animations.js

// Function to check if an element is in view
function isElementInView(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// Function to add fade-in effect when elements are in view
function addFadeInOnScroll() {
  const elements = document.querySelectorAll('.fade-in'); // Get all elements with the fade-in class
  
  elements.forEach(element => {
    if (isElementInView(element)) {
      element.classList.add('visible'); // Add the class to trigger the animation
    }
  });
}

// Listen for scroll events
window.addEventListener('scroll', addFadeInOnScroll);

// Initial check when the page loads
window.addEventListener('load', addFadeInOnScroll);
