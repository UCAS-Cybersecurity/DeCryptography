import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { PencilIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { Article } from "../types";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { add } from "../controllers/articles";
import { useRouter } from "next/router";
import CropImageField from "./CropImageField";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";

export default function CreateArticleForm() {
  const [article, setArticle] = useState<Article>({
    content: "",
    title: "",
    thumbnail: "",
    shortDescription: "",
    youtubeLink: "",
  });
  const router = useRouter();
  const [isCustom, setCustom] = useState(false);
  async function saveArticle(article: Article) {
    await add(article);
    router.push("/");
  }

  async function uploadImage() {
    const file = article?.image_binary;
    if (!file) return saveArticle(article);
    let url = "";
    const storageRef = ref(storage, `images/articles/${new Date()}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    await uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      async () => {
        url = await getDownloadURL(uploadTask.snapshot.ref);
        setArticle({ ...article, thumbnail: url });
        console.log("File available at", url);
        await saveArticle({ ...article, thumbnail: url});
      }
    );
  }

  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser || !currentUser?.uid) router.push("/login");
  }, [currentUser, router]);

  return (
    <div className="m-auto my-4 mt-6 max-w-5xl px-2 sm:px-6 lg:px-8">
      <div className="flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4 max-w-6xl w-full">
        <h1 className="font-extrabold select-none text-2xl sm:text-4xl">
          New Article
        </h1>
        {/* {error && (
          <div className="w-full border-rose-400 border text-center border-solid text-rose-400 py-2">
            {error}
          </div>
        )} */}
        <div className="aspect-video w-full">
          <CropImageField
            defaultImage=""
            aspectRatio={16 / 9}
            onFileChange={(file: any) => {
              setArticle({ ...article, image_binary: file });
            }}
          />
        </div>
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
              className="h-96 mb-6 pb-6 w-full"
              // style={{ width: "60rem" }}
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
              className="block outline-none text-slate-900 p-2 w-full duration-300 border-b-2 border-solid border-white focus:border-cyan-300"
              rows={50}
              cols={500}
            />
          )}
          <button
            onClick={uploadImage}
            className="w-full border border-white border-solid py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900"
          >
            <h2 className="relative z-20">Submit</h2>
          </button>
        </div>
      </div>
    </div>
  );
}
