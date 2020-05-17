import React, { useState, useEffect } from "react";

class Lesson5html extends React.Component {

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


  if(course_name === "html" && lesson === "5"){
  return (
    <div className="lesson">
      <h1>Atrybuty HTML</h1>
      <div className="Line"></div>
      <p><span className={className} onClick={this.addTechword}>Atrybuty</span> dostarczają dodatkowych informacji o elemencie HTML.</p>
      <div className="Line"></div>
      <h2>Atrybuty w HTML</h2>
      <p>
        <ul>
          <li>
            Wszystkie elementy HTML mogą posiadać <b>atrybuty</b>
          </li>
          <li>
            Atrybuty dostarczają <b>dodatkowych informacji</b> o elemencie
          </li>
          <li>
            Atrybuty zawsze są definiowane w <b>znaczniku startowym</b>
          </li>
          <li>
            Atrybuty zazwyczaj pojawiają się w parach nazwa/wartość jak: <b>name="value"</b>
          </li>
        </ul>
      </p>
      <div className="Line"></div>
      <h2>Atrybuty href</h2>
      <p>
        Linki HTML definiowane są poprzez tag &lt;a&gt;. Adres linku jest opisany w atrybucie <b>href</b>.
      </p>
      <div className="Line"></div>
      <h2>Atrybut src</h2>
      <p>
        Obrazy w HTML definiowane są poprzez tag &lt;img&gt;.<br></br>
        Nazwa oraz lokalizacja pliku są określane w atrybucie <b>src</b>.
      </p>
      <div className="Line"></div>
      <h2>Atrybuty width oraz height</h2>
      <p>
        Obrazy w HTML posiadają również atrybuty <b>width</b> oraz <b>height</b>, które opisują szerokośc oraz wysokość obrazu.<br></br>
        Szerokość i wysokośc opisywane są domyślnie w pikselach, więc wartość <b>width="500"</b> będzie oznaczać szerokość równą 500 pikselom.
      </p>
      <div className="Line"></div>
      <h2>Atrybut alt</h2>
      <p>
        Atrybuty <b>alt</b> definiuje tekst alternatywny który ma zostać użyty w miejscu obrazu, kiedy z jakiejś przyczyny nie może on zostać wyświetlony.<br></br>
        Wartość atrybutu <b>alt</b> może być odczytana przez czytniki ekranu, dzięki czemu osoby "odsłuchujące" strony internetowej np. osoby z problemami wzrokowymi mogą "usłyszeć" ten element.
      </p>
      <div className="Line"></div>
      <h2>Atrybut style</h2>
      <p>
        Atrybuty <b>style</b> jest używany w celu ostylowania elementu, czyli opisania np. jego koloru, czcionki, wielkości itp.
      </p>
      <div className="Line"></div>
      <h2>Atrybut lang</h2>
      <p>
        Atrybut ten może być zdeklarowany w tagu &lt;html&gt;.<br></br>
        Język w którym napisana jest strona jest opisany przez ten tag.<br></br>
        Deklarowanie języka użytego na stronie jest ważne dla aplikacji ułatwień dostępu (czytniki ekranu) oraz dla wyszukiwarek internetowych.
      </p>
      <div className="Line"></div>
      <h2>Atrybut title</h2>
      <p>
        Atrybut title nadaje tytuł elementowi. <br></br>
        Wartość atrybutu zostanie wyświetlona jako wskazówka, gdy najedziemy myszką na element opisany przez niego.
      </p>
    </div>
  );}
  else{return null}}
};

export default Lesson5html;
