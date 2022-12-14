import CreateArticleForm from "../../components/article/CreateArticleForm";
import Image from "../../components/base/Image";

export default function CreateArticlePage() {
  return (
    <>
      <section className="relative">
        <div
          className="bg-gradient-to-r from-blue to-green w-full pt-6 mb-10 h-80 flex items-center" 
          style={{ borderBottomRightRadius: "70px" }}
        >
          <h1 className="text-6xl font-light text-white m-auto text-center">
            Create an Article
          </h1>
        </div>
        <div
          className="absolute "
          style={{ bottom: 0, left: 0, width: "200px", height: "200px" }}
        >
          <Image className="" src="/logo-overlay.png" alt="Ucas" fill />
        </div>
      </section>
      <CreateArticleForm />
    </>
  );
}
