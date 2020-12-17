import React, { useState, useCallback, useEffect } from "react";
import styles from "../styles/projects.module.scss";

const projectsData = [
  {
    title: "Project Name",
    subtitle: "Vivamus imperdiet hendrerit leo quis fringilla",
    images: ["/project1/left.png", "/project1/mid.png", "/project1/right.png"],
    mobileImage: 0,
  },
  {
    title: "Project Name",
    subtitle: "Vivamus imperdiet hendrerit leo quis fringilla",
    images: ["/project2/left.jpg", "/project2/mid.jpg", "/project2/right.jpg"],
    mobileImage: 1,
  },
  {
    title: "Project Name",
    subtitle: "Vivamus imperdiet hendrerit leo quis fringilla",
    images: ["/project3/left.jpg", "/project3/mid.jpg", "/project3/right.jpg"],
    mobileImage: 1,
  },
  {
    title: "Project Name",
    subtitle: "Vivamus imperdiet hendrerit leo quis fringilla",
    images: [
      "/project1/right.png",
      "/project3/left.jpg",
      "/project1/mid.png",
      "/project1/left.png",
    ],
    mobileImage: 2,
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = useCallback(
    (index) => {
      setCurrentIndex(index);
      return () => clearInterval(interval);
    },
    [currentIndex]
  );

  const prev = useCallback(
    () => goTo(currentIndex === 0 ? projectsData.length - 1 : currentIndex - 1),
    [currentIndex]
  );

  const next = useCallback(
    () => goTo(currentIndex >= projectsData.length - 1 ? 0 : currentIndex + 1),
    [currentIndex]
  );

  useEffect(() => {
    const interval = setTimeout(() => {
      next();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <main className={styles.projects} id="projects">
      <span>Projects</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={prev}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={next}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>

      {projectsData.map((project, index) => (
        <div
          className={`${styles.projectContainer} ${
            currentIndex === index ? styles.animate : ""
          }`}
          key={index}
        >
          {project.images.map((image, index) => (
            <div
              style={{
                backgroundImage: `url(${image})`,
                width: `${100 / project.images.length}vw`,
              }}
              className={`${styles.image} ${
                project.mobileImage === index ? styles.mobileImage : " "
              }`}
              key={index}
            />
          ))}
          <div className={styles.card}>
            <div>
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Projects;
