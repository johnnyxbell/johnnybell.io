import React from 'react';
import {createGlobalStyle} from 'styled-components';
import Home from '../components/home';
import About from '../components/about';
import Work from '../components/work';
import Footer from '../components/footer';
import * as Sentry from '@sentry/browser';
import {Helmet} from 'react-helmet';

Sentry.init({
  dsn: 'https://a9b4d602eefd4f0aa25f531cacec41dd@sentry.io/1324764',
});

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }`;

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Johnny Bell Portfolio - Frontend Engineer</title>
        <meta
          name='description'
          content="Hi, I'm Johnny Bell, a Frontend Engineer living in Orange County. I have experience in javaScript, React, Ruby, Rails, GraphQl & Apollo."
        />
      </Helmet>
      <GlobalStyle />
      <Home />
      <About />
      <Work />
      <Footer />
    </>
  );
};

export default Index;
