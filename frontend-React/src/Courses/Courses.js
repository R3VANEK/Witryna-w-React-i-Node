import React from "react";
import Navbar from "../Navbar/Navbar.js";
import { makeStyles } from '@material-ui/core/styles';
import "./Courses.css";
import Course from "../Course/Course.js";
import JSON_data1 from "../Data/courseData.json";
import Select from '@material-ui/core/Select'; 
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';


/* const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const classes = useStyles(); */

class Courses extends React.Component {

  

  componentDidMount(){
    if(this.props.handler){

      console.log(this.props.data.techwords)
      
      if(this.props.data.techwords != undefined){
        var techWords = this.props.data.techwords.split(",")
      }
      else{
        var techWords = []
      }
      let help = this.props.data
      let trueData = {
        id : parseInt(help.id),
        imie : help.imie,
        nazwisko : help.nazwisko,
        login : help.login,
        password : help.password,
        techwords : techWords,
        picture : help.picture,
        birth : help.birth,
        completion : help.completion
      }
      console.log(trueData)


      this.props.handler(trueData)
    }
  }


  render() {
    
    const renderCards = JSON_data1.course.map(element => {
      return (
        <Course
          id={element.id}
          title={element.title}
          front_text={element.front_text}
          author={element.author}
          header={element.header}
          list={element.list}
          percentage={element.completion}
          key={element.id}
        />
      );
    });

    return (
      <div>
        <Navbar user={this.props.data} handler={this.props.handler}/>
        <div className="courses-main-container">
          {/* <div id="Courses-holder">as */}
          <div className="courses-main-background">
            <div className="courses-main-backgroundtext">Kursy</div>
          </div>
          <div className="courses-main-sorting">
            
              <p>Sortuj:</p>

              <FormControl variant="filled" className="lista-rozwijana">
              <InputLabel id="demo-simple-select-filled-label">Wybierz</InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value="Wpis"
                  /* onChange={handleChange} */
                >
                  <MenuItem value="">
                    <em>Nie sortuj</em>
                  </MenuItem>
                  <MenuItem value={10}>Najnowsze</MenuItem>
                  <MenuItem value={20}>Najpopularniejsze</MenuItem>
                  <MenuItem value={30}>Najwyżej oceniane</MenuItem>
              </Select>
            </FormControl>
              
        
          </div>
          <div className="card-main-container">
            {renderCards}
            {/* <div className="bg"></div> */}
          </div>
          <footer>&copy; Copyright 2020 - Jan Napieralski, Łukasz Czapski</footer>
        </div>
      </div>
    );
  }
}

export default Courses;
