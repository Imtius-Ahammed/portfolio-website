import React from 'react';
import JotformEmbed from 'react-jotform-embed';

const ContactUs = () => {
  return (
    <div data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1000">
      
      <JotformEmbed  src="https://form.jotform.com/223430265632449" />
    </div>
  );
};

export default ContactUs;