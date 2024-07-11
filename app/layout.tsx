"use client";
import { Figtree } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import { metadata } from "./metadata"; // Import metadata

const figtree = Figtree({ subsets: ["latin"] });

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-[#313131] text-white rounded-full mx-4 mt-4 z-50">
      <div className="flex items-center space-x-4">
        <a href="/" className="flex items-center space-x-4">
          <img src="/Favicon.png" alt="Subdue Logo" className="h-10 pl-5" />
          <span className="text-2xl font-bold">Subdue</span>
        </a>
      </div>
      <nav className="flex space-x-10">
        <a href="/capabilities" className="hover:underline text-md">Capabilities</a>
        <div 
          className="relative" 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <a href="/industries" className="hover:underline text-md">Industries</a>
          {isDropdownOpen && (
            <div 
              className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg"
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              <a href="/technology" className="block px-4 py-2 hover:bg-gray-200">Technology</a>
              <a href="/agriculture" className="block px-4 py-2 hover:bg-gray-200">Agriculture</a>
            </div>
          )}
        </div>
        <a href="/unlimitask" className="hover:underline text-md">Unlimitask</a>
        <a href="/resources" className="hover:underline text-md">Resources</a>
        <a href="/about" className="hover:underline text-md">About</a>
        <a href="/careers" className="hover:underline text-md">Careers</a>
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
    <html lang="en" className="dark">
      <body className={`${figtree.className} bg-[#1C1A1E] dark:bg-[#1C1A1E]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}