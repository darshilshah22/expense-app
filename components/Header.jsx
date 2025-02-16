import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedOut } from "@clerk/nextjs";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
          />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <SignedOut />
          <a href="#features" className="text-gray-600 hover:text-blue-600">
            Features
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-blue-600">
            Testimonials
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
