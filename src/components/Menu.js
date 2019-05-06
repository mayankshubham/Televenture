import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = styled.header`
  position: fixed;
  background: ${props => props.theme.colors.base};
  width: 100%;
  padding: 1.5em 0;
  height: 82px;
  z-index: 50;
  transform: matrix(1, 0, 0, 1, 0, 0);
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  height: 100%;
  margin: 0 auto;
  padding: 0 1.5em;
  display: flex;
  align-items: center;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    text-transform: uppercase;
  }

  a {
    text-decoration: none;
    color: #eef3f6;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.base};
    &:hover {
      color: white;
    }
  }
`

const activeLinkStyle = {
  color: '#D2A756',
}

const Menu = () => {
  return (
    <Header>
      <Nav>
        <ul>
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
      </Nav>
    </Header>
  )
}

export default Menu
