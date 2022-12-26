import { onSnapshot, orderBy, where } from "firebase/firestore";
import Image from "../components/base/Image";
import { useEffect, useState } from "react";
import ArticleCard from "../components/article/ArticleCard";
import { articlesCollection } from "../controllers/articles";
import { castArticle } from "../helpers/articlesHelper";
import { Article } from "../types";
import FeaturedArticleCard from "../components/article/FeaturedArticleCard";
import useArticles from "../hooks/useArticles";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingIndicator from "../components/base/LoadingIndicator";

export default function Home() {
  const { articles: featured } = useArticles({
    filters: [where("is_featured", "==", true)],
  });
  const {
    articles: all,
    next,
    refresh,
    hasMore,
  } = useArticles({
    orderBy: [orderBy("createdAt", "desc")],
  });

  const articles = all.filter((article) => !article.is_featured);

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
          <InfiniteScroll
            dataLength={articles.length} //This is important field to render the next data
            next={next}
            hasMore={hasMore}
            loader={
              <div className="w-full h-screen flex items-top justify-center">
                <LoadingIndicator className="w-16 h-16"/>
              </div>
            }
            // below props only if you need pull down functionality
            refreshFunction={refresh}
            pullDownToRefresh
            pullDownToRefreshThreshold={50}
            pullDownToRefreshContent={
              <h3 style={{ textAlign: "center" }}>
                &#8595; Pull down to refresh
              </h3>
            }
            releaseToRefreshContent={
              <h3 style={{ textAlign: "center" }}>
                &#8593; Release to refresh
              </h3>
            }
          >
            {featured?.map((article) => (
              <FeaturedArticleCard article={article} key={article?.uid} />
            ))}
          </InfiniteScroll>
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
