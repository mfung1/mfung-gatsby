import React from 'react';
import {Link} from 'gatsby';

const MFLink = (props) => {
  return (
  <Link to={props.path} className={`mf-link ` + props.classNames} activeClassName="mf-link-active">
    <span>
      {props.text}
    </span>
  </Link>
  );
}
 
export default MFLink;