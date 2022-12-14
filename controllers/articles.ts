import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { db, auth } from "../firebase";
import { Article } from "../types";
import { castArticle } from "../helpers/articlesHelper";

export const collectionName = "articles";

export const articlesCollection = collection(db, collectionName);

export const add = async (article: Article) => {
  // current timestamp
  article.createdAt = new Date();
  article.creator_uid = auth.currentUser?.uid;
  auth.currentUser?.displayName &&
    (article.creator_name = auth.currentUser?.displayName);
  auth.currentUser?.photoURL &&
    (article.creator_photoURL = auth.currentUser?.photoURL);
  // unset article image_binary completely
  delete article.image_binary;
  delete article.content;
  const docRef = await addDoc(articlesCollection, article);
  // console.log("Document written with ID: ", docRef.id);
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

export const get = async (uid: string) => {
  const docRef = doc(articlesCollection, uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const article = castArticle(docSnap);
    article.contentUrl &&
      (article.content = await loadHtmlContent(article.contentUrl!));
    if (article.replLink && article.replLink.includes("#")) {
      article.replLink = article.replLink.split("#")[0];
    }
    // article.replLink
    const replRegex = /^([https?:\/{2}]+?replit.com\/@.*\/.+)$/;
    const replMatch = article.replLink?.match(replRegex);
    if (
      replMatch &&
      replMatch.length > 1 &&
      article.replLink?.includes("replit.com")
    ) {
      article.replLink = replMatch[1];
    } else {
      article.replLink = undefined;
    }
    return article;
  } else {
    return null;
  }
};

async function loadHtmlContent(url: string) {
  return await (await fetch(url)).text();
}
