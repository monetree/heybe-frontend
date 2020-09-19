import React from 'react'
import { loadHomeScripts } from 'utils/loadScriptsForHomePage';
import FormatUrl from "utils/UrlFormatter";
import BackgroundVideo from "../components/BackgroundVideo";


class ForgotPassword extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email:'',
      otp:'',
      newpassword:'',
      conformpassword:'',
      screen: 1
    }
  }

  componentDidMount(){
    document.getElementById("top-bar-main").classList.remove("expanded")
    document.getElementsByTagName('body')[0].id = 'sessions_new';
    loadHomeScripts();
  }


  handleOtp = () => {
    let usertype = this.props.location.search.split("=")[1]
    let url = ''
    let otp = this.state.otp;
    if (usertype === 'user'){
      url = FormatUrl(`/user/verify-otp/`)
    } else {
      url = FormatUrl(`/coach/verify-otp/`)
    }
    fetch(url, {
    method: 'post',
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      otp: otp
    })
    })
    .then(response => response.json())
    .then(res => {
        if (res["code"] === 200){
                this.setState({
                  screen:3
                })
            } else {
                console.log(res)
            }
    }).catch(err => {
        console.log(err)
    })
  }

  handleReset = () => {
    let usertype = this.props.location.search.split("=")[1]
    let url = ''
    if (this.state.newpassword !== this.state.conformpassword){
      alert("password didn't match")
      return 
    }
    if (usertype === 'user'){
      url = FormatUrl(`/user/reset-password/`)
    } else {
      url = FormatUrl(`/coach/reset-password/`)
    }
    fetch(url, {
    method: 'post',
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      password: this.state.newpassword,
      email: localStorage.getItem("otpemail")
    })
    })
    .then(response => response.json())
    .then(res => {
        if (res["code"] === 200){
          if (usertype === 'user'){
            this.props.history.push("/user/signin/")
          } else {
            this.props.history.push("/coach/signin/")
          }
            } else {
                console.log(res)
            }
    }).catch(err => {
        console.log(err)
    })
  }

  handleSubmit = () => {
    let usertype = this.props.location.search.split("=")[1]
    let url = ''
    let email = this.state.email;
    if (usertype === 'user'){
      url = FormatUrl(`/user/forgot-password/`)
    } else {
      url = FormatUrl(`/coach/forgot-password/`)
    }
    fetch(url, {
    method: 'post',
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: email
    })
    })
    .then(response => response.json())
    .then(res => {
        if (res["code"] === 200){
                localStorage.setItem("otpemail", res["email"])
                this.setState({
                  screen:2
                })
            } else {
                console.log(res)
            }
    }).catch(err => {
        console.log(err)
    })
  }

 
    render(){
        return (
          <div>
          
      <br/><br/>
      <section class="main general">
      <BackgroundVideo
        poster="http://d2xhaclmiois39.cloudfront.net/images/booyafitness_sizzle_promo_final_snapshot.png"
        src="https://dadbxlstbmqt1.cloudfront.net/booyafitness_sizzle_promo_final.mp4"
      />
          <div class="row">
            <div class="large-12 columns general-container">
            <div class="row form-block text-center">
        <div class="large-5 small-12 large-centered columns form-border signup_form">
        {
              this.state.screen === 1 ? 
              (
              <h4 id="panel_header">Forgot Password</h4>
              ): this.state.screen === 2 ? (
                <span>
              <h4 id="panel_header">Verify Otp</h4>
              <p>Please check your email to get otp</p>
              </span>
              ):(
                <h4 id="panel_header">Reset Password</h4>
              )
            }
            <br/>
      
          
      
        {
              this.state.screen === 1 ? 
              (
                <div class="small-12 large-12 columns">
              <div class="field">
                  <input className="form-control" onChange={(e) => this.setState({email: e.target.value})} placeholder="Enter email address" type="email" />
                </div>
              </div>
              ): 
              this.state.screen === 2 ? 
              (
                <div class="small-12 large-12 columns">
              <div class="field">
                  <input className="form-control" onChange={(e) => this.setState({otp: e.target.value})} placeholder="Enter otp" type="text" />
                </div>
              </div>
              ):(
                <div>
                <div class="small-12 large-12 columns">
              <div class="field">
                  <input className="form-control" onChange={(e) => this.setState({newpassword: e.target.value})} placeholder="New Password" type="password" />
                </div>
              </div>
              <div class="small-12 large-12 columns">
              <div class="field">
                    <input className="form-control" onChange={(e) => this.setState({conformpassword: e.target.value})} placeholder="Conform Password" type="password" />
                  </div>
                  </div>
                  </div>
              )
            }
      

          
            {
              this.state.screen === 1 ? 
              (
                <div class="actions">
                <button class="button expand" type="button" onClick={this.handleSubmit}>Submit</button>
              </div>
              ): 
              this.state.screen === 2 ? 
              (
                <div class="actions">
                <button class="button expand" type="button" onClick={this.handleOtp}>Submit</button>
              </div>
              ):(
                <div class="actions">
                <button class="button expand" type="button" onClick={this.handleReset}>Submit</button>
              </div>
              )
            }
            <br/>
  
        </div>
      

      
      
      
  
      </div>
      
            </div>
          </div>
          </section>
        </div>
        )
    }
}

export default ForgotPassword;