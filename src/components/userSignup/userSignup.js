import React from 'react';
import FormatUrl from "utils/UrlFormatter";
import { Link } from "react-router-dom";
import {ToastsContainer, ToastsStore} from 'react-toasts';

class userRegistrationForm extends  React.Component {
    constructor(props){
        super(props);
        this.state = {
          firstname:'',
          lastname:'',
          email:'',
          password:'',
          match:true
        }
      }
    
      componentDidMount(){
        document.getElementById("top-bar-main").classList.remove("expanded")
        document.getElementsByTagName('body')[0].id = 'registrations_new';
        // loadHomeScripts();
      }
    
      checkPassword = (event) => {
        if (this.state.password !== event.target.value){
          this.setState({
            match:false
          })
        }
      }
    
      handleSubmit = () => {
        let firstname = this.state.firstname;
        let lastname = this.state.lastname;
        let email = this.state.email;
        let password = this.state.password;
        let url = FormatUrl(`/user/register/`)
        fetch(url, {
        method: 'post',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: firstname+ " " + lastname,
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
                ToastsStore.success("Success ",3000,"toast-box-success")
                localStorage.setItem("data", response)
                window.location = "/"
                } else {
                  ToastsStore.failed("Failed",3000,"toast-box-error")
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
         <h4 id="panel_header">USER SIGN UP</h4>
      <div class="margin-bottom-30 margin-top-10">You'll never do the same workout twice</div>
     
        
      <div class="row collapse">
       <div class="small-12 large-12 columns">
         <div class="field">
         <input className="form-control" id="user_fname" onChange={(e) => this.setState({firstname: e.target.value})} placeholder="&#42; Enter first name" size="30" type="text" />
         </div>
       </div>
     </div>
     <div class="row collapse">
       
    
       <div class="small-12 large-12 columns">
         <div class="field">
         <input className="form-control" id="user_lname" onChange={(e) => this.setState({lastname: e.target.value})} placeholder="&#42; Last name" size="30" type="text" />
         </div>
       </div>
     </div>

        <div class="row collapse">
          <div class="small-12 large-12 columns">
            <div class="field">
            <input className="form-control" id="user_email" onChange={(e) => this.setState({email: e.target.value})} placeholder="&#42; Email" size="30" type="email" />
            </div>
          </div>
        </div>


        <div class="row collapse">
        
        <div class="small-12 large-12 columns">
          <div class="field">
          <input className="form-control" onChange={(e) => this.setState({password: e.target.value})} placeholder="&#42; Password (8 characters minimum)" type="password" />
          </div>
        </div>
        </div>


    
        <div class="row collapse">
 
          <div class="small-12 large-12 columns">
            <div class="field">
            <input className="form-control" onChange={this.checkPassword} placeholder="&#42; Confirm password" type="password" />
            </div>
          </div>
        </div>

    
        {/* <div class="actions" > */}
        <button onClick={this.handleSubmit} style={{ marginTop:'10px' }} class="button expand js-sign-up-button">Sign Up</button>
        {/* </div> */}
    </div>
        
    <div className="large-5 small-12 large-centered columns form-border signup_form border-top-radius-0 form-footer-part">
          <Link to="/user/signin/" class="text-center">Sign in</Link>
          <br/>   <br/>
      

    </div>
    
    
      </div>
    


    
    
      <br/>   <br/>
          
          </div>
        )
    }
}


export default userRegistrationForm;