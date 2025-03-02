document.addEventListener("DOMContentLoaded", async () => {
    const defaultImage = "https://via.placeholder.com/300x200?text=No+Image+Available";  // Default image URL

    // Function to fetch article content, title, and an image based on keywords or the first image
    async function fetchArticleData(articlePath, titleSelector, contentSelector, imageSelector, sentenceCount = 5) {
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

            // Extract only <p> text
            let paragraphs = Array.from(tempDiv.querySelectorAll("p")).map(p => p.textContent.trim());
            let articleText = paragraphs.length ? paragraphs.join(" ") : "No content available.";

            // Get the first few sentences
            let lines = articleText.split(". ").slice(0, sentenceCount).join(". ") + ".";

            // Fetch the first image in the article, or use the default image if not found
            let articleImage = defaultImage;  // Default image URL
            const firstImage = tempDiv.querySelector("img");
            if (firstImage && firstImage.src) {
                articleImage = firstImage.src;  // Use the first image's source if available
            }

            // Update the page with extracted content
            document.querySelector(titleSelector).innerHTML = articleTitle || "Untitled Article";
            document.querySelector(contentSelector).innerHTML = lines;
            document.querySelector(imageSelector).src = articleImage;

        } catch (error) {
            console.error(`Error loading ${articlePath}:`, error);
            document.querySelector(titleSelector).innerHTML = "Error loading title.";
            document.querySelector(contentSelector).innerHTML = "Error loading content.";
            document.querySelector(imageSelector).src = defaultImage;
        }
    }

    // Function to fetch all articles in the 'articles' folder and display the latest ones
    async function loadLatestArticles() {
        const articleCount = 5; // How many latest articles you want to display
        const articles = [];
        
        // Fetch articles dynamically (You can implement dynamic file discovery if needed)
        for (let i = 1; i <= articleCount; i++) {
            const articlePath = `articles/article${i}.html`;
            const titleSelector = `.latest-article-title-${i}`;
            const contentSelector = `.latest-article-content-${i}`;
            const imageSelector = `.latest-article-image-${i}`;
            
            await fetchArticleData(articlePath, titleSelector, contentSelector, imageSelector);
        }
    }

    // Load the latest articles
    loadLatestArticles();
    
    // Fetch the featured article manually as before
    // Example: You can manually set the featured article like this:
    fetchArticleData("articles/featuredArticle.html", ".featured-article-title", ".featured-article-content", ".featured-article-image");
});
