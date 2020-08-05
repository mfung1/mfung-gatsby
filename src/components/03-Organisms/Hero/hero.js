import React from 'react';
import Heading from '../../01-Atoms/Typography/Headings';
import MFLink from '../../02-Molecules/Link';
import Icon from '../../01-Atoms/Icon';


const Hero = () => {
  return (
    <section className="mf-hero">
      <div className="mf-hero_copy">
        <Heading level="h1" colour="clearDay" spacing="mb-11" text={<>Hi, I’m Matt Fung.<br/>A British web developer, currently working at <MFLink external path="https://www.tesco.com" classNames="col-snowyMint mf-h1 bolder" text="Tesco"/>.</>}/>
      </div>
      <div className="mf-icons">
        <Icon type="twitter"/>
        <Icon type="github"/>
        <Icon type="medium"/>
        <Icon type="email"/>
      </div>
    </section>
  );
}
 
export default Hero;