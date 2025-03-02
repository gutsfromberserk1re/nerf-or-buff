document.addEventListener("DOMContentLoaded", async () => {
    // Function to fetch article content and title
    async function fetchArticleData(articlePath, titleSelector, contentSelector, sentenceCount = 5) {
        try {
            const response = await fetch(articlePath);
            if (!response.ok) throw new Error(`Failed to load ${articlePath}`);

            const text = await response.text();
            
            // Extract text content
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = text;

            let articleText = tempDiv.textContent || tempDiv.innerText || "";
            let lines = articleText.split(". ").slice(0, sentenceCount).join(". ") + "."; // Extract first few lines

            // Extract the first <h1> or <h2> as the title (fallback to first sentence if no header found)
            let titleMatch = tempDiv.querySelector("h1, h2");
            let articleTitle = titleMatch ? titleMatch.textContent.trim() : articleText.split(". ")[0];

            document.querySelector(titleSelector).innerHTML = articleTitle;
            document.querySelector(contentSelector).innerHTML = lines;
        } catch (error) {
            console.error(`Error loading ${articlePath}:`, error);
            document.querySelector(titleSelector).innerHTML = "Error loading title.";
            document.querySelector(contentSelector).innerHTML = "Error loading content.";
        }
    }

    // Fetch content & title for the Featured Article
    fetchArticleData("articles/article1.html", ".featured-article-title", ".featured-article-content");

    // Fetch content & title for Latest Articles
    fetchArticleData("articles/article2.html", ".latest-article-title-1", ".latest-article-1");
    fetchArticleData("articles/article3.html", ".latest-article-title-2", ".latest-article-2");
});
