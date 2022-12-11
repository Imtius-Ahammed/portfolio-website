import React from 'react';
import { Link } from 'react-router-dom';

const ProjectDetailsCard = ({project}) => {
  const{title,img,img1,img2,img3,liveSite}=project
  return (
    <div>
      <h1 className='text-5xl text-green-400 font-bold m-2 text-center'>Project ScreenShots</h1>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8'>
        <img className='h-[500px] w-full' src={img1} alt="" />
        <img className='h-[500px] w-full' src={img2} alt="" />
        <img className='h-[500px] w-full' src={img3} alt="" />

      </div>
      <h1 className='text-5xl text-green-400 font-bold pt-8 text-center'>Descriptions And Technologies </h1>
      <img className='h-[500px] mx-auto mt-8 ' src={img} alt="" />
      <div className='flex justify-center gap-4 mb-16  mt-5'>
        <div>
          <Link to='/projects'><button className='btn btn-primary'>Back</button></Link>
        </div>
        <div>
          <a href={liveSite} target='_blank'><button className='btn btn-info'>LiveSite</button></a>
        </div>
      </div>
      
    </div>
  );
};

export default ProjectDetailsCard;