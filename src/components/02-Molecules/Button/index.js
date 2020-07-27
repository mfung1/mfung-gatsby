import React from 'react';


const Button = (props) => {
  return (
    <button className={`mf-btn ${props.colour ? `mf-btn--${props.colour}` :''}`}><span class="mf-t3">{props.text}</span></button>
  );
}
 
export default Button;