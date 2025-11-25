import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router";
import { SectionTitle } from "../Shared/SectionTitle";

export const Blog = () => {
  const { error, data: AllBlogs = [] } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axios.get("/blog.json");
      return res.data.data;
    },
  });

  const blogs = AllBlogs.slice(0, 3);
  const { author, comments, title, details, excerpt, id, date } = blogs;

  return (
    <div className="bg-r-background">
      <div className="container mx-auto py-16">
        <SectionTitle
          title={"Latest Career Insights"}
          subtitle={
            "Stay Informed with the Latest Career Advice and Job Trends"
          }
        />

        <div className="grid grid-cols-4 md:gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="card bg-base-100  shadow-md rounded-3xl "
            >
              <figure className="px-4 py-4">
                <img src={blog.thumbnail} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body  text-start">
                <h2 className="card-title text-start">{blog.title}</h2>
                <p className="line-clamp-2">{blog.excerpt}</p>
                <div className="card-actions">
                  <Link to={`/blog/blogdetails/${blog.id}`}>
                    <button className="btn btn-ghost btn-outline  text-r-accent">
                      Read Moreeee
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
