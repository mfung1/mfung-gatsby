import React from 'react';
import styles from './grid.module.scss';

const Grid = (props) => {
  return (
    <div className={`${styles.grid} ${styles[`grid-${props.split}`]} ${props.stampGroup ? styles['grid-stampGroup'] : ''} ${styles[`grid-gap-${props.gap}`]} mb-${props.spacing}`}>
      {props.children}
    </div>
  );
}
 
export default Grid;