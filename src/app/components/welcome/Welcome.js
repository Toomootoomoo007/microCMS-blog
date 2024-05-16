import React from "react";
import second from '@/app/components/swipeMe/SwipeMe'
import styled from './Welcome.module.css'
import SwipeMe from "@/app/components/swipeMe/SwipeMe";


const Welcome = () => {
  return (
    <section className={`${styled.sectionTop} section`}>
      <h2 className={styled.welcomeMsg}>
        Welcome to
        <br />
        <span>Tomo's Portfolio</span>
      </h2>
      <SwipeMe></SwipeMe>
    </section>
  );
};

export default Welcome;
