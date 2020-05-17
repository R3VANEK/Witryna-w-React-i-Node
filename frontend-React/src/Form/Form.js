import React from "react";
import "./Form.css";
import sha256 from "./sha256";
import { Redirect } from "react-router-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      imie: "",
      nazwisko: "",
      birth: "",
      picture: "",
      redirect: false,
      redirect1: false,
      url: []
    };
    this.login = React.createRef();
    this.password = React.createRef();
    this.errLog = React.createRef();
  }

  loginSet = e => {
    this.setState({
      login: e.target.value
    });
  };

  passwordSet = e => {
    this.setState({
      password: e.target.value
    });
  };

  pieceSet = e => {
    console.log(e.target.id);
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  inputBlur = e => {
    if (e.target.id === "login" && this.state.login === "") {
      e.target.placeholder = "Login";
    }

    if (e.target.id === "password" && this.state.password === "") {
      e.target.placeholder = "Password";
    }
  };

  errSupporter = e => {
    this.setState({
      login: "",
      password: ""
    });

    this.login.current.className = "input-div input-error";
    this.password.current.className = "input-div input-error";
    this.errLog.current.style.visibility = "visible";
  };

  handlerSubmit = e => {
    e.preventDefault();
    const { login, password } = this.state;

    async function Hashing() {
      const hash = await sha256(password);
      return hash;
    }

    const Main = async e => {
      const hashed = await Hashing();
      fetch("http://localhost:5000/form/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          login: login,
          password: hashed
        })
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          if (data.login != undefined) {
            console.log(data);
            console.log(data.tech_words);
            this.setState({
              redirect: true,
              url: ["/" + data.id, "/" + data.imie, "/" + data.nazwisko, "/" + data.login, "/" + data.password, "/" + data.birth, "/" + data.picture, "/" + data.completion, "/" + data.tech_words]
            });
          } else {
            console.log(data);
            this.setState({
              login: "",
              password: ""
            });

            this.login.current.className = "input-div input-error";
            this.password.current.className = "input-div input-error";
            this.errLog.current.style.visibility = "visible";
          }
        });
    };
    Main();
  };

  registerHandler = e => {
    e.preventDefault();
    const { login, password, imie, nazwisko, birth } = this.state;

    async function Hashing() {
      const hash = await sha256(password);
      return hash;
    }

    const Main = async e => {
      const hashed = await Hashing();
      fetch("http://localhost:5000/form/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          login: login,
          password: hashed,
          birth: birth,
          imie: imie,
          nazwisko: nazwisko
        })
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          if (data.id != null && data.id != undefined) {
            this.setState({
              redirect1: true,
              url: ["/form/register/" + data.id]
            });
          }
        });
    };
    Main();
  };

  render() {
    if (this.props.podstrona === "login") {
      return (
        <div className="container">
          <div className="row">
            <div className="image-holder"></div>

            <div className="form-container">
              <div className="form-image-holder"></div>

              <div className="form">
                <div className="title">EKORU</div>
                <form onSubmit={this.handlerSubmit}>
                  <span id="error-log" ref={this.errLog}>
                    Niepoprawny login użykownika lub hasło
                  </span>
                  <div className="input-div" ref={this.login}>
                    <i className="material-icons">account_box</i>
                    <input
                      id="login"
                      type="text"
                      placeholder="Login"
                      /*value={this.state.login}*/
                      onChange={this.pieceSet}
                      onFocus={this.inputFocus}
                      onBlur={this.inputBlur}
                    />
                  </div>

                  <div className="input-div" ref={this.password}>
                    <i className="material-icons">https</i>
                    <input
                      id="password"
                      type="password"
                      placeholder="Password"
                      /*value={this.state.password}*/
                      onChange={this.pieceSet}
                      onFocus={this.inputFocus}
                      onBlur={this.inputBlur}
                    />
                  </div>
                  <div className="button-holder">
                    <button className="mdc-button mdc-button--outlined">
                      {" "}
                      <span className="mdc-button__ripple"></span> Continue
                      {this.state.redirect == true ? (
                        <Redirect
                          to={
                            this.state.url[0] +
                            this.state.url[1] +
                            this.state.url[2] +
                            this.state.url[3] +
                            this.state.url[4] +
                            this.state.url[5] +
                            this.state.url[6] +
                            this.state.url[7] +
                            this.state.url[8]
                          }
                        />
                      ) : null}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="container">
            <div className="row">
              <div className="image-holder"></div>
              <div className="form-container">
                <div className="form-image-holder"></div>
                <div className="form"></div>
                <div className="titleregister">EKORU</div>
                <form onSubmit={this.registerHandler}>
                  <div className="input-div-register">
                    <i className="material-icons">face</i>
                    <input id="imie" type="text" placeholder="Imię" name="imie" onChange={this.pieceSet} required onFocus={this.inputFocus} onBlur={this.inputBlur} />
                  </div>
                  <div className="input-div-register">
                    <i className="material-icons">emoji_people</i>
                    <input id="nazwisko" type="text" placeholder="Nazwisko" name="nazwisko" onChange={this.pieceSet} required onFocus={this.inputFocus} onBlur={this.inputBlur} />
                  </div>
                  <div className="input-div-register">
                    <i className="material-icons">account_box</i>
                    <input id="login" type="text" placeholder="Login" name="login" onChange={this.pieceSet} required onFocus={this.inputFocus} onBlur={this.inputBlur} />
                  </div>
                  <div className="input-div-register">
                    <i className="material-icons">https</i>
                    <input id="password" type="password" placeholder="Hasło" name="password" onChange={this.pieceSet} required onFocus={this.inputFocus} onBlur={this.inputBlur} />
                  </div>
                  <div className="input-div-register">
                    <i className="material-icons">calendar_today</i>
                    <input id="birth" type="date" name="birth" onChange={this.pieceSet} required onFocus={this.inputFocus} onBlur={this.inputBlur} />
                  </div>
                  <button type="submit">Zarejestruj się</button>
                  {this.state.redirect1 === true ? <Redirect to={this.state.url[0]} /> : null}
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Form;
