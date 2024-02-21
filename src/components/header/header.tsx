"use client";

import { Navbar } from "./navbar";
import styles from "./header.module.scss";
import Link from "next/link";
import { paths } from "@/shared/routing";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isTop, setIsTop] = useState(true);
  const scrollHeader = () => {
    if (window.scrollY >= 30) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  });
  return (
    <header
      className={isTop ? styles.header : `${styles.header} ${styles.active}`}
    >
      <Link href={paths.main} className="link">
        <div>LOGO</div>
      </Link>
      <Navbar />
    </header>
  );
};
