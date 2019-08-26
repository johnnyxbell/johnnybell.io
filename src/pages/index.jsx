import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import backgroundImage from '../assets/images/bg.jpg';
import Profile from '../assets/images/profile.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }`;

const HomePanel = styled.div`
  position: relative;
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const Bio = styled.div`
  max-width: 800px;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  text-align: center;
`;

const ProfilePic = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 100px;
  border: 3px solid white;
  box-shadow: #ccc 0 0 7px;
`;

const BioText = styled.p`
  color: #ccc;
  text-align: center;
  font-size: 2rem;
  font-family: 'Open Sans', 'Arial', Serif;
  @media (max-width: 769px) and (min-width: 320px) {
    font-size: 25px;
  }
  font-weight: 300;
  margin: 20px;
  padding: 0;
  strong {
    color: white;
  }
`;

const Paragraph = styled.p`
  color: #ccc;
  text-align: center;
  font-size: 1.5rem;
  font-family: 'Open Sans', 'Arial', Serif;
  @media (max-width: 769px) and (min-width: 320px) {
    font-size: 1rem;
  }
  font-weight: 300;
  margin: 5px;
  padding: 0;
  strong {
    color: white;
  }
  a {
    color: #ffffff;
    text-decoration: none;
    :hover {
      color: #5d93ff;
    }
  }
`;

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <HomePanel>
        <Bio>
          <ProfilePic src={Profile} alt='Johnny Bell Profile Pic' />
          <BioText>
            Hi there, I’m Johnny{' '}
            <span role='img' aria-label='Emoji Hand Wave'>
              👋
            </span>
          </BioText>
          <Paragraph>Frontend engineer, a11y advocate, &amp; speaker.</Paragraph>
          <Paragraph>
            Currently @{' '}
            <a href='https://stackshare.io' aria-label='StackShare'>
              StackShare
            </a>
            , &amp; Founder{' '}
            <a href='https://www.dwd.dev' aria-labelledby='Devs With Disabilities'>
              dwddev
            </a>
            .
          </Paragraph>
          <Paragraph>Australian. Tattoo Collector.</Paragraph>
        </Bio>
      </HomePanel>
    </>
  );
};

export default Home;
