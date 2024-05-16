"use client";

import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import HomeMain from "@/app/components/home/HomeMain";
import Nav from "./components/nav/Nav";
import { useEffect, useState } from "react";

const disableScroll = (event) => {
  event.preventDefault();
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Header setMenuOpen={setMenuOpen}></Header>
      {menuOpen && <Nav></Nav>}
      <HomeMain></HomeMain>
      <Footer></Footer>
    </div>
  );
}
