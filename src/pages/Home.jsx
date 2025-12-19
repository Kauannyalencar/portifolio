import React from "react";
import { useLanguage } from "../context/LanguageContex";
import profilePicture from '../assets/img/kauanny_profile.png'
import curriculo from "../assets/kauanny_curriculo.pdf"
import "./home.css"
const Home = () => {
  const { t } = useLanguage();
  return (
    <div className="home" id="home">
      <div className="infor">
        <h2>{t("title")}</h2>
        <p>{t("hero_subtitle")}</p>
      <button className="cv"><a href={curriculo} download="Kauanny_cv">{t("cv")}</a></button>
      </div>

      <div className="profile_img">
        <img src={profilePicture} alt="" />
      </div>
   
    </div>
  );
};

export default Home;
