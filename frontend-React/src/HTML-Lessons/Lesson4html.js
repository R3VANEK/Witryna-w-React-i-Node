import React from "react";

const Lesson4html = ({lesson, course_name}) => {

  if(course_name === "html" && lesson === "4"){
  return (
    <div className="lesson">
      <h1>Elementy HTML</h1>
      <div className="Line"></div>
      <h2>Elementy w HTML</h2>
      <p>
        Element HTML składa się z tagu startowego i tagu kończącego, z zawartością znajdującą się pomiędzy nimi. <br></br>
        Element HTML jest wszystkim od tagu startowego do kończącego.<br></br>
        Elementy HTML bez zawartości nazywane są pustymi elementami. Puste elementy nie posiadają tagu kończącego, jak element &lt;br&gt; (który wskazuje złamanie linii).
      </p>
      <div className="Line"></div>
      <h2>Zagnieżdzone elementy HTML</h2>
      <p>
        Elementy HTML mogą być zagnieżdzone (elementy posiadają elementy).<br></br>
        Wszystkie dokumenty HTML składają się z zagnieżdzonych elementów HTML.<br></br>
        Przykładem takich elementów są &lt;html&gt; oraz &lt;body&gt;.
      </p>
      <div className="Line"></div>
      <h2>HTML nie jest zależny od wielkości liter</h2>
      <p>
        Tagi HTML nie są zależne od wielkości ich liter: &lt;P&gt; oznacza to samo co &lt;p&gt;<br></br>
        Jednakże poleca się stosować małe litery do opisywania tagów.
      </p>
    </div>
  );}
  else{return null}
};

export default Lesson4html;
