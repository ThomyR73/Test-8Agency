import React, { useState } from "react";
import "../styles/globals.scss";

import Header from "../components/Header";
import Menu from "../components/Menu";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import MetaTags from "../components/Metatags";

function MyApp({ Component, pageProps }) {
  const [activeMenu, setActiveMenu] = useState(false);
  const toggleMenuHandler = () => {
    setActiveMenu(!activeMenu);
  };
  return (
    <>
      <MetaTags />
      <Header toggleMenuHandler={toggleMenuHandler} />
      <Menu toggleMenuHandler={toggleMenuHandler} activeMenu={activeMenu} />
      <div id="purpleLogo">
        <Home />
        <Projects />
      </div>
      <Contact />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
