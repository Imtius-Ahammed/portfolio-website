import React from "react";


import { Link, useLoaderData } from "react-router-dom";

const ProjectSS = () => {
const allProjects = useLoaderData();
console.log(allProjects)

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
          {allProjects.map(projects=> (
            <div key={projects.id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={projects.img1}
                alt=""
                className="rounded-md duration-200 w-full p-2 h-[300px] mx-auto  hover:scale-105"
              />
              <h1 className="mt-3 text-bold shadow-md shadow-green-400">{projects.title}</h1>
              <div className="flex items-center justify-center">
                
                <Link to={`/projects/${projects.id}`}><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Details
                </button></Link>
               <a href={projects.liveSite} target='_blank'> <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
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