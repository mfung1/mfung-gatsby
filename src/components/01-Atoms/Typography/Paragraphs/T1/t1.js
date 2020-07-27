import React from 'react';

const T1 = (props) => {
  return (
    <p className={`mf-t1 ${props.spacing}${props.colour ? ` col-${props.colour}` : ''}${props.bold ? ` bold` : ''}`}>{props.text}</p>
  )
}

export default T1;