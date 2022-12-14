import React, { useRef, useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import CropImageField from "./CropImageField";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const [file, setFile] = useState<File | null>(null);

  const { login, signup, currentUser, updateUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push("/");
    }
  }, [currentUser]);

  async function submitHandler() {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }
    if (isLoggingIn) {
      try {
        await login(email, password);
      } catch (err) {
        setError("Incorrect email or password");
      }
      return;
    }
    const uid = (await signup(email, password))?.user?.uid;
    if (file && uid) {
      await uploadImage(file, uid!);
    }
  }

  async function uploadImage(file: File, uid: string) {
    let url = "";
    const storageRef = ref(storage, `images/users/${uid}`);
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
        console.log("File available at", url);
        await updateUser({
          displayName: name,
          photoURL: url,
        });
      }
    );
  }
  return (
    <>
      <div className="flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4">
        <h1 className="font-extrabold select-none text-2xl sm:text-4xl uppercase">
          {isLoggingIn ? "Login" : "register"}
        </h1>
        {error && (
          <div className="w-full max-w-[40ch] border-rose-400 border text-center border-solid text-rose-400 py-2">
            {error}
          </div>
        )}
        {!isLoggingIn && (
          <div className="w-40 h-40">
            <CropImageField
              onFileChange={(file: any) => setFile(file)}
              aspectRatio={1 / 1}
              defaultImage=""
            />
          </div>
        )}
        {!isLoggingIn && (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]"
          />
        )}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="outline-none text-slate-900 p-2 w-full max-w-[40ch] duration-300 border-b-2 border-solid border-white focus:border-cyan-300"
        />
        <button
          onClick={submitHandler}
          className="w-full max-w-[40ch] border border-white border-solid py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900"
        >
          <h2 className="relative z-20">Submit</h2>
        </button>
        <h2
          className="duration-300 hover:scale-110 cursor-pointer"
          onClick={() => setIsLoggingIn(!isLoggingIn)}
        >
          {!isLoggingIn ? "Login" : "Register"}
        </h2>
      </div>
    </>
  );
}
