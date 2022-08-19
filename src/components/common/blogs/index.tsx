import React from "react";
import { motion } from "framer-motion";
import Blog from "./components/Blog";
import { Blogs } from "./interface/IBlogs";

const BlogsList: React.FC<Blogs> = ({ title, data }: Blogs) => {
  return (
    <motion.div
      whileInView={{ x: 0, opacity: 1, transition: { duration: 0.8 } }}
      initial={{ x: 10, opacity: 0 }}
      className="blogs"
    >
      <div className="header card">
        <h2 className="header__title">
          {title}({data.length})
        </h2>
      </div>
      <div className="blogs__list">
        {data.map((blog, index) => {
          return (
            <motion.div
              key={`${blog.title}-${index}`}
              whileInView={{
                y: 0,
                x: 0,
                opacity: 1,
                transition: { duration: Number(index + 0.9) },
              }}
              initial={{ x: -10, opacity: 0 }}
            >
              <Blog
                title={blog.title}
                description={blog.description}
                url={blog.url}
                imgUrl={blog.imgUrl}
                urlName={blog.urlName}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default BlogsList;
