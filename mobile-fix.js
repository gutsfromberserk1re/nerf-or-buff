document.addEventListener("DOMContentLoaded", function () {
    function adjustFontSize() {
        let screenWidth = window.innerWidth;
        let baseFontSize = screenWidth < 768 ? "14px" : "16px";
        document.body.style.fontSize = baseFontSize;
    }

    function fixImageAspectRatio() {
        document.querySelectorAll("img").forEach(img => {
            img.style.objectFit = "cover";
            img.style.aspectRatio = "1 / 1"; // Ensures 1:1 ratio
        });
    }

    function optimizeNavigation() {
        let nav = document.querySelector("nav ul");
        let toggleButton = document.createElement("button");
        toggleButton.textContent = "☰ Menu";
        toggleButton.style.display = "none";
        toggleButton.style.padding = "10px";
        toggleButton.style.background = "#5A626A";
        toggleButton.style.color = "white";
        toggleButton.style.border = "none";
        toggleButton.style.cursor = "pointer";
        toggleButton.style.marginBottom = "10px";

        if (window.innerWidth < 768) {
            toggleButton.style.display = "block";
            nav.style.display = "none";
            toggleButton.addEventListener("click", () => {
                nav.style.display = nav.style.display === "block" ? "none" : "block";
            });
            nav.parentNode.insertBefore(toggleButton, nav);
        }
    }

    function fixButtonOverflow() {
        document.querySelectorAll(".read-more").forEach(button => {
            button.style.whiteSpace = "nowrap";
            button.style.overflow = "hidden";
            button.style.textOverflow = "ellipsis";
        });
    }

    function applyMobileFixes() {
        adjustFontSize();
        fixImageAspectRatio();
        optimizeNavigation();
        fixButtonOverflow();
    }

    applyMobileFixes();
    window.addEventListener("resize", applyMobileFixes);
});
