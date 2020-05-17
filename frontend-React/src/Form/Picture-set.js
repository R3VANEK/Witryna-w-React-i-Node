import React from 'react';
import axios from 'axios';
import "./Picture-set.css";
import { Redirect } from "react-router-dom";

class Picture_set extends React.Component{

    state={
        image : null,
        id : null,
        redirect : false,
        url : []
    }

    componentDidMount(){
        this.setState({
            id : this.props.id
        })
    }

    imageSetAccount = (img) =>{
        fetch("http://localhost:5000/profile/imgSet", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                id : this.state.id,
                filename : img
              })

        }).then((response) => {
            return response.json();
          })
          .then((data) => {
            if(data.login != undefined){
                this.setState({
                  redirect : true,
                  url : ['/'+ data.id,'/'+ data.imie, '/'+ data.nazwisko, '/'+ data.login, '/'+ data.password,  '/'+ data.birth,'/'+ data.picture, '/'+ data.completion, '/'+ data.tech_words] 
                })
              }
              else{
                  console.log("smth went wrong")
              }
          });
    }

    fileCatcher = (e) =>{
        this.setState({
            image : e.target.files[0]
        })
    }

    onClickHandler = () =>{
        const data = new FormData()
        data.append('file', this.state.image)
        axios.post("http://localhost:5000/profile/img", data,{

        })
        .then(res=>{
            if(res.statusText == "OK"){
                this.imageSetAccount(res.data.filename)
            }
            else{
                console.log(res.statusText)
            }
        })
    }

    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="image-holder"></div>
                        <div className="form-container">
                            <div className="form-image-holder"></div>
                            <div className="form"></div>
                            <div className="titleregister">EKORU</div>
                            <div className="forming">
                                <label class="custom-file-upload">
                                    <i className="material-icons">backup</i><div className="filetext">Wybierz plik...</div>
                                    <input type="file"  name="file" onChange={this.fileCatcher} accept="image/x-png,image/gif,image/jpeg" required />
                                </label>
                                <div className="uploadbutton">
                                <i className="material-icons">publish</i><button type="submit" onClick={this.onClickHandler}>Ustaw zdjęcie profilowe</button>
                                </div>
                                {this.state.redirect == true ? <Redirect to={this.state.url[0] + this.state.url[1] + this.state.url[2] + this.state.url[3] + this.state.url[4] + this.state.url[5] + this.state.url[6] + this.state.url[7]}/> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Picture_set