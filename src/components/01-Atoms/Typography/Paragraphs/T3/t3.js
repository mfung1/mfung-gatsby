import React from 'react';

const T3 = (props) => {
  return (
    <p className={`mf-t3 ${props.spacing} ${props.colour ? `col-${props.colour}` : ''}`}>{props.text}</p>
  )
}
export default T3;