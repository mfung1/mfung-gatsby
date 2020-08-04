import React, { Component } from 'react';



class Hamburger extends Component {
  state = {
    active: false
  }
  handleClick = () => {
    this.state.active === false ? this.setState({active: true}) : this.setState({active: false});
  }
  render () {
    return (
      <button className={`mf-hamburger mf-hamburger--elastic${this.state.active ? ' isActive' : ''}`} onClick={this.handleClick} type="button">
        <span className="mf-hamburger-box">
          <span className="mf-hamburger-inner"></span>
        </span>
      </button>
    )
  }
}
 
export default Hamburger;