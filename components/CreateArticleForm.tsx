import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { PencilIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { Article } from "../types";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { add } from "../controllers/articles";

export default function CreateArticleForm() {
  const [article, setArticle] = useState<Article>({});
  const [errors, setErrors] = useState<Article>({});
  const [isCustom, setCustom] = useState(false);
  async function saveArticle() {
    await add(article);
    console.log(article);
  }

  const { login, signup, currentUser } = useAuth();
  console.log(currentUser);

  return (
    <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="flex-1 text-xs sm:text-sm flex flex-col justify-start items-start gap-2 sm:gap-4">
        <h1 className="font-extrabold select-none text-2xl sm:text-4xl">
          New Article
        </h1>
        {/* {error && (
          <div className="w-full border-rose-400 border text-center border-solid text-rose-400 py-2">
            {error}
          </div>
        )} */}
        <input
          type="text"
          value={article.title}
          onChange={(e) => setArticle({ ...article, title: e.target.value })}
          placeholder="Title"
          className="outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full"
        />
        <input
          value={article.shortDescription}
          onChange={(e) =>
            setArticle({ ...article, shortDescription: e.target.value })
          }
          type="text"
          placeholder="Short Description"
          className="outline-none text-slate-900 p-2 w-full duration-300 border-b-2 border-solid border-white focus:border-cyan-300"
        />
        <input
          value={article.thumbnail}
          onChange={(e) =>
            setArticle({ ...article, thumbnail: e.target.value })
          }
          type="text"
          placeholder="Thumb URL"
          className="outline-none text-slate-900 p-2 w-full duration-300 border-b-2 border-solid border-white focus:border-cyan-300"
        />
        <input
          value={article.youtubeLink}
          onChange={(e) =>
            setArticle({ ...article, youtubeLink: e.target.value })
          }
          type="text"
          placeholder="Youtube iframe"
          className="outline-none text-slate-900 p-2 w-full duration-300 border-b-2 border-solid border-white focus:border-cyan-300"
        />

        <div className="border-b border-gray-200 dark:border-gray-700 w-full">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li className="mr-2">
              <button
                onClick={() => setCustom(false)}
                className={
                  !isCustom
                    ? "inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600  active dark:text-blue-500 dark:border-blue-500 group"
                    : "inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                }
              >
                <PencilIcon
                  className={
                    !isCustom
                      ? "mr-2 w-5 h-5 text-blue-600 group-hover:text-blue-500 dark:text-blue-500 dark:group-hover:text-blue-400"
                      : "mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  }
                />
                Editor
              </button>
            </li>
            <li className="mr-2">
              <button
                onClick={() => setCustom(true)}
                className={
                  isCustom
                    ? "inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600  active dark:text-blue-500 dark:border-blue-500 group"
                    : "inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                }
                aria-current="page"
              >
                <CodeBracketIcon
                  className={
                    isCustom
                      ? "mr-2 w-5 h-5 text-blue-600 group-hover:text-blue-500 dark:text-blue-500 dark:group-hover:text-blue-400"
                      : "mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  }
                />
                Custom Code
              </button>
            </li>
          </ul>
        </div>
        {!isCustom && (
          <ReactQuill
            // show all modules
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [
                  { list: "ordered" },
                  { list: "bullet" },
                  { indent: "-1" },
                  { indent: "+1" },
                ],
                ["link", "image", "video"],
                ["clean"],
              ],
            }}
            className="w-full h-96 mb-6 pb-6"
            theme="snow"
            value={article.content}
            onChange={(e) => setArticle({ ...article, content: e })}
          />
        )}
        {isCustom && (
          <textarea
            value={article.content}
            onChange={(e) =>
              setArticle({ ...article, content: e.target.value })
            }
            placeholder="Content"
            className="outline-none text-slate-900 p-2 w-full duration-300 border-b-2 border-solid border-white focus:border-cyan-300"
            rows={50}
          />
        )}
        <button
          onClick={saveArticle}
          className="w-full border border-white border-solid py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900"
        >
          <h2 className="relative z-20">Submit</h2>
        </button>
      </div>
    </div>
  );
}
