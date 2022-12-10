import React from 'react';

const Banner = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://wallpaperset.com/w/full/9/e/6/335193.jpg")` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img  src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg animate-bounce  shadow-2xl" alt='' />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">My Resume</button>
    </div>
  </div>
</div>
  </div>
  );
};

export default Banner;