import React from "react";
import "../css/mainPage.css";
import ProjectCard from "./ProjectCard";
import card from "../store/card";

const Cards = () => {
  return (
    <>
      <div className="card card-1">
        <ProjectCard card={card[0]} />
      </div>
      <div className="card card-2">
        <ProjectCard card={card[1]} />
      </div>
      <div className="card card-3">
        <ProjectCard card={card[2]} />
      </div>
      <div className="card card-4">
        <ProjectCard card={card[3]} />
      </div>
    </>
  );
};

export default Cards;
