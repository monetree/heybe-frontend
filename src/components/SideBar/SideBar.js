import React from "react";
import { Link } from "react-router-dom";
import FormatUrl from "utils/UrlFormatter";
import {ToastsContainer, ToastsStore} from 'react-toasts';

class SideBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showmodal:false,
            url:'',
            manageprofile:false,
            toggles:{},
            coachname:null,
            coach:[],
            sidebar:false,
        }
    }

    submitForm = () => {
        let coach_id = JSON.parse(localStorage.getItem("data")).id
        let url = FormatUrl(`/coach/bio/?coach_id=${coach_id}&url=${this.state.url}`)
        fetch(url)
        .then(res => res.json())
        .then(res => {
            if(res.code === 200){
                ToastsStore.success("Success",3000,"toast-box-success")
                this.setState({
                    showmodal:false
                })
            } else {
                ToastsStore.error("Internal server error",3000,"toast-box-success")
            }
        }).catch(err => {
            ToastsStore.error("Internal server error",3000,"toast-box-success")
        })
    }

    handleSidebar = () => {
      this.setState({
        sidebar: !this.state.sidebar
      })
    }

    getCoach = () => {
      let data = JSON.parse(localStorage.getItem("data"))
  
      let coach_id = data.id;
      let url = FormatUrl(`/coach/bio/?coach_id=${coach_id}`)
      fetch(url)
      .then(res => res.json())
      .then(res => {
          if(res.length){
            this.setState({
                coach: res[0]
            })
        } else {
          window.location = "/" 
        }
      })
    }

    componentDidMount(){
      let data = JSON.parse(localStorage.getItem("data"))

      if(data){
        if(data.type === "coach"){
          this.setState({
            coachname:data.name,
            is_coach:true
          })
        } else {
          return
        }
      } else {
        return
      }
        this.getCoach()
        this.getToggles()
        
    }

    getToggles = () => {
        let coach_id = JSON.parse(localStorage.getItem("data")).id
        let url = FormatUrl(`/coach/toggle-section/?coach_id=${coach_id}`)
        fetch(url)
        .then(res => res.json())
        .then(res => {
         
          if(res.length){
            this.setState({
              toggles:res[0]
            })
          } else {
            this.setState({
              toggles:{'bio': true, 'workout': true, 'playlist': true, 'statistics': true}
            })
          }
        }) 
      }

      handleToggle = (key) => {
        let toggles = this.state.toggles;
        let data = {
          coach_id:JSON.parse(localStorage.getItem("data")).id,
          bio:toggles.bio,
          workout:toggles.workout,
          playlist:toggles.playlist,
          statistics:toggles.statistics
        }
        if(data[key]){
          data[key] = false;
        } else {
          data[key] = true;
        }
        let url = FormatUrl(`/coach/toggle-section/`)  
        fetch(url, {
          method: 'post',
          headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
          })
          .then(response => response.json())
          .then(res => {
              if(res.code === 200){
                ToastsStore.success("Success",3000,"toast-box-success")
              } else {
                ToastsStore.error("Internal server error",3000,"toast-box-success")
              }
              this.getToggles()
    
          }).catch(err => {
              ToastsStore.error("Internal server error",3000,"toast-box-success")
          })
    
      }

      logout = () => {
        localStorage.removeItem("data")
        window.location = "/"
      }

    render(){
        let coach = this.state.coach;
        return (
          <div>
              {
              this.state.showmodal ?
              (
              <div class="image-modal" id="modal" style={{ background:'transparent',boxShadow:'none' }}>
                <div class="row">
                <div class="large-12 columns general-container">
                    <div class="row form-block text-center">
                      <div class="large-5 small-12 large-centered columns form-border signup_form border-bottom-radius-0">
                          <div class="row collapse">
                            <div class="small-12 large-12 columns">
                                <div class="field">
                                  <input className="form-control" defaultValue={coach.url} onChange={(e) => this.setState({ url: e.target.value })} placeholder="Enter name" type="text" />              
                                </div>
                            </div>
                            <div class="small-12 large-12 columns">
                                <div class="field">
                                  <span>Your url will be as below</span>
                                  <br/><br/>
                                  <span className="bold" style={{ color:'#F95151' }}>{window.location.hostname}/{this.state.url ? this.state.url: coach.url}</span>
                                </div>
                            </div>
                          </div>
                          <div class="actions">
                            <button class="button expand" type="button" onClick={this.submitForm}>Submit</button>
                            <button class="button expand" type="button" onClick={() => this.setState({showmodal:false})}>Close</button>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
              </div>
              ):(
              ''
              )
              }
            { this.state.manageprofile ? (
            <div class="image-modal" id="modal" style={{ background:'lightgrey',boxShadow:'none', height:'auto' }}>
            <div id="app-cover">
                <div class="toggler-row">
                  <div class="toggle-button-cover">
                      <div class="button-cover">
                        <div class="tg-list">
                            <div class="tg-list-item">
                              <h4>Bio</h4>
                              <input class="tgl tgl-light" id="cb2" type="checkbox" onClick={()=> this.handleToggle('bio')} checked={!this.state.toggles.bio ? false : true}/>
                              <label class="tgl-btn" for="cb2"></label>
                            </div>
                        </div>
                      </div>
                  </div>
                  <div class="toggle-button-cover">
                      <div class="button-cover">
                        <div class="tg-list">
                            <div class="tg-list-item">
                              <h4>Workout</h4>
                              <input class="tgl tgl-light" id="cb2" type="checkbox" onClick={()=> this.handleToggle('workout')} checked={!this.state.toggles.workout ? false : true} />
                              <label class="tgl-btn" for="cb2"></label>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="toggler-row">
                  <div class="toggle-button-cover">
                      <div class="button-cover">
                        <div class="tg-list">
                            <div class="tg-list-item">
                              <h4>Playlist</h4>
                              <input class="tgl tgl-light" id="cb2" type="checkbox" onClick={()=> this.handleToggle('playlist')} checked={!this.state.toggles.playlist ? false : true}/>
                              <label class="tgl-btn" for="cb2"></label>
                            </div>
                        </div>
                      </div>
                  </div>
                  <div class="toggle-button-cover">
                      <div class="button-cover">
                        <div class="tg-list">
                            <div class="tg-list-item">
                              <h4>Statistics</h4>
                              <input class="tgl tgl-light" id="cb2" type="checkbox" onClick={()=> this.handleToggle('statistics')} checked={!this.state.toggles.statistics ? false : true}/>
                              <label class="tgl-btn" for="cb2"></label>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
            <p style={{ textAlign:'center' }}><button class="button" type="button button-sm" onClick={() => this.setState({manageprofile:false})}>Cancel</button></p>
            </div>
            ):('') }
            <nav id="sidebar" className={this.state.sidebar ? "active" : ""} style={this.props.style ? this.props.style : { zIndex:'1000' }}>
          <div class="custom-menu">
              <button type="button" id="sidebarCollapse" class="btn btn-primary" onClick={this.handleSidebar}>
              <i class="fa fa-bars"></i>
              <span class="sr-only">Toggle Menu</span>
              </button>
          </div>
          <div class="p-4">
              <div className="row">
                <center><img style={{ width:'100px', height:'100px', borderRadius:'50%' }} src={coach.logo} /></center>
                <h6 className="tc" style={{ color:'#fff' }}>{this.state.coachname}</h6>
                <div className="row">
                    <div className="small-12 columns">
                      <hr/>
                      <div>
                          {coach.bio}
                      </div>
                    </div>
                </div>
              </div>
              <ul class="list-unstyled components mb-5">
                <li>
                    <Link className="tc" style={{ fontSize:'18px' }} to="/coach/dashboard">Home</Link>
                </li>
                <li>
                    <Link className="tc" style={{ fontSize:'18px' }} to="/uploader/">Upload Video</Link>
                </li>
                <li>
                  {
                    window.location.pathname === "/coach/dashboard/" ? 
                    (
                      <a href="#create_playlist" className="tc" style={{ fontSize:'18px' }} >Create Playlist</a>
                    ):(
                      <Link to="/coach/dashboard/?down=yes" className="tc" style={{ fontSize:'18px' }} >Create Playlist</Link>
                    )
                  }
                    
                </li>
                <li>
                    <a href="#" className="tc" style={{ fontSize:'18px' }} onClick={() => this.setState({showmodal: true})}>Profile link</a>
                </li>
                <li>
                    <a href="#" className="tc" style={{ fontSize:'18px' }} onClick={() => this.setState({manageprofile: !this.state.manageprofile})}>Manage Profile</a>
                </li>
                <li>
                <Link to='/change-password/?type=coach' className="tc" style={{ fontSize:'18px' }}>Change password </Link>
                </li>
                <li>
                    <a href="#" className="tc" style={{ fontSize:'18px' }} onClick={this.logout}>Logout </a>
                </li>
              </ul>
          </div>
          </nav>
            </div>
        )
    }
}

export default SideBar;