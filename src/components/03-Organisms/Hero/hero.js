import React from 'react';
import Heading from '../../01-Atoms/Typography/Headings';
import MFLink from '../../02-Molecules/Link';


const Hero = () => {
  return (
    <section className="mf-hero">
      <div className="mf-hero_copy">
        <Heading level="h1" colour="snowyMint" spacing="mb-11" text={<>Hi, I’m Matt Fung.<br/>A British web developer, currently working at <MFLink path="https://www.tesco.com" classNames="col-clearDay mf-h1 bolder" text="Tesco"/>.</>}/>
      </div>
    </section>
  );
}
 
export default Hero;