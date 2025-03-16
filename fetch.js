window.addEventListener("DOMContentLoaded", () => {
    // Function to fetch article content
    async function fetchArticleContent(articleFile, maxSentences) {
        try {
            const response = await fetch(`articles/${articleFile}`);
            const articleText = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(articleText, "text/html");

            // Extract title and paragraphs
            const title = doc.querySelector("h1") ? doc.querySelector("h1").textContent : "No title available";
            const paragraphs = doc.querySelectorAll("p");

            // Get a limited number of sentences (for preview)
            let previewText = "";
            let sentenceCount = 0;

            // Loop through paragraphs and get sentences
            for (let i = 0; i < paragraphs.length && sentenceCount < maxSentences; i++) {
                let sentences = paragraphs[i].textContent.split(". ");
                for (let sentence of sentences) {
                    if (sentenceCount < maxSentences) {
                        previewText += sentence + ". ";
                        sentenceCount++;
                    }
                }
            }

            // Get the first image
            const firstImage = doc.querySelector("img") ? doc.querySelector("img").src : "default-image.jpg";

            return { title, preview: previewText.trim(), firstImage };
        } catch (error) {
            console.error("Error fetching article:", error);
            return { title: "Error", preview: "Error fetching content", firstImage: "default-image.jpg" };
        }
    }

    // Fetch Featured Article (20 sentences)
    async function fetchFeaturedArticle() {
        const featuredArticle = await fetchArticleContent("featured-article.html", 20); // Fetch 20 sentences for featured article
        const featuredArticleSection = document.querySelector(".featured-article-box");
        const featuredTitle = featuredArticleSection.querySelector(".featured-article-title");
        const featuredPreview = featuredArticleSection.querySelector(".featured-article-content");
        const featuredImage = featuredArticleSection.querySelector(".featured-image");
        const readMoreButton = featuredArticleSection.querySelector(".read-more");

        featuredTitle.textContent = featuredArticle.title;
        featuredPreview.textContent = featuredArticle.preview;
        featuredImage.src = featuredArticle.firstImage;

        // Set the correct link for the "Read More" button for featured article
        readMoreButton.onclick = function() {
            window.location.href = "articles/featured-article.html"; // Update this URL to your correct featured article path
        };
    }

    // Fetch Latest Articles (1 sentence each, reduced by 4)
    async function fetchLatestArticles() {
        const latestArticles = [ "article1.html", "article2.html", "article3.html", "article4.html", "article5.html" ];
        const latestArticleSections = document.querySelectorAll(".article-box");

        for (let i = 0; i < latestArticles.length; i++) {
            const article = await fetchArticleContent(latestArticles[i], 1); // Fetch 1 sentence for latest articles
            const articleSection = latestArticleSections[i];
            const articleTitle = articleSection.querySelector(".latest-article-title-" + (i + 1));
            const articlePreview = articleSection.querySelector(".latest-article-" + (i + 1));
            const articleImage = articleSection.querySelector(".article-image");
            const readMoreButton = articleSection.querySelector(".read-more");

            articleTitle.textContent = article.title;
            articlePreview.textContent = article.preview;
            articleImage.src = article.firstImage;

            // Set the correct link for the "Read More" button for each latest article
            readMoreButton.onclick = function() {
                window.location.href = `articles/${latestArticles[i]}`; // Dynamically set the link to the correct article
            };
        }
    }

    // Initialize fetching process
    fetchFeaturedArticle();
    fetchLatestArticles();
});

