import React from 'react';
import styles from './t3.module.scss';

const T3 = (props) => {
  return (
    <p className={`${styles['mf-t3']} ${props.spacing} ${props.colour ? `col-${props.colour}` : ''}`}>{props.text}</p>
  )
}
export default T3;