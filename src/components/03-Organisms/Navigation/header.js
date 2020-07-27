import React from "react"

const Navigation = ({ siteTitle }) => (
  <>
    <div className="mf-nav-mobile">
      <input type="checkbox" id="opmenu" className="mf-nav_checkbox" aria-label="Menu" aria-pressed="false" role="button" autoComplete="off" name="opmenu" value="on" dcvalue="on" />
      <label htmlFor="opmenu" className="mf-nav_mobIcon">
        <div className="hamburger">
          <div className="hamburger-inner"></div>
        </div>
      </label>
      <svg className="mf-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 64" width="56px" height="64px"><use href="#logo" /></svg>
      <nav className="mf-nav mf-nav-mob">
        <div className="mf-nav_cnt">
          <ul className="mf-nav_lnkcnt">
            <li><a href="/blog" className="mf-link mf-t2"><span>Blog</span></a></li>
            <li><a href="/about" className="mf-link mf-t2"><span>About</span></a></li>
            <li><a href="/contact" className="mf-link mf-t2"><span>Contact</span></a></li>
          </ul>
        </div>
      </nav>
    </div>
    <nav className="mf-nav">
      <div className="mf-nav_cnt">
        <svg className="mf-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 64" width="56px" height="64px"><use href="#logo" /></svg>
        <ul className="mf-nav_lnkcnt">
          <li><a href="/blog" className="mf-link mf-t2"><span>Blog</span></a></li>
          <li><a href="/about" className="mf-link mf-t2"><span>About</span></a></li>
          <li><a href="/contact" className="mf-link mf-t2"><span>Contact</span></a></li>
        </ul>
      </div>
    </nav>
  </>
)

export default Navigation
