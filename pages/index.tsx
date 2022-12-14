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
    <>
      {articles.map((article) => (
        <div key={article.uid}>
          <h1>{article.title}</h1>
          <p>{article.content}</p>
        </div>
      ))}
    </>
  );
}
