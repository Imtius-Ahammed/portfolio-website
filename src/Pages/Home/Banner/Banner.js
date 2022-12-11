import React from 'react';
import mybg from '../../../assets/my-bg.png'
import { motion } from "framer-motion";

import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
  
  const handleType = (count) => {
    
    console.log(count)
  }
  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }
  return (
    <div className="hero min-h-screen " style={{ backgroundImage: `url("https://wallpaperset.com/w/full/9/e/6/335193.jpg")` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    
  <div   className="hero-content flex-col lg:flex-row-reverse ">
  <motion.h1
              
                whileHover={{ scale: 1.2 }}
            >
    <img  src={mybg} className="mt-5 rounded-lg lg:w-full w-10/12 mx-auto  shadow-2xl" alt='' />
    </motion.h1>
    <div>
    <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        <h1 className=' lg:text-3xl font-bold text-orange-300 mb-4'>Welcome to My Portfolio</h1>{' '}
        <span className='lg:text-5xl text-xl text-green-400 font-bold ' >
          
          <Typewriter
            words={['Hi I am MD Imtius Ahammed', 'Jr. Front End Web Developer']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
      <p className="py-6  lg:text-md text-yellow-200">Junior Front End Web Developer Enthusiastic focused and motivated,
seeking an opportunity to contribute in institutions by implementing
concepts, knowledge, and methodologies learn thereby adding value for
the organization.. Excellent communication skills- both oral and written.
Flexible and adaptable to demands of changing work environments.</p>
      <a href='https://drive.google.com/file/d/1KfGJNi3OAQjoqnmfYEajbKbqEiosGMap/view' target="_blank"><button className="btn btn-primary">My Resume</button></a>
      <a href="Final-Resume.pdf" download="Final-Resume.pdf"><button  className='btn ml-3 btn-info'>Download</button></a>
    </div>
  </div>

  </div>
  );
};

export default Banner;