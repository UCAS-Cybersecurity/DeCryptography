import { onSnapshot } from "firebase/firestore";
import Image from "../components/base/Image";
import { useEffect, useState } from "react";
import ArticleCard from "../components/article/ArticleCard";
import { articlesCollection } from "../controllers/articles";
import { castArticle } from "../helpers/articlesHelper";
import { Article } from "../types";
import FeaturedArticleCard from "../components/article/FeaturedArticleCard";

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    onSnapshot(articlesCollection, (snapshot) => {
      setArticles(snapshot?.docs?.map((doc) => castArticle(doc)));
    });
  }, []);
  const featured = articles?.filter((a) => a.is_featured).sort((a, b) => {
    if (a.createdAt! > b.createdAt!) {
      return -1;
    }
    if (a.createdAt! < b.createdAt!) {
      return 1;
    }
    return 0;
  }).slice(0, 1);
  return (
    <>
      <section className="relative">
        <div
          className="bg-gradient-to-r from-blue to-green w-full pt-6 mb-10 "
          style={{ borderBottomRightRadius: "70px" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 m-auto gap-4 content-center justify-center mx-4 px-4">
            <div className="sm:p-4 sm:m-4 mb-8 md:mx-8 text-base">
              <h1 className="text-3xl font-bold text-white">
                Cryptography Tutorials
              </h1>
              <p className="text-xl text-white mt-4">
                An application to share descriptions of the most common
                cryptography algorithms. mainly as an assignment for collage but
                built to keep online.
              </p>
            </div>
            <div className="justify-center items-center hidden sm:flex">
              <Image
                src="/landing-illustration.png"
                alt="landing illustration"
                width={332}
                height={330}
              />
            </div>
          </div>
        </div>
        <div
          className="absolute "
          style={{ bottom: 0, left: 0, width: "200px", height: "200px" }}
        >
          <Image className="" src="/logo-overlay.png" alt="Ucas" fill />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
         {featured?.map((article) => (
            <FeaturedArticleCard article={article} key={article?.uid} />
          ))}
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {articles
              ?.filter((a) => !a.is_featured)
              ?.map((article) => (
                <ArticleCard article={article} key={article?.uid} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
