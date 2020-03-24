import React, { Component } from 'react';
import Heading from '../../01-Atoms/Typography/Headings';
import Paragraph from '../../01-Atoms/Typography/Paragraphs';

import ContentStampContainer from '../../02-Molecules/Content-Stamp';

import styles from './experiments.module.scss';

class Experiments extends Component {
  render() { 
    return (
      <article className={styles.MFSection}>
        <div className={styles.MFSection_cnt}>
          <Heading level="h2" colour="iceBlue" spacing="mb-16" text="Experiments"/>
          <Paragraph level="t2" colour="iceBlue" spacing="mb-76" text="A collection of stuff I’ve been tinkering around with and working on."/>
          <ContentStampContainer/>
        </div>
      </article>
    );
  }
}
 
export default Experiments;