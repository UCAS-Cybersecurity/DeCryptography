import EditArticleForm from "../../../components/article/EditArticleForm";
import Image from "../../../components/base/Image";
import PageTitle from "../../../components/layout/PageTitle";

export default function EditArticlePage() {
  return (
    <>
      <PageTitle>
        <h1 className="text-6xl font-light text-white m-auto text-center">
          Edit Article
        </h1>
      </PageTitle>
      <EditArticleForm />
    </>
  );
}
