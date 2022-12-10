import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Experience from '../Experience/Experience';
import ProjectSS from '../ProjectSS/ProjectSS';
import SocialLinks from '../SocialLinks/SocialLinks';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SocialLinks></SocialLinks>
      <AboutMe></AboutMe>
      <Experience></Experience>
      <ProjectSS></ProjectSS>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;