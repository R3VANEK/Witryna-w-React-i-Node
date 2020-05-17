import React from "react";

const Lesson2css = ({lesson, course_name}) => {
  if(course_name === "css" && lesson ==="2"){
  return (
    <div className="lesson">
      <h1>Składnia CSS</h1>
      <div className="Line"></div>
      <h2>Składnia w CSS</h2>
      <p>
        Zestaw reguł CSS składa się z selektora i bloku deklaracji:<br></br>
        <img src={require("./img/CSSskladnia.png")} alt="CSSskladnia" />
        <p>
          Selektor wskazuje jaki element HTML chcemy ostylować.<br></br>
          Blok deklaracji zawiera jedno lub więcej deklaracji oddzielonymi średnikami.<br></br>
          Deklaracja CSS zawsze kończy się średnikiem, a bloki deklaracji zawsze są zamknięte w nawiasach.<br></br>
          <b>Przykład:</b>
          <br></br>W tym przykładzie wszystkie elementy &lt;p&gt; będą wyrównane do środka, i będą mieć czerwony kolor tekstu:<br></br>
          <img src={require("./img/CSSp.png")} alt="CSSp" />
        </p>
      </p>
      <div className="Line"></div>
      <h2>Komentarze w CSS</h2>
      <p>
        Komentarze są używane w celu wyjaśnienia kodu i mogą pomóc przy edycji kodu źródłowego.<br></br>
        Komentarze są ignorowane przez przeglądarkę.<br></br>
        <b>Przykład:</b>
        <br></br>
        Komentarz CSS rozpoczyna się znakami /* i kończy */. Komentarze mogą rozwijać się na kilka linijek:<br></br>
        <img src={require("./img/CSSprzyklad.png")} alt="CSSprzyklad" />
      </p>
    </div>
  );}
  else{return null}
};

export default Lesson2css;
