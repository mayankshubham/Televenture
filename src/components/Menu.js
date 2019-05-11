import React from 'react'
import { Link } from 'gatsby'
import styles from './menu.module.scss'
import classnames from 'classnames'
import TeleventureLogo from './TeleventureLogo'

const activeLinkStyle = {
  color: '#D2A756',
}

const Menu = ({ className }) => {
  return (
    <header
      className={classnames(styles.header, {
        [className]: className,
      })}
    >
      <nav className={styles.nav}>
        <Link to="/">
          <TeleventureLogo className={styles.televentureLogo} />
        </Link>
        <ul>
          {/* <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              Home
            </Link>
          </li> */}
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              About
            </Link>
          </li>
          <li>
            <Link to="/funds/" activeStyle={activeLinkStyle}>
              Funds
            </Link>
          </li>
          <li>
            <Link to="/investors/" activeStyle={activeLinkStyle}>
              Investors
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Menu
