"use client"
import React, {useEffect, useState} from "react";
import Logo from "../logo/Logo";
import Nav from "../nav/Nav";
import styles from './Header.module.css'
import NavButton from "../navButton/NavButton";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(()=>{
    console.log(menuOpen);
  })
  return (
    <header className={styles.headerWrapper}>
      <Logo></Logo>
      <NavButton setMenuOpen={setMenuOpen}></NavButton>
      {menuOpen ? <Nav></Nav> : null}
    </header>
  );
};

export default Header;
