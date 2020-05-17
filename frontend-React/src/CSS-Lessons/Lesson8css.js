import React from "react";

class Lesson8css extends React.Component {

  state={
    className : "normal"
  }

  componentWillMount(){
    if(this.props.user.imie != null && this.props.user.imie  != undefined && this.props.user.imie  != ""){
      this.setState({className : "techword"})
    }
  }

  addTechword = (e) =>{

    if(e.target.innerHTML == "znaczników"){
      var given_word = "znacznik"
    }
    else{
      var given_word = e.target.innerHTML.toLowerCase()
    }
    console.log(this.props.user.tech_words)
    console.log(given_word)
    const find = this.props.user.tech_words.map((techword)=>{
      if(techword == given_word){
        return techword
      }
    })
    console.log(find)

    if(find.findIndex((cos)=>{if(cos == given_word){return true}}) == -1){
      alert("Nie masz takiego słowa") /* call to API */

      fetch("http://localhost:5000/addWord",{
        method : "POST",
        headers :{
          'Content-Type' : "application/json"
        },
        body : JSON.stringify({
          techword : given_word,
          user : this.props.user
        })
      }).then((response)=>{
        return response.json
      })
      .then((data)=>{
        console.log(data)
        alert("Udało się dodac słówko :)")
      })
    }
    else{
      alert("masz już takie słówko")
    }
  }
  



  render(){

    const {course_name, lesson} = this.props
    const {className} = this.state

  if(course_name === "css" && lesson ==="8"){
  return (
    <div className="lesson">
      <h1>Własnośc position w CSS</h1>
      <div className="Line"></div>
      <h2>Własność position</h2>
      <p>
        Własnośc <span className={className} onClick={this.addTechword}>position</span> określa metodę pozycjonowania użytą dla elementu.<br></br>
        Istnieje pięć takich metod:<br></br>
        <ul>
          <li>
            <b>static</b>
          </li>
          <li>
            <b>relative</b>
          </li>
          <li>
            <b>fixed</b>
          </li>
          <li>
            <b>absoulte</b>
          </li>
          <li>
            <b>sticky</b>
          </li>
        </ul>
        Elementy są następnie pozycjonowane używając własności top, bottom, left i right.<br></br>
        Jednakże własności te nie będą działac jeżeli własność <b>position</b> nie zostanie wcześniej ustawiona.
      </p>
      <div className="Line"></div>
      <h2>position: static;</h2>
      <p>
        Elementy HTML podstawowo są pozycjonowane przy pomocy wartości static.<br></br>
        Elementy pozycjonowane za pomocą wartości static, nie są afektowane przez własności top, bottom, left oraz right.<br></br>
        Element z <b>position: static;</b> nie jest pozycjonowany w żaden specjalny sposób; jest on zawsze pozycjonowany z zwykłym kierunkiem strony.<br></br>
        Przykład:<br></br>
        <img src={require("./img/CSSposition1.png")} alt="position1" />
      </p>
      <div className="Line"></div>
      <h2>position: relative;</h2>
      <p>
        Element pozycjonowany za pomocą wartości <b>relative</b> jest pozycjonowany relatywnie do swojej normalnej pozycji.<br></br>
        Ustawiając własności top, bottom, right oraz left elementu pozycjonowanego za pomocą wartości relative sprawi, że zostanie on przesunięty od swojej podstawowej pozycji.<br></br>
        Inna zawartość nie zostanie dostosowana, żeby wypełnić puste miejsca pozostawione przez element.<br></br>
        Przykład:<br></br>
        <img src={require("./img/CSSposition2.png")} alt="position2" />
      </p>
      <div className="Line"></div>
      <h2>position: fixed;</h2>
      <p>
        Element pozycjonowany za pomocą wartości <b>fixed</b> jest pozycjonowany relatywnie do wyświetlacza, co oznacza, że zawsze pozostanie w tym samym miejscu, nawet jeśli strona jest przewinięta.
        <br></br>
        Element z wartością fixed nie zostawia pustych miejsc, gdzie normalnie by takie powstały.<br></br>
        Przykład:<br></br>
        <img src={require("./img/CSSposition3.png")} alt="position3" />
      </p>
      <div className="Line"></div>
      <h2>position: absolute;</h2>
      <p>
        Element pozycjonowany za pomocą wartości <b>absolute</b> jest pozycjonowany relatywnie do najbliżej pozycjonowanego elementu rodzica.<br></br>
        Jednakże, jeżeli element pozycjonowany przez absolute, nie posiada elementu rodzica, używa wtedy elementu body i przesuwa się wraz z przewijaniem strony.<br></br>
        Przykład:<br></br>
        <img src={require("./img/CSSposition4.png")} alt="position4" />
      </p>
      <div className="Line"></div>
      <h2>position: sticky;</h2>
      <p>
        Element pozycjonowany za pomocą wartości <b>sticky</b> jest pozycjonowany względem pozycji paska przewijania.<br></br>
        Taki element "przykleja" się do strony, w momencie gdy przewinięcie strony dalej miałoby go ukryć.<br></br>
        Przykład:<br></br>
        <img src={require("./img/CSSposition5.png")} alt="position5" />
      </p>
    </div>
  );}
  else{return null}}
};

export default Lesson8css;
