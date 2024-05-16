import React from "react";
import styled from './SwipeMe.module.css'

const SwipeMe = () => {
  return (
    <div className={styled.swipeMeGroup}>
      <p>
        <span className={styled.arrowSwipe}></span>
        <span className={styled.arrowSwipe}></span>
        <span className={styled.arrowSwipe}></span>
      </p>
      <p className={styled.swipeMe}>swipe me</p>
    </div>
  );
};

export default SwipeMe;
