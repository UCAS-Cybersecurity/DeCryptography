import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { articlesCollection } from "../../controllers/articles";
import { castArticle, getYoutubeId } from "../../helpers/articlesHelper";
import { Article } from "../../types";
import InnerHTML from "dangerously-set-html-content";
import Image from "../../components/Image";
import { remove } from "../../controllers/articles";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
// import dynamic from "next/dynamic";

// const PDFViewer = dynamic(() => import("pdf-viewer-reactjs"), { ssr: false });

export default function ArticlePage() {
  const router = useRouter();
  const uid = router?.query?.id as string;
  const [article, setArticle] = useState<Article | null>();
  const auth = useAuth();
  const [loading, setLoading] = useState(true);
  const [loadedContent, setLoadedContent] = useState(false);
  async function loadHtmlContent(url: string) {
    const response = await fetch(url);
    const html = await response.text();
    console.log(html);
    return html;
  }

  useEffect(() => {
    async function load() {
      setLoading(true);
      const ref = doc(articlesCollection, uid as string);
      setArticle(castArticle(await getDoc(ref)));
      setLoading(false);
    }
    load();
  }, [uid]);

  useEffect(() => {
    if (!loadedContent)
      loadHtmlContent(article?.contentUrl!).then((html) => {
        if (article?.contentUrl && !article?.content) {
          setLoadedContent(true);
          setArticle({
            ...article,
            content: html,
          });
        }
      });
  }, [article]);

  return (
    <div className="m-auto max-w-5xl px-2 sm:px-6 lg:px-8">
      {/* {article && (
        <div className="max-w-xl">
          <ArticleCard article={article!} />
        </div>
      )} */}
      <div className="max-w-4xl m-auto">
        <div className="aspect-video max-w-6xl mx-auto my-4 relative">
          {article?.thumbnail && (
            <Image
              src={article?.thumbnail!}
              alt="Picture of the author"
              className="rounded"
              style={{ width: "100%" }}
              fill
            />
          )}
        </div>
      </div>
      <div className="flex justify-between my-2">
        <h1 className="text-3xl font-bold">{article?.title}</h1>
        {auth?.currentUser?.uid == article?.creator_uid && (
          <div className="font-bold">
            <span
              onClick={() => {
                remove(uid).then(() => {
                  router.back();
                });
              }}
              className="text-red-600 mr-2 cursor-pointer"
            >
              Delete
            </span>
            <Link href={`/article/edit/${uid}`} className="text-green">
              Edit
            </Link>
          </div>
        )}
      </div>
      <div className="flex items-center my-2">
        <Image
          className="w-20 h-20 rounded-full mr-4"
          src={
            article?.creator_photoURL ??
            "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
          }
          alt="Avatar"
          height={80}
          width={80}
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
      {article?.content && article?.content != "" && (
        <InnerHTML html={article?.content!} className="my-4" />
      )}
      {article?.pdfUrl && (
        <iframe src={article?.pdfUrl} className="w-full h-screen" />
      )}
      {article && getYoutubeId(article?.youtubeLink) && (
        <iframe
          className="w-full aspect-video rounded-sm my-10"
          src={`https://www.youtube.com/embed/${getYoutubeId(
            article?.youtubeLink
          )}`}
          allowFullScreen
        />
      )}
      {article && getYoutubeId(article?.youtubeLink2) && (
        <iframe
          className="w-full aspect-video rounded-sm my-10"
          src={`https://www.youtube.com/embed/${getYoutubeId(
            article?.youtubeLink2
          )}`}
          allowFullScreen
        />
      )}
    </div>
  );
}
