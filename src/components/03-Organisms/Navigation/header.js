import React from "react"
import Hamburger from "../../02-Molecules/hamburger/hamburger";
import MFLink from "../../02-Molecules/Link";
const Navigation = ({ siteTitle }) => (
  <>
    <div className="mf-nav-mobile">
      <Hamburger/>
      <svg className="mf-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 235 84" width="235px" height="84px"><use href="#logo" /></svg>
      <nav className="mf-nav mf-nav-mob">
        <div className="mf-nav_cnt">
          <ul className="mf-nav_lnkcnt">
          <li><MFLink internal path="/blog" classNames="mf-t2" text="Blog"/></li>
          <li><MFLink internal path="/about" classNames="mf-t2" text="About"/></li>
          <li><MFLink internal path="/contact" classNames="mf-t2" text="Contact"/></li>
          </ul>
        </div>
      </nav>
    </div>
    <nav className="mf-nav">
      <div className="mf-nav_cnt">
        <svg className="mf-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 235 84" width="235px" height="84px"><use href="#logo" /></svg>
        <ul className="mf-nav_lnkcnt">
          <li><MFLink internal path="/blog" classNames="mf-t2" text="Blog"/></li>
          <li><MFLink internal path="/about" classNames="mf-t2" text="About"/></li>
          <li><MFLink internal path="/contact" classNames="mf-t2" text="Contact"/></li>
        </ul>
      </div>
    </nav>
  </>
)

export default Navigation
