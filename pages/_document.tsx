import { Html, Head, Main, NextScript } from "next/document";
import { getImagePrefix } from "../helpers/imagePrefix";

export default function AppDocument() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href={getImagePrefix() + "/favicon.ico"} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
