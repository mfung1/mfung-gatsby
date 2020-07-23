import React from 'react';

const Grid = (props) => {
  return (
    <div className={`${props.classNames}`}>
      {props.children}
    </div>
  );
}
 
export default Grid;