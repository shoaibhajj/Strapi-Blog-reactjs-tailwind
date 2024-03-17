import React from "react";
import { useParams } from "react-router-dom";
const BlogContent = ({ blogsApi }) => {
  const { id } = useParams();
  const baseUrl = "http://localhost:1337";
  const detailedBlogs = [
    {
      id: 1,
      title: "10 Days of Solidity",
      description: "Learn Solidity in 10 days!",
      coverImg: "https://picsum.photos/id/1/200/300",
      content:
        "This course is designed to help you understand Solidity, the programming language used for writing smart contracts on the Ethereum blockchain. You'll start with the basics of Solidity and gradually move on to more complex topics such as contract deployment, testing, and security best practices. This course is designed to help you understand Solidity, the programming language used for writing smart contracts on the Ethereum blockchain. You'll start with the basics of Solidity and gradually move on to more complex topics such as contract deployment, testing, and security best practices.",
      authorName: "John Doe",
      authorImg: "https://picsum.photos/id/101/200/300",
      authorDesc:
        "Full Stack Developer with a passion for blockchain technology.",
    },
    {
      id: 2,
      title: "React Hooks Guide",
      description: "Master React Hooks with this comprehensive guide.",
      coverImg: "https://picsum.photos/id/2/200/300",
      content:
        "React Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. This guide will take you through the basics of hooks and how to use them in your projects.React Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. This guide will take you through the basics of hooks and how to use them in your projects.",
      authorName: "Jane Smith",
      authorImg: "https://picsum.photos/id/102/200/300",
      authorDesc:
        "Frontend Developer specializing in React and modern JavaScript.",
    },
    {
      id: 3,
      title: "Next.js for Beginners",
      description: "Get started with Next.js, the future of web development.",
      coverImg: "https://picsum.photos/id/3/200/300",
      content:
        "Next.js is a powerful framework for building server-rendered React applications. This guide will introduce you to the core concepts of Next.js, including static site generation, dynamic routing, and API routes.Next.js is a powerful framework for building server-rendered React applications. This guide will introduce you to the core concepts of Next.js, including static site generation, dynamic routing, and API routes.",
      authorName: "Alice Johnson",
      authorImg: "https://picsum.photos/id/103/200/300",
      authorDesc:
        "Web Developer with expertise in modern JavaScript frameworks.",
    },
    {
      id: 4,
      title: "Tailwind CSS Basics",
      desc: "Dive into the world of utility-first CSS with Tailwind CSS.",
      coverImg: "https://picsum.photos/id/4/200/300",
      content:
        "Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. This tutorial will cover the basics of Tailwind CSS, including installation, configuration, and creating responsive designs.Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. This tutorial will cover the basics of Tailwind CSS, including installation, configuration, and creating responsive designs.",
      authorName: "Bob Williams",
      authorImg: "https://picsum.photos/id/104/200/300",
      authorDesc: "UI/UX Designer with a focus on web design and development.",
    },
    {
      id: 5,
      title: "Vue.js Fundamentals",
      desc: "Understand the core concepts of Vue.js for dynamic web applications.",
      coverImg: "https://picsum.photos/id/5/200/300",
      content:
        "Vue.js is a progressive JavaScript framework for building user interfaces. This course will cover the fundamentals of Vue.js, including components, directives, and Vue CLI. You'll also learn how to build a simple Vue.js application from scratch. Vue.js is a progressive JavaScript framework for building user interfaces. This course will cover the fundamentals of Vue.js, including components, directives, and Vue CLI. You'll also learn how to build a simple Vue.js application from scratch.",
      authorName: "Charlie Brown",
      authorImg: "https://picsum.photos/id/105/200/300",
      authorDesc:
        "Full Stack Developer with a strong background in Vue.js and modern web technologies.",
    },
    {
      id: 6,
      title: "Creating a CRUD App with Vuex",
      desc: "Learn how to build a CRUD application using Vue.js and Vuex.",
      coverImg: "https://picsum.photos/id/6/200/300",
      content:
        "Vuex is a state management library for Vue.js applications. This tutorial will guide you through the process of creating a CRUD (Create, Read, Update, Delete) application using Vue.js and Vuex, including setting up the store, creating actions and mutations, and integrating with an API.Vuex is a state management library for Vue.js applications. This tutorial will guide you through the process of creating a CRUD (Create, Read, Update, Delete) application using Vue.js and Vuex, including setting up the store, creating actions and mutations, and integrating with an API.",
      authorName: "Diana White",
      authorImg: "https://picsum.photos/id/106/200/300",
      authorDesc:
        "Frontend Developer with expertise in Vue.js and state management.",
    },
    {
      id: 7,
      title: "Building a Progressive Web App",
      desc: "Discover how to create a PWA that works offline and on the web.",
      coverImg: "https://picsum.photos/id/7/200/300",
      content:
        "Progressive Web Apps (PWAs) are web applications that can work offline and on low-quality networks. This guide will teach you how to build a PWA using modern web technologies, including service workers, the Cache API, and the Fetch API      Progressive Web Apps (PWAs) are web applications that can work offline and on low-quality networks. This guide will teach you how to build a PWA using modern web technologies, including service workers, the Cache API, and the Fetch API.",
      authorName: "Eva Green",
      authorImg: "https://picsum.photos/id/107/200/300",
      authorDesc: "Web Developer specializing in PWAs and web performance.",
    },
    {
      id: 8,
      title: "GraphQL for API Development",
      desc: "Explore GraphQL for efficient data querying and manipulation.",
      coverImg: "https://picsum.photos/id/8/200/300",
      content:
        "GraphQL is a query language for APIs and a runtime for executing those queries with your existing data. This tutorial will introduce you to GraphQL, including its syntax, how to set up a GraphQL server, and how to query data efficiently. GraphQL is a query language for APIs and a runtime for executing those queries with your existing data. This tutorial will introduce you to GraphQL, including its syntax, how to set up a GraphQL server, and how to query data efficiently.",
      authorName: "Frank Black",
      authorImg: "https://picsum.photos/id/108/200/300",
      authorDesc:
        "Backend Developer with a focus on API development and GraphQL.",
    },
    {
      id: 9,
      title: "Docker for Development",
      desc: "Learn how Docker can simplify your development workflow.",
      coverImg: "https://picsum.photos/id/9/200/300",
      content:
        "Docker is a platform that allows you to automate the deployment, scaling, and management of applications using containerization. This guide will cover the basics of Docker, including installation, Dockerfiles, and Docker Compose, and how to use Docker to streamline your development process. Docker is a platform that allows you to automate the deployment, scaling, and management of applications using containerization. This guide will cover the basics of Docker, including installation, Dockerfiles, and Docker Compose, and how to use Docker to streamline your development process.",
      authorName: "Grace Lee",
      authorImg: "https://picsum.photos/id/109/200/300",
      authorDesc:
        "DevOps Engineer with expertise in containerization and cloud technologies.",
    },
    {
      id: 10,
      title: "Serverless Architecture",
      desc: "Understand the benefits and challenges of serverless computing.",
      coverImg: "https://picsum.photos/id/10/200/300",
      content:
        "Serverless computing allows you to build and run applications without thinking about servers. This tutorial will cover the basics of serverless architecture, including how it works, its benefits, and common use cases. You'll also learn about popular serverless platforms and how to deploy applications using serverless technologies      Serverless computing allows you to build and run applications without thinking about servers. This tutorial will cover the basics of serverless architecture, including how it works, its benefits, and common use cases. You'll also learn about popular serverless platforms and how to deploy applications using serverless technologies.",
      authorName: "Harry Brown",
      authorImg: "https://picsum.photos/id/100/200/300",
      authorDesc:
        "Cloud Architect with a focus on serverless computing and cloud-native applications.",
    },
  ];
  const blogs = blogsApi?.data;
  let blog = blogs
    ? blogs.filter((blog) => blog.id == id)
    : detailedBlogs.filter((blog) => blog.id == id);
  blog = blog[0];
  return (
    <div className="w-full pb-10 bg-[#f9f9f9]">
      <div className="max-w-[1240px] mx-auto">
        <div
          className="grid lg:grid-cols-3  sm:grid-cols-3 ss:grid-cols-1  xs:grid-cols-1
                   gap-x-8 gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black
            "
        >
          <div className="col-span-2 gap-x-8 gap-y-8">
            <img
              className="h-56 w-full object-cover"
              src={
                blogsApi
                  ? `${baseUrl}${blog?.attributes?.coverImg?.data?.attributes?.url}`
                  : blog.coverImg
              }
              alt=""
            />
            <h1 className="font-bold text-2xl my-1 pt-5 ">
              {blogsApi ? blog.attributes.blogTitle : blog.title}
            </h1>
            <div className="pt-5 ">
              <p>
                {blogsApi
                  ? blog.attributes.blogContent[0].children[0].text
                  : blog.content}
              </p>
            </div>
          </div>
          <div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md  py-5 max-h-[250px]">
            <div>
              <img
                className="p-2 w-32 h-32  rounded-full mx-auto  object-cover"
                src={
                  blogsApi
                    ? `${baseUrl}${blog?.attributes?.authorImg?.data?.attributes?.url}`
                    : blog.authorImg
                }
                alt=""
              />
              <h1 className="font-bold text-2xl text-center text-gray-900 pt-3 ">
                {blogsApi ? blog.attributes.authorName : blog.authorName}
              </h1>
              <p className="text-center text-gray-900 font-medium">
                {blogsApi ? blog.attributes.authorDesc : blog.authorDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
