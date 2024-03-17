import BlogContentPage from "./pages/BlogContentPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";
export default function App() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/blogs?populate=*"
  );
  if (loading) return <p>Loading... </p>;
  if (error) return <p>Error! </p>;
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage blogsApi={data} />}></Route>
        <Route
          path="/blog/:id"
          element={<BlogContentPage blogsApi={data} />}
        ></Route>
      </Routes>
    </>
  );
}
