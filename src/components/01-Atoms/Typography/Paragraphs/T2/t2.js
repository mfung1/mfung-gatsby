import React from 'react';

const T2 = (props) => {
  return (
    <p className={`mf-t2 ${props.spacing} ${props.colour ? `col-${props.colour}` : ''}`}>{props.text}</p>
  )
}
export default T2;