import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="AboutPage">
      <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>

          <p><h2>
            <b>Hello</b> there!</h2><br />

            I'm <b>Younes Ayoub</b> Khoya,<br />
            a <b>Fullstack Developper</b> actively seeking apprenticeship opportunities. With a passion for technology and a solid foundation in <b>programming,</b> I'm eager to gain hands-on experience in the <b>software engineering</b> field.
            <br /><br />
            I'm excited about the prospect of contributing to real-world projects and learning from industry <b>professionals</b>. Take a look at my portfolio to learn more about my skills and projects. If you have any <b>apprenticeship opportunities</b> available or would like to connect, I'd love to hear from you!

            Thank you for stopping by!</p>
          <a  href="src/images/CV.pdf"  className="resume-btn">
            <button>
              Download Resume <FaFileDownload></FaFileDownload>
            </button>
          </a>
        </div>

        <div></div>
      </div>

      <h1 className="SkillsHeading">My <b>Skillset</b></h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Dart" />
        <Skills skill="Flutter" />
        <Skills skill="python" />
        <Skills skill="NodeJs" />
        <Skills skill="React" />
        <Skills skill="ExpressJs" />
        <Skills skill="MongoDb" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Php" />
        <Skills skill="Java" />
        <Skills skill="others" />
      </div>
    </>
  );
};

export default About;
