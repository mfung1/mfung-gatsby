import React from 'react';
import styles from './t2.module.scss';

const T2 = (props) => {
  return (
    <p className={`${styles['mf-t2']} ${props.spacing} ${props.colour ? `col-${props.colour}` : ''}`}>{props.text}</p>
  )
}
export default T2;