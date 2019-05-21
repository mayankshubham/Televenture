import React, { useState } from 'react';
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
      Drag me
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

const Menu = ({ className }) => {
  const isMobile = window.innerWidth < 1000;
  console.log(window.innerWidth);
  return (
    <header
      className={classnames(styles.header, {
        [className]: className,
      })}
    >
      <nav className={classnames(styles.nav, { [styles.isMobile]: isMobile })}>
        <Link to="/">
          <TeleventureLogo className={styles.televentureLogo} />
        </Link>
        {isMobile ? (
          <SlideBox />
        ) : (
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
        )}
      </nav>
    </header>
  );
};

export default Menu;
