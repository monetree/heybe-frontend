import React from 'react';
import FormatUrl from "utils/UrlFormatter";
import { Link } from "react-router-dom";
import {ToastsContainer, ToastsStore} from 'react-toasts';

class userRegistrationForm extends  React.Component {
    constructor(props){
        super(props);
        this.state = {
          email:'',
          password: ''
        }
      }
    

    componentDidMount(){
        document.getElementById("top-bar-main").classList.remove("expanded")
        document.getElementsByTagName('body')[0].id = 'sessions_new';
        // loadHomeScripts();
      }
    
    
      handleSubmit = () => {
        let email = this.state.email;
        let password = this.state.password;
        let url = FormatUrl(`/user/login/`)
        fetch(url, {
        method: 'post',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
        })
        .then(response => response.json())
        .then(res => {
            if (res["code"] === 200){
              let response = JSON.stringify({
                "id": res["id"],
                "name": res["name"],
                "email": res["email"],
                "type": "user"
              }) 
              ToastsStore.success("Success",3000,"toast-box-success")
              localStorage.setItem("data", response)
              window.location = "/"
              
                } else {
                    console.log(res)
                }
        }).catch(err => {
            console.log(err)
        })
      }


    render(){
        return (
            <div class="large-12 columns general-container">
            <div class="row form-block text-center">
        <div class="large-5 small-12 large-centered columns form-border signup_form border-bottom-radius-0">
          <h4 id="panel_header">USER SIGN IN</h4>
          <div id="form-signin">
        <div class="margin-bottom-30 margin-top-10">You'll never do the same workout twice</div>
      
          
      
          <div class="row collapse">
         
      
            <div class="small-12 large-12 columns">
              <div class="field">
                <input className="form-control" onChange={(e) => this.setState({email: e.target.value})} placeholder="Enter email address" type="email" />
              </div>
            </div>
          </div>
      
          <div class="row collapse">
   
            <div class="small-12 large-12 columns">
              <div class="field">
                <input className="form-control" onChange={(e) => this.setState({password: e.target.value})} placeholder="Enter password" type="password" />
              </div>
            </div>
          </div>
      
      
            <div class="row margin-bottom-20 remember-me left">
              <div class="large-12 columns">
              <label class="checkbox-container"><span>Remember Me</span>
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              </div>
            </div>
      
          <div class="actions">
            <button class="button expand" type="button" onClick={this.handleSubmit}>Sign in</button>
          </div>
      </div>
        </div>
      

      
        <div className="large-5 small-12 large-centered columns form-border signup_form border-top-radius-0 form-footer-part">
          <br />
        <Link to="/forgot-password/?type=user" class="text-center">Forgot password?</Link>
        <br />
        <br />
            <Link to="/signup/" class="text-center">Sign up</Link>
            <br/>
            <br/>
      </div>
      
      
      
      
  
      </div>
      
            </div>
        )
    }
}


export default userRegistrationForm;