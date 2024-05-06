import React from "react";
import ProjectBox from "./ProjectBox";
import FilmImage from "../images/Film.png";
import GymImage from "../images/doctor.jpg";
import ColourImage from "../images/colour.png";
import BackpackImage from "../images/backpack.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={GymImage} projectName="Doctori" />
        <ProjectBox projectPhoto={""} projectName="Dashboard" />
        <ProjectBox projectPhoto={""} projectName="ENCG_Incident_Manager" />
        <ProjectBox projectPhoto={""} projectName="OTHERS" />
      </div>
    </div>
  );
};

export default Projects;
