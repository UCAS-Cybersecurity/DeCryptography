import { DocumentData, DocumentSnapshot } from "firebase/firestore";
import { Article } from "../types";

export function castArticle(doc: DocumentSnapshot<DocumentData>) {
  let createdAt = null;
  let updatedAt = null;
  try {
    createdAt = doc.data()?.createdAt?.toDate();
    updatedAt = doc.data()?.createdAt?.toDate();
  } catch (error) {}
  return {
    uid: doc?.id,
    ...doc?.data(),
    createdAt,
    updatedAt,
  } as Article;
}

export function getYoutubeId(url?: String) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
}
