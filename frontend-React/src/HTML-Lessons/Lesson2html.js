import React from "react";

const Lesson2html = ({lesson, course_name}) => {
  if(course_name === "html" && lesson === "2"){
  return (
    <div className="lesson">
      <h1>Edytory HTML</h1>
      <div className="Line"></div>
      <h2>Napisz samemu kod HTML używając notatnika</h2>
      <p>
        Strony internetowe mogą być tworzone i modyfikowane przy użyciu profesjonalnych edytorów HTML.<br></br>
        Jednakże, dla samego uczenia się HTML polecamy użycie podstawowego edytora tekstu jak Notatnik.<br></br>
        Wierzymy, że używanie takiego edytora to bardzo dobra metoda do nauki HTML.<br></br>
        Podążaj za krokami poniżej aby stworzyć swoją pierwszą stronę!<br></br>
      </p>
      <div className="Line"></div>
      <h2>Krok 1: Otwórz Notatnik</h2>
      <p>
        <b>Windows 8 lub nowszy:</b>
        <br></br>
        Otwórz <b>Menu Start</b> (symbol okienka w lewym dolnym rogu ekranu). Wpisz <b>Notatnik</b> i kliknij Enter.<br></br>
        <b>Windows 7 lub starszy:</b>
        <br></br>
        Otwórz <b>Start > Programy > Akcesoria > Notatnik</b>
      </p>
      <div className="Line"></div>
      <h2>Krok 2: Napisz kod HTML</h2>
      <p>
        Napisz samemu, bądź skopiuj trochę kodu HTML do Notatnika.<br></br>
        <img src={require("./img/Notatnik1.png")} alt="Notatnik1" />
      </p>
      <div className="Line"></div>
      <h2>Krok 3: Zapisz stronę HTML</h2>
      <p>
        Zapisz plik na swoim komputerze. Wybierz <b>Plik > Zapisz jako</b> w menu Notatnika.<br></br>
        Nazwij plik <b>"index.html"</b> i ustaw kodowanie na UTF-8 (jest to preferowane kodowanie znaków dla plików HTML)<br></br>
        <img src={require("./img/Notatnik2.png")} alt="Notanik2" />
      </p>
      <h2>Krok 4: Otwórz stronę HTML w swojej przeglądarce</h2>
      <p>
        Otwórz zapisany plik HTML w twojej ulubionej przeglądarce (kliknij dwa razy na plik, lub kliknij prawym przyciskiem i wybierz "Otwórz a pomocą").<br></br>
        Powinno to wyglądać tak:<br></br>
        <img src={require("./img/Notatnik3.png")} alt="notatnik3" />
      </p>
    </div>
  );}
  else{return null}
};

export default Lesson2html;
