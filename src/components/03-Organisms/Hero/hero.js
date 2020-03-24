import React from 'react';
import Heading from '../../01-Atoms/Typography/Headings';
import Paragraph from '../../01-Atoms/Typography/Paragraphs';
import Button from '../../02-Molecules/Button';

import styles from './hero.module.scss';

const Hero = () => {
  return (
    <section className={styles['mf-hero']}>
      <div className={styles['mf-hero_txt']}>
        <Heading level="h1" spacing="mb-12" text="I’m Matt, a developer based in Hertfordshire."/>
        <Paragraph level="t1" spacing="mb-25" text="I’ve worked on some big projects, delivering visual excellence and building highly scalable and maintainable component libraries."/>
        <Button text="Contact me"/>
      </div>
      <picture className={styles['mf-hero_img-cnt']} >
        <source href="./static/hero.png"/>
        <img className={styles['mf-hero_img']} src="./static/hero.png" alt=" "/>
      </picture>
    </section>
  );
}
 
export default Hero;