import React, { useEffect } from "react";
import { BlogData } from "../interface/IBlogs";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Blog: React.FC<BlogData> = ({
  title,
  url,
  description,
  imgUrl,
  urlName,
}: BlogData) => {
  const blogVariants = {
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    hidden: { x: 10, opacity: 0 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="blog card"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={blogVariants}
    >
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
    </motion.div>
  );
};

export default Blog;
