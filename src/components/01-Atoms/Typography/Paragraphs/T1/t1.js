import React from 'react';
import styles from './t1.module.scss';

const T1 = (props) => {
  return (
    <p className={styles['mf-t1']}>{props.text}</p>
  )
}

export default T1;