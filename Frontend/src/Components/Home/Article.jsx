import { Link } from "react-router";
import { articles } from "./articles";
import { Heading } from "../Shared/Heading";

const Article = () => {

  return (
    <section className=" py-16">
      <div className="container mx-auto px-4">
  <Heading
  title="Recent News Articles"
  subtitle="Fresh job related news content posted each day."
/>


        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles?.map((article) => (
            <div
              key={article.id}
              className="bg-base-100 rounded-xl overflow-hidden shadow hover:shadow-md transition"
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

             <Link to={`/article/${article.id}`}>
  <button className="btn bg-gradient-to-r from-[#7405de] to-[#a626ec] text-white btn-outline border-none">
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
