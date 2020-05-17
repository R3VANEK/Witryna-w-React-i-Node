import React from "react";

const Lesson6html = ({lesson, course_name}) => {
  if(course_name === "html" && lesson === "6"){
  return (
    <div className="lesson">
      <h1>Formatowanie tekstu w HTML</h1>
      <div className="Line"></div>
      <h2>Formatowanie elementów HTML</h2>
      <p>
        HTML używa specjalnych elementów dla definiowania tekstu, który ma specjalne znaczenie.<br></br>
        HTML posiada elementy takie jak &lt;b&gt; oraz &lt;i&gt;, które dają nam tekst <b>pogrubiony</b> lub <i>pochylony</i>.<br></br>
        Formatowanie elementów zostało zaprojektowane do wyświetlania specjalnych typów tekstu.
      </p>
      <div className="Line"></div>
      <h2>Elementy &lt;b&gt; oraz &lt;strong&gt;</h2>
      <p>
        Element &lt;b&gt; definiuje tekst <b>pogrubiony</b>, bez większego znaczenia.<br></br>
        Element &lt;strong&gt; definiuje <strong>silny</strong> tekst, z "silnym" znaczeniem.
      </p>
      <div className="Line"></div>
      <h2>Elementy &lt;i&gt; oraz &lt;em&gt;</h2>
      <p>
        Element &lt;i&gt; definiuje tekst <i>pochyły</i>, bez większsego znaczenia Element &lt;em&gt; definiuje tekst <i>pochyły</i>, z większym naciskiem na jego znaczenie.
      </p>
      <div className="Line"></div>
      <h2>Element &lt;small&gt;</h2>
      <p>
        Element &lt;small&gt; definiuje mniejszy tekst. Przykład: <small>mniejszy tekst</small>
      </p>
      <div className="Line"></div>
      <h2>Element &lt;mark&gt;</h2>
      <p>
        Element &lt;mark&gt; definiuje podkreślony/podświetlony tekst. Przykład: <mark>tekst</mark>
      </p>
      <div className="Line"></div>
      <h2>Element &lt;del&gt;</h2>
      <p>
        Element &lt;del&gt; definiuje usunięty/przekreślony tekst. Przykład: <del>tekst</del>
      </p>
      <div className="Line"></div>
      <h2>Element &lt;ins&gt;</h2>
      <p>
        Element &lt;ins&gt; definiuje włożony/dodany tekst. Przykład: <ins>tekst</ins>
      </p>
      <div className="Line"></div>
      <h2>Element &lt;sub&gt;</h2>
      <p>
        Element &lt;sub&gt; definiuje tekst z indeksem dolnym Przykład: <sub>tekst</sub>
      </p>
      <div className="Line"></div>
      <h2>Element &lt;sup&gt;</h2>
      <p>
        Element &lt;sup&gt; definiuje tekst z indeksem górnym. Przykład <sup>tekst</sup>
      </p>
    </div>
  );}
  else{return null}
};

export default Lesson6html;
