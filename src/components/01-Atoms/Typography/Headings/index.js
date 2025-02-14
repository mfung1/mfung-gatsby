import React from 'react';
const H1 = (props) => {
  return (
    <h1 className={`${props.theClassName} ${props.spacing} ${props.colour ? `col-${props.colour}` : ''}`}>{props.text}</h1>
  )
}

const H2 = (props) => {
  return (
    <h2 className={`${props.theClassName} ${props.spacing} ${props.colour ? `col-${props.colour}` : ''}`}>{props.text}</h2>
  )
}

const H3 = (props) => {
  return (
    <h3 className={`${props.theClassName} ${props.spacing} ${props.colour ? `col-${props.colour}` : ''}`}>{props.text}</h3>
  )
}

const Heading = (props) => {
  const Headings = {
    'h1': H1,
    'h2': H2,
    'h3': H3,
  }
  const TheHeading = Headings[props.level || 'h1'];
  return (
    <TheHeading theClassName={`mf-${props.level}`} colour={props.colour} level={props.level} text={props.text} spacing={props.spacing} redDot={props.redDot} centered={props.centered} fls={props.fls}/> 
  )
}

export default Heading;