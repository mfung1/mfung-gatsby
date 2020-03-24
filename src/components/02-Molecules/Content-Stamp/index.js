import React from 'react';
import Heading from '../../01-Atoms/Typography/Headings';
import Paragraph from '../../01-Atoms/Typography/Paragraphs';
import styles from './content-stamp.module.scss';

const ContentStampContainer = (props) => {
  return (
    <ul className={styles['MF-Content-Stamp_Cnt']}>
      <li>
        <a href={props.url} className={`${styles['MF-Content-Stamp']} ${styles['MF-Content-Stamp--dark']}`}>
          <div>
            <Heading level="h3" spacing="mb-9" colour="iceBlue" text="Accessible forms, made simple"/>
            <Paragraph level="t3" spacing="mb-12" colour="iceBlue" text="It’s 2019 for crying out loud, how are we still not getting the fundamentals right?"/>
          </div>
          <p className={`${styles['MF-Content-Stamp_label']} col-iceBlue`}>HTML</p>
        </a>
      </li>
      <li>
        <a href={props.url} className={`${styles['MF-Content-Stamp']} ${styles['MF-Content-Stamp--cherry']}`}>
          <div>
            <Heading level="h3" spacing="mb-9" colour="iceBlue" text="You can do that with CSS grid?"/>
            <Paragraph level="t3" spacing="mb-12" colour="iceBlue" text="Remember when the designer asked you to make a print layout on the web? Now you can."/>
          </div>
          <p className={`${styles['MF-Content-Stamp_label']} col-iceBlue`}>CSS</p>
        </a>
      </li>
      <li>
        <a href={props.url} className={`${styles['MF-Content-Stamp']} ${styles['MF-Content-Stamp--iceBlue']}`}>
          <div>
            <Heading level="h3" spacing="mb-9" colour="cherry" text="Don’t depend on React"/>
            <Paragraph level="t3" spacing="mb-12" colour="cherry" text="It’s often tempting to reach out for a framework to handle complex logic for you, but learn the background stuff first."/>
          </div>
          <p className={`${styles['MF-Content-Stamp_label']} col-cherry`}>Javascript</p>
        </a>
      </li>
      <li>
        <a href={props.url} className={`${styles['MF-Content-Stamp']} ${styles['MF-Content-Stamp--pinkishRed']}`}>
          <div>
            <Heading level="h3" spacing="mb-9" colour="dark" text="Don’t depend on React"/>
            <Paragraph level="t3" spacing="mb-12" colour="dark" text="It’s often tempting to reach out for a framework to handle complex logic for you, but learn the background stuff first."/>
          </div>
          <p className={`${styles['MF-Content-Stamp_label']} col-dark`}>Javascript</p>
        </a>
      </li>
    </ul>
  );
}

// const ContentStamp = (props) => {
//   return (
    
//   );
// }
 
export default ContentStampContainer;