import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import ContactUs from '../ContactUs/ContactUs';
import Experience from '../Experience/Experience';
import ProjectSS from '../ProjectSS/ProjectSS';
import SocialLinks from '../SocialLinks/SocialLinks';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <SocialLinks></SocialLinks>
      <Experience></Experience>
      <ProjectSS></ProjectSS>
      <Blogs></Blogs>
      <ContactUs></ContactUs>
      
     
    </div>
  );
};

export default Home;