import React from "react";
import "./Strona1.css";
import Navbar from "../Navbar/Navbar.js";
import Lesson1html from "../HTML-Lessons/Lesson1html";
import Lesson2html from "../HTML-Lessons/Lesson2html";
import Lesson3html from "../HTML-Lessons/Lesson3html";
import Lesson4html from "../HTML-Lessons/Lesson4html";
import Lesson5html from "../HTML-Lessons/Lesson5html";
import Lesson6html from "../HTML-Lessons/Lesson6html";
import Lesson7html from "../HTML-Lessons/Lesson7html";
import Lesson8html from "../HTML-Lessons/Lesson8html";
import Lesson1css from "../CSS-Lessons/Lesson1css";
import Lesson2css from "../CSS-Lessons/Lesson2css";
import Lesson3css from "../CSS-Lessons/Lesson3css";
import Lesson4css from "../CSS-Lessons/Lesson4css";
import Lesson5css from "../CSS-Lessons/Lesson5css";
import Lesson6css from "../CSS-Lessons/Lesson6css";
import Lesson7css from "../CSS-Lessons/Lesson7css";
import Lesson8css from "../CSS-Lessons/Lesson8css";
import Left_Menu_html from "../Left_Menu/Left_Menu_html";
import Left_Menu_css from "../Left_Menu/Left_Menu_css";
import {Route} from 'react-router-dom'

const Strona1 = props => {
    /* Jeśli będziesz chciał zmienić wyświetlanie strony do przejdź do App.js */
    return (
      <div className="main-container" /* id="Strona-container" */>
        <Navbar user={props.data}/>

        <section>
          <div className="side-bar-menu">
              <Left_Menu_html course_name={props.course_name}/>
              <Left_Menu_css course_name={props.course_name}/>
          </div>

          <div className="main-area">
            <Lesson1html lesson={props.lesson} course_name={props.course_name} user={props.data}/>
            <Lesson2html lesson={props.lesson} course_name={props.course_name} user={props.data}/>
            <Lesson3html lesson={props.lesson} course_name={props.course_name} user={props.data}/>
            <Lesson4html lesson={props.lesson} course_name={props.course_name} user={props.data}/>
            <Lesson5html lesson={props.lesson} course_name={props.course_name} user={props.data} />
            <Lesson6html lesson={props.lesson} course_name={props.course_name} user={props.data}/>
            <Lesson7html lesson={props.lesson} course_name={props.course_name} user={props.data}/>
            <Lesson8html lesson={props.lesson} course_name={props.course_name} user={props.data}/>

            <Lesson1css lesson={props.lesson} course_name={props.course_name} user={props.data}/>
            <Lesson2css lesson={props.lesson} course_name={props.course_name} user={props.data}/>
            <Lesson3css lesson={props.lesson} course_name={props.course_name} user={props.data}/>
            <Lesson4css lesson={props.lesson} course_name={props.course_name} user={props.data}/>
            <Lesson5css lesson={props.lesson} course_name={props.course_name} user={props.data}/>
            <Lesson6css lesson={props.lesson} course_name={props.course_name} user={props.data}/>
            <Lesson7css lesson={props.lesson} course_name={props.course_name} user={props.data}/>
            <Lesson8css lesson={props.lesson} course_name={props.course_name} user={props.data}/>
          </div>
        </section>

        <footer>&copy; Copyright 2020 - Jan Napieralski, Łukasz Czapski</footer>
      </div>
    );
};

export default Strona1;
