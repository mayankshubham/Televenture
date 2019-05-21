import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import styles from './menu.module.scss';
import TeleventureLogo from './TeleventureLogo';

const activeLinkStyle = {
  color: '#D2A756',
};

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

const SlideBox = () => {
  const [slideboxopen, setVisibility] = useState(false);

  return (
    <div
      onClick={() => setVisibility(prevState => !prevState)}
      style={{ color: 'white', fontWeight: 'bold', fontSize: '40px' }}
    >
      <span className={styles.hamburger}>Drag me</span>
      {slideboxopen && (
        <div className={styles.sideMenu}>
          <ul>
            {menuTabs.map((tab, index) => {
              return (
                <div key={tab.title}>
                  <li>
                    <Link to={tab.link} activeStyle={{ color: ' #F9F9F9' }}>
                      {tab.title}
                    </Link>
                  </li>
                  {index !== menuTabs.length - 1 && <div className={styles.separator} />}
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

const MOBILE_WIDTH = 425;
const Menu = ({ className }) => {
  const [isCollaped, setIsCollapsed] = useState(() => window.outerWidth < MOBILE_WIDTH);
  useEffect(() => {
    const handleResize = e => {
      const { outerWidth } = e.target;
      setIsCollapsed(prev => {
        if (outerWidth <= MOBILE_WIDTH && prev !== true) {
          return true;
        }
        if (outerWidth > MOBILE_WIDTH && prev !== false) {
          return false;
        }
      });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header
      className={classnames(styles.header, {
        [className]: className,
      })}
    >
      <nav className={classnames(styles.nav)}>
        <Link to="/">
          <TeleventureLogo className={styles.televentureLogo} />
        </Link>
        <div
          className={classnames(styles.navbar, {
            [styles.collaped]: isCollaped,
          })}
        >
          <ul className={styles.topList}>
            {menuTabs.map(tab => {
              return (
                <li key={tab.title}>
                  <Link to={tab.link} activeStyle={activeLinkStyle}>
                    {tab.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
