"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";
import { FunctionComponent, ReactNode } from "react";
import { Url } from "url";

type Props = {
  href: string;
  children: ReactNode;
};

const NavLink: FunctionComponent<Props> = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
