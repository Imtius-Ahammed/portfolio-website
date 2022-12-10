import React from 'react';
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
      <Experience></Experience>
      <ProjectSS></ProjectSS>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;