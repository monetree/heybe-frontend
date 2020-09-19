import React from 'react';
import BackgroundVideo from "../components/BackgroundVideo";
import {ToastsContainer, ToastsStore} from 'react-toasts';
import UserSignUp from '../components/userSignup/userSignup';
import CoachSignUp from '../components/coachSignup/coachSignup';

class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      form:"user"
    }
  }


  componentDidMount(){
    if(JSON.parse(localStorage.getItem("data"))){
      window.location = "/"
    }
  }

    render(){
      const { form } = this.state;
        return (
            <div>
              
        <br/><br/>
        <section class="main general">
        <BackgroundVideo
          poster="http://d2xhaclmiois39.cloudfront.net/images/booyafitness_sizzle_promo_final_snapshot.png"
          src="https://dadbxlstbmqt1.cloudfront.net/booyafitness_sizzle_promo_final.mp4"
        />

            <div className="row">      
            <div className="large-5 small-12 large-centered columns form-border signup_form border-top-radius-0 form-footer-part" style={{ background:'#fff' }}>
          <div class="action" style={{ marginTop:'-1cm' }}>
            <button class={form === "user" ? "button fl button-active" : "button fl"} style={{ marginRight:'10px', width:'45%' }} onClick={() => this.setState({form:"user"})} type="button">User</button>
            <button class={form === "coach" ? "button fl button-active" : "button fl"} style={{ marginLeft:'10px', width:'45%' }} onClick={() => this.setState({form:"coach"})} type="button">Coach</button>
          </div>
          </div>
      

          {
            form === "user" ? 
            (
              <UserSignUp />
            ):(
              <CoachSignUp />
            )
          }
  
       
          </div>
          </section>
          <ToastsContainer store={ToastsStore} />
          </div>
        
        )
    }
}

export default SignUp;