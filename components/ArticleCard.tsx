import Image from "next/image";
import Link from "next/link";
import { Article } from "../types";

export default function ArticleCard(props: { article: Article }) {
  const { article } = props;
  return (
    <Link href={`/article/${article?.uid}`}>
      <div className="max-w-sm rounded overflow-hidden w-full">
        <div className="aspect-video relative">
          <Image
            className="w-full rounded-sm"
            src={
              article?.thumbnail
                ? article?.thumbnail
                : "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
            }
            alt="Sunset in the mountains"
            fill
          />
        </div>
        <div className="w-full rounded-sm">
          <div title={article?.title}></div>
          <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div>
              <div className="text-gray-900 font-bold text-xl mb-2 h-14 overflow-hidden">
                {article?.title}
                <p className="text-gray-700 text-base">
                  {article?.shortDescription?.substring(0, 48)}...
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Image
                className="w-10 h-10 rounded-full mr-4"
                src={
                  article?.creator_photoURL ??
                  "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
                }
                alt="Avatar of Jonathan Reinink"
                width={40}
                height={40}
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">
                  {article?.creator_name}
                </p>
                <p className="text-gray-600">
                  <>{new Date(article?.createdAt ?? "").toLocaleDateString()}</>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
