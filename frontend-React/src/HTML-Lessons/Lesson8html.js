import React from "react";

const Lesson8html = ({lesson, course_name}) => {
  if(course_name === "html" && lesson === "8"){
  return (
    <div className="lesson">
      <h1>Kolory w HTML</h1>
      Kolory w HTML są definiowane przy pomocy predefiniowanych nazw kolorów, lub wartości RGB, HEX, HSL, RGBA czy HSLA.
      <div className="Line"></div>
      <h2>Nazwy kolorów</h2>
      <p>
        W HTML kolor może być zdefiniowany za pomocą nazwy. HTML obsługuje 140 nazw, niektórymi z nich są np. Orange, Violet, Gray, LightGray. <br></br>
        Na <a href="https://www.w3schools.com/html/html_colors.asp">tej stronie</a> można sprawdzić wszystkie nazwy kolorów w html.
      </p>
      <div className="Line"></div>
      <h2>Kolor tła</h2>
      <p>
        Możesz ustawiać kolor tła w HTML dla elementów za pomocą atrybutu stylów "background-color":<br></br>
        <p style={{ backgroundColor: "dodgerblue" }}>Niebieskie tło</p>
        <p style={{ backgroundColor: "orange" }}>Pomarańczowe tło</p>
      </p>
      <div className="Line"></div>
      <h2>Kolor tekstu</h2>
      <p>
        Możesz ustawiać kolor tekstu przy pomocy atrybutu "color":<br></br>
        <p style={{ color: "dodgerblue;" }}>Niebieski tekst</p>
        <p style={{ color: "orange;" }}>Pomarańczowy tekst</p>
      </p>
      <div className="Line"></div>
      <h2>Kolor ramek</h2>
      <p>
        Możesz także ustawiać kolor ramek wpisując nazwę, lub wartość koloru w deklaracji atrybutów ramki:
        <p style={{ border: "2px solid DodgerBlue" }}>Niebieska ramka</p>
        <p style={{ border: "2px solid Orange" }}>Pomarańczowa ramka</p>
      </p>
      <div className="Line"></div>
      <h2>Wartości kolorów</h2>
      <p>
        W HTML, kolory mogą być mogą być opisane używając wartości RGB, HEX, RGBA, oraz HSLA:<br></br>
        Następujące wartości przedstawiają ten sam kolor co nazwa koloru "Tomato" (Pomidor):
        <p style={{ color: "rgb(255,99,71)" }}>rgb(255,99,71)</p>
        <p style={{ color: "#ff6347" }}>#ff6347</p>
        <p style={{ color: "hsl(9,100%,64%)" }}>hsl(9,100%,64%)</p>
        <br></br>
        Ten sam kolor co "Tomato", ale w 50% przezroczysty:
        <p style={{ color: "rgba(255,99,71,0.5)" }}>rgba(255,99,71,0.5)</p>
        <p style={{ color: "hsla(9,100%,64%,0.5)" }}>hsla(9,100%,64%,0.5)</p>
      </p>
    </div>
  );}
  else{return null}
};

export default Lesson8html;
