import React from "react";

const Lesson7html = ({lesson, course_name}) => {
  if(course_name === "html" && lesson === "7"){
  return (
    <div className="lesson">
      <h1>Komentarze w HTML</h1>
      <p>Tagi komentarzowe używane są do dodawania komentarzy w kodzie źródłowym pliku HTML.</p>
      <div className="Line"></div>
      <h2>Tagi komentarzy HTML</h2>
      <p>Możesz dodać komentarze do swojego źródłą HTML używając tego:</p>
      <p>
        <img src={require("./img/komentarze1.png")} alt="komentarze1" />
      </p>
      <p>
        Zauważ, że w tagu startowym znajduje się wykrzknik (!), lecz nie dodaje się go w tagu kończącym.<br></br>
        Komentarze nie są wyświetlane przez przeglądarke, lecz mogą ci pomóc w dokumentacji twojego kodu źródłowego.<br></br>
        Za ich pomocą możesz umieszczać notyfikacje i przypomnienia w twoim kodzie:
      </p>
      <p>
        {" "}
        <img src={require("./img/komentarze.png")} alt="komentarze" />
      </p>

      <p> Komentarze świetnie nadają się do debugowania kodu w HTML, ponieważ możesz "wykomentować" linijki kodu jedna po jednej w celu znalezienia błędu:</p>
      <p>
        {" "}
        <img src={require("./img/komentarze2.png")} alt="komentarze2" />
      </p>
    </div>
  );}
  else{return null}
};

export default Lesson7html;
