import React from "react";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const HomePage = ({blogsApi}) => {
  return (
    <div>
      <NavBar />
      <Blogs blogsApi={blogsApi} />

      <Footer />
    </div>
  );
};

export default HomePage;
