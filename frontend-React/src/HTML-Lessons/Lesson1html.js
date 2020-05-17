import React from "react";



class Lesson1html extends React.Component{

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
    console.log(find)
    find.findIndex((cos)=>{
      if(cos == given_word){
        return true
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

  const {course_name, lesson, user} = this.props
  const {className} = this.state

  if(course_name === "html" && lesson === "1"){
  return (
    <div className="lesson">
      <h1>Wprowadzenie do HTML</h1>
      <div className="Line"></div>
      <h2>Czym jest HTML?</h2>
      <p>
        <span className={className} onClick={this.addTechword}>HTML</span>jest standardowym językiem <span className={className} onClick={this.addTechword}>znaczników</span> przeznaczonym do tworzenia stron internetowych.
        <ul>
          <li>HTML to skrót od Hyper Text Markup Language, czyli Hipertekstowego Języka Znaczników</li>
          <li>HTML opisuje strukturę strony internetowej</li>
          <li>HTML składa się z wielu elementów</li>
          <li>Elementy HTML mówią przeglądarce jak powinna wyświetlać zawartość</li>
          <li>Elementy HTML reprezentowane są przez tagi</li>
          <li>Tagi HTML opisują zawartość jak "paragraf", "tabela" itd.</li>
          <li>Przeglądarki nie wyświetlają tagów HTML, lecz używają ich do wyświetlania zawartości strony</li>
        </ul>
      </p>
      <div className="Line"></div>
      <h2>Podstawowy dokument HTML</h2>
      <p>
        <h3>Przykład</h3>
        <img src={require("./img/htmlprzyklad.png")} alt="htmlprzyklad" />
      </p>
      <p>
        <h3>Wyjaśnienie przykładu</h3>
        <ul>
          <li>Znacznik &lt;!DOCTYPE html&gt; mówi, że jest to dokument HTML5</li>
          <li>Znacznik &lt;html&gt; to element podstawowy witryny HTML</li>
          <li>Znacznik &lt;head&gt; zawiera ważne informacje na temat dokumentu</li>
          <li>Znacznik &lt;title&gt; podaje tytuł dla dokumentu</li>
          <li>Znacznik &lt;body&gt; zawiera widoczną część witryny</li>
          <li>Znacznik &lt;h1&gt; definiuje duży nagłówek</li>
          <li>Znacznik &lt;p&gt; definiuje paragraf</li>
        </ul>
      </p>
      <div className="Line"></div>
      <h2>Tagi HTML</h2>
      <p>
        Tagi HTML to nazwane elementy otoczone znakami mniejszości i większości:
        <br></br>
        <img src={require("./img/htmltagi.png")} alt="tagihtml" />
        <p>
          <ul>
            <li>Tagi HTML zazwyczaj występują w parach jak &lt;p&gt; i &lt;p&gt;</li>
            <li>
              Pierwszy tag w parze to <b>tag startowy</b>, a drugi tag to <b>tag końcowy</b>
            </li>
            <li>
              Tag końcowy pisze się jak tag startowy, lecz dodaje się do niego <b>przedni slash</b> przed nazwą
            </li>
          </ul>
        </p>
      </p>
    </div>
  );}
  else{return null}}
};

export default Lesson1html;
