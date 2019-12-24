import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from '../components/01-Atoms/Logo';

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `110px`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1058,
        padding: `89px 24px 0`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
        >
        <Logo/>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
