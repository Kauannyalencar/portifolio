import { createContext, useContext, useState } from "react";
import pt from "../i18n/pt.json";
import en from "../i18n/en.json";

const languages = { pt, en };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("pt");

  const t = (key) => {
    return languages[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
