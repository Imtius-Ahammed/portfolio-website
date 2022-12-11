import React from "react";
import topNews from "../../../assets/topNews.png";
import installNode from "../../../assets/portfolio/installNode.jpg";
import navbar from "../../../assets/portfolio/navbar.jpg";
import reactParallax from "../../../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../../../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../../../assets/portfolio/reactWeather.jpg";
import topSprintes from "../../../assets/topSprinters.png";
import quizMaster from "../../../assets/quizMaster.png";
import proLearningBD from "../../../assets/proLearningBD.png";
import pictorialBD from "../../../assets/pictorialBD.png";
import topPlayer from "../../../assets/topPlayer.png";

const ProjectSS = () => {
  const portfolios = [
    {
      id: 1,
      src: topNews,
      title: 'TopNews',
      liveSite: 'https://dreamy-bombolone-7c0905.netlify.app/index.html'
      
    },
    {
      id: 2,
      src: topSprintes ,
      title:'TOP SPRINTERS',
      liveSite: 'https://gorgeous-cuchufli-5c76dc.netlify.app/'
    },
    {
      id: 3,
      src: quizMaster,
      title: 'QuizMaster',
      liveSite: 'https://velvety-rugelach-601f7b.netlify.app/'
    },
    {
      id: 4,
      src: proLearningBD,
      title: 'ProLearningBD',
      liveSite: 'https://pro-learning-bd.web.app/'
    },
    {
      id: 5,
      src: pictorialBD,
      title: 'PictorialBD',
      liveSite: 'https://pictorialbd-photography.web.app/'
    },
    {
      id: 6,
      src: topPlayer,
      title: 'TopPlayers',
      liveSite: 'https://sweet-gumdrop-457638.netlify.app/'
    },
  ];

  return (
    <div  data-aos="fade-down" data-aos-duration="2000" 
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full  text-white md:h-screen pt-16 pb-16"
    >
      <div className="max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,title,liveSite }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200  hover:scale-105"
              />
              <h1 className="mt-3 text-bold shadow-md shadow-green-400">{title}</h1>
              <div className="flex items-center justify-center">
                
                <a href=""><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  CodeLink
                </button></a>
               <a href={liveSite} target='_blank'> <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                 LiveSite
                </button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSS;