import React from "react";
import styled from "./Vision.module.css";
import Button from '@/app/components/button/Button'
import SwipeMe from '@/app/components/swipeMe/SwipeMe'

const Vision = () => {
  return (
    <section className={`${styled.section} section`}>
      <h2 className={styled.heading}>Vision</h2>
      <p className={styled.paragraph}>
        快適な体験ができる
        <br />
        Webサイト作りを目指します
      </p>
      <Button btnName={"作品ページ"} link="/work"></Button>
      <SwipeMe></SwipeMe>
    </section>
  );
};

export default Vision;
