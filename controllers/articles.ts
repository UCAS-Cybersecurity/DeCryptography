import { addDoc, collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { Article } from "../types";

export const collectionName = "articles";

export const articlesCollection = collection(db, collectionName);

export const add = async (article: Article) => {
  // current timestamp
  article.createdAt = new Date(); 
  article.creator_uid = auth.currentUser?.uid;
  console.log(article.creator_uid);
  const docRef = await addDoc(articlesCollection, article);
  console.log("Document written with ID: ", docRef.id);
  return docRef.id;
};

export const update = async (article: Article) => {
  // current timestamp
  article.updatedAt = new Date();
  const docRef = doc(articlesCollection, article.uid!);
  await setDoc(docRef, article, { merge: true });
};

export const remove = async (uid: string) => {
  const docRef = doc(articlesCollection, uid);
  await deleteDoc(docRef);
};
