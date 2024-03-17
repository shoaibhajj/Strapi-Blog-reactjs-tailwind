import React from "react";
import BlogContent from "../components/BlogContent";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const BlogContentPage = ({blogsApi} ) => {
  return (
    <div>
      <NavBar />
      <BlogContent blogsApi={blogsApi} />

      <Footer />
    </div>
  );
};

export default BlogContentPage;
