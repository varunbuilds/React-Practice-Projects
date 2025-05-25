import RSSParser from "rss-parser";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

const parser = new RSSParser();
const feedUrl = "https://www.netflixtechblog.com/feed/";

const articles = [];

const parse = async (url) => {
  const feed = await parser.parseURL(url);

  feed.items.forEach((item) => {
    articles.push({ item });
    console.log(item);
  });
};

parse(feedUrl);

app.get("/", async (req, res) => {
  return res.send(articles);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
