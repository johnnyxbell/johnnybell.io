import React from 'react';
import styled, {keyframes} from 'styled-components';
import backgroundImage from '../assets/images/bg.jpg';
import ProfileVideo from '../assets/videos/johnny.mp4';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Social from './social';

const Bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-15px);}
  60% {transform: translateY(-7px);}

`;

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

const SocialPanel = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  @media (max-width: 414px) and (min-width: 320px) {
    position: initial;
    width: 130px;
    margin: auto;
    padding-top: 20px;
    opacity: 0.7;
    top: auto;
    right: auto;
  }
`;

const ProfileVid = styled.video`
  width: 125px;
  height: 125px;
  border-radius: 100px;
  border: 1px solid white;
  box-shadow: #ccc 0 0 5px;
  background: black;
`;

const BioText = styled.p`
  color: #ccc;
  text-align: center;
  font-size: 2.5rem;
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
  font-size: 2rem;
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
    color: #00cdbe;
    text-decoration: none;
    :hover {
      color: #00cdbe;
      text-decoration: underline;
    }
  }
`;

const ScrollDown = styled.div`
  svg {
    position: absolute;
    bottom: 10px;
    left: 50%;
    margin-left: -1rem;
    transform: translate(-50%);
    color: #fff;
    font-size: 2rem;
    opacity: 0.3;
    height: 35px !important;
    width: 35px !important;
    animation: ${Bounce} 2s infinite;
  }
`;

const Home = () => {
  return (
    <HomePanel>
      <SocialPanel>
        <Social />
      </SocialPanel>
      <Bio>
        <ProfileVid autoPlay playsInline muted loop>
          <source src={ProfileVideo} type='video/mp4' />
          Your browser does not support the video tag.
        </ProfileVid>
        <BioText>
          G’day mates, I’m Johnny{' '}
          <span role='img' aria-label='Emoji Hand Wave'>
            👋🏻
          </span>
        </BioText>
        <Paragraph>Frontend Engineer, a11y advocate, &amp; speaker.</Paragraph>
        <Paragraph>
          I ship code at{' '}
          <a href='https://weedmaps.com' aria-label='Weedmaps'>
            Weedmaps
          </a>
          .
        </Paragraph>
      </Bio>
      <ScrollDown>
        <FontAwesomeIcon icon={faAngleDown} />
      </ScrollDown>
    </HomePanel>
  );
};

export default Home;
