<script>
    // Function to check if the device is a mobile device (including 1080p phones)
    function checkAndRedirect() {
        if (window.innerWidth <= 1024 && window.innerHeight <= 1920) {
            window.location.href = "mobile.html"; // Redirect to mobile version for smaller devices
        }
    }

    // Check on initial load
    checkAndRedirect();

    // Optionally check again if window is resized or orientation changes
    window.addEventListener("resize", checkAndRedirect);
    window.addEventListener("orientationchange", checkAndRedirect);
</script>
