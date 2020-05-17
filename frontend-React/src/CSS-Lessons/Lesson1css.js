import React, { useState, useEffect } from "react";

const Lesson1css = ({lesson, course_name, user}) => {


  var [className, setClassName] = useState("normal")

  useEffect(()=>{
    if(user.imie  != null && user.imie  != undefined && user.imie != ""){
      setClassName(className = "techword")
    }
  })

  if(course_name === "css" && lesson ==="1"){
  return (
    <div className="lesson">
      <h1>Wprowadzenie do CSS</h1>
      <div className="Line"></div>
      <h2>Czym jest CSS?</h2>
      <p>
        <ul>
          <li>CSS to skrót od Cascading Style Sheets, czyli Kaskadowych Arkuszy Stylu</li>
          <li>CSS opisuje w jaki sposób elementy HTML mają być wyświetlane na ekranie</li>
          <li>CSS oszczędza wiele pracy. Może kontrolować rozmieszczenie i wygląd wielu stron internetowych na raz</li>
          <li>Zewnętrzne arkusze stylów są przechowywane w plikach CSS</li>
        </ul>
      </p>
      <div className="Line"></div>
      <h2>Po co używać CSS?</h2>
      <p><span className={className}>CSS </span>jest używany do definiowania stylu twojej strony internetowej, włączając w to jej design, rozmieszcznie i wariacje w wyświeltaniu dla różnych urządzeń.</p>
      <div className="Line"></div>
      <h2>CSS oszczędza wiele pracy!</h2>
      <p>
        Definicje stylów zazwyczaj zapisywane są w plikach .CSS .<br></br>
        Dzięki pomocy zewnętrznego pliku arkuszów stylu, możesz zmieniać wygląd całej strony internetowej przez tylko jeden plik!
      </p>
      <div className="Line"></div>
      <h2>CSS rozwiązało duży problem</h2>
      <p>
        HTML nie miał zamiaru zawierać tagów do stylowania i formatowania strony internetowej!<br></br>
        HTML został stworzony do <b>opisywania zawartości</b> strony internetowej, jak:<br></br>
        &lt;h1&gt;To jest nagłówek&lt;/h1&gt;<br></br>
        &lt;p&gt;To jest paragraf&lt;/p&gt;<br></br>
        Gdy tagi takie jak &lt;font&gt;, i atrybuty kolorów zostały dodane do HTML 3.2, zaczęły one koszmar dla deweloperów stron internetowych.<br></br>
        Tworzenie dużych stron internetowych, w któryh czcionki i informacje o kolorach musiały być dodawane do każdej strony, stało się długim i wyczerpującym procesem.<br></br>
        Aby rozwiązać ten problem, Konsorcjum Światowej Sieci (<b>W3C</b>) stworzyło CSS.<br></br>
        CSS wyrzuciło formatowanie stylu z stron HTML.
      </p>
    </div>
  );}
  else{return null}
};

export default Lesson1css;
