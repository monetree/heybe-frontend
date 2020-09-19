import React from 'react'
import { loadHomeScripts } from 'utils/loadScriptsForHomePage';
import FormatUrl from "utils/UrlFormatter";
import BackgroundVideo from "../components/BackgroundVideo";


class ResetPassword extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password: '',
      conformpassword:''
    }
  }

  componentDidMount(){
    document.getElementById("top-bar-main").classList.remove("expanded")
    document.getElementsByTagName('body')[0].id = 'sessions_new';
    loadHomeScripts();
  }


  handleSubmit = () => {
    let email = this.state.email;
    let password = this.state.password;
    let url = ''
    let usertype = this.props.location.search.split("=")[1]
    if(usertype === "coach"){
      url = FormatUrl(`/coach/reset-password/`)
    } else {
      url = FormatUrl(`/user/reset-password/`)
    }
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
                console.log("success")
            } else {
                console.log(res)
            }
    }).catch(err => {
        console.log(err)
    })
  }

 
    render(){
        return (
            <section class="main general">
              <br/><br/>
             <BackgroundVideo
          poster="http://d2xhaclmiois39.cloudfront.net/images/booyafitness_sizzle_promo_final_snapshot.png"
          src="https://dadbxlstbmqt1.cloudfront.net/booyafitness_sizzle_promo_final.mp4"
        />
            <div class="row">
              <div class="large-12 columns general-container">
              <div class="row form-block text-center">
          <div class="large-5 small-12 large-centered columns form-border signup_form">
            <h4 id="panel_header">Change Password</h4>
            <br/>
            <div id="form-signin">
        
            
        
            <div class="row collapse">
              <div class="small-2 large-1 columns">
                <span class="prefix"><i class="fa fa-pencil"></i></span>
              </div>
        
              <div class="small-10 large-11 columns">
                <div class="field">
                  <input onChange={(e) => this.setState({email: e.target.value})} placeholder="Enter email address" type="email" />
                </div>
              </div>
            </div>
        
            <div class="row collapse">
              <div class="small-2 large-1 columns">
                <span class="prefix"><i class="fa fa-key"></i></span>
              </div>
        
              <div class="small-10 large-11 columns">
                <div class="field">
                  <input onChange={(e) => this.setState({password: e.target.value})} placeholder="Enter password" type="password" />
                </div>
              </div>
            </div>

            <div class="row collapse">
              <div class="small-2 large-1 columns">
                <span class="prefix"><i class="fa fa-key"></i></span>
              </div>
        
              <div class="small-10 large-11 columns">
                <div class="field">
                  <input onChange={(e) => this.setState({conformpassword: e.target.value})} placeholder="Enter password" type="password" />
                </div>
              </div>
            </div>
        
    
        
            <div class="actions">
              <button class="button expand" type="button" onClick={this.handleSubmit}>Submit</button>
            </div>
        </div>
          </div>
        
          <div class="row actions">
            <div class="large-12 columns signin-link">
              
   
        
        
        
        
        
            </div>
          </div>
          <div style={{marginBottom:'3cm'}}>

</div>
        </div>
        
              </div>
            </div>
          </section>
        )
    }
}

export default ResetPassword;