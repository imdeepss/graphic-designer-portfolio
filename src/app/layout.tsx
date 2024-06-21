import type { Metadata } from "next";
import { Open_Sans, Montserrat } from "next/font/google";
import "@/styles/globals.css";

const inter = Montserrat({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Simran Vishwakarma | Graphic Designer",
  description:
    "Discover the creative world of Simran Vishwakarma, where passion meets design. Explore a wide range of graphic design projects, photography, and visual storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div id="modalOverlay" className="flex items-center justify-center" />
      </body>
    </html>
  );
}
