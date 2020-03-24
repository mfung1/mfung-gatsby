import { Link } from "gatsby"
import React from "react"
import styles from './header.module.scss';
import Logo from '../../01-Atoms/Logo';
import MFLink from '../../02-Molecules/Link';

const Navigation = ({ siteTitle }) => (
  <nav
    className={styles['mf-Nav']}
  >
    <div className={styles['mf-Nav_cnt']}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
        >
        <Logo/>
      </Link>
      <div className={styles['mf-Nav_lnkCnt']}>
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
      </div>
    </div>
  </nav>
)

export default Navigation
