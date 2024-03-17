import React from "react";
import { useParams } from "react-router-dom";
const BlogContent = ({ blogsApi }) => {
  const { id } = useParams();
  const baseUrl = "http://localhost:1337";
  const detailedBlogs = [
    {
      id: 4,
      attributes: {
        blogTitle: "10 Days of Solidity",
        blogDesc: "Learn Solidity in 10 days!",
        blogContent: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "This course is designed to help you understand Solidity, the programming language used for writing smart contracts on the Ethereum blockchain. You'll start with the basics of Solidity and gradually move on to more complex topics such as contract deployment, testing, and security best practices. This course is designed to help you understand Solidity, the programming language used for writing smart contracts on the Ethereum blockchain. You'll start with the basics of Solidity and gradually move on to more complex topics such as contract deployment, testing, and security best practices.",
              },
            ],
          },
        ],
        createdAt: "2024-03-09T17:29:13.092Z",
        updatedAt: "2024-03-09T17:29:15.257Z",
        publishedAt: "2024-03-09T17:29:15.253Z",
        authorName: "John Doe",
        authorDesc:
          "Full Stack Developer with a passion for blockchain technology.",
        coverImg: {
          data: {
            id: 3,
            attributes: {
              name: "300.jpg",
              alternativeText: null,
              caption: null,
              width: 200,
              height: 300,
              formats: {
                thumbnail: {
                  name: "thumbnail_300.jpg",
                  hash: "thumbnail_300_9f949ef36d",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 104,
                  height: 156,
                  size: 3.99,
                  url: "/uploads/thumbnail_300_9f949ef36d.jpg",
                },
              },
              hash: "300_9f949ef36d",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 9.22,
              url: "/uploads/300_9f949ef36d.jpg",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2024-03-09T17:27:49.280Z",
              updatedAt: "2024-03-09T17:27:49.280Z",
            },
          },
        },
        authorImg: {
          data: {
            id: 4,
            attributes: {
              name: "300.jpg",
              alternativeText: null,
              caption: null,
              width: 200,
              height: 300,
              formats: {
                thumbnail: {
                  name: "thumbnail_300.jpg",
                  hash: "thumbnail_300_a0348bbc42",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 104,
                  height: 156,
                  size: 3.67,
                  url: "/uploads/thumbnail_300_a0348bbc42.jpg",
                },
              },
              hash: "300_a0348bbc42",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 9.1,
              url: "/uploads/300_a0348bbc42.jpg",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2024-03-09T17:29:06.151Z",
              updatedAt: "2024-03-09T17:29:06.151Z",
            },
          },
        },
      },
    },
    {
      id: 5,
      attributes: {
        blogTitle: "React Hooks Guide",
        blogDesc: "Master React Hooks with this comprehensive guide.",
        blogContent: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "React Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. This guide will take you through the basics of hooks and how to use them in your projects.React Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. This guide will take you through the basics of hooks and how to use them in your projects.",
              },
            ],
          },
        ],
        createdAt: "2024-03-09T17:31:30.053Z",
        updatedAt: "2024-03-09T17:31:31.704Z",
        publishedAt: "2024-03-09T17:31:31.701Z",
        authorName: "Jane Smith",
        authorDesc:
          "Frontend Developer specializing in React and modern JavaScript.",
        coverImg: {
          data: {
            id: 5,
            attributes: {
              name: "300.jpg",
              alternativeText: null,
              caption: null,
              width: 200,
              height: 300,
              formats: {
                thumbnail: {
                  name: "thumbnail_300.jpg",
                  hash: "thumbnail_300_18ff358c76",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 104,
                  height: 156,
                  size: 4.39,
                  url: "/uploads/thumbnail_300_18ff358c76.jpg",
                },
              },
              hash: "300_18ff358c76",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 10.52,
              url: "/uploads/300_18ff358c76.jpg",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2024-03-09T17:30:25.990Z",
              updatedAt: "2024-03-09T17:30:25.990Z",
            },
          },
        },
        authorImg: {
          data: {
            id: 6,
            attributes: {
              name: "300.jpg",
              alternativeText: null,
              caption: null,
              width: 200,
              height: 300,
              formats: {
                thumbnail: {
                  name: "thumbnail_300.jpg",
                  hash: "thumbnail_300_5506dc5eb5",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 104,
                  height: 156,
                  size: 2.65,
                  url: "/uploads/thumbnail_300_5506dc5eb5.jpg",
                },
              },
              hash: "300_5506dc5eb5",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 5.96,
              url: "/uploads/300_5506dc5eb5.jpg",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2024-03-09T17:31:16.791Z",
              updatedAt: "2024-03-09T17:31:16.791Z",
            },
          },
        },
      },
    },
    {
      id: 6,
      attributes: {
        blogTitle: "Next.js for Beginners",
        blogDesc: "Get started with Next.js, the future of web development.",
        blogContent: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: '"Next.js is a powerful framework for building server-rendered React applications. This guide will introduce you to the core concepts of Next.js, including static site generation, dynamic routing, and API routes.Next.js is a powerful framework for building server-rendered React applications. This guide will introduce you to the core concepts of Next.js, including static site generation, dynamic routing, and API routes.",',
              },
            ],
          },
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "",
              },
            ],
          },
        ],
        createdAt: "2024-03-09T17:34:25.671Z",
        updatedAt: "2024-03-09T17:34:28.772Z",
        publishedAt: "2024-03-09T17:34:28.769Z",
        authorName: "Alice Johnson",
        authorDesc:
          "Web Developer with expertise in modern JavaScript frameworks.",
        coverImg: {
          data: {
            id: 7,
            attributes: {
              name: "300.jpg",
              alternativeText: null,
              caption: null,
              width: 200,
              height: 300,
              formats: {
                thumbnail: {
                  name: "thumbnail_300.jpg",
                  hash: "thumbnail_300_4fa05287d5",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 104,
                  height: 156,
                  size: 3.85,
                  url: "/uploads/thumbnail_300_4fa05287d5.jpg",
                },
              },
              hash: "300_4fa05287d5",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 8.77,
              url: "/uploads/300_4fa05287d5.jpg",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2024-03-09T17:33:47.745Z",
              updatedAt: "2024-03-09T17:33:47.745Z",
            },
          },
        },
        authorImg: {
          data: {
            id: 8,
            attributes: {
              name: "300.jpg",
              alternativeText: null,
              caption: null,
              width: 200,
              height: 300,
              formats: {
                thumbnail: {
                  name: "thumbnail_300.jpg",
                  hash: "thumbnail_300_6f7e45e681",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 104,
                  height: 156,
                  size: 4.21,
                  url: "/uploads/thumbnail_300_6f7e45e681.jpg",
                },
              },
              hash: "300_6f7e45e681",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 11.34,
              url: "/uploads/300_6f7e45e681.jpg",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2024-03-09T17:34:11.508Z",
              updatedAt: "2024-03-09T17:34:11.508Z",
            },
          },
        },
      },
    },
    {
      id: 7,
      attributes: {
        blogTitle: "Tailwind CSS Basics",
        blogDesc: "Dive into the world of utility-first CSS with Tailwind CSS.",
        blogContent: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: 'Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. This tutorial will cover the basics of Tailwind CSS, including installation, configuration, and creating responsive designs.Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. This tutorial will cover the basics of Tailwind CSS, including installation, configuration, and creating responsive designs.",',
              },
            ],
          },
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "",
              },
            ],
          },
        ],
        createdAt: "2024-03-09T17:35:47.528Z",
        updatedAt: "2024-03-09T17:35:52.698Z",
        publishedAt: "2024-03-09T17:35:52.694Z",
        authorName: "Bob Williams",
        authorDesc:
          "UI/UX Designer with a focus on web design and development.",
        coverImg: {
          data: {
            id: 9,
            attributes: {
              name: "300.jpg",
              alternativeText: null,
              caption: null,
              width: 200,
              height: 300,
              formats: {
                thumbnail: {
                  name: "thumbnail_300.jpg",
                  hash: "thumbnail_300_0a620491ba",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 104,
                  height: 156,
                  size: 3.34,
                  url: "/uploads/thumbnail_300_0a620491ba.jpg",
                },
              },
              hash: "300_0a620491ba",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 7.62,
              url: "/uploads/300_0a620491ba.jpg",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2024-03-09T17:35:09.422Z",
              updatedAt: "2024-03-09T17:35:09.422Z",
            },
          },
        },
        authorImg: {
          data: {
            id: 10,
            attributes: {
              name: "300.jpg",
              alternativeText: null,
              caption: null,
              width: 200,
              height: 300,
              formats: {
                thumbnail: {
                  name: "thumbnail_300.jpg",
                  hash: "thumbnail_300_fc3d1ff088",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 104,
                  height: 156,
                  size: 4.09,
                  url: "/uploads/thumbnail_300_fc3d1ff088.jpg",
                },
              },
              hash: "300_fc3d1ff088",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 9.35,
              url: "/uploads/300_fc3d1ff088.jpg",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2024-03-09T17:35:33.905Z",
              updatedAt: "2024-03-09T17:35:33.905Z",
            },
          },
        },
      },
    },
    {
      id: 8,
      attributes: {
        blogTitle: "Vue.js Fundamentals",
        blogDesc:
          "Understand the core concepts of Vue.js for dynamic web applications.",
        blogContent: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "   \"Vue.js is a progressive JavaScript framework for building user interfaces. This course will cover the fundamentals of Vue.js, including components, directives, and Vue CLI. You'll also learn how to build a simple Vue.js application from scratch. Vue.js is a progressive JavaScript framework for building user interfaces. This course will cover the fundamentals of Vue.js, including components, directives, and Vue CLI. You'll also learn how to build a simple Vue.js application from scratch.\",",
              },
            ],
          },
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "",
              },
            ],
          },
        ],
        createdAt: "2024-03-09T17:38:08.039Z",
        updatedAt: "2024-03-09T17:38:09.512Z",
        publishedAt: "2024-03-09T17:38:09.509Z",
        authorName: "Charlie Brown",
        authorDesc:
          "Full Stack Developer with a strong background in Vue.js and modern web technologies.",
        coverImg: {
          data: {
            id: 11,
            attributes: {
              name: "300.jpg",
              alternativeText: null,
              caption: null,
              width: 200,
              height: 300,
              formats: {
                thumbnail: {
                  name: "thumbnail_300.jpg",
                  hash: "thumbnail_300_3ade40cadf",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 104,
                  height: 156,
                  size: 3.76,
                  url: "/uploads/thumbnail_300_3ade40cadf.jpg",
                },
              },
              hash: "300_3ade40cadf",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 8.97,
              url: "/uploads/300_3ade40cadf.jpg",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2024-03-09T17:36:57.594Z",
              updatedAt: "2024-03-09T17:36:57.594Z",
            },
          },
        },
        authorImg: {
          data: null,
        },
      },
    },
    {
      id: 9,
      attributes: {
        blogTitle: "Creating a CRUD App with Vuex",
        blogDesc:
          "Learn how to build a CRUD application using Vue.js and Vuex.",
        blogContent: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: '"Vuex is a state management library for Vue.js applications. This tutorial will guide you through the process of creating a CRUD (Create, Read, Update, Delete) application using Vue.js and Vuex, including setting up the store, creating actions and mutations, and integrating with an API.Vuex is a state management library for Vue.js applications. This tutorial will guide you through the process of creating a CRUD (Create, Read, Update, Delete) application using Vue.js and Vuex, including setting up the store, creating actions and mutations, and integrating with an API.",',
              },
            ],
          },
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "",
              },
            ],
          },
        ],
        createdAt: "2024-03-09T17:39:39.146Z",
        updatedAt: "2024-03-09T17:39:39.962Z",
        publishedAt: "2024-03-09T17:39:39.960Z",
        authorName: "Diana White",
        authorDesc:
          "Frontend Developer with expertise in Vue.js and state management.",
        coverImg: {
          data: {
            id: 14,
            attributes: {
              name: "300.jpg",
              alternativeText: null,
              caption: null,
              width: 200,
              height: 300,
              formats: {
                thumbnail: {
                  name: "thumbnail_300.jpg",
                  hash: "thumbnail_300_c8b9446862",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 104,
                  height: 156,
                  size: 3.44,
                  url: "/uploads/thumbnail_300_c8b9446862.jpg",
                },
              },
              hash: "300_c8b9446862",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 7.66,
              url: "/uploads/300_c8b9446862.jpg",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2024-03-09T17:38:52.197Z",
              updatedAt: "2024-03-09T17:38:52.197Z",
            },
          },
        },
        authorImg: {
          data: {
            id: 15,
            attributes: {
              name: "300.jpg",
              alternativeText: null,
              caption: null,
              width: 200,
              height: 300,
              formats: {
                thumbnail: {
                  name: "thumbnail_300.jpg",
                  hash: "thumbnail_300_ee8aae61b9",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 104,
                  height: 156,
                  size: 5.18,
                  url: "/uploads/thumbnail_300_ee8aae61b9.jpg",
                },
              },
              hash: "300_ee8aae61b9",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 12.19,
              url: "/uploads/300_ee8aae61b9.jpg",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2024-03-09T17:39:33.862Z",
              updatedAt: "2024-03-09T17:39:33.862Z",
            },
          },
        },
      },
    },
    {
      id: 10,
      attributes: {
        blogTitle: "Building a Progressive Web App",
        blogDesc:
          "Discover how to create a PWA that works offline and on the web.",
        blogContent: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: '  "Progressive Web Apps (PWAs) are web applications that can work offline and on low-quality networks. This guide will teach you how to build a PWA using modern web technologies, including service workers, the Cache API, and the Fetch API      Progressive Web Apps (PWAs) are web applications that can work offline and on low-quality networks. This guide will teach you how to build a PWA using modern web technologies, including service workers, the Cache API, and the Fetch API.",',
              },
            ],
          },
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "",
              },
            ],
          },
        ],
        createdAt: "2024-03-09T17:41:08.120Z",
        updatedAt: "2024-03-09T17:41:09.839Z",
        publishedAt: "2024-03-09T17:41:09.835Z",
        authorName: "Eva Green",
        authorDesc: "Web Developer specializing in PWAs and web performance.",
        coverImg: {
          data: {
            id: 16,
            attributes: {
              name: "300.jpg",
              alternativeText: null,
              caption: null,
              width: 200,
              height: 300,
              formats: {
                thumbnail: {
                  name: "thumbnail_300.jpg",
                  hash: "thumbnail_300_4aebeea9b6",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 104,
                  height: 156,
                  size: 4.63,
                  url: "/uploads/thumbnail_300_4aebeea9b6.jpg",
                },
              },
              hash: "300_4aebeea9b6",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 10.71,
              url: "/uploads/300_4aebeea9b6.jpg",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2024-03-09T17:40:15.803Z",
              updatedAt: "2024-03-09T17:40:15.803Z",
            },
          },
        },
        authorImg: {
          data: {
            id: 17,
            attributes: {
              name: "300.jpg",
              alternativeText: null,
              caption: null,
              width: 200,
              height: 300,
              formats: {
                thumbnail: {
                  name: "thumbnail_300.jpg",
                  hash: "thumbnail_300_caea96797b",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 104,
                  height: 156,
                  size: 4.12,
                  url: "/uploads/thumbnail_300_caea96797b.jpg",
                },
              },
              hash: "300_caea96797b",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 10.14,
              url: "/uploads/300_caea96797b.jpg",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2024-03-09T17:41:03.869Z",
              updatedAt: "2024-03-09T17:41:03.869Z",
            },
          },
        },
      },
    },
  ];
  const blogs = blogsApi?.data ?? detailedBlogs;
  let blog = blogs.filter((blog) => blog.id == id);
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
              src={`${baseUrl}${blog?.attributes?.coverImg?.data?.attributes?.url}`}
              alt=""
            />
            <h1 className="font-bold text-2xl my-1 pt-5 ">
              {blog.attributes.blogTitle}
            </h1>
            <div className="pt-5 ">
              <p>{blog.attributes.blogContent[0].children[0].text}</p>
            </div>
          </div>
          <div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md  py-5 max-h-[250px]">
            <div>
              <img
                className="p-2 w-32 h-32  rounded-full mx-auto  object-cover"
                src={`${baseUrl}${blog?.attributes?.authorImg?.data?.attributes?.url}`}
                alt=""
              />
              <h1 className="font-bold text-2xl text-center text-gray-900 pt-3 ">
                {blog.attributes.authorName}
              </h1>
              <p className="text-center text-gray-900 font-medium">
                {blog.attributes.authorDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
