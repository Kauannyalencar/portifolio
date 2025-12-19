import React from "react";
import { useLanguage } from "../context/LanguageContex";
import { Link } from "react-router-dom";
import "./header.css"

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const {t} = useLanguage()

  return (
    <div className="header" >
      <ul className="nav_bar">

        <li><a href="#home">{t("Home")}</a></li>
        <li><a href="#about">{t("about")}</a></li>
         <li><a href="#skills">{t("Skills")}</a></li>
        <li><a href="#projects">{t("projects")}</a></li>
        <li><a href="#contact">{t("contact")}</a></li>
      </ul>
      <div className="language">
        <button className="lang_btn" onClick={() => setLanguage("pt")}>PT</button>
        <button className="lang_btn" onClick={() => setLanguage("en")}>EN</button>


      </div>
    </div>
  );
};

export default Header;
