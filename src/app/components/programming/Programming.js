import React from 'react'
import Image from 'next/image';
import styled from './Programming.module.css'
import html from '@/data/images/htmlIcon.png'
import css from '@/data/images/cssIcon.png'
import js from '@/data/images/jsIcon.png'
import react from '@/data/images/reactIcon.png'
import wp from '@/data/images/wpIcon.png'
import php from '@/data/images/phpIcon.png'
import SwipeMe from '../swipeMe/SwipeMe';

const Programming = () => {
  return (
    <section className={`${styled.section} section`}>
      <h2 className={styled.heading}>Programming</h2>
      <div className={styled.iconArea}>
        <Image className={styled.icons} src={html} alt='html'></Image>
        <Image className={styled.icons} src={css} alt='css'></Image>
        <Image className={styled.icons} src={js} alt='javascript'></Image>
        <Image className={styled.icons} src={react} alt='react'></Image>
        <Image className={styled.icons} src={wp} alt='wordpress'></Image>
        <Image className={styled.icons} src={php} alt='php'></Image>
      </div>
      <SwipeMe></SwipeMe>
    </section>
  );
}

export default Programming
