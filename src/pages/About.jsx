import React from "react";
import { useLanguage } from "../context/LanguageContex";
import profilePicture from '../assets/img/kauanny_jpg.jpg'
import './about.css'

const About = () => {
  const { t } = useLanguage();

  return (  
    <div className="about" id="about">
      <div className="about_img" data-aos="fade-up">
        <img src={profilePicture} alt="" />
        </div>
      <div className="about_info">
        <h3>{t("title")}</h3>
        <p>{t("about_bio")}</p>
      </div>
    </div>
  );
};

export default About;
