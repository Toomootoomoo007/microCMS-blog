import React from "react";
import {nav} from "@/data/nav";
import Link from "next/link";
import styles from "./Nav.module.css"

const Nav = () => {
  return (
    <ul className={styles.list}>
      {nav.map((list) => {
        return (
          <li key={list.link}>
            <Link className={styles.link} href={list.link}>{list.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
