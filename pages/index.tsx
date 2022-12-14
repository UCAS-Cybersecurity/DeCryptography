import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
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
      <div className="grid grid-cols-4 gap-4">
        {articles.map((article) => (
          <div key={article.uid}>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
