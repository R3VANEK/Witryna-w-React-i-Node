import React from "react";

const Lesson3html = ({lesson, course_name}) => {
  if(course_name === "html" && lesson === "3"){
  return (
    <div className="lesson">
      <h1>Podstawowe przykłady HTML</h1>
      <div className="Line"></div>
      <p>
        Nie martw się jeżeli w tych przykładach znajdują się tagi, których jeszcze nie znasz.<br></br>
        Poznasz je w następnych lekcjach.
      </p>
      <div className="Line"></div>
      <h2>Dokumenty HTML</h2>
      <p>
        Wszystkie dokumenty HTML muszą rozpoczynać się deklaracją: &lt;!DOCTYPE html&gt;.<br></br>
        Sam dokument HTML rozpoczyna się znacznikiem &lt;html&gt; i kończy &lt;/html&gt;.<br></br>
        Widoczna część dokumentu HTML znajduje się pomiędzy znacznikami &lt;body&gt; i &lt;/body&gt;.<br></br>
      </p>
      <div className="Line"></div>
      <h2>Nagłówki w HTML</h2>
      <p>
        Nagłówki w HTML definiowane są za pomocą tagów &lt;h1&gt; do &lt;h6&gt;.<br></br>
        &lt;h1&gt; definiuje najważniejszy nagłówek. &lt;h6&gt; definiuje najmniej ważny nagłówek.
      </p>
      <div className="Line"></div>
      <h2>Paragrafy w HTML</h2>
      <p>Paragrafy HTML definiowane są za pomocą tagu &lt;p&gt;.</p>
      <div className="Line"></div>
      <h2>Linki w HTML</h2>
      <p>
        Linki w HTML definiowane są przy pomocy tagu &lt;a&gt;.<br></br>
        Przykład: &lt;a href="https://www.stronainternetowa.pl"&gt;To jest link&lt;/a&gt;.<br></br>
        Odnośnik linku jest opisany w atrybucie <b>href.</b>
        <br></br>
        Atrybuty używane są w celu przekazania dodatkowej informacji o elementach HTML.<br></br>O atrybutach nauczysz się więcej w dalszej części kursu.
      </p>
      <div className="Line"></div>
      <h2>Obrazy w HTML</h2>
      <p>
        Obrazy w HTML definiowane są przy pomocy tagu &lt;img&gt;.<br></br>
        Plik źródłowy <b>(src)</b>, tekst alternatywny <b>(alt)</b>, szerokość <b>width</b>, oraz wysokość <b>height</b> dostarczane są poprzez atrybuty:<br></br>
        Przykład: &lt;img src="obrazek.png" alt="tekstalternatywny" width="1920" height="1080"&gt;
      </p>
      <div className="Line"></div>
      <h2>Przyciski w HTML</h2>
      <p>Przyciski w HTML definiowane są poprzez użycie tagu &lt;button&gt;. Przykład: &lt;button&gt;To jest przycisk&lt;/button&gt;</p>
      <div className="Line"></div>
      <h2>Listy w HTML</h2>
      <p>
        Listy w HTML definiowane są przy użyciu znacznika &lt;ul&gt; (lista nieuporządkowana) lub znacznika &lt;ol&gt; (lista numerowana/uporządkowana), które następnie wypełnione są tagami &lt;li&gt;
        (przedmiotami listy).
      </p>
    </div>
  );}
  else{return null}
};

export default Lesson3html;
