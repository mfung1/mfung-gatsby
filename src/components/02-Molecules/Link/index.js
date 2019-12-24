import React from 'react';
import {Link} from 'gatsby';
import styles from './link.module.scss';
const MFLink = (props) => {
  return (
  <Link to={props.path} className={`${styles['mf-link']} ${props.level ? styles[`mf-link-${props.level}`] : ''}`} activeClassName={`${styles['mf-lnk-active']}`}>
    <span>
      {props.text}
    </span>
  </Link>
  );
}
 
export default MFLink;