import { Link } from "react-router";

const Article = () => {
  const articles = [
    {
      id: 1,
      image:
        "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fblog%2F1.jpg&w=2048&q=75",
      date: "August 31, 2021",
      comments: "12 Comment",
      title: "Attract Sales And Profits",
      excerpt:
        "A job ravenously while Far much that one rank beheld after outside....",
      link: "#",
    },
    {
      id: 2,
      image:
        "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fblog%2F2.jpg&w=2048&q=75",
      date: "August 31, 2021",
      comments: "12 Comment",
      title: "5 Tips For Your Job Interviews",
      excerpt:
        "A job ravenously while Far much that one rank beheld after outside....",
      link: "#",
    },
    {
      id: 3,
      image:
        "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fblog%2F3.jpg&w=2048&q=75",
      date: "August 31, 2021",
      comments: "12 Comment",
      title: "Overworked Newspaper Editor",
      excerpt:
        "A job ravenously while Far much that one rank beheld after outside....",
      link: "#",
    },
  ];
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-2">Recent News Articles</h2>
          <p className="text-gray-500">
            Fresh job related news content posted each day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                  <span>{article.date}</span>•<span>{article.comments}</span>
                </div>

                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>

                <Link>
                  <button className="btn bg-r-primary text-white btn-outline">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Article;
