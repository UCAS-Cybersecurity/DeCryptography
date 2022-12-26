import Link from "next/link";
import PageTitle from "../components/layout/PageTitle";
import Login from "../components/Login";
import useGuestOnly from "../hooks/auth/useGuestOnly";

export default function LoginPage() {
  useGuestOnly();
  return (
    <div className="pb-8">
      <PageTitle>
        <h1 className="text-4xl font-light text-white m-auto max-w-5xl text-center py-5">
          Welcome, let&apos;s get started!
        </h1>
      </PageTitle>
      <Login />
      <p className="text-center sm:text-lg text-sm text-slate-600 font-light mt-4">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-blue">
          Register
        </Link>
      </p>
    </div>
  );
}
