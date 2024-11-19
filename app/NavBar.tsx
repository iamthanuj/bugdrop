"use client";

import logo from "@/public/svg-formatter-beautifier-_2_.png";
import { Avatar, Box, DropdownMenu } from "@radix-ui/themes";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExitIcon, EnterIcon } from "@radix-ui/react-icons";

const NavBar = () => {
  return (
    <nav className="flex justify-between h-20 bg-maincolor items-center px-5 ">
      <Link href="/">
        <Image src={logo} alt="logo" width={150} />
      </Link>
      <div className="flex gap-10 items-center">
        <NavLink/>
        <AuthStatus />
      </div>
    </nav>
  );
};

const NavLink = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Bugs", href: "/bugs/list" },
  ];

  const pathName = usePathname();

  return (
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
  );
};

const AuthStatus = () => {
  const { status, data } = useSession();

  if (status === "loading") return null;

  if (status === "unauthenticated")
    return (
      <Link
        className="text-white bg-gray-500 p-2 rounded-sm flex  items-center gap-3"
        href="/api/auth/signin"
      >
        <EnterIcon />
        Log In
      </Link>
    );

  return (
    <Box>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            src={data!.user!.image!}
            fallback="?"
            radius="full"
            referrerPolicy="no-referrer"
          />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>{data!.user!.name!}</DropdownMenu.Label>
          <DropdownMenu.Label>{data!.user!.email!}</DropdownMenu.Label>
          <DropdownMenu.Item className="flex justify-center">
            <Link
              className="flex justify-center items-center gap-2"
              href="/api/auth/signout/"
            >
              <ExitIcon /> Log Out
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  );
};

export default NavBar;
