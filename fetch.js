document.addEventListener("DOMContentLoaded", async () => {
    // Function to fetch article data (title, preview text, and image) from an article
    async function fetchArticleData(articlePath, titleSelector, contentSelector, imageSelector, sentenceCount = 3) {
        try {
            const response = await fetch(articlePath);
            if (!response.ok) throw new Error(`Failed to load ${articlePath}`);

            const text = await response.text();

            // Create a temporary DOM element to parse the HTML
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = text;

            // Extract title from <h1> or <h2> (fallback: first <p> sentence)
            let titleMatch = tempDiv.querySelector("h1, h2");
            let articleTitle = titleMatch ? titleMatch.textContent.trim() : "";

            // Extract <p> text
            let paragraphs = Array.from(tempDiv.querySelectorAll("p")).map(p => p.textContent.trim());
            let articleText = paragraphs.length ? paragraphs.join(" ") : "No content available.";

            // Get the first few sentences
            let previewText = articleText.split(". ").slice(0, sentenceCount).join(". ") + ".";

            // Extract first image or set a default
            let image = tempDiv.querySelector("img") ? tempDiv.querySelector("img").src : "https://via.placeholder.com/150";

            // Update the page with extracted content
            document.querySelector(titleSelector).innerHTML = articleTitle || "Untitled Article";
            document.querySelector(contentSelector).innerHTML = previewText;
            document.querySelector(imageSelector).src = image;

        } catch (error) {
            console.error(`Error loading ${articlePath}:`, error);
            document.querySelector(titleSelector).innerHTML = "Error loading title.";
            document.querySelector(contentSelector).innerHTML = "Error loading content.";
            document.querySelector(imageSelector).src = "https://via.placeholder.com/150";
        }
    }

    // Fetch Featured Article
    fetchArticleData("articles/articleX.html", ".featured-article-title", ".featured-article-content", ".featured-image");

    // Fetch Latest Articles
    const latestArticles = [1, 2, 3, 4, 5];  // Modify this list if you add more articles
    latestArticles.forEach((articleNumber, index) => {
        fetchArticleData(`articles/article${articleNumber}.html`, `.latest-article-title-${index + 1}`, `.latest-article-${index + 1}`, `.latest-article-image-${index + 1}`);
    });
});
