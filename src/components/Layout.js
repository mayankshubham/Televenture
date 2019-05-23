import React from 'react';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import favicon from '../images/favicon.ico';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';
import config from '../utils/siteConfig';
import Menu from './Menu';

const Layout = ({ children }) => {
  return (
    <div className="siteRoot">
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href={favicon} />
      </Helmet>

      <ThemeProvider theme={theme}>
        <>
          <div className="siteContent">
            <Menu />
            {children}
          </div>
        </>
      </ThemeProvider>
      <GlobalStyle />
    </div>
  );
};

export default Layout;
