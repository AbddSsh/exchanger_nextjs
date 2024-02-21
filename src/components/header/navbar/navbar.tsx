"use client";

import Link from "next/link";
import styles from "./navbar.module.scss";
import { paths } from "@/shared/routing";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const path = usePathname();
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={path === paths.about ? styles.active : ""}>
          <Link className="link" href={paths.about}>
            About
          </Link>
        </li>
        <li className={path === paths.todos ? styles.active : ""}>
          <Link className="link" href={paths.todos}>
            Todos
          </Link>
        </li>
      </ul>
    </nav>
  );
};
