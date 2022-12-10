import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import SocialLinks from '../SocialLinks/SocialLinks';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SocialLinks></SocialLinks>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;