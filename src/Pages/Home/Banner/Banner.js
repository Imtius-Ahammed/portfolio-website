import React from 'react';

import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
  
  const handleType = (count) => {
    
    console.log(count)
  }
  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://wallpaperset.com/w/full/9/e/6/335193.jpg")` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img  src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg animate-bounce  shadow-2xl" alt='' />
    <div>
    <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        Life is simple{' '}
        <span className='text-3xl text-red-600 font-bold ' >
          
          <Typewriter
            words={['Hi I am MD Imtius Ahammed', 'The Front End Developer']}
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
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <a href='https://drive.google.com/file/d/1KfGJNi3OAQjoqnmfYEajbKbqEiosGMap/view' target="_blank"><button className="btn btn-primary">My Resume</button></a>
    </div>
  </div>
</div>
  </div>
  );
};

export default Banner;