import React from "react";
import Blog from "./components/Blog";
import { Blogs } from "./interface/IBlogs";

const BlogsList: React.FC<Blogs> = ({ title, data }: Blogs) => {
  return (
    <div className="blogs">
      <div className="header card">
        <h2 className="header__title">
          {title}({data.length})
        </h2>
      </div>
      <div className="blogs__list">
        {data.map((blog, index) => {
          return (
            <Blog
              key={`${blog.title}-${index}`}
              title={blog.title}
              description={blog.description}
              url={blog.url}
              imgUrl={blog.imgUrl}
              urlName={blog.urlName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogsList;
