import React, { useCallback, useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  PencilIcon,
  CodeBracketIcon,
  DocumentIcon,
  FolderArrowDownIcon,
} from "@heroicons/react/24/outline";
import { Article } from "../types";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { add } from "../controllers/articles";
import { useRouter } from "next/router";
import CropImageField from "./CropImageField";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { auth, storage } from "../firebase";
import { useDropzone } from "react-dropzone";
import useUploadHelpers from "../hooks/useUploadHelpers";

const tabs = [
  {
    name: "Content",
    icon: PencilIcon,
    build: (article: Article, setArticle: any) => (
      <div className="w-full h-full">
        <ReactQuill
          className="h-full"
          value={article.content}
          onChange={(value) => setArticle({ ...article, content: value })}
        />
      </div>
    ),
  },
  {
    name: "Code",
    icon: CodeBracketIcon,
    build: (article: Article, setArticle: any) => (
      <div className="h-full">
        <textarea
          className="w-full h-full p-4 border border-gray-300 block"
          // rows={12}
          cols={50}
          value={article.content}
          onChange={(e) => setArticle({ ...article, content: e.target.value })}
        />
      </div>
    ),
  },
  {
    name: "PDF",
    icon: DocumentIcon,
    build: (article: Article, setArticle: any) => {
      return <Dropzone article={article} setArticle={setArticle} />;
    },
  },
];

function Dropzone(props: { article: Article; setArticle: any }) {
  const { article: Article, setArticle: any } = props;
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });
  return (
    <div
      // style={{
      //   background: "#dadada",
      //   width: 250,
      //   height: 250,
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   padding: 50,
      //   textAlign: "center",
      // }}

      className="w-full h-full p-4 border border-gray-300 text-center flex items-center justify-center"
      {...getRootProps()}
    >
      <div className="w-full">
        <FolderArrowDownIcon className="w-10 h-10 mx-auto my-2" />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drop files here, or click to select files</p>
        )}
      </div>
      <input {...getInputProps()} />
    </div>
  );
}

export default function CreateArticleForm() {
  const uploadCtx = useUploadHelpers();
  const [article, setArticle] = useState<Article>({
    content: "",
    title: "",
    thumbnail: "",
    shortDescription: "",
    youtubeLink: "",
  });
  const [tabIndex, setTabIndex] = useState(0);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  async function saveArticle(article: Article) {
    setIsLoading(true);
    await add(article);
    router.push("/");
    setIsLoading(false);
  }

  useEffect(() => {
    if (article.contentUrl && article.thumbnail) {
      if (isLoading) return;
      saveArticle(article);
    }
  }, [article]);

  async function upload() {
    const file = article?.image_binary;

    await uploadCtx.uploadImage({
      file,
      label: "Article Thumbnail",
      onDone: (url: any) => setArticle({ ...article, thumbnail: url }),
      path: `images/articles/${
        auth.currentUser?.uid
      }.${new Date().getTime()}.png`,
    });

    const html = article.content;
    const blob = new Blob([html!], { type: "text/html" });
    const content = new File([blob], "index.html", { type: "text/html" });
    await uploadCtx.uploadImage({
      file: content,
      label: "Article Content",
      onDone: (url: any) => setArticle({ ...article, contentUrl: url }),
      path: `content/articles/${
        auth.currentUser?.uid
      }.${new Date().getTime()}.html`,
    });
  }

  const { currentUser } = useAuth()!;

  useEffect(() => {
    if (!currentUser || !currentUser?.uid) router.push("/login");
  }, [currentUser, router]);

  return (
    <div className="m-auto my-4 mt-6 max-w-5xl px-2 sm:px-6 lg:px-8">
      <div className="flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4 max-w-6xl w-full">
        {/* {error && (
          <div className="w-full border-rose-400 border text-center border-solid text-rose-400 py-2">
            {error}
          </div>
        )} */}
        <div className="aspect-video w-96 ring-green ring-1 rounded ring-offset-2">
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
          className="outline-none duration-300 border-b-2 border-solid border-slate-300 text-lg focus:border-blue text-slate-900 p-2 w-full"
        />
        <textarea
          placeholder="Short Description"
          className="outline-none text-slate-900 p-2 w-full duration-300 border-b-2 border-solid border-slate-300 text-lg focus:border-blue"
          rows={4}
          cols={50}
          value={article.shortDescription}
          onChange={(e) =>
            setArticle({ ...article, shortDescription: e.target.value })
          }
        />
        <input
          value={article.youtubeLink}
          onChange={(e) =>
            setArticle({ ...article, youtubeLink: e.target.value })
          }
          type="text"
          placeholder="Youtube iframe"
          className="outline-none text-slate-900 p-2 w-full duration-300 border-b-2 border-solid border-slate-300 text-lg focus:border-blue"
        />

        <input
          value={article.youtubeLink2}
          onChange={(e) =>
            setArticle({ ...article, youtubeLink2: e.target.value })
          }
          type="text"
          placeholder="Youtube iframe"
          className="outline-none text-slate-900 p-2 w-full duration-300 border-b-2 border-solid border-slate-300 text-lg focus:border-blue"
        />

        <div className="border-b border-gray-200 dark:border-gray-700 w-full">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            {tabs.map((tab, index) => (
              <li key={index} className="mr-2">
                <button
                  onClick={() => setTabIndex(index)}
                  className={
                    index === tabIndex
                      ? "inline-flex p-4 text-blue rounded-t-lg border-b-2 border-blue  active dark:text-blue dark:border-blue group"
                      : "inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                  }
                  aria-current="page"
                >
                  <tab.icon
                    className={
                      index === tabIndex
                        ? "mr-2 w-5 h-5 text-blue-600 group-hover:text-blue-500 dark:text-blue-500 dark:group-hover:text-blue-400"
                        : "mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                    }
                  />
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>
          <div className="h-96 mb-6 pb-6 w-full min-w-full">
            {tabs
              .filter((tab, index) => index === tabIndex)[0]
              .build(article, setArticle)}
          </div>
          <button
            disabled={isLoading}
            onClick={upload}
            className="border-0 outline-none ring-0 flex items-center justify-center w-full text-lg py-2 duration-300 relative overflow-hidden from-blue to-green text-white enabled:hover:shadow-lg disabled:bg-slate-400 enabled:bg-gradient-to-r"
          >
            {isLoading && (
              <svg
                className="animate-spin text-slate-900"
                version="1.1"
                id="loader-1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40px"
                height="40px"
                viewBox="0 0 40 40"
                enable-background="new 0 0 40 40"
              >
                <path
                  opacity="0.2"
                  fill="#fff"
                  d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
                />
                <path
                  fill="#fff"
                  d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
    C22.32,8.481,24.301,9.057,26.013,10.047z"
                >
                  <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="rotate"
                    from="0 20 20"
                    to="360 20 20"
                    dur="0.5s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            )}
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
