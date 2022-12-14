import { addDoc, collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Article } from "../types";

export const collectionName = "articles";

export const articlesCollection = collection(db, collectionName);

export const add = async (article: Article) => {
  const docRef = await addDoc(articlesCollection, article);
  return docRef.id;
};

export const update = async (article: Article) => {
  const docRef = doc(articlesCollection, article.uid!);
  await setDoc(docRef, article, { merge: true });
};

export const remove = async (uid: string) => {
  const docRef = doc(articlesCollection, uid);
  await deleteDoc(docRef);
};
