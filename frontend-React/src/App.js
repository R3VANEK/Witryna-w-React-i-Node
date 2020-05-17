import React from "react";
import "./App.css";
import Form from "./Form/Form.js";
import Strona1 from "./Strona1/Strona1";
import Courses from "./Courses/Courses";
import Account from "./Account/Account";
import Site404 from './Site404/Site404';
import Picure_set from './Form/Picture-set'
import ErrorBoundary from './Account/Error'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends React.Component {
  state = {
    user: {
      id : null,
      imie: "",
      nazwisko: null,
      login: null,
      password: null, /* */
      birth: null,
      picture: null,
      completion: null,
      tech_words: null
    }
  };

  handler = (obiekt) => {
    /*asd   asdasdasdasd*/
    this.setState({
      user: {
        id : obiekt.id,
        imie: obiekt.imie,
        nazwisko: obiekt.nazwisko,
        login: obiekt.login,
        password: obiekt.password,
        birth: obiekt.birth,
        picture: obiekt.picture,
        completion: obiekt.completion,
        tech_words: obiekt.techwords
      }
    },()=>{
      console.log(this.state.user)
    });
  };

  render() {
    return (
      <Router>
        <div className="App">

        <Switch>

          <Route path="/form/register/:id"
            render={(props)=>
              <Picure_set
                id={props.match.params.id}
              />
            }
          />


          <Route path="/form/:podstrona"
            render={(props)=>
              <Form
                podstrona={props.match.params.podstrona}
                handler={this.handler}
              />
            }/>


          <Route
            path="/:id/:imie/:nazwisko/:login/:password/:birth/:picture/:completion/:techwords"
            render={(props)=>
              <Courses
                data={props.match.params}
                handler={this.handler} 
              />
          }/>

          <Route
            path="/:id/:imie/:nazwisko/:login/:password/:birth/:picture/:completion/"
            render={(props)=>
              <Courses
                data={props.match.params}
                handler={this.handler} 
              />
          }/>

          <Route 
            path="/courses/:course_name/:lesson"
            render={(props)=>
            <Strona1 
              course_name={props.match.params.course_name} 
              data={this.state.user} 
              lesson={props.match.params.lesson}
            />
          }/>

          

        <Route
            path="/account/:podstrona"
            render={(props)=>
              <ErrorBoundary>
                <Account
                  data={this.state.user}
                  podstrona={props.match.params}
                />
              </ErrorBoundary>
              
            }
          />


          <Route path="/" exact>
            <Courses
              data={this.state.user}
            />
        </Route>

        <Route component={Site404}/>

        

        </Switch>
          
          
          
          
        </div>
      </Router>
      
    );
  }
}

export default App;

