import React from "react";

const Lesson7css = ({lesson, course_name}) => {
  if(course_name === "css" && lesson ==="7"){
  return (
    <div className="lesson">
      <h1>Overflow CSS</h1>
      <div className="Line"></div>
      <h2>Overflow w CSS</h2>
      <p>
        Własność <b>overflow</b> w CSS mówi, czy zawartość ma zostać spięta lub czy do zawartości mają zostać dodane paski przewijania.<br></br>
        Własność <b>overflow</b> przybiera następujące wartości:<br></br>
        <ul>
          <li>
            <b>visible</b> - Wartość podstawowa, nadmiar zawartości wyświetla się poza pudełkiem elementu
          </li>
          <li>
            <b>hidden</b> - Nadmiar zawartości jest spięty, a wystająca zawartość będzie niewidoczna
          </li>
          <li>
            <b>scroll</b> - Nadmiar zawartości jest spięty, oraz dodany zostaje pasek przewijania w celu zobaczenia reszty zawartości
          </li>
          <li>
            <b>auto</b> - Działa podobnie jak <b>scroll</b>, tylko dodaje paski przewijania jedynie, gdy jest to wymagane
          </li>
        </ul>
        Zapamiętaj:<br></br>
        Własność <b>overflow</b> działa jedynie na elementy blokowe z określoną wysokością.<br></br>
        Na systemach OS X (Apple Mac), paski przewijania są podstawowo ukryte i pojawiają się tylko gdy są w użyciu.
      </p>
      <div className="Line"></div>
      <h2>overflow: visible</h2>
      <p>
        Podstawowo, overflow jest ustawiony na wartość visible, co oznacza, że nie jest spięty i wyświetla się poza pudełkiem.<br></br>
        Przykład:<br></br>
        <img src={require("./img/CSSoverflow1.png")} alt="overflow1" />
      </p>
      <div className="Line"></div>
      <h2>overflow: hidden</h2>
      <p>
        Wraz z wartością hidden, nadmiar jest spięty i reszta zawartości jest niewidzoczna.<br></br>
        Przykład:<br></br>
        <img src={require("./img/CSSoverflow2.png")} alt="overflow2" />
      </p>
      <div className="Line"></div>
      <h2>overflow: scroll</h2>
      <p>
        Ustawienie wartości na <b>scroll</b> spowoduje, że nadmiar zostanie spięty oraz do pudełka zostanie dodany pasek przewijania.<br></br>
        <img src={require("./img/CSSoverflow3.png")} alt="overflow3" />
      </p>
      <div className="Line"></div>
      <h2>overflow: auto</h2>
      <p>
        Wartośc auto jest bardzo podobna do wartości scroll, lecz dodaje paski przewijania jedynie wtedy gdy ich potrzebujemy.<br></br>
        <img src={require("./img/CSSoverflow4.png")} alt="overflow4" />
      </p>
    </div>
  );}
  else{return null}
};

export default Lesson7css;
