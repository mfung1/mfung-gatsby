import React from 'react';
import Heading from '../../01-Atoms/Typography/Headings';
import Paragraph from '../../01-Atoms/Typography/Paragraphs';


const Hero = () => {
  return (
    <section className="mf-hero">
      <div className="mf-hero_copy">
        <Paragraph level="t1" colour="clearDay" spacing="mb-14" text="Hi, my name is" bold />
        <Heading level="h1" colour="snowyMint" spacing="mb-11" text="Matt Fung."/>
        <Heading level="h1" colour="algae" spacing="mb-21" text="I make things for the web."/>
      </div>
    </section>
  );
}
 
export default Hero;