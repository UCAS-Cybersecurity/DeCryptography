import Link from "next/link";
import PageTitle from "../components/layout/PageTitle";
import Register from "../components/Register";
import useGuestOnly from "../hooks/auth/useGuestOnly";

export default function LoginPage() {
  useGuestOnly();
  return (
    <div className="pb-8">
      <PageTitle>
        <h1 className="text-4xl font-light text-white m-auto max-w-5xl text-center py-5">
          Welcome, let's get started!
        </h1>
      </PageTitle>
      <Register />
      <p className="text-center sm:text-lg text-sm text-slate-600 font-light mt-4">
        Already have an account?{" "}
        <Link href="/login" className="text-blue">
          Login
        </Link>
      </p>
    </div>
  );
}
