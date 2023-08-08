import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopBar = () => {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap 4">
        <Image
          src="/logo.svg"
          alt="logo, sojourner"
          width={28}
          height={28}
        ></Image>
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
      </Link>
    </nav>
  );
};

export default TopBar;
