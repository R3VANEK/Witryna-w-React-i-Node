import React from "react";
import JSON_Words from "../Data/wordsData.json";

const TechDiv = props => {
  const description = JSON_Words.words.map(element => {
    if (element.title == props.title) {
      return element.description;
    }
  });

  return (
    <div className="Tech-div">
      <h2>{props.title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default TechDiv;
