import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import CropImageField from "./base/CropImageField";
import useUploadHelpers from "../hooks/useUploadHelpers";

export default function Login() {
  const uploadCtx = useUploadHelpers();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const [file, setFile] = useState<File | undefined>();

  const { login, signup, currentUser, updateUser } = useAuth()!;
  const router = useRouter();

  useEffect(() => {
    if (currentUser && currentUser?.uid) {
      router
        .push("/")
        .then(() => console.log("Welcome back!"))
        .catch((err) => console.log(err));
    }
  }, [currentUser, router]);

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
    await uploadCtx.uploadImage({
      label: "User Profile",
      file,
      onDone: async (url: any) => {
        await updateUser({
          displayName: name,
          photoURL: url,
        });
      },
      onError: (error: any) => {
        console.log(error);
      },
      onProgress: (progress: any) => {
        console.log(progress);
      },
      path: `images/users/${uid}.png`,
    });
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
            className="outline-none duration-300 border-b-2 border-solid border-white focus:border-blue text-slate-900 p-2 w-full max-w-[40ch]"
          />
        )}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="outline-none duration-300 border-b-2 border-solid border-white focus:border-blue text-slate-900 p-2 w-full max-w-[40ch]"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="outline-none text-slate-900 p-2 w-full max-w-[40ch] duration-300 border-b-2 border-solid border-white focus:border-blue"
        />
        <button
          onClick={submitHandler}
          className="w-full max-w-[40ch] bg-green border border-solid py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-blue after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900"
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
