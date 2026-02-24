"use client"; // This allows us to use 'usePathname' to detect the active page

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Define our navigation links
  const navLinks = [
    { name: "FOREST GUARDIANS", href: "/" },
    { name: "GUARDIANS", href: "/guardians" },
    { name: "ALMANAC", href: "/almanac" },
    { name: "ABOUT US", href: "/about" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1e252b]/80 backdrop-blur-md w-full bg-[#1e252b] text-gray-300 border-b border-gray-700">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* LOGO SECTION */}
        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl tracking-tighter text-white">
            TAW-LOGO <span className="text-blue-400">TEXT</span>
          </span>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="flex space-x-12 text-lg font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors duration-200 hover:text-white ${
                  isActive ? "text-green-500 font-bold" : "text-gray-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
