import React from "react"

const Navigation = ({ siteTitle }) => (
  <>
    <div className="mf-nav-mobile">
      <input type="checkbox" id="opmenu" class="mf-nav_checkbox" aria-label="Menu" aria-pressed="false" role="button" autocomplete="off" name="opmenu" value="on" dcvalue="on" />
      <label htmlFor="opmenu" className="mf-nav_mobIcon">
        {/* <span id="mobile-nav-btn" className="mf-nav_mobIcon" aria-hidden="true">
          <svg viewBox="0 0 22 20" width="22px" height="20px" xmlns="https://www.w3.org/2000/svg"><use href="#burger"/></svg>
        </span> */}
        <div className="hamburger">
          <div className="hamburger-inner"></div>
        </div>
      </label>
      <svg className="mf-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 64" width="56px" height="64px"><use href="#logo" /></svg>
      <nav className="mf-nav mf-nav-mob">
        <div className="mf-nav_cnt">
          <ul className="mf-nav_lnkcnt">
            <li><a href="/blog" className="mf-link mf-t1"><span>Blog</span></a></li>
            <li><a href="/portfolio" className="mf-link mf-t1"><span>Portfolio</span></a></li>
            <li><a href="/about" className="mf-link mf-t1"><span>About</span></a></li>
            <li><a href="/contact" className="mf-link mf-t1"><span>Contact</span></a></li>
          </ul>
        </div>
      </nav>
    </div>
    <nav className="mf-nav">
      <div className="mf-nav_cnt">
        <svg className="mf-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 64" width="56px" height="64px"><use href="#logo" /></svg>
        <ul className="mf-nav_lnkcnt">
          <li><a href="/blog" className="mf-link mf-t1"><span>Blog</span></a></li>
          <li><a href="/portfolio" className="mf-link mf-t1"><span>Portfolio</span></a></li>
          <li><a href="/about" className="mf-link mf-t1"><span>About</span></a></li>
          <li><a href="/contact" className="mf-link mf-t1"><span>Contact</span></a></li>
        </ul>
      </div>
    </nav>
  </>
)

export default Navigation
