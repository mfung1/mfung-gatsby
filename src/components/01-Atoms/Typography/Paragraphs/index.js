import React from 'react'
import T1 from './T1/t1';
import T2 from './T2/t2'
import T3 from './T3/t3'

import './paragraphs.module.scss'

const Paragraph = (props) => {
  const Paras = {
    't1': T1,
    't2': T2,
    't3': T3,
  }
  const TheParagraph = Paras[props.level || 't1'];
  
  return (
    <TheParagraph colour={props.colour} level={props.level} text={props.text} spacing={props.spacing} bold={props.bold} centered={props.centered}/> 
  )
}

export default Paragraph;