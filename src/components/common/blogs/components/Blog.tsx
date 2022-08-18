import React from "react";
import { BlogData } from "../interface/IBlogs";

const Blog: React.FC<BlogData> = ({
  title,
  url,
  description,
  imgUrl,
  urlName,
}: BlogData) => {
  return (
    <div className="blog card">
      <div className="blog__contents">
        <h2 className="tag">Blog</h2>
        <h2 className="title">{title}</h2>
        <h2 className="description">{description}</h2>
        <a className="url" href={url}>
          {urlName}
        </a>
      </div>
      <div className="blog__image-wrapper">
        <img src={imgUrl} alt={title} />
      </div>
    </div>
  );
};

export default Blog;
