// JavaScript to dynamically fetch the featured article and latest articles

window.addEventListener("DOMContentLoaded", () => {
  // Function to fetch article content
  async function fetchArticleContent(articleFile, maxParagraphs) {
    try {
      const response = await fetch(`articles/${articleFile}`);
      const articleText = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(articleText, "text/html");

      // Extract title and paragraphs
      const title = doc.querySelector("h1") ? doc.querySelector("h1").textContent : "No title available";
      const paragraphs = doc.querySelectorAll("p");
      
      // Get a limited number of paragraphs (for preview)
      let previewText = "";
      for (let i = 0; i < Math.min(paragraphs.length, maxParagraphs); i++) {
        previewText += paragraphs[i].textContent + " ";
      }

      // Get the first image
      const firstImage = doc.querySelector("img") ? doc.querySelector("img").src : "default-image.jpg";

      return { title, preview: previewText.trim(), firstImage };
    } catch (error) {
      console.error("Error fetching article:", error);
      return { title: "Error", preview: "Error fetching content", firstImage: "default-image.jpg" };
    }
  }

  // Fetch Featured Article
  async function fetchFeaturedArticle() {
    const featuredArticle = await fetchArticleContent("featured-article.html", 10); // Fetch 10 paragraphs for featured article
    const featuredArticleSection = document.querySelector(".featured-article-box");
    const featuredTitle = featuredArticleSection.querySelector(".featured-article-title");
    const featuredPreview = featuredArticleSection.querySelector(".featured-article-content");
    const featuredImage = featuredArticleSection.querySelector(".featured-image");

    featuredTitle.textContent = featuredArticle.title;
    featuredPreview.textContent = featuredArticle.preview;
    featuredImage.src = featuredArticle.firstImage;
  }

  // Fetch Latest Articles
  async function fetchLatestArticles() {
    const latestArticles = [ "article1.html", "article2.html", "article3.html", "article4.html", "article5.html" ];
    const latestArticleSections = document.querySelectorAll(".article-box");

    for (let i = 0; i < latestArticles.length; i++) {
      const article = await fetchArticleContent(latestArticles[i], 5); // Fetch 5 paragraphs for latest articles
      const articleSection = latestArticleSections[i];
      const articleTitle = articleSection.querySelector(".latest-article-title-" + (i + 1));
      const articlePreview = articleSection.querySelector(".latest-article-" + (i + 1));
      const articleImage = articleSection.querySelector(".article-image");

      articleTitle.textContent = article.title;
      articlePreview.textContent = article.preview;
      articleImage.src = article.firstImage;
    }
  }

  // Initialize fetching process
  fetchFeaturedArticle();
  fetchLatestArticles();
});
