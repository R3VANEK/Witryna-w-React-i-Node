import React from "react";

const Lesson5css = ({lesson, course_name}) => {
  if(course_name === "css" && lesson ==="5"){
  return (
    <div className="lesson">
      <h1>Model pudełkowy CSS</h1>
      <div className="Line"></div>
      <h2>Model pudełkowy w CSS</h2>
      <p>
        Wszystkie elementy HTML mogą być uznawane za pudełka. W CSS, określenie model pudełkowy (<b>box model</b>) jest używany, gdy mówi się rozmieszczeniu i designie.<br></br>
        Model pudełkowy CSS jest w istocie pudełkiem, które obkrąża każdy element HTML. Składa się z: marginesów zewnętrznych, ramek, marginesów wewnętrznych oraz zawartości.<br></br>
        Poniższy obrazek przedstawia model pudełkowy:<br></br>
        <img src={require("./img/CSSBoxModel.png")} alt="boxmodel" />
        <p>
          Opis poszczególnych części:<br></br>
          <ul>
            <li>
              <b>Zawartość</b> - Zawartość pudełka, gdzie pojawiają się obrazki oraz tekst.
            </li>
            <li>
              <b>Margines wewnętrzny</b>- Pokrywa obszar wokół zawartości. Margines wewnętrzny jest przezroczysty.
            </li>
            <li>
              <b>Ramka</b> - Ramka, która obkrąża margines wewnętrzny i zawartość.
            </li>
            <li>
              <b>Margines zewnętrzny</b>- Pokrywa obszar poza ramką. Margines zewnętrzny jest przezroczysty.
            </li>
          </ul>
          Model pudełkowy pozwala na dodanie ramki do elementów, oraz na określanie odstępów między elementami.<br></br>
          <b>Przykład:</b>
          <br></br>
          Demonstarcja modelu pudełkowego:<br></br>
          <img src={require("./img/CSSBoxModelPrzyklad.png")} alt="boxmodelprzyklad" />
        </p>
      </p>
    </div>
  );}
  else{return null}
};

export default Lesson5css;
