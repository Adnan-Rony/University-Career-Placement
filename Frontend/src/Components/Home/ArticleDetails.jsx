import React from "react";
import { Link, useParams } from "react-router";
import { articles } from "./articles";

const ArticleDetails = () => {
  const { id } = useParams();

  // Normally API theke fetch koro article by id, ekhane dummy data use korchi
 

  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Article Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            Sorry, the article you're looking for doesn't exist.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  // Related articles (excluding current article)
  const relatedArticles = articles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-purple-600">
              Home
            </Link>
           
            <span>/</span>
            <span className="text-gray-900 font-medium">{article.title}</span>
          </div>

          {/* Article Header */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 border-b border-gray-200 pb-6">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 107.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
              </svg>
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
              </svg>
              <span>{article.comments}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Article Content */}
          <div className="lg:col-span-2">
            {/* Featured Image */}
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                {article.excerpt}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {article.introduction}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Key Points
              </h2>
              <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
                {article.mainPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Conclusion
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {article.conclusion}
              </p>
            </div>

            {/* Share Section */}
            <div className="bg-gray-100 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Share this article
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                  title="Share on Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0C4.477 0 0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.879V12.89h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.989C16.343 19.129 20 14.99 20 10c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 bg-sky-400 text-white rounded-full hover:bg-sky-500 transition"
                  title="Share on Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M19.59 8.36c.01.13.01.26.01.39 0 3.9-2.97 8.39-8.39 8.39-1.67 0-3.22-.49-4.53-1.33.23.03.46.04.69.04 1.38 0 2.65-.47 3.66-1.26-1.29-.02-2.38-.88-2.76-2.04.18.03.36.05.55.05.27 0 .53-.03.78-.1-1.35-.27-2.37-1.46-2.37-2.89v-.04c.4.22.86.36 1.35.38-.79-.53-1.31-1.44-1.31-2.46 0-.54.15-1.05.4-1.49 1.46 1.79 3.64 2.97 6.1 3.1-.05-.22-.08-.45-.08-.68 0-1.65 1.34-3 3-3 .86 0 1.64.36 2.19.95.68-.13 1.32-.38 1.9-.72-.22.7-.7 1.29-1.32 1.66.6-.07 1.18-.23 1.71-.46-.4.6-.9 1.13-1.48 1.55z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
                  title="Share on LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.06 1.5H2.94C2.13 1.5 1.5 2.13 1.5 2.94v14.12c0 .81.63 1.44 1.44 1.44h14.12c.81 0 1.44-.63 1.44-1.44V2.94c0-.81-.63-1.44-1.44-1.44zM6.4 15.3H4V7.2h2.4v8.1zm-1.2-9.2c-.77 0-1.4-.63-1.4-1.4s.63-1.4 1.4-1.4 1.4.63 1.4 1.4-.63 1.4-1.4 1.4zm9.5 9.2h-2.4v-3.9c0-.93-.03-2.13-1.3-2.13-1.3 0-1.5.99-1.5 2v3.93h-2.4V7.2h2.3v1.1h.03c.32-.6 1.1-1.23 2.27-1.23 2.43 0 2.88 1.59 2.88 3.66v4.57z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* About Card */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                About This Article
              </h3>
              <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Published:</span>
                  <span className="text-gray-900 font-medium">
                    {article.date}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="text-gray-900 font-medium">
                    {article.category}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Read Time:</span>
                  <span className="text-gray-900 font-medium">
                    {article.readTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Related Articles
              </h3>
              <div className="space-y-4">
                {relatedArticles.map((relArticle) => (
                  <a
                    key={relArticle.id}
                    href={`/article/${relArticle.id}`}
                    className="group block p-3 rounded-lg hover:bg-gray-50 transition"
                  >
                    <img
                      src={relArticle.image}
                      alt={relArticle.title}
                      className="w-full h-20 object-cover rounded mb-2 group-hover:opacity-80 transition"
                    />
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-purple-600 transition line-clamp-2">
                      {relArticle.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {relArticle.date}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12 mx-4 rounded-xl mb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to advance your career?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Explore more resources and opportunities to grow professionally
          </p>
          <Link
            to="/alljobs"
            className="inline-block px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Explore Opportunities
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
