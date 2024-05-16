import React from 'react'
import styled from './Blog.module.css'
import Button from '../button/Button'
import SwipeMe from '../swipeMe/SwipeMe'

const Blog = () => {
  return (
    <section className={`${styled.section} section`}>
    <h2 className={styled.heading}>Blog</h2>
    <p className={styled.paragraph}>
      日々の取り組みを紹介しています
    </p>
    <Button btnName={"ブログを読む"} link={"/blog"}></Button>
    <SwipeMe></SwipeMe>
  </section>

  )
}

export default Blog
