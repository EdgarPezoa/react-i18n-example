import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation("main");

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="langButtonContainer">
          <button onClick={() => changeLanguage('es')}>ES</button>
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('fr')}>FR</button>
        </div>
        <p>
          {t("welcome.greet")}
        </p>
      </header>
    </div>
  );
}

export default App;
