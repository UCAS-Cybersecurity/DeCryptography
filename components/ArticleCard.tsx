import Link from "next/link";
import { Article } from "../types";

export default function ArticleCard(props: { article: Article }) {
  const { article } = props;
  return (
    <Link href={`/article/${article.uid}`}>
      <div className="max-w-sm rounded overflow-hidden">
        <img
          className="w-full aspect-video rounded-sm"
          src={article.thumbnail}
          alt="Sunset in the mountains"
        />
        <div className="w-full rounded-sm">
          <div title={article.title}></div>
          <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div>
              <p className="text-sm text-gray-600 flex items-center">
                <svg
                  className="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2">
                {article.title}
              </div>
              <p className="text-gray-700 text-base">
                {article.shortDescription?.substring(0, 50)}...
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="https://avatars.githubusercontent.com/u/63330019?v=4"
                alt="Avatar of Jonathan Reinink"
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">Khader M Khudair</p>
                <p className="text-gray-600">
                  <>
                    {console.log(article?.createdAt ?? "")}
                    {new Date(article?.createdAt ?? "").toLocaleDateString()}
                  </>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
