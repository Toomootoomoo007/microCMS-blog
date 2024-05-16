import React from "react";
import styled from "./Button.module.css";
import Link from "next/link";

const Button = ({ btnName, link }) => {
  return (
    <button className={styled.btn}>
      <Link href={`${link}`} className={styled.btnLink}>
        {btnName}
        <span className={styled.arrowLink}></span>
      </Link>
    </button>
  );
};

export default Button;
