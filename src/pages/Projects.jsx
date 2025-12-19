import { useLanguage } from "../context/LanguageContex";
import todoPicture from "../assets/img/todo_project.png";
import pokeApiPicture from "../assets/img/pokeapi_project.png";
import multiStepFormPicture from "../assets/img/multiform_project.png";
import weatherAppPicture from "../assets/img/weatherapp_project.png";

import "./projects.css";
const Projects = () => {
  const { t } = useLanguage();

  return (
    <div id="projects" className="projects">
      <h2>{t("projects")}</h2>
      <div className="projects_container">
        <div className="project">
          <a href="https://kauannyalencar.github.io/pokedex-app/" target="_blank" rel="noopener noreferrer"><img src={pokeApiPicture} alt="Pokédex UI" /></a>
          <div className="project_info">
            <h3>Pokédex</h3>
            <p className="project_stack"> React CSS API</p>
            <div className="project_links">
              <span>
                <a href="https://kauannyalencar.github.io/pokedex-app/" target="_blank" rel="noopener noreferrer">
                  {t("project_link")}
                </a>
              </span>
              <span>
                <a href="https://github.com/Kauannyalencar/pokedex-app" target="_blank" rel="noopener noreferrer">
                  {t("project_repo")}
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="project">
          <a href="https://kauannyalencar.github.io/todo/" target="_blank" rel="noopener noreferrer" ><img src={todoPicture} alt="Todo List UI" /></a>
          <div className="project_info">
            <h3>Todolist</h3>
            <p className="project_stack"> HTML CSS JS </p>
            <div className="project_links">
              <span>
                <a href="https://kauannyalencar.github.io/todo/" target="_blank" rel="noopener noreferrer">
                  {t("project_link")}
                </a>
              </span>
              <span>
                <a href="https://github.com/Kauannyalencar/todo" target="_blank" rel="noopener noreferrer">
                  {t("project_repo")}
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="project">
          <a href="https://kauannyalencar.github.io/weather-app/" target="_blank" rel="noopener noreferrer"><img src={weatherAppPicture} alt="Weather App UI" /></a>
          <div className="project_info">
            <h3>Weather App</h3>
            <p className="project_stack"> JS SASS API</p>
            <div className="project_links">
              <span>
                <a href="https://kauannyalencar.github.io/weather-app/" target="_blank" rel="noopener noreferrer">
                  {t("project_link")}
                </a>
              </span>
              <span>
                <a href="https://github.com/Kauannyalencar/weather-app" target="_blank" rel="noopener noreferrer">{t("project_repo")}</a>
              </span>
            </div>
          </div>
        </div>
        <div className="project">
          <a
            href="https://multi-step-form-three-mocha.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={multiStepFormPicture} alt="Multi-Step Form UI" />
          </a>
          <div className="project_info">
            <h3>Multi-Step Form</h3>
            <p className="project_stack">HTML SASS JS </p>
            <div className="project_links">
              <span>
                <a
                  href="https://multi-step-form-three-mocha.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("project_link")}
                </a>
              </span>
              <span>
                <a href="https://github.com/Kauannyalencar/multi-step-form" rel="noopener noreferrer">
                  {t("project_repo")}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
