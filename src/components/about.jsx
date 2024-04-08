import React from 'react';
import styled from 'styled-components';
import AboutBg from '../assets/images/aboutusbg.jpg';

const AboutPanel = styled.div`
  font-family: 'Open Sans', 'Arial', Serif;
  position: relative;
  background-size: cover;
  width: 100vw;
  min-height: 250px;
`;

const AboutInfo = styled.div`
  min-height: 250px;
  max-width: 1200px;
  margin: 0 auto;
  color: #333f4c;
  font-size: 25px;
  padding: 50px 0;
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

const AboutInfoCurrent = styled.div`
  color: #333f4c;
  font-size: 25px;
  @media (max-width: 769px) and (min-width: 320px) {
    font-size: 18px;
  }
  padding: 50px 0;
  position: relative;
  &:before {
    display: block;
    height: 1px;
    width: 3vw;
    background-color: #333f4c;
    content: '';
    position: absolute;
    top: 20px;
  }
  &:after {
    display: block;
    height: 1px;
    width: 3vw;
    background-color: #333f4c;
    content: '';
    position: absolute;
    bottom: 20px;
  }
`;

const AboutInfoPast = styled.div`
  color: #333f4c;
  font-size: 22px;
  @media (max-width: 769px) and (min-width: 320px) {
    font-size: 18px;
  }
  padding: 13px 0 50px 0;
  position: relative;
  line-height: 30px;
  &:after {
    display: block;
    height: 1px;
    width: 3vw;
    background-color: #333f4c;
    content: '';
    position: absolute;
    bottom: 20px;
  }
`;

const Skills = styled.div`
  color: #333f4c;
  font-size: 22px;
  @media (max-width: 769px) and (min-width: 320px) {
    font-size: 18px;
  }
  padding: 13px 0 50px 0;
  position: relative;
  line-height: 30px;
  &:after {
    display: block;
    height: 1px;
    width: 3vw;
    background-color: #333f4c;
    content: '';
    position: absolute;
    bottom: 30px;
  }
`;

const SkillsUl = styled.ul`
  margin: 20px 0;
  padding: 0;
`;

const SkillsLi = styled.li`
  color: #333f4c;
  opacity: 0.7;
  display: inline-block;
  padding: 3px 10px;
  border: 1px solid #333f4c;
  margin-bottom: 10px;
  margin-right: 10px;
  font-size: 16px;
  @media (max-width: 769px) and (min-width: 320px) {
    font-size: 14px;
  }
  transition: background 0.3s ease;
  &:hover {
    background: #333f4c;
    color: white;
    cursor: default;
  }
`;

const mySkills = [
  'React.js',
  'JavaScript',
  'Ruby',
  'Rails',
  'GraphQL',
  'Apollo',
  'REST',
  'Redux',
  'MobX',
  'React Query',
  'Styled Components',
  'Jest',
  'Enzyme',
  'React Testing Lib',
  'Flow',
  'Next.js',
  'Express',
  'Kubernetes',
  'Docker',
  'GIT',
];
const listMySkills = mySkills.map((mySkills) => <SkillsLi key={mySkills}>{mySkills}</SkillsLi>);

const About = () => {
  return (
    <AboutPanel>
      <AboutInfo>
        <AboutInfoPast>
          I've been coding the internet for the past 14 years and working all over the world. Over
          that time, I’ve managed people, been a tech lead; now, I love being an individual
          contributor and calling Orange County home! <br /> In the past I've worked at startups in
          San Francisco, agencies & corporate companies in Melbourne, Australia.
          <p>
            Outside of technology, I like going to concerts, hiking, relaxing with my other half,
            and annoying my wife by getting more tattoos.
          </p>
        </AboutInfoPast>
        <Skills>
          My skills include:
          <SkillsUl>{listMySkills}</SkillsUl>
        </Skills>
      </AboutInfo>
    </AboutPanel>
  );
};

export default About;
