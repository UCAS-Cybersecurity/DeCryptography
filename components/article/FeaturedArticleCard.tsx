import Image from "../base/Image";
import Link from "next/link";
import { Article } from "../../types";
import moment from "moment";

export default function FeaturedArticleCard(props: { article: Article }) {
  const { article } = props;
  return (
    <div className="my-8">
      <Link href={`/article/${article?.uid}`}>
        <div className="flex flex-col md:flex-row m-auto md:px-0 px-4 items-stretch justify-items-stretch">
          <div className="aspect-video relative h-full w-full">
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
          <div className="mt-5 flex justify-between flex-col self-stretch items-start">
            <div className="w-full rounded-b lg:rounded-b-none lg:rounded-r flex flex-col leading-normal mt-5">
              <div className="flex items-center mb-8">
                <Image
                  className="w-16 h-16 rounded-full mr-4 object-cover shadow-lg"
                  src={
                    article?.creator_photoURL ??
                    "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
                  }
                  alt="Avatar"
                  width={64}
                  height={64}
                />
                <div>
                  <p className="text-gray-900 leading-none">
                    {article?.creator_name}
                  </p>
                  <p className="text-gray-600">
                    <>{moment(article.createdAt!).format("LL")}</>
                  </p>
                </div>
              </div>
              <div>
                <div className="text-gray-900 font-bold text-xl mb-2">
                  <p className="line-clamp-2 mb-2">{article?.title}</p>
                  <p className="text-gray-700 text-base line-clamp-3">
                    {article?.shortDescription}...
                  </p>
                </div>
              </div>
            </div>
            <div className="self-end w-full">
              <button className="text-blue font-bold pt-2 rounded hover:underline">
                Read More
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
