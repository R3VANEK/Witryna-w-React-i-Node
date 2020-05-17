import React from "react";

const Lesson4css = ({lesson, course_name}) => {
  if(course_name === "css" && lesson ==="4"){
  return (
    <div className="lesson">
      <h1>Jak dodać CSS</h1>
      <p>Gdy przeglądarka odczytuje arkusz stylów, sformatuje dokument HTML odnosząc się do informacji zawartej w arkuszu.</p>
      <div className="Line"></div>
      <h2>Trzy sposoby na dodanie CSS</h2>
      <p>
        Istnieją trzy sposoby na dodanie arkuszu stylów:
        <ul>
          <li>Zewnętrzny CSS</li>
          <li>Wewnętrzny CSS</li>
          <li>Liniowy CSS</li>
        </ul>
      </p>
      <div className="Line"></div>
      <h2>Zewnętrzny CSS</h2>
      <p>
        Wraz z zewnętrznym arkuszem stylów, możesz zmienić wygląd całej strony przy zmienianiu tylko jednego pliku!<br></br>
        Każda taka strona HTML musi zawierać odniesienie do zewnętrznego arkusza stylów w elemencie &lt;link&gt;, wewnątrz sekcji head.<br></br>
        Przykład:<br></br>
        Zewnętrzne style są definiowane przy pomocy elementu &lt;link&gt;, wewnątrz sekcji &lt;head&gt; strony HTML:<br></br>
        <img src={require("./img/CSSprzyklad4.png")} alt="CSSprzyklad4" />
        <br></br>
        <p>
          Zewnętrzny arkusz stylów, może być zapisany w jakimkolwiek edytorze tekstu, lecz musi być zapisany z rozszerzeniem .CSS .<br></br>
          Zewnętrzny plik .CSS nie powinien zawierać żadnych tagów HTML.<br></br>
          Tak w tym przypadku wygląda plik "mojstyl.css":
        </p>
        <img src={require("./img/CSSprzyklad5.png")} alt="CSSprzyklad5" />
        <br></br>
      </p>
      <div className="Line"></div>
      <h2>Wewnętrzny CSS</h2>
      <p>
        Wewnętrzny arkusz stylów może być użyty, gdy jedna ze stron HTML ma unikalny styl.<br></br>
        Styl wewnętrzny jest definiowany za pomocą elementy &lt;style&gt;, wewnątrz sekcji head.<br></br>
        Przykład:<br></br>
        <img src={require("./img/CSSprzyklad6.png")} alt="CSSprzyklad6" />
      </p>
      <div className="Line"></div>
      <h2>Liniowy CSS</h2>
      <p>
        Liniowy styl może zostać użyty do zastosowania unikalnego stylu dla pojedyńczego elementu.<br></br>
        Aby użyc stylów liniowych, dodaj atrybut style to elementu. Atrybut style może zawierać jakąkolwiek właściwość CSS.<br></br>
        Przykład:<br></br>
        Style liniowe definiowane są wewnątrz atrybutu "style" elementu:<br></br>
        <img src={require("./img/CSSprzyklad7.png")} alt="CSSprzyklad7" />
      </p>
    </div>
  );}
  else{return null}
};

export default Lesson4css;
