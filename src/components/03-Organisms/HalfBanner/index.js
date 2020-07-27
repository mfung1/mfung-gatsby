import React from 'react';
import Heading from '../../01-Atoms/Typography/Headings';
import Paragraph from '../../01-Atoms/Typography/Paragraphs';
import Image from '../../../images/profile.png';
import MFLink from '../../02-Molecules/Link';

const HalfContent = () => {
  return (
    <section className="mf-half">
      <div className="mf-half_txt">
        <Heading level="h2"  colour="clearDay" spacing="mb-12" text="About me"/>
        <Paragraph level="t2" colour="algae" spacing="mb-24" text="Hey! I’m Matt, a front-end developer based in Hertford, Hertfordshire."/>
        <Paragraph level="t2" colour="algae" spacing="mb-24" text="I love making stuff on the web, from silly ‘because you can’ graphics to websites and apps. I strive to consistently deliver visual excellence, and pleasing experiences for users."/>
        <Paragraph level="t2" colour="algae" spacing="mb-24" text={<>As soon as I graduated from the <MFLink path="#" classNames="col-clearDay mf-t2" text="University of Hertfordshire"/> with a 2:1 in Computer Science (Bsc); I started at a small, but well connected agency previously known as <MFLink path="https://www.forge.uk" classNames="col-clearDay mf-t2" text="Digital Results - now known as Forge"/>. I then moved to <MFLink path="https://www.tesco.com" classNames="col-clearDay mf-t2" text="Tesco"/> in June 2017.</>}/>
  <Paragraph level="t2" colour="algae" spacing="mb-24" text={<>If I’m not in front of a screen, I’m probably at the pub to check in on <MFLink path="#" classNames="col-clearDay mf-t2" text="Untappd"/>, hating myself for being at the gym, or reading a book at a coffee shop.</>}/>
      </div>
      <picture className="mf-half_img">
        <img src={Image} alt=""/>
      </picture>
    </section>
  );
}
 
export default HalfContent;