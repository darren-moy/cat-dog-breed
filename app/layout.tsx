import type { Metadata } from "next";
import Link from 'next/link'
import "./globals.css";

export const metadata: Metadata = {
  title: "Dog and Cat Breed Recommender",
  description: "Find your perfect breed match!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <header className="bg-blue-600 text-white">
          <nav className="container mx-auto flex items-center justify-between p-4">
            <div className="text-lg font-bold">
              <Link href="/">Breed Recommender</Link>
            </div>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/questionnaire" className="hover:underline">
                  Questionnaire
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
