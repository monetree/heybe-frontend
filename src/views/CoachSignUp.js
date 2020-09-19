import React from 'react';
import FormatUrl from "utils/UrlFormatter";
import { loadHomeScripts } from 'utils/loadScriptsForHomePage';
import { Link } from "react-router-dom";
import BackgroundVideo from "../components/BackgroundVideo";
import {ToastsContainer, ToastsStore} from 'react-toasts';


class CoachSignUp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      firstname:'',
      lastname:'',
      email:'',
      phone:'',
      password:'',
      match:true
    }
  }

  componentDidMount(){
    document.getElementById("top-bar-main").classList.remove("expanded")
    if(JSON.parse(localStorage.getItem("data"))){
      this.props.history.push("/")
    }
    document.getElementsByTagName('body')[0].id = 'registrations_new';
    loadHomeScripts();
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
    let phone = this.state.phone;
    let password = this.state.password;
    let url = FormatUrl(`/coach/register/`)
    fetch(url, {
    method: 'post',
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: firstname+ " " + lastname,
        email: email,
        password: password,
        phone: phone
    })
    })
    .then(response => response.json())
    .then(res => {
        if (res["code"] === 200){
                let response = JSON.stringify({
                  "id": ["id"],
                  "name": res["name"],
                  "email": res["email"],
                  "type": "coach"
                }) 
                ToastsStore.success("Success",3000,"toast-box-success")
                localStorage.setItem("data", response)
                this.props.history.push("/")
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
        <section class="main general">
        <BackgroundVideo
          poster="http://d2xhaclmiois39.cloudfront.net/images/booyafitness_sizzle_promo_final_snapshot.png"
          src="https://dadbxlstbmqt1.cloudfront.net/booyafitness_sizzle_promo_final.mp4"
        />
        
        
          </section>
          <ToastsContainer store={ToastsStore} />
          </div>
        
        )
    }
}

export default CoachSignUp;