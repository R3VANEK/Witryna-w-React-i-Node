import React from "react";
import {Link} from 'react-router-dom'

const Left_Menu = props => {
  if(props.course_name == "html"){
  return (
    <nav className="navi html5">
      <div className="navi-title">
        <div className="html-course-menu-logo"></div>

        <div className="navi-text">
          <h2>Kurs HTML</h2>
          <p>Techwords: 0</p>
        </div>
      </div>

      <ul class="menu-kursu">

        <li class="menu-item ">
          <Link to={'/courses/' + props.course_name+'/1'} className="html">
            Wstęp do html
          </Link>
        </li>

        <li class="menu-item ">
          <Link to={'/courses/' + props.course_name +'/2'} className="html">
            Edytory html
          </Link>
        </li>

        <li class="menu-item ">
          <Link to={'/courses/' + props.course_name +'/3'} className="html">
            Podstawy html
          </Link>
        </li>

        <li class="menu-item ">
          <Link to={'/courses/' + props.course_name +'/4'} className="html">
            Elementy html
          </Link>
        </li>

        <li class="menu-item ">
          <Link to={'/courses/' + props.course_name +'/5'} className="html">
            Atrybuty html
          </Link>
        </li>

        <li class="menu-item ">
          <Link to={'/courses/' + props.course_name +'/6'} className="html">
            Formatowanie tekstu HTML
          </Link>
        </li>

        <li class="menu-item ">
          <Link to={'/courses/' + props.course_name +'/7'} className="html">
            Komentarze html
          </Link>
        </li>

        <li class="menu-item ">
          <Link to={'/courses/' + props.course_name +'/8'} className="html">
            Kolory html
          </Link>
        </li>
      </ul>
    </nav>
  );}else{return null}
};

export default Left_Menu;
