// Function to adjust article box sizes and layout based on screen width
function adjustLayout() {
  const mainContent = document.querySelector('main');
  const featuredSection = document.querySelector('.featured');
  const articlesSection = document.querySelector('.articles');
  
  // Get the window width
  const windowWidth = window.innerWidth;

  // Check if the screen is smaller than 768px (mobile or tablet)
  if (windowWidth < 768) {
    // Stack the sections vertically on smaller screens
    mainContent.style.flexDirection = 'column';
    mainContent.style.alignItems = 'center';

    featuredSection.style.width = '100%';
    articlesSection.style.width = '100%';
  } else {
    // Arrange sections side-by-side for larger screens (desktop)
    mainContent.style.flexDirection = 'row';
    mainContent.style.alignItems = 'flex-start';

    featuredSection.style.width = '48%';
    articlesSection.style.width = '48%';
  }
}

// Call adjustLayout function when the page loads
window.addEventListener('load', adjustLayout);

// Re-run adjustLayout when the window is resized
window.addEventListener('resize', adjustLayout);
