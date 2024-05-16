"use client"
import React from "react";
import Welcome from "@/app/components/welcome/Welcome";
import Vision from "@/app/components/vision/Vision";
import Programming from "@/app/components/programming/Programming";
import Blog from "../blog/Blog";
import ReactFullpage from "@fullpage/react-fullpage";

const HomeMain = () => {
  return (
    <ReactFullpage
    verticalCentered={false}
      scrollingSpeed={1000}
      render={({ state, fullpageApi }) => {
        return (
            <ReactFullpage.Wrapper>
              <Welcome></Welcome>
              <Vision></Vision>
              <Programming></Programming>
              <Blog></Blog>
            </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default HomeMain;
