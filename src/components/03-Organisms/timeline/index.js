import React from 'react';
import Heading from '../../01-Atoms/Typography/Headings';
import Paragraph from '../../01-Atoms/Typography/Paragraphs';
const Timeline = () => {
  return (
  <section class="mf-wrapper mb-52">
    <Heading level="h2" colour="clearDay" text="Experience"/>
    <Paragraph level="t2" colour="algae" text="I design, architect, build and optimise front-end solutions that users love. Being a team player, encouraging and helping others to grow and advising on front-end architecture are my best known traits in the workplace."/>
    <div class="mf-timeline">
      <div class="mf-timeline_node">
        <span class="mf-timeline_year">2018</span>
        <div class="mf-timeline_blob mf-timeline_blob--sub"></div>
        <div class="mf-timeline_event">
          <Heading level="h3" colour="clearDay" text="WordPress Website (Freelance)"/>
          <Paragraph level="t3" colour="snowyMint" text="Front-End Developer"/>
          <Paragraph level="t3" colour="snowyMint" text="June 2017 - Present"/>
          <Paragraph level="t2" colour="snowyMint" text="I sat in a chair all day and typed stuff for a living. The best part was all the free shit I got, and the people of course."/>
        </div>
      </div>
      <div class="mf-timeline_node">
        <span class="mf-timeline_year mf-timeline_year--sub">2017</span>
        <div class="mf-timeline_blob"></div>
        <div class="mf-timeline_event"> 
          <Heading level="h3" colour="clearDay" text="Tesco PLC"/>
          <Paragraph level="t3" colour="snowyMint" text="Front-End Developer"/>
          <Paragraph level="t3" colour="snowyMint" text="June 2017 - Present"/>
          <Paragraph level="t2" colour="snowyMint" text="I sat in a chair all day and typed stuff for a living. The best part was all the free shit I got, and the people of course."/>
        </div>
      </div>
      <div class="mf-timeline_node">
        <span class="mf-timeline_year mf-timeline_year--sub">2018</span>
        <div class="mf-timeline_blob mf-timeline_blob--past"></div>
        <div class="mf-timeline_event"> 
          <Heading level="h3" colour="clearDay" text="Tesco PLC"/>
          <Paragraph level="t3" colour="snowyMint" text="Front-End Developer"/>
          <Paragraph level="t3" colour="snowyMint" text="June 2017 - Present"/>
          <Paragraph level="t2" colour="snowyMint" text="I sat in a chair all day and typed stuff for a living. The best part was all the free shit I got, and the people of course."/>
        </div>
      </div>
    </div>
  </section>
  );
}
 
export default Timeline;