import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
import Nav from "../components/Nav";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import { ModalProvider } from "@/context/ModalContext";

export const metadata = {
  title: "Scott Croin | Web Developer",
  description: "Scott Croin | Web Developer",
  author : "Scott Croin",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Scott Croin | Web Developer" />
        <meta name="author" content="Scott Croin" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className="bg-darkGrey">
        <ModalProvider>
          <main className={inter.className}>
            <Nav />
            {children}
            <Footer />
          </main>
        </ModalProvider>
        <div id="globalLoader">
          <Image
            src="/loadingSpinner.gif"
            alt="Loading spinner"
            width={50}
            height={50}
            priority
          />
        </div>
      </body>
    </html>
  );
}
