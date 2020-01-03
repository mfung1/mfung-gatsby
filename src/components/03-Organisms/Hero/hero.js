import React from 'react';
import Heading from '../../01-Atoms/Typography/Headings';
import Paragraph from '../../01-Atoms/Typography/Paragraphs';

import styles from './hero.module.scss';

const Hero = () => {
  return (
    <section className={styles['mf-hero']}>
      <div className={styles['mf-hero_txt']}>
        <Heading level="h1" txt="Hello"/>
        <Paragraph level="t1" txt="World"/>
      </div>
      <div className={styles['mf-hero_img']} style={{backgroundImage: URL('https://picsum.photos/600/600')}}></div>
    </section>
  );
}
 
export default Hero;