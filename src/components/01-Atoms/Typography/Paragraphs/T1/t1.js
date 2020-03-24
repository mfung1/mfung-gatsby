import React from 'react';
import styles from './t1.module.scss';

const T1 = (props) => {
  return (
    <p className={`${styles['mf-t1']} ${props.spacing} ${props.colour ? `col-${props.colour}` : ''}`}>{props.text}</p>
  )
}

export default T1;