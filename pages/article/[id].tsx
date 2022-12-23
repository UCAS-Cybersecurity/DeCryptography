import { getYoutubeId } from "../../helpers/articlesHelper";
import InnerHTML from "dangerously-set-html-content";
import Image from "../../components/base/Image";
import { remove } from "../../controllers/articles";
import Link from "next/link";
import useArticle from "../../hooks/useArticle";
import PageTitle from "../../components/layout/PageTitle";
import moment from "moment";

export default function ArticlePage() {
  const { article, loading, router } = useArticle();

  return (
    <>
      <PageTitle className="h-auto">
        <div className="flex flex-col justify-center items-center w-full pb-8 px-2">
          <h1 className="text-4xl font-light text-white m-auto max-w-5xl text-center py-5">
            {article?.title}
          </h1>
          <Image
            className="w-20 h-20 rounded-full my-2 shadow-lg object-cover"
            src={
              article?.creator_photoURL ??
              "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
            }
            alt="Avatar"
            height={80}
            width={80}
          />
          <div className="text-lg text-white text-center leading-none">
            <p className="p-1">
              <span className="italic font-light pr-1">By </span>
              <span className="font-semibold">{article?.creator_name}</span>
            </p>
            <p className="italic font-light">
              <>
                {article?.createdAt && moment(article?.createdAt).format("LL")}
              </>
            </p>
          </div>
          {article?.canEdit && (
            <div className="p-2">
              <span
                onClick={() => {
                  remove(article.uid!).then(() => {
                    router.back();
                  });
                }}
                className="text-red-600 mr-2 cursor-pointer"
              >
                Delete
              </span>
              <Link
                href={`/article/edit/${article.uid}`}
                className="text-gray-800"
              >
                Edit
              </Link>
            </div>
          )}
        </div>
      </PageTitle>
      <div className="m-auto max-w-5xl px-2 sm:px-6 lg:px-8">
        <p className="text-gray-500">{article?.shortDescription}</p>
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
    </>
  );
}
