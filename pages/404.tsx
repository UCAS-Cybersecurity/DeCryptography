import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  // if route matches /article/[id] then redirect to /article/[id]
  if (router.asPath.match(/^\/article\/[a-zA-Z0-9]+$/)) {
    router.push(router.asPath);
  }
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center justify-center h-full w-full flex-1">
      <h1>404 - Page Not Found</h1>
    </div>
  );
}
