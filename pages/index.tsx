import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import { articlesCollection } from "../controllers/articles";
import { Article } from "../types";

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    onSnapshot(articlesCollection, (snapshot) => {
      setArticles(
        snapshot.docs.map((doc) => ({
          uid: doc.id,
          ...doc.data(),
        }))
      );
    });
  }, []);
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-3 gap-4">
        {articles.map((article) => (
          <ArticleCard article={article} />
        ))}
      </div>
    </div>
  );
}
