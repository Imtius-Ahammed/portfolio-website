import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProjectDetailsCard from './ProjectDetailsCard';


const ProjectDetails = () => {
  const singleProjects = useLoaderData();
  console.log(singleProjects)
  

  return (
    <div>
     {
      singleProjects.map(project=><ProjectDetailsCard key={project.id} project={project}></ProjectDetailsCard>)
     }
      
    </div>
  );
};

export default ProjectDetails;