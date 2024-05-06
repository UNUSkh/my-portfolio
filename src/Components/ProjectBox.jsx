import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    DoctoriDesc:
      "This mobile app for medical clinics in Morocco streamlines appointment scheduling and remote consultations. Developed with Flutter and Firebase, it enhanced my understanding of both technologies. ",
   

    DashboardDesc:
    "The Dashboard is for managing students and teachers at the National School of Commerce and Management in Casablanca (ENCG Casablanca). This project aimed to streamline administrative processes and improve communication within the institution, enhancing my proficiency in React.js development using reacharts and apexcharts.",
    

    ENCG_Incident_ManagerDesc:
      "This mobile application, developed using Flutter, is designed for incident management within ENCG Casablanca. It is intended for use by both security personnel and school professors. The application facilitates quick incident management and reporting, thereby contributing to maintaining a safe and secure environment within the institution.",
   
    OTHERSDesc:
      "The other project are going to be published soon...",
     };

  return (
    <div className="projectBox">
      {projectPhoto==""?<div className="nopic"></div>:<img className="projectPhoto" src={projectPhoto} alt="Project display" />
 }
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        
      </div>
    </div>
  );
};
export default ProjectBox;
