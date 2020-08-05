import React from 'react';
import {Link} from 'gatsby';

const Internal = (props) => (
  <Link to={props.path} className={`mf-link ` + props.classNames} activeClassName="mf-link-active">
    <span className="mf-link_inner">
      {props.text}
    </span>
  </Link>
);
const External = (props) => (
  <a href={props.path} className={`mf-link ` + props.classNames}>
    <span className="mf-link_inner">
      {props.text}
    </span>
  </a>
);

const MFLink = (props) => {
  const LinkType = props.internal ? <Internal {...props}/> : <External {...props}/>; 
  return LinkType;
}
 
export default MFLink;