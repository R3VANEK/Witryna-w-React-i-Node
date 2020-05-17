import React from "react";
import "./Account.css";
import Navbar from "../Navbar/Navbar";
import AccountContent from "./AccountContent";
import Button from "./Button";
import axios from 'axios'
import { NavLink } from "react-router-dom";
import sha256 from "../Form/sha256.js";


class Account extends React.Component {
 
  constructor(props) {
    super(props)
    console.log("peirdole was")
    this.state = {
      user: {
          id: this.props.data.id,
          imie: this.props.data.imie,
          nazwisko: this.props.data.nazwisko,
          login: this.props.data.login,
          password: this.props.data.password,
          birth: this.props.data.birth,
          picture: this.props.data.picture,
          completion: this.props.data.completion,
          tech_words: this.props.data.tech_words
        },

      form: null,
      image : null,

      formImie : this.props.data.imie,
      formNazwisko : this.props.data.nazwisko,
      formLogin : this.props.data.login,
      formPassword : this.props.data.password,
      formBirth: this.props.data.birth,
      formPicture : this.props.data.picture
    };
  }

  updateTempUser = async (e, property) => {
    if(property == "imie"){
       this.setState({formImie : e.target.value})
    }
    else if(property=="nazwisko"){
      this.setState({formNazwisko : e.target.value})
    }
    else if(property=="login"){
      this.setState({formLogin : e.target.value})
    }
    else if(property=="password"){
      this.setState({formPassword : e.target.value})
    }
    else if(property=="birth"){
      this.setState({formBirth : e.target.value})
    }
    
  };

  
  fileCatcher = (e) =>{
    this.setState({
        image : e.target.files[0]
    })
  }

   Hashing = async () => {
     if(this.state.formPassword != this.state.user.password){
      const hash = await sha256(this.state.formPassword);
      return hash;
     }
     else{
       const hash = this.state.user.password
       return hash
     }
    
  }

  help = async (img=null) => {

    const hashed = await this.Hashing()

    fetch("http://localhost:5000/profile/updateUser", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            id : this.state.user.id,
            imie: this.state.formImie,
            nazwisko: this.state.formNazwisko,
            login: this.state.formLogin,
            password: hashed,
            birth: this.state.formBirth,
            picture: (img!=null) ? img : this.state.user.picture,
            completion: this.props.data.completion,
            tech_words: this.props.data.tech_words
          })
    })
}

  setTempUser = e => {
    e.preventDefault();

    if(this.state.image != null){
      const data = new FormData()
      data.append('file', this.state.image)
      axios.post("http://localhost:5000/profile/img", data,{

      })
      .then(res=>{
          if(res.statusText == "OK"){
              this.help(res.data.filename)
          }
          else{
              console.log(res.statusText)
          }
      })
    }
    else{
      this.help()
    }
    

  };
  
  render() {
    var user = this.props.data
      return (
        <div id="Account-wrapper">
          <Navbar user={this.props.data}/>

          <div className="account-main-container">
            <div className="account-left">
              <div className="account-left-wrapper mdc-elevation--z1">
                <div className="account-img-wrapper">
                   <img src={require(`../img/${user.picture}`)} alt="profile_picture"/> 
                  {/* <img src={require("../img/prof1.jpg")} alt="Profilowe" /> */}
                  <div className="account-user-name">
                    {user.imie + " " + user.nazwisko}
                  </div>
                </div>

                <div className="account-option-wrapper">
                  <ul class="mdc-list">

                    <NavLink to="/account/details">
                    <li
                      class="mdc-list-item"
                      tabindex="0"
                    >
                      <span className="mdc-list-item-graphic">
                        <i class="material-icons">assignment_ind</i>
                      </span>
                      <span class="mdc-list-item__text">Konto</span>
                    </li>
                    </NavLink>


                    <NavLink to="/account/voc">
                      <li class="mdc-list-item">
                        <span className="mdc-list-item-graphic">
                          <i class="material-icons">bookmarks</i>
                        </span>
                        <span class="mdc-list-item__text">Słowniczek</span>
                      </li>
                    </NavLink>


                    <NavLink to="/form/login">
                      <li class="mdc-list-item">
                        <span className="mdc-list-item-graphic">
                          <i class="material-icons">highlight_off</i>
                        </span>
                          <span class="mdc-list-item__text">Wyloguj się</span>
                        
                      </li>
                    </NavLink>
                    
                  </ul>
                </div>
              </div>
            </div>

            <div className="account-right">
              

              <AccountContent
                form={this.props.podstrona}
                user={this.props.data}
                isDisabled={this.state.isDisabled}
                updateTempUser={this.updateTempUser}
                setTempUser={this.setTempUser}
                fileCatcher={this.fileCatcher}
              />
            </div>
          </div>
          <footer>
            &copy; Copyright 2020 - Jan Napieralski, Łukasz Czapski
          </footer>
        </div>
      );
  }
}

export default Account;
