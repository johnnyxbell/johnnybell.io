import React from 'react';
import styled from 'styled-components';
import Nike from '../assets/images/nikestore.jpg';
import Evvntly from '../assets/images/evvntly.jpeg';
import StackShare from '../assets/images/stackshare.jpeg';

const PortfolioPanel = styled.div`
  font-family: 'Open Sans', 'Arial', Serif;
  min-height: 250px;
  background: #2a2a2a;
  font-size: 25px;
  padding: 50px 0;
  position: relative;
`;

const PortfolioItems = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-left: 1%;
  margin-right: 1%;
`;

const Tools = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  z-index: 1;
  img {
    width: 30px !important;
    height: 30px;
    margin-top: 1px;
    padding: 0 5px;
  }
`;

const Description = styled.div`
  bottom: 3%;
  left: 3%;
  z-index: 5;
  color: #6b6b6b;
  background: #f7f7f9;
  padding: 5px 15px;
  margin-top: -7px;
  a {
    transition: all 0.5s ease;
    color: #575757;
    &:hover {
      color: #969696;
    }
  }
  h3 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
  }
`;

const PortfolioItem = styled.div`
  flex-basis: 31.3333333333%;
  margin: 1%;
  position: relative;
  @media (max-width: 1024px) and (min-width: 415px) {
    flex-basis: 48%;
  }

  @media (max-width: 414px) and (min-width: 320px) {
    flex-basis: 98%;
  }

  svg {
    width: 30px !important;
    height: 30px !important;
  }

  img {
    width: 100%;
    -webkit-filter: grayscale(0);
    opacity: 1;
    &:hover {
      transition: all 0.25s ease-in-out;
      filter: gray;
      -webkit-filter: grayscale(100%);
      opacity: 1;
    }
  }
`;

const Work = () => {
  return (
    <PortfolioPanel>
      <PortfolioItems>
        <PortfolioItem>
          <a href='https://www.evvntly.com/' target='_blank' rel='noopener noreferrer'>
            <img src={Evvntly} alt='evvntly.com' />
          </a>
          <Description>
            <a href='https://www.evvntly.com/' target='_blank' rel='noopener noreferrer'>
              <h3>Evvntly</h3>
            </a>
            <p>
              A iOS, Android and web app that allows you to search for events near you. Built with React and
              React Native.
            </p>
          </Description>
        </PortfolioItem>
        <PortfolioItem>
          <a href='http://stackshare.io' target='_blank' rel='noopener noreferrer'>
            <img src={StackShare} alt='StackShare' />{' '}
          </a>
          <Description>
            <a href='http://stackshare.io' target='_blank' rel='noopener noreferrer'>
              <h3>StackShare</h3>
            </a>
            <p>
              A software discovery platform that lets you see all the best software tools and who's
              using them. Built with React, Apollo, GraphQL & Rails.
            </p>
          </Description>
        </PortfolioItem>
        <PortfolioItem>
          <a href='http://nikestore.com.au' target='_blank' rel='noopener noreferrer'>
            <img src={Nike} alt='Nike Store Australia' />{' '}
          </a>
          <Description>
            <a href='http://nikestore.com.au' target='_blank' rel='noopener noreferrer'>
              <h3>Nike Store Australia</h3>
            </a>
            <p>
              An e-commerce site for Nike Australia built in Magento
              <em>(The magento build of this site is no longer live)</em>.
            </p>
          </Description>
        </PortfolioItem>
      </PortfolioItems>
    </PortfolioPanel>
  );
};

export default Work;
