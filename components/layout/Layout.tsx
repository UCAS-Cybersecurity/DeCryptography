import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props: { children: any }) {
  const { children } = props;
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
