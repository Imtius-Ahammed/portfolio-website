import React from 'react';
import me from '../../../assets/me.png'

const AboutMe = () => {
  return (
    <div className='bg-gray-800' data-aos="fade-up" data-aos-duration="2000" >
        <section className="bg-gray-800  body-font ">
  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
     
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="lg:w-full w-10/12 h-20 rounded-full inline-flex items-center justify-center ">
            <img  className='rounded-full lg:w-full w-9/12' src={me} alt=''></img>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium text-2xl title-font mt-4 text-info">Md: Imtius Ahammed</h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p className="text-base"> Dedicated and efficient full stack developer with 1+ years experience in application layers, presentation layers, and databases.I am very much familiar with HTML5,Bootstrap,Tailwind,JavaScript,React,  Seeking to further improve React and Node.js skills as the future full stack developer at Atmospheric Solutions.</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
        <h3   className="text-2xl text-info"> Web Development</h3>
          <p className="leading-relaxed text-lg mb-4">  Web development is the building and maintenance of websites;
                  it’s the work that happens behind the scenes to make a website
                  look great, work fast and perform well with a seamless user
                  experience. I do this by using a
                  variety of coding languages. The languages i use depends on
                  the types of tasks i  preforming and the platforms on
                  which i am working. Web development skills are in high
                  demand worldwide  making development a
                  great career option. I want to explore more about this field and i like to explore new technologies.
          <img
                alt="content" 
                className="lg:w-full w-10/12 mx-auto mt-4 rounded-lg overflow-hidden "
                src="https://img.freepik.com/free-vector/code-testing-cartoon-banner-functional-test-methodology-programming-search-errors-bugs-website-platform-development-dashboard-usability-optimization-computer-pc-vector-illustration_107791-3766.jpg?w=1380&t=st=1666716956~exp=1666717556~hmac=db59c48848fa6c0b754a4e8a201a636ebe096f6c41e9493cf60cf37063170bb0"
              /></p>
         
        </div>
      </div>
    </div>
  </div>
</section>
      {/* <section className="text-white body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-full mx-auto">
           
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div data-aos="fade-up-right" data-aos-duration="2000" className="inline-flex items-center justify-center  ">
                  <img className="rounded-full" src={me} alt="" />
                </div>
                <div data-aos="fade-down-right" data-aos-duration="2000"  className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium text-2xl title-font mt-4 text-info">
                   Md Imtius Ahammed
                  </h2>
                  <div className="w-12 h-1 bg-info rounded mt-2 mb-4"></div>
                  <p className="text-base">
                  Dedicated and efficient full stack developer with 6+ years experience in application layers, presentation layers, and databases. Certified in both F/E and B/E technologies. Spearheaded successful transition from LAMP stack to MEAN which cut latency by 40% and increased effectiveness of database administrators by 20%. Seeking to further improve HTML5 and CSS3 skills as the future full stack developer at Atmospheric Solutions.
                  </p>
                </div>
                
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <h3 data-aos="fade-down-left" data-aos-duration="2000"  className="text-2xl text-info"> Web Development</h3>
                <p data-aos="fade-down-left" data-aos-duration="2000" className="leading-relaxed text-lg mb-4 ">
                  
                  Web development is the building and maintenance of websites;
                  it’s the work that happens behind the scenes to make a website
                  look great, work fast and perform well with a seamless user
                  experience. Web developers, or ‘devs’, do this by using a
                  variety of coding languages. The languages they use depends on
                  the types of tasks they are preforming and the platforms on
                  which they are working. Web development skills are in high
                  demand worldwide and well paid too – making development a
                  great career option. It is one of the easiest accessible
                  higher paid fields as you do not need a traditional university
                  degree to become qualified. The field of web development is
                  generally broken down into front-end (the user-facing side)
                  and back-end (the server side). Let’s delve into the details.
                  
              <img
                alt="content" data-aos="fade-up-left" data-aos-duration="2000"
                className=" w-100 mt-4 rounded-lg overflow-hidden "
                src="https://img.freepik.com/free-vector/code-testing-cartoon-banner-functional-test-methodology-programming-search-errors-bugs-website-platform-development-dashboard-usability-optimization-computer-pc-vector-illustration_107791-3766.jpg?w=1380&t=st=1666716956~exp=1666717556~hmac=db59c48848fa6c0b754a4e8a201a636ebe096f6c41e9493cf60cf37063170bb0"
              />
           
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutMe;