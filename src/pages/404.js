import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import PageTitle from '../components/PageTitle';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Image from '../images/404.svg';

const TextHeader = styled.div`
  margin-top: 62px;
  color: #3eb8ea;
  font-size: 66px;
  font-family: HelveticaNeueW01-45Ligh;
  letter-spacing: 1px;
  line-height: 90px;
`;

const Description = styled.div`
  margin-top: 19px;
  font-family: HelveticaNeueW01-45Ligh;
  letter-spacing: 1px;
  font-size: 20px;
  line-height: 39px;
  color: #184a56;
`;

const Wrapper = styled.div`
  margin: 84px auto 0;
`;

const Button = styled.button`
  margin-top: 37px;
  outline: 0;
  height: 56px;
  letter-spacing: 0.8px;
  line-height: 50px;
  font-size: 22px;
  text-align: center;
  border-radius: 28px;
  font-family: HelveticaNeueW01-45Ligh;
  cursor: pointer;
  border: 2px solid #3eb8ea;
  background-color: #fff;
  color: #3eb8ea;
  box-sizing: border-box;
  transition-property: color, background-color;
  transition-duration: 0.2s;
  padding: 0 20px;
  &:hover {
    background-color: #3eb8ea;
    color: #fff;
  }
`;

const NotFoundPage = () => (
  <div>
    <Helmet>
      <title>404 - Page Not Found</title>
      <meta name="description" content="Page not found" />
    </Helmet>

    <Wrapper>
      <TextHeader>PAGE NOT FOUND</TextHeader>
      <Description>
        We looked everywhere for this page. Are you sure the website URL is correct? Get in touch with the site owner.
      </Description>
      <Link to="/">
        <Button>Go Back Home</Button>
      </Link>
    </Wrapper>
  </div>
);

export default NotFoundPage;
