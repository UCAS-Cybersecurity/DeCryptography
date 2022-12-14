import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { articlesCollection } from "../../controllers/articles";
import { castArticle, getYoutubeId } from "../../helpers/articlesHelper";
import { Article } from "../../types";
import InnerHTML from "dangerously-set-html-content";

export default function CreateArticlePage() {
  const uid = useRouter().query.id;
  const [article, setArticle] = useState<Article | null>();
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const ref = doc(articlesCollection, uid as string);
    setArticle(castArticle(await getDoc(ref)));
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
      {/* {article && (
        <div className="max-w-xl">
          <ArticleCard article={article!} />
        </div>
      )} */}
      <div className="max-w-4xl m-auto">
        <img
          src={article?.thumbnail}
          className="rounded aspect-video max-w-6xl mx-auto my-4"
          style={{ width: "100%" }}
        />
      </div>
      <h1 className="text-3xl font-bold">{article?.title}</h1>
      <div className="flex items-center my-2">
        <img
          className="w-20 h-20 rounded-full mr-4"
          src={
            article?.creator_photoURL ??
            "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
          }
          alt="Avatar"
        />
        <div className="text">
          <p className="text-gray-500">{article?.creator_name}</p>
          <p className="text-gray-600">
            <>{new Date(article?.createdAt ?? "").toLocaleDateString()}</>
          </p>
        </div>
      </div>
      <p className="text-gray-500">{article?.shortDescription}</p>

      {/* render html description */}
      {article?.content != null && (
        <InnerHTML html={article?.content!} className="my-4" />
      )}
      {article && getYoutubeId(article.youtubeLink) && (
        <iframe
          className="w-full aspect-video rounded-sm"
          src={`https://www.youtube.com/embed/${getYoutubeId(
            article.youtubeLink
          )}`}
          allowFullScreen
        />
      )}
    </div>
  );
}
