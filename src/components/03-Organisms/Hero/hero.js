import React from 'react';
import Heading from '../../01-Atoms/Typography/Headings';
import Paragraph from '../../01-Atoms/Typography/Paragraphs';
import Button from '../../02-Molecules/Button';


const Hero = () => {
  return (
    <section className="mf-hero">
      <div className="mf-hero_txt">
        <Paragraph level="t1" colour="clearDay" spacing="mb-14" text="Hi, my name is"/>
        <Heading level="h1" colour="snowyMint" spacing="mb-11" text="Matt Fung."/>
        <Heading level="h1" colour="algae" spacing="mb-21" text="I make things for the web."/>
        <Paragraph level="t2" colour="algae" text="I’ve worked on some big projects, delivering visual excellence and building highly scalable and maintainable component libraries."/>
        <Button text="Contact me"/>
      </div>
    </section>
  );
}
 
export default Hero;