import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faStackOverflow from '@fortawesome/fontawesome-free-brands/faStackOverflow';

const SocialPanel = styled.div`
  display: flex;
  a svg {
    transition: all 0.5s ease;
    color: #ccc;
    padding-right: 10px;
    height: 25px;
    width: 25px !important;
    fill: #ccc;
  }
  a:hover svg {
    color: white;
    fill: white;
  }
`;

const Social = () => {
  return (
    <SocialPanel>
      <a href='https://www.linkedin.com/in/johnnyxbell/' target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href='https://www.twitter.com/johnnyxbell/' target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href='https://www.github.com/johnnyxbell/' target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </SocialPanel>
  );
};

export default Social;
