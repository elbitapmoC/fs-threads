import Image from "next/image";
import Link from "next/link";

import { SignedIn, SignOutButton, OrganizationSwitcher } from "@clerk/nextjs";

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
        <p className="text-heading3-bold text-light-1 max-xs:hidden ml-2">
          Threads
        </p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="assets/logout.svg"
                  alt="Logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>

      <OrganizationSwitcher
        appearance={{
          elements: {
            organizationSwitcherTrigger: "py-2 px-4",
          },
        }}
      />
    </nav>
  );
};

export default TopBar;
