import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
    <h1 ><b>Contact</b> Me</h1>

    <div className="contactme">
      <a href="https://github.com/UNUSkh" classname="linko" target="_blank">
        <FaGithub /><p>UNUSKH</p>
      </a>
      <a href="https://www.linkedin.com/in/younes-ayoub-khoya/" target="_blank">
        <FaLinkedin /><p>Younes Ayoub Khoya</p>
      </a>

      <a href="mailTo:youneskhoya27@gmail.com" target="_blank">
        <GrMail /><p>youneskhoya27@gmail.com</p>
      </a>
    </div>
  </div>
  );
};

export default Contact;
