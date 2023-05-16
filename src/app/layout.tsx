import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import Nav from '../components/Nav';

export const metadata = {
  title: "Scott Croin | Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-offWhite">
        <main className="">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
