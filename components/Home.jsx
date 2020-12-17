import React, { useState, useEffect, useCallback } from "react";
import styles from "../styles/home.module.scss";

const texts = [
  <h1 className={styles.headline1}>
    <span className={`${styles.strong}`}>dedicated to the future</span>
    <br />
    <span className={styles.light}>web template</span>
  </h1>,
  <h1 className={styles.headline2}>
    <span>Sed nec semper leo</span>
    <br />
    DUIS A MASSA
    <br />
    SODALES MOLLIS
    <br />
    ELIT NON, GRAVIDA
    <br />
    LIBERO
  </h1>,
  <h1 className={styles.headline3}>
    <span>DUIS A MASSA</span>
    <br />
    <span>SODALES MOLLIS</span>
    <br />
    <span>ELIT NON, GRAVIDA</span>
    <br />
    <span>LIBERO</span>
  </h1>,
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = useCallback(
    (index) => {
      setCurrentIndex(index);
      return () => clearInterval(interval);
    },
    [currentIndex]
  );

  const next = useCallback(
    () => goTo(currentIndex >= texts.length - 1 ? 0 : currentIndex + 1),
    [currentIndex]
  );

  useEffect(() => {
    const interval = setTimeout(() => {
      next();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className={styles.home} id="home">
      {texts.map((item, index) => (
        <div
          key={index}
          className={`${styles.headline} ${
            currentIndex === index ? styles.animate : ""
          }`}
        >
          {item}
        </div>
      ))}
      <div className={styles.points}>
        <div>
          {texts.map((_, index) => (
            <span
              key={index}
              onClick={goTo.bind(this, index)}
              className={currentIndex === index ? styles.active : ""}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
