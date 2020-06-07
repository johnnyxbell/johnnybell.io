import React from 'react';
import styled from 'styled-components';

const ContactPanel = styled.div`
  font-family: 'Open Sans', 'Arial', Serif;
  color: #333f4c;
  font-size: 25px;
  padding: 50px 0;
  background: #f7f7f9;
  @media (max-width: 1200px) and (min-width: 320px) {
    padding: 50px;
  }
  position: relative;
  a {
    transition: opacity 0.5s ease;
    color: #333f4c;
    opacity: 0.7;
  }
  a:hover {
    opacity: 1;
  }
  strong {
    font-weight: 500;
  }
`;

const ContactInfo = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  color: #333f4c;
  font-size: 22px;
  @media (max-width: 769px) and (min-width: 3px) {
    font-size: 18px;
  }
  padding: 13px 0 25px 0;
  position: relative;
  line-height: 30px;
  &:before {
    display: block;
    height: 1px;
    width: 3vw;
    background-color: #333f4c;
    content: '';
    position: absolute;
    top: 0px;
  }
  &:after {
    display: block;
    height: 1px;
    width: 3vw;
    background-color: #333f4c;
    content: '';
    position: absolute;
    bottom: 10px;
  }
`;

const Navigation = styled.footer`
  font-family: 'Open Sans', 'Arial', Serif;
  width: 100%;
  background: #34343a;
  padding: 10px 0;
  bottom: 0;
  a,
  span {
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
  ul {
    padding: 0;
    margin: 5px 0;
    list-style: none;
    li {
      font-size: 14px;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  font-size: 12px;
  color: white;
`;

const Footer = () => {
  return (
    <>
      <ContactPanel>
        <ContactInfo>
          <p>
            For new projects, ideas, job opportunities or anything you’d like to discuss, email me
            at <a href='mailto:hi@johnnybell.io'>hi@johnnybell.io</a>
          </p>
        </ContactInfo>
      </ContactPanel>
      <Navigation>
        <Copyright>
          © Copyright 2020 - Made with{' '}
          <span role='img' aria-label='Love Heart' style={{color: 'red', padding: '0 0 0 4px'}}>
            ❤️
          </span>{' '}
          by{' '}
          <a href='https://www.twitter.com/johnnyxbell' rel='noopener noreferrer' target='_blank'>
            @johnnyxbell
          </a>
        </Copyright>
      </Navigation>
    </>
  );
};

export default Footer;
