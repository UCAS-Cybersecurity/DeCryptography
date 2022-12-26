import Link from "next/link";
import { useRouter } from "next/router";
import { NotFoundIllustration } from "../assets";

export default function NotFound() {
  const router = useRouter();
  // if route matches /article/[id] then redirect to /article/[id]
  if (router.asPath.match(/^\/article\/[a-zA-Z0-9]+$/)) {
    router.push(router.asPath);
  }
  return (
    <div className="flex flex-1 w-full justify-center items-center flex-col-reverse md:flex-row py-12">
      <div className="flex flex-col items-center justify-center flex-grow-1 md:w-1/4 w-1/2">
        <h1 className="text-blue font-bold sm:text-9xl text-6xl">404</h1>
        <h2 className="sm:text-4xl text-2xl text-gray-500">Page Not Found!</h2>
        <Link
          href="/"
          as="a"
          className="text-blue sm:text-2xl text-lg mt-8 outline outline-blue px-4 py-2 block"
        >
          Back Home
        </Link>
      </div>
      <div className="flex-grow-1 md:w-1/4 w-1/2">
        <NotFoundIllustration />
      </div>
    </div>
  );
}
