"use client";

import React, { useState } from "react";
import styled from "./NavButton.module.css";

const NavButton = ({setMenuOpen}) => {

  return (
    <>
      <label
        htmlFor="navCheckbox"
        className={styled.navButton}
        onClick={(e) => {
        }}
      >
        <input id="navCheckbox" type="checkbox" onChange={e=>{
          e.stopPropagation();
          setMenuOpen((prev) => !prev);
        }} className={styled.checkBox} />
        <span className={styled.lineLong}></span>
        <span className={styled.lineShort}></span>
      </label>
    </>
  );
};

export default NavButton;
