import React from "react";
import {Link} from 'react-router-dom'

const Left_Menu_css = props => {
  if(props.course_name == "css"){
  return (
    <nav className="navi css3">
      <div className="navi-title">
        <div className="css-course-menu-logo"></div>
        <div className="navi-text">
          <h2>Kurs CSS</h2>
          <p>Techwords: 0</p>
        </div>
      </div>

      <ul class="menu-kursu">

        <li class="menu-item ">
          <Link to={'/courses/' + props.course_name+'/1'} className="css">
            Wprowadzenie do CSS
          </Link>
        </li>

        <li class="menu-item ">
          <Link to={'/courses/' + props.course_name + '/2'} className="css">
            Składnia CSS
          </Link>
        </li>

        <li class="menu-item ">
          <Link to={'/courses/' + props.course_name + '/3'} className="css">
            Selektory CSS
          </Link>
        </li>

        <li class="menu-item ">
          <Link to={'/courses/' + props.course_name + '/4'} className="css">
            Dodawanie CSS
          </Link>
        </li>

        <li class="menu-item ">
          <Link to={'/courses/' + props.course_name + '/5'} className="css">
            Model pudełkowy CSS
          </Link>
        </li>

        <li class="menu-item ">
          <Link to={'/courses/' + props.course_name + '/6'} className="css">
            Jednostki CSS
          </Link>
        </li>

        <li class="menu-item ">
          <Link to={'/courses/' + props.course_name + '/7'} className="css">
            Overflow CSS
          </Link>
        </li>

        <li class="menu-item ">
          <Link to={'/courses/' + props.course_name + '/8'} className="css">
            Position CSS
          </Link>
        </li>
      </ul>
    </nav>
  )}else{return null}
};

export default Left_Menu_css;
