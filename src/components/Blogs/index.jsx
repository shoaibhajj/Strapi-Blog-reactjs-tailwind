import React from "react";
import { Link } from "react-router-dom";
function Blogs({ blogsApi }) {
  const baseUrl = "http://localhost:1337";
  const dummyBlogs = [
    {
      id: 1,
      blogTitle: "10 Days of Solidity",
      blogDesc: "Learn Solidity in 10 days!",
      coverImg: "https://picsum.photos/id/1/200/300",
    },
    {
      id: 2,
      blogTitle: "React Hooks Guide",
      blogDesc: "Master React Hooks with this comprehensive guide.",
      coverImg: "https://picsum.photos/id/2/200/300",
    },
    {
      id: 3,
      blogTitle: "Next.js for Beginners",
      blogDesc: "Get started with Next.js, the future of web development.",
      coverImg: "https://picsum.photos/id/3/200/300",
    },
    {
      id: 4,
      blogTitle: "Tailwind CSS Basics",
      blogDesc: "Dive into the world of utility-first CSS with Tailwind CSS.",
      coverImg: "https://picsum.photos/id/4/200/300",
    },
    {
      id: 5,
      blogTitle: "Vue.js Fundamentals",
      blogDesc:
        "Understand the core concepts of Vue.js for dynamic web applications.",
      coverImg: "https://picsum.photos/id/5/200/300",
    },
    {
      id: 6,
      blogTitle: "Creating a CRUD App with Vuex",
      blogDesc: "Learn how to build a CRUD application using Vue.js and Vuex.",
      coverImg: "https://picsum.photos/id/6/200/300",
    },
    {
      id: 7,
      blogTitle: "Building a Progressive Web App",
      blogDesc:
        "Discover how to create a PWA that works offline and on the web.",
      coverImg: "https://picsum.photos/id/7/200/300",
    },
    {
      id: 8,
      blogTitle: "GraphQL for API Development",
      blogDesc: "Explore GraphQL for efficient data querying and manipulation.",
      coverImg: "https://picsum.photos/id/8/200/300",
    },
    {
      id: 9,
      blogTitle: "Docker for Development",
      blogDesc: "Learn how Docker can simplify your development workflow.",
      coverImg: "https://picsum.photos/id/9/200/300",
    },
    {
      id: 10,
      blogTitle: "Serverless Architecture",
      blogDesc:
        "Understand the benefits and challenges of serverless computing.",
      coverImg: "https://picsum.photos/id/10/200/300",
    },
  ];

  const blogs = blogsApi?.data; 

  return (
    <div className="w-full bg-[#f9f9f9] py-[50px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black">
          {blogsApi
            ? blogs.map((blog) => (
                <Link to={`/blog/${blog.id}`}>
                  <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                    <img
                      className="h-56 w-full object-cover "
                      src={
                        blogsApi
                          ? `${baseUrl}${blog?.attributes?.coverImg?.data?.attributes?.url}`
                          : dummyBlogs.coverImg
                      }
                    ></img>
                    <div className="p-8 ">
                      <h3 className="font-bold text-2xl my-1">
                        {blogsApi
                          ? blog.attributes.blogTitle
                          : dummyBlogs.blogTitle}
                      </h3>
                      <p className="text-gray-600 text-xl">
                        {blogsApi
                          ? blog.attributes.blogDesc
                          : dummyBlogs.blogDesc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            : dummyBlogs.map((blog) => (
                <Link to={`/blog/${blog.id}`}>
                  <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                    <img
                      className="h-56 w-full object-cover "
                      src={blog.coverImg}
                    ></img>
                    <div className="p-8 ">
                      <h3 className="font-bold text-2xl my-1">
                        {blog.blogTitle}
                      </h3>
                      <p className="text-gray-600 text-xl">{blog.blogDesc}</p>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
