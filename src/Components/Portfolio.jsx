/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio.jpg";

const imageAltText = "Quantum and other portfolio";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Freshwater potability assessment and quality prediction",
    description:
      "This is Machine Learning model, which can predict wheter water is potable or not. Developed using Python on Jyupiter Notebook",
    url: " https://github.com/RoshaniVijayan/Quality-of-Fresh-Water-prediction/tree/main",
  },
  {
    title: "Heart Failure Prediction using Machine Learning",
    description:
      "Predicting heart disease and failure using machine learning ",
    url: "https://github.com/RoshaniVijayan/Heart-Failure-Prediction",
  },
  {
    title: "My Personal Site",
    description:
      "Created my personal website and deployed to GitHub pages. Includes my experience and abilities.",
    url: "https://roshanivijayan.github.io/",
  },
  {
    title: "Budget Tracker using Python",
    description:
      "The Budget Tracker is a simple Python program designed to help users manage and track their expenses across different categories.",
    url: "https://github.com/RoshaniVijayan/BudgetTracker",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
