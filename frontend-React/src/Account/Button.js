import React from "react";

const Button = props => {
  if (props.form === true) {
    return (
      <div className="account-options">
        <button
          class="mdc-fab"
          aria-label="create"
          onClick={props.activateForm}
        >
          <div class="mdc-fab__ripple"></div>
          <span class="mdc-fab__icon material-icons">create</span>
        </button>
        <p className="change-text">Zmień dane</p>
      </div>
    );
  } else {
    return (
      <div className="invisible">
        {/* <button
          class="mdc-fab"
          aria-label="create"
          onClick={props.activateForm}
        >
          <div class="mdc-fab__ripple"></div>
          <span class="mdc-fab__icon material-icons">create</span>
        </button>
        <p className="change-text">Zmień dane</p> */}
      </div>
    );
  }
};

export default Button;
