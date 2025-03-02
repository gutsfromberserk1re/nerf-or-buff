<script>
    // Function to check if the device is a mobile device
    function checkAndRedirect() {
        // Check for screen width less than or equal to 1024px (common for tablets and phones)
        if (window.innerWidth <= 1024) {
            window.location.href = "mobile.html"; // Redirect to the mobile version of the site
        }
    }

    // Check on initial load
    window.onload = checkAndRedirect;

    // Optionally check again if window is resized or orientation changes
    window.addEventListener("resize", checkAndRedirect);
    window.addEventListener("orientationchange", checkAndRedirect);
</script>
