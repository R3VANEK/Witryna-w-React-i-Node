import React from "react";
import "./Course.css";
import { Link } from "react-router-dom";

class Course extends React.Component {
  rotateCard = () => {
    this.backface.current.style.transform = "rotateY(0)";
    this.frontface.current.style.transform = "rotateY(-180deg)";
  };

  render() {
    const liElements = this.props.list.map(el => {
      return <li className="extra-element">{el}</li>;
    });

    this.backface = React.createRef();
    this.frontface = React.createRef();

    return (
      <div className="cards-holder" id={this.props.id}>
        {
          <div className="card-face front-face" ref={this.frontface}>
            <div className="Course-img"></div>
            <div className="hover-div">
              <div className="info-wrapper">
                <h1 className="kurs-h2">{this.props.header}</h1>
                <p className="course-author">By {this.props.author}</p>
                <p className="course-short">{this.props.text}</p>
              </div>
              <div className="button-wrapper" onClick={this.rotateCard}>
                <button className="mdc-button mdc-button--raised">
                  {" "}
                  <span className="mdc-button__ripple"></span> Więcej
                </button>
              </div>

              {/* <button className="course-read">Read</button> */}
            </div>
          </div>
        }

        <div className="card-face back-face" ref={this.backface}>
          <div className="info-wrapper">
            <h1 className="kurs-h2">{this.props.title}</h1>
            <p className="percentage">{this.props.percentage}</p>
            <p className="course-author">By {this.props.author}</p>
            <p className="back-main-text">{this.props.header}</p>
            <p className="what-to-learn">Czego nauczysz się na tym kursie : </p>
            <ul className="extra-list">{liElements}</ul>
          </div>

          <div className="button-wrapper">
            <Link to={"/courses/" + this.props.id + "/1"}>
              <button className="mdc-button mdc-button--raised">
                {" "}
                <span className="mdc-button__ripple"></span> Rozpocznij naukę
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Course;
