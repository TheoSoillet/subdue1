import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Subdue Consulting Group",
  description: "Using advanced neuroscience principles to transform your business.",
};

function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-[#313131] text-white rounded-full mx-4 mt-4">
      <div className="flex items-center space-x-4">
        <img src="/Favicon.png" alt="Subdue Logo" className="h-10 pl-5" />
        <span className="text-2xl font-bold">Subdue</span>
      </div>
      <nav className="flex space-x-10">
        <a href="/capabilities" className="hover:underline text-md">Capabilities</a>
        <a href="#" className="hover:underline text-md">Industries</a>
        <a href="#" className="hover:underline text-md">Unlimitask</a>
        <a href="#" className="hover:underline text-md">Resources</a>
        <a href="#" className="hover:underline text-md">Careers</a>
      </nav>
      <a href="#" className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200">
        Contact us <span aria-hidden="true">→</span>
      </a>
    </header>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.className} bg-[#1C1A1E]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}