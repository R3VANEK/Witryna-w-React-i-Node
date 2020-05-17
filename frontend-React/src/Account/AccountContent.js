import React from "react";
import TechDiv from "./TechDiv";

const AccountContent = props => {
  const renderWords = props.user.tech_words.map(element => {
    return <TechDiv title={element} key={element} />;
  });
  

  if (props.form.podstrona == "details") {
    return (
      <form
        className="account-content-wrapper mdc-elevation--z1"
        onSubmit={props.setTempUser}
      >
        <div className="account-content-left">
          <div className="form-div">
            <label className="form-label">Imię</label>

            <input
              type="text"
              className="account-inputs"
              placeholder={props.user.imie}
              disabled={props.isDisabled}
              onChange={e => {
                props.updateTempUser(e, "imie");
              }}
            />
          </div>
          <div className="form-div">
            <label className="form-label">Nazwisko</label>

            <input
              type="text"
              className="account-inputs"
              placeholder={props.user.nazwisko}
              disabled={props.isDisabled}
              onChange={e => {
                props.updateTempUser(e, "nazwisko");
              }}
            />
          </div>

          <div className="form-div">
            <label className="form-label">Login</label>

            <input
              type="text"
              className="account-inputs"
              placeholder={props.user.login}
              disabled={props.isDisabled}
              onChange={e => {
                props.updateTempUser(e, "login");
              }}
            />
          </div>

          <div className="form-div">
            <label className="form-label">Hasło</label>

            <input
              type="password"
              className="account-inputs"
              placeholder={"**********"}
              disabled={props.isDisabled}
              onChange={e => {
                props.updateTempUser(e, "password");
              }}
            />
          </div>

          

          <div className="form-div">
            <label className="form-label">Data urodzenia</label>

            <input
              type="date"
              className="account-inputs"
              placeholder={props.user.birth}
              onChange={e => {
                props.updateTempUser(e, "birth");
              }}
            />
          </div>
        </div>

        <div className="account-content-right">
          <div id="form-div-profile-picture">
            <img src={require(`../img/${props.user.picture}`)} />
          </div>

          <div className="form-div-img">
            <div id="change-img-div">Zmień zdjęcie profilowe</div>
            <input
              type="file"
              name="file-input"
              id="file-input"
              accept="image/x-png,image/gif,image/jpeg"
              onChange={props.fileCatcher}
            />
            <label htmlFor="file-input" id="prop-file-input">
              Wybierz plik
            </label>
          </div>
          <div id="form-submit-div">
            <button type="submit">Zapisz dane</button>
          </div>
        </div>
      </form>
    );
  } else {
      console.log(props.user.tech_words.length)
      if(Array.isArray(props.user.tech_words) && props.user.tech_words.length == 0){
        return(
          <div id="ojoj">Wygląda na to że nie masz żadnych słów w słowniczku, ale głowa do góry :)</div>
        )
      }
      else{
        return (
          <div className="account-content-wrapper-words mdc-elevation--z1 overflow">
            {renderWords}
          </div>
        );
      }
    
  }
};

export default AccountContent;
