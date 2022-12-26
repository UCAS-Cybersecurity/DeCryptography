import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../../context/AuthContext";

export default function useGuestOnly() {
  const router = useRouter();
  const { currentUser } = useAuth()!;

  React.useEffect(() => {
    if (currentUser && currentUser?.uid) {
      router
        .push("/")
        .then(() => console.log("Welcome back!"))
        .catch((err) => console.log(err));
    }
  }, [currentUser, router]);

  return { currentUser };
}
