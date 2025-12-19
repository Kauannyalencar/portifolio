import { useLanguage } from "../context/LanguageContex";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div id="contact" className="contact">
      <h2>{t("contact_title")}</h2>

      <p className="contact_text">{t("contact_text")}</p>
      <div className="contact_links">
        <a href="mailto:kauannyalencar19@gmail.com" 
         target="_blank"
          rel="noopener noreferrer"
          className="contact_btn">
          <FaEnvelope />
          Email
        </a>

        <a
          href="https://linkedin.com/in/kauannyalencar"
          target="_blank"
          rel="noopener noreferrer"
          className="contact_btn"
        >
          <FaLinkedin />
          LinkedIn
        </a>

        <a
          href="https://github.com/kauannyalencar"
          target="_blank"
          rel="noopener noreferrer"
          className="contact_btn"
        >
          <FaGithub />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Contact;
