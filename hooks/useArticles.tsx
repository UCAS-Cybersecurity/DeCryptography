import {
  DocumentData,
  getDocs,
  limit,
  orderBy,
  query,
  QueryConstraint,
  QueryDocumentSnapshot,
  startAfter,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { articlesCollection, get } from "../controllers/articles";
import { castArticle } from "../helpers/articlesHelper";
import { Article } from "../types";

export default function useArticles(
  props: {
    id?: string;
    orderBy?: QueryConstraint[];
    filters?: QueryConstraint[];
    page?: number;
  } = {}
) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  // protect from multiple calls to next that are synchronous
  let isLoading = loading;
  const [last, setLast] = useState<QueryDocumentSnapshot<DocumentData> | null>(
    null
  );
  const router = useRouter();
  const auth = useAuth();

  // query params
  const q = query(
    articlesCollection,
    ...(props.filters ?? []),
    ...(props.orderBy ?? [orderBy("createdAt", "desc")]),
    limit(15),
    ...(last ? [startAfter(last)] : [])
  );

  async function next(): Promise<Article[]> {
    if (loading || isLoading) return Promise.resolve([]);
    isLoading = true;
    if (!hasMore) return Promise.resolve([]);
    // setLoading(true);
    const snapshot = await getDocs(q);
    console.log("snapshot", snapshot);
    const articles = snapshot.docs.map((doc) => {
      const article = castArticle(doc);
      article.canEdit = auth?.currentUser?.uid === article?.creator_uid;
      article.canDelete = article.canEdit;
      return article;
    });
    console.log("articles", articles);
    setLast(snapshot.docs[snapshot.docs.length - 1]);
    setHasMore(snapshot.docs.length == 15);
    setArticles((prev) => [...prev, ...articles]);
    setLoading(false);
    return articles;
  }

  async function refresh() {
    setArticles([]);
    setHasMore(true);
    setLast(null);
    return await next();
  }

  useEffect(() => {
    next();
  }, []);

  return { articles, loading, router, next, refresh, hasMore };
}
