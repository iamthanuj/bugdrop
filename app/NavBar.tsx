"use client";

import logo from "@/public/svg-formatter-beautifier-_2_.png";
import { Box } from "@radix-ui/themes";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();
  const { status, data } = useSession();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Bugs", href: "/bugs/list" },
  ];

  return (
    <nav className="flex justify-between h-20 bg-maincolor items-center px-5 ">
      <Link href="/">
        <Image src={logo} alt="logo" width={150} />
      </Link>
      <div className="flex gap-10">
        <ul className="flex gap-5">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                className={classNames({
                  "text-secondcolor": link.href === pathName,
                  "text-white": link.href !== pathName,
                  "hover:text-thirdcolor transition-colors": true,
                })}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Box>
          {status === "authenticated" && (<Link href="/api/auth/signout">Log Out</Link>)}
          {status === "unauthenticated" && (<Link href="/api/auth/signin">Log In</Link>)}
        </Box>
      </div>
    </nav>
  );
};

export default NavBar;
