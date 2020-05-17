import React from "react";

const Lesson6css = ({lesson, course_name}) => {
  if(course_name === "css" && lesson ==="6"){
  return (
    <div className="lesson">
      <h1>Jednostki CSS</h1>
      <div className="Line"></div>
      <h2>Jednostki w CSS</h2>
      <p>
        CSS posiada wiele jednostek do opisywania długości.<br></br>
        Wiele właściwości CSS posiadają wartości "długości", takie jak <b>width</b>, <b>margin</b>, <b>padding</b>, <b>font-size</b>, itp.<br></br>
        Długość jest wyrażana liczbą, po której występuje jednostka, taka jak 10px, 2em, itp.<br></br>
        Dla niektórych właściwości CSS, dozwolone są długości ujemne.<br></br>
        Występują dwa typy długości: absolutne i relatywne.
      </p>
      <div className="Line"></div>
      <h2>Długości absolutne</h2>
      <p>
        Absolutne długości są jednostkami, które są ustalone na stałe i zawsze będą wyświetlane w ten sam sposób.<br></br>
        Długości te nie są polecane do używania na ekranach, ponieważ wielkości ekranów bardzo się różnią. Jednakże, mogą być użyte, gdy ich wynik jest znany, chociażby przy drukowaniu.<br></br>
        <img src={require("./img/CSSJednostki.png")} alt="Jednostki" />
      </p>
      <div className="Line"></div>
      <h2>Długości relatywne</h2>
      <p>
        Relatywne długości są jednostkami, które określają inną właściwość do której są relatywne. Jednosti te skalują się lepiej na różnych urządzeniach.<br></br>
        <img src={require("./img/CSSJednostki2.png")} alt="CSSJednostki2" />
      </p>
    </div>
  );}
  else{return null}
};

export default Lesson6css;
