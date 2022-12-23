import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { get } from "../controllers/articles";
import { Article } from "../types";

export default function useArticle(props: { id?: string } = {}) {
  const router = useRouter();
  const uid = props.id ?? router?.query?.id as string;
  const auth = useAuth();
  const [article, setArticle] = useState<Article | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get(uid).then((article) => {
        const canEdit = auth?.currentUser?.uid === article?.creator_uid;
        setArticle({...article, canEdit, canDelete: canEdit});
        setLoading(false);
    });
  }, [props.id, router?.query?.id]);

  return { article, loading, router };
}
