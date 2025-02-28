// pages/index.js
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Level Up News</title>
        <meta name="description" content="Gaming News" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <div className={styles.navbar}>
        <a href="/" className={styles.navLink}>Home</a>
        <a href="/about" className={styles.navLink}>About</a>
        <a href="/subscribe" className={styles.navLink}>Subscribe</a>
      </div>

      <div className={styles.mainContent}>
        {/* Featured Article */}
        <div className={styles.featuredArticle}>
          <h2>Featured Article</h2>
          <div className={styles.featuredContent}>
            <img src="https://via.placeholder.com/300" alt="Featured" className={styles.featuredImage} />
            <div className={styles.featuredText}>
              <h3>Featured News Headline</h3>
              <p>Brief introduction to the featured article...</p>
              <button className={styles.readMore}>Read More</button>
            </div>
          </div>
        </div>

        {/* Latest Articles Box */}
        <div className={styles.latestArticlesBox}>
          <h2>Latest Articles</h2>
          <div className={styles.scrollableArticles}>
            {/* Article 1 */}
            <div className={styles.articleCard}>
              <div className={styles.articleText}>
                <h4>Article Title 1</h4>
                <p>Short description of the article...</p>
              </div>
              <img src="https://via.placeholder.com/150" alt="Article 1" className={styles.articleImage} />
            </div>

            {/* Article 2 */}
            <div className={styles.articleCard}>
              <div className={styles.articleText}>
                <h4>Article Title 2</h4>
                <p>Short description of the article...</p>
              </div>
              <img src="https://via.placeholder.com/150" alt="Article 2" className={styles.articleImage} />
            </div>

            {/* Article 3 */}
            <div className={styles.articleCard}>
              <div className={styles.articleText}>
                <h4>Article Title 3</h4>
                <p>Short description of the article...</p>
              </div>
              <img src="https://via.placeholder.com/150" alt="Article 3" className={styles.articleImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


