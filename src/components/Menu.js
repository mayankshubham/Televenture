import React, { useState } from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import styles from './menu.module.scss';
import TeleventureLogo from './TeleventureLogo';

const menuTabs = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '/about/',
  },
  {
    title: 'Funds',
    link: '/Funds/',
    partiallyActive: true,
  },
  {
    title: 'Investors',
    link: '/investors/',
  },
  {
    title: 'Contact',
    link: '/contact/',
  },
];

const HamburgerIcon = ({ isOpen }) => {
  return (
    <div
      className={classnames({
        [styles.navIcon]: true,
        [styles.open]: isOpen,
      })}
    >
      <span />
      <span />
      <span />
      <span />
    </div>
  );
};

const Menu = ({ className }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return (
    <header
      className={classnames(styles.header, {
        [className]: className,
      })}
    >
      <div
        className={classnames({
          [styles.navbarIcon]: true,
          [styles.open]: isOpen,
        })}
        onClick={toggleOpen}
      >
        <HamburgerIcon isOpen={isOpen} />
      </div>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logoLink}>
          <TeleventureLogo className={styles.televentureLogo} />
        </Link>
        <nav
          className={classnames({
            [styles.nav]: true,
            [styles.open]: isOpen,
          })}
        >
          <div className={styles.navbar}>
            <ul className={styles.topList}>
              {menuTabs.map(tab => {
                return (
                  <li key={tab.title}>
                    <Link
                      to={tab.link}
                      activeClassName={styles.activeLink}
                      partiallyActive={Boolean(tab.partiallyActive)}
                    >
                      {tab.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Menu;
