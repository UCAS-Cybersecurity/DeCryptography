import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../context/AuthContext";
import Layout from "../components/Layout";
import UploadIndicators from "../components/UploadIndicators";
import { UploadProvider } from "../context/UploadContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <UploadProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <UploadIndicators />
      </UploadProvider>
    </AuthProvider>
  );
}
