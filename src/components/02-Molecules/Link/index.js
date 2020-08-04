import React from 'react';
import {Link} from 'gatsby';

const MFLink = (props) => {
  return (
  <Link to={props.path} className={`mf-link ` + props.classNames} activeClassName="mf-link-active">
    <span className="mf-link_inner">
      {props.text}
    </span>
  </Link>
  );
}
 
export default MFLink;