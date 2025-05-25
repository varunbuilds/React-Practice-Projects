import { useState, useEffect } from "react";
import axios from "axios";
import Feed from "./components/Feed";

function App() {
  const [articles, setArticles] = useState([]);

  console.log("Articles are:", articles);

  const getArticles = async () => {
    try {
      const response = await axios.get("http://localhost:3000/");
      setArticles(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <h1 className="text-4xl text-center p-4">RSS FEED</h1>

      <div className="max-w-4xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
        <img
          className="mx-auto my-4 bg-black rounded-lg p-8"
          src="https://cdn-images-1.medium.com/max/606/1*rOPLUJ3W6FUA3rO1U1IeuA@2x.png"
          alt=""
        />

        <p className="text-center">
          A collection of articles from the Netflix Tech Blog.
        </p>
        <p className="text-center py-4">
          <a
            className="text-red-800 underline"
            href="https://www.netflixtechblog.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the blog
          </a>
        </p>
        {articles.map((item, index) => (
          <Feed
            key={index}
            title={item.item.title}
            date={item.item.pubDate}
            link={item.item.link}
          />
        ))}
      </div>
    </>
  );
}

export default App;
