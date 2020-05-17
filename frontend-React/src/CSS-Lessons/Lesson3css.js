import React from "react";

class Lesson3css extends React.Component {

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
    
    const find = this.props.user.tech_words.map((techword)=>{
      if(techword == given_word){
        return techword
      }
    })

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

  if(course_name === "css" && lesson ==="3"){
  return (
    <div className="lesson">
      <h1>Selektory CSS</h1>
      <div className="Line"></div>
      <h2>Selektory w CSS</h2>
      <p>
        <span className={className} onClick={this.addTechword}>Selektory</span> CSS są używane do "znalezenia" (lub wybrania) elementu HTML, który chcesz ostylować.<br></br>
        Można podzielić selektory CSS na pięć kategorii:<br></br>
        <ul>
          <li>Zwykłe selektory (wybiera elementy na bazie nazwy, id lub klasy)</li>
          <li>Selektory kombinacyjne (wybiera elementy na bazie związku między nimi)</li>
          <li>Selektory pseudo-klasowe (wybiera elementy na bazie konkretnego stanu)</li>
          <li>Selektory pseudo-elementowe (wybiera i styluje część elementu)</li>
          <li>Selektory atrubutów (wybiera elementy na bazie atrybutu lub wartości atrybutu)</li>
        </ul>
      </p>
      <div className="Line"></div>
      <h2>Selektor elementu</h2>
      <p>Selektor elementu, wybiera element HTML na bazie nazwy elementu.</p>
      <div className="Line"></div>
      <h2>Selektor id</h2>
      <p>
        Selektor id używa atrybutu <b>id</b> elementu HTML by wybrać konkretny element.<br></br>
        Id elementu jest unikalne na stronie, więc selektor id jest używany by wybrać jeden konkretny element!<br></br>
        Aby wybrać element z jakimś id, należy zapisać znak (<b>#</b>), a po nim id elementu.<br></br>
        <b>Przykład:</b>
        <br></br>
        Poniższa reguła CSS zostanie nadana elementowi HTML z id="przyklad":<br></br>
        <img src={require("./img/CSSprzyklad1.png")} alt="CSSprzyklad1" />
        <br></br>
        <p>Zapamiętaj, że id nie może rozpoczynać się liczbą!</p>
      </p>
      <div className="Line"></div>
      <h2>Selektory klasy</h2>
      <p>
        Selektory klasy wybiera elementy HTML z konkretnym atrybutem klasy.<br></br>
        Aby wybrać elementy z konkretną klasą, zapisz znak kropki (<b>.</b>), a po nim nazwę klasy<br></br>
        Przykład:<br></br>W tym przykładzie wszystkie elementy HTML z klasą "srodek" będą czerwone i wyrównane do środka:<br></br>
        <img src={require("./img/CSSprzyklad2.png")} alt="CSSprzyklad2" />
      </p>
      <div className="Line"></div>
      <h2>Selektor uniwersalny</h2>
      <p>
        Selektor uniwersalny wybiera wszystkie elementy HTML na stronie internetowej.<br></br>
        <b>Przykład:</b>
        <br></br>
        Poniższa zasada CSS nada te właściwości wszystkim elementom HTML na stronie:<br></br>
        <img src={require("./img/CSSprzyklad3.png")} alt="CSSprzyklad3" />
      </p>
    </div>
  );}
  else{return null}}
};

export default Lesson3css;
