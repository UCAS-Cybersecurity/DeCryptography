import Image from "../base/Image";
import Link from "next/link";
import { Article } from "../../types";
import moment from "moment";

export default function ArticleCard(props: { article: Article }) {
  const { article } = props;
  return (
    <Link href={`/article/${article?.uid}`} className="my-4">
      <div className="m-auto max-w-sm rounded overflow-hidden w-full">
        <div className="aspect-video relative">
          <Image
            className="w-full rounded object-cover"
            src={
              article?.thumbnail
                ? article?.thumbnail
                : "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
            }
            alt="Sunset in the mountains"
            fill
          />
        </div>
        <div className="w-full mt-5">
          <div className="w-full rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal mt-5">
            <div>
              <div className="text-gray-900 font-bold text-xl mb-2 h-12">
                <p className="line-clamp-1">{article?.title}</p>
                <p className="text-gray-700 text-base line-clamp-2">
                  {article?.shortDescription}...
                </p>
              </div>
            </div>
            <div className="flex items-center mt-8 overflow-visible">
              <Image
                className="w-12 h-12 rounded-full mr-4 object-cover shadow"
                src={
                  article?.creator_photoURL ??
                  "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
                }
                alt="Avatar"
                width={40}
                height={40}
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">
                  {article?.creator_name}
                </p>
                <p className="text-gray-600">
                  <>{moment(article.createdAt!).format("LL")}</>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
