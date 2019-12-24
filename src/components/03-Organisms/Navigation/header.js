import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Grid from '../../01-Atoms/Grid';
import Logo from '../../01-Atoms/Logo';
import MFLink from '../../02-Molecules/Link';

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `110px`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1236,
        padding: `89px 24px 0`,
      }}
    >
      <Grid split="half">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
          >
          <Logo/>
        </Link>
        <Grid split="third" gap="42">
          <MFLink
            path="/blog"
            level="t1"
            text="Blog"
          />
          <MFLink
            path="/"
            level="t1"
            text="Portfolio"
          />
          <MFLink
            path="/contact"
            level="t1"
            text="Contact"
          />
        </Grid>
      </Grid>
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
