import React from 'react';
import FormatUrl from "utils/UrlFormatter";
import Playlists from 'components/Playlists/Playlists';
import {ToastsContainer, ToastsStore} from 'react-toasts';
import Videos from 'components/Videos/Videos';
import { isFloat, toNumberString } from '../utils/customFunctions';
import SideBar from "../components/SideBar/SideBar"
import "../views/sidebar.css";


class Coach extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            coach:{},
            playlists:[],
            Keywords:[],
            equipments:[],
            videos:0,
            coach_id:null,
            toggles:{bio:true, statistics:true, workout:true, playlist: true},
            ratings:[],
            testimonialForm:false,
            testimonial:null,
            testimonials:[],
            current_testimonial:null,
            video_list :[],
            is_coach:false
        }
    }

    handleCurrentTestimonial = (id=null, arrow_type=null) => {
      let counter = 0;
      let temp = 0;
      let prev = null
      let current = null;;
      if(id && arrow_type===2){
        for(let testimonial of this.state.testimonials){
          if(testimonial.id === id){
            counter+=1
          }
          if(counter > 0){
            this.setState({
              current_testimonial: JSON.stringify(testimonial)
            })
          }
        }
        return
      }
      if(id && arrow_type===1){
        for(let testimonial of this.state.testimonials){
          prev = current;
          current = testimonial;

          temp+=id
          if(testimonial.id === id){
            if(testimonial.id === temp){
              return 
            } else {
              counter+=1
            }
          }
          if(counter > 0){
            this.setState({
              current_testimonial: JSON.stringify(prev)
            })
          }
        }
        return
      }

      this.setState({current_testimonial: JSON.stringify(this.state.testimonials[0])})
    }

    getRating = () => {
      let coach_id = this.state.coach_id;
      let url = FormatUrl(`/review/?coach_id=${coach_id}`);
      fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          ratings: res
        })
      })
    }

    getTestimonials = () => {
      let coach_id = this.state.coach_id;
      let url = FormatUrl(`/testimonial/?coach_id=${coach_id}`); 
      fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          testimonials: res.length ? res : []
        }, () => this.handleCurrentTestimonial())
      })
    }

    handleTestimonialSubmit = () => {
      let testimonial = this.state.testimonial;
      if(!testimonial || testimonial.length < 1){
        ToastsStore.error("Testimonial required",3000,"toast-box-success")
        return
      }
      let coach_id = this.state.coach_id;
      let data = JSON.parse(localStorage.getItem("data"))
      let user_id = null;
      if(data){
        if(data.type === "user"){
          user_id = data.id
        } else {
          ToastsStore.error("Coach can't share testimonial..",3000,"toast-box-success")
          return 
        }
      } else {
        ToastsStore.success("Login to share rating..",3000,"toast-box-success")
        return
      }

      let url = FormatUrl(`/testimonial/?user_id=${user_id}&coach_id=${coach_id}&testimonial=${testimonial}`);
      fetch(url, {
        method: 'post',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            coach_id: coach_id,
            user_id: user_id,
            testimonial: testimonial
          })
        })
        .then(response => response.json())
        .then(res => {
          if(res.code  === 200){
            ToastsStore.success("Success ",3000,"toast-box-success")
            this.setState({testimonialForm: false}, () => this.getTestimonials())
          } else {
            ToastsStore.error("Internal server error ",3000,"toast-box-success")
          }
        }).catch(err => {
          ToastsStore.error("Internal server error ",3000,"toast-box-success")
        })
    }
    

    getKeywordsAndEquipments(){
      let coach_id = this.state.coach_id
      let url = FormatUrl(`/coach/keywords/equipments/?coach_id=${coach_id}`)
      fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          Keywords: res.keywords,
          equipments: res.equipments
        })
      })
    }


    getPlaylists(){
      let coach_id = this.state.coach_id
      let url = FormatUrl(`/coach/playlists/?coach_id=${coach_id}`)
      fetch(url)
      .then(res => res.json())
      .then(res => {
          this.setState({
              playlists: res
          })
      })
    }


    getVideoCount(){
      let coach_id = this.state.coach_id
      let url = FormatUrl(`/coach/videos/?coach_id=${coach_id}&count=yes`)
      fetch(url)
      .then(res => res.json())
      .then(res => {
          this.setState({
              videos: res
          })
      })
    }

    getUntrackedVideos = () =>{
        let coach_id = this.state.coach_id;
        let url = FormatUrl(`/coach/videos/?coach_id=${coach_id}`)
        fetch(url)
        .then(res => res.json())
        .then(res => {
            this.setState({
              video_list: res
            })
        })
    }


    callAll = () => {
      this.getKeywordsAndEquipments()
      this.getPlaylists()
      this.getVideoCount()
      this.getToggles()
      this.getRating()
      this.getTestimonials()
      this.getUntrackedVideos()
    }


    getCoachBio(){
    let name = this.props.match.params.name
    let url = FormatUrl(`/coach/bio/?name=${name}`)
    fetch(url)
    .then(res => res.json())
    .then(res => {
        this.setState({
            coach: res[0],
            coach_id: res[0]["coach_id"]
        }, () => this.callAll())
    })
    document.getElementsByTagName('body')[0].id = 'workout_plans_show';
  }


    componentDidMount(){
      // document.getElementById("top-bar-main").classList.remove("expanded")
      let data = localStorage.getItem("data")
      if(data){
        if( JSON.parse(data)["type"] === "coach"){
          this.setState({
            is_coach: true
          })
        }
      }
    
      this.getCoachBio()
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


    getToggles = () => {
      let coach_id = this.state.coach_id
      let url = FormatUrl(`/coach/toggle-section/?coach_id=${coach_id}`)
      fetch(url)
      .then(res => res.json())
      .then(res => {
        if(res.length){
          this.setState({
            toggles:res[0]
          })
        }
      }).catch(err => {
        console.log(err, "err")
      })  
    }


    render(){
      const ratings = this.state.ratings;
      let avg_rating = 0;
      if(ratings.length){
        let total_ratings = 0;
        for(let rating of ratings){
          total_ratings+=rating.rating
        }
        avg_rating = (total_ratings/(5*ratings.length))*5
      }

      if(isFloat(avg_rating)){
        if(parseInt(toNumberString(avg_rating).split(".")[1]) > 5){
          avg_rating = Math.ceil(avg_rating)
        } else {
          avg_rating = Math.floor(avg_rating)
        }
      }


      let current_testimonial_id = null
      let current_testimonial = null
      if(this.state.current_testimonial){
        current_testimonial = JSON.parse(this.state.current_testimonial)
        if(current_testimonial){
          current_testimonial_id = current_testimonial["id"]
          current_testimonial = current_testimonial["testimonial"]
        }
      }

      const toggles = this.state.toggles;
      let show_bio = toggles.bio;
      let show_statistics = toggles.statistics;
      let show_workout = toggles.workout;
      let show_playlist = toggles.playlist;
      
      let coach_id = this.state.coach_id


        return (
            <section className="main workout_plans-show" style={this.state.is_coach ? { marginTop:'-60px' } : {}}>
              {
                this.state.is_coach && (
                  <SideBar />
                )
              }
           
            <div id="workout_plan_id" className="hidden">185</div>
            <div id="show_full_calendar" className="hidden">false</div>
            <div className={ this.state.is_coach ? "dashboards-content" : "dashboards-content-inactive" }>
            <section className="hero-section" style={{backgroundImage: `url(${this.state.coach.banner})`, height:'300px'}}>
        
            </section>
            <section className="benefit-ribbon">
              <div className="row expand text-center">
                <div className="small-12 columns">
                </div>
              </div>
            </section>
            <section className="below-fold-container margin-bottom-10 coach-about-section-margin">
              <div className="row  height-equal-wrap margin-top-20">


              {
                !show_statistics ?
                (
                  <div className="large-3 small-12 columns inline-block first height-equal">
                  </div>
                ):(
           
                  <div className="large-3 small-12 columns inline-block first height-equal">
                  <h5> Included with workout plan</h5>
                  <ul className="why-list" style={{ margin:'0 0 0 45px', textAlign:'left' }}>
                    <li>{this.state.playlists.length} Playlists of workout </li>
                    <li>{this.state.videos} anywhere access videos
                    </li>
                    <li>On-demand access from any device</li>
                    <li>Take workouts with you, offline</li>
                  </ul>
                </div>
                )
              }
         

             {
               ! show_statistics ?
                (
                <div className="large-3 small-12 columns inline-block first height-equal">
                </div>
                ):(
                  <div className="large-3 small-12 columns inline-block second height-equal margin-bottom-20">
                  <div className="clearfix margin-bottom-20" />
                  <h5>Keywords</h5>
                  <div className="body">
                    <dl>
                      {
                        this.state.Keywords.map(Keyword => (
                          <span className="label radius secondary">{Keyword}</span>
                        ))
                      }
                    </dl>
                  </div>
                  <br/>
                  <h5>Equipments</h5>
                  <div className="body">
                    <dl>
                      {
                        this.state.equipments.map(equipment => (
                          <span className="label radius secondary">{equipment}</span>
                        ))
                      }

                    </dl>
                  </div>
                </div>
                )
              } 
        

     

                
                {
                  !show_bio ?
                  (
                    <div className="large-3 small-12 columns inline-block third height-equal">
                    </div>
                  ):(
                    <div className="large-3 small-12 columns inline-block third height-equal">
                      <h5>About</h5>
                      <div className="body">
                        <dl>
                        {this.state.coach.bio}
                        </dl>
                      </div>
                    </div>
                  )
                }

                 {
                  !show_bio ?
                  (
                    <div className="large-3 small-12 columns inline-block third height-equal">
                    </div>
                  ):(
                  <div className="large-3 small-12 columns inline-block fourth height-equal text-center">
                  <span>
                    <img alt="Convert?crop=0,0,300,300&cache=true" className="circular" height={300} src={this.state.coach.logo} width={300} />
                  </span>
                  <br />
                  Your coach
                  <br />
                  {this.state.coach.name}
                  <br/><br/>
                  <div>
                  {
                    avg_rating === 0 ?
                    (
                      <ul className="inline-ratings">
                        <li><i class="fa fa-heart inactive-no-hover" aria-hidden="true"></i></li>
                        <li><i class="fa fa-heart inactive-no-hover" aria-hidden="true"></i></li>
                        <li><i class="fa fa-heart inactive-no-hover" aria-hidden="true"></i></li>
                        <li><i class="fa fa-heart inactive-no-hover" aria-hidden="true"></i></li>
                        <li><i class="fa fa-heart inactive-no-hover" aria-hidden="true"></i></li>
                      </ul>
                    ) : avg_rating === 1 ? 
                    (
                      <ul className="inline-ratings">
                        <li><i class="fa fa-heart active-no-hover" aria-hidden="true"></i></li>
                        <li><i class="fa fa-heart inactive-no-hover" aria-hidden="true"></i></li>
                        <li><i class="fa fa-heart inactive-no-hover" aria-hidden="true"></i></li>
                        <li><i class="fa fa-heart inactive-no-hover" aria-hidden="true"></i></li>
                        <li><i class="fa fa-heart inactive-no-hover" aria-hidden="true"></i></li>
                      </ul>
                    ) : avg_rating === 2 ?  (
                      <ul className="inline-ratings">
                        <li><i class="fa fa-heart active-no-hover" aria-hidden="true"></i></li>
                        <li><i class="fa fa-heart active-no-hover" aria-hidden="true"></i></li>
                        <li><i class="fa fa-heart inactive-no-hover" aria-hidden="true"></i></li>
                        <li><i class="fa fa-heart inactive-no-hover" aria-hidden="true"></i></li>
                        <li><i class="fa fa-heart inactive-no-hover" aria-hidden="true"></i></li>
                      </ul>
                    ) : avg_rating === 3 ?  (
                      <ul className="inline-ratings">
                        <li><i class="fa fa-heart active-no-hover" aria-hidden="true"></i></li>
                        <li><i class="fa fa-heart active-no-hover" aria-hidden="true"></i></li>
                        <li><i class="fa fa-heart active-no-hover" aria-hidden="true"></i></li>
                        <li><i class="fa fa-heart inactive-no-hover" aria-hidden="true"></i></li>
                        <li><i class="fa fa-heart inactive-no-hover" aria-hidden="true"></i></li>
                      </ul>
                    ) : avg_rating === 4 ? (
                      <ul className="inline-ratings">
                        <li><i class="fa fa-heart active-no-hover" aria-hidden="true"></i></li>
                        <li><i class="fa fa-heart active-no-hover" aria-hidden="true"></i></li>
                        <li><i class="fa fa-heart active-no-hover" aria-hidden="true"></i></li>
                        <li><i class="fa fa-heart active-no-hover" aria-hidden="true"></i></li>
                        <li><i class="fa fa-heart inactive-no-hover" aria-hidden="true"></i></li>
                      </ul>
                    ) : (
                      <ul className="inline-ratings">
                        <li><i class="fa fa-heart active-no-hover" aria-hidden="true"></i></li>
                        <li><i class="fa fa-heart active-no-hover" aria-hidden="true"></i></li>
                        <li><i class="fa fa-heart active-no-hover" aria-hidden="true"></i></li>
                        <li><i class="fa fa-heart active-no-hover" aria-hidden="true"></i></li>
                        <li><i class="fa fa-heart active-no-hover" aria-hidden="true"></i></li>
                      </ul>
                    )
                  }

                  </div>
                  </div>
                  )
                }
  

    



                
              </div>
            </section>

            {
              this.state.testimonials.length ?
              (
                <section class="testimonal-section">
                <div class="bubble">
                <blockquote>
                    {!current_testimonial ? '' : current_testimonial}
                    <br/><br/>
                    
                  <span style={{ color:'#e92f4b', float:'left' }}><b> By Soubhagya pradhan</b></span>
                  <br/>
                  <span onClick={() => this.setState({testimonialForm: !this.state.testimonialForm})} style={{ color:'#e92f4b',float:'left', cursor:'pointer' }}><u>Add your testimonial</u></span>
  
                  <i onClick={()=>this.handleCurrentTestimonial(current_testimonial_id, 1)} class="fa fa-arrow-left pointer" style={{ fontSize:'30px',color:'#525E76', marginTop:'-50px', left:"-40px", position:'absolute' }} aria-hidden="true"></i>
                  <i onClick={()=>this.handleCurrentTestimonial(current_testimonial_id, 2)} class="fa fa-arrow-right pointer" style={{ fontSize:'30px',color:'#525E76', marginTop:'-50px', right:"-40px", position:'absolute' }} aria-hidden="true"></i>
                </blockquote>
                <br/>      
                </div>
              </section>
              ):(
                ''
              )
            }
            {
              this.state.testimonialForm ?
              (
                <div class="image-modal" id="modal" style={{ background:'transparent',boxShadow:'none' }}>
                <div class="row">
                  <div class="large-12 columns general-container">
                      <div class="row form-block text-center">
                      
                        <div class="large-5 small-12 large-centered columns form-border signup_form border-bottom-radius-0" style={{ background:'#fff' }}>
                        <i onClick={() => this.setState({testimonialForm: !this.state.testimonialForm})} class="fa fa-times pointer" style={{ float:'right', fontSize:'25px', color:'#ce1b47' }} aria-hidden="true"></i>
                          <img style={{ width:'100px',height:'100px', borderRadius:'50%' }} src={this.state.coach.logo} />
                          <p className="tc">Add testimonial for <b>{this.state.coach.name}</b></p>
                          <textarea onChange={(e) => this.setState({testimonial: e.target.value})} className="uploader-input" style={{ width:'100%', height:'100px', resize: 'vertical' }}>
                          </textarea>
                            <button class="button" style={{ marginTop:'10px' }} type="button" onClick={this.handleTestimonialSubmit}>Submit</button>
                        </div>
                      </div>
                  </div>
                </div>
                </div>
              ):(
                ''
              )
            }
            <section className="workout-plans-container">
            {
              !show_workout ?
              (
                ''
              ):(
                <Videos for_user={true} title="Workouts" video_list={this.state.video_list} />
              )
            }

            {
              !show_playlist ?
              (
                ''
              ):(
                <Playlists title="WORKOUTS INCLUDED IN THIS PLAN" />
              )
            }
            
     
            </section> 
     
  
              {
                !localStorage.getItem("data") ?
                (
                  <section>
                  <a name="getting-started" />
                  <div className="row">
                    <div className="large-6 columns">
                      <h1>Get Started on KIT Fitness</h1>
                        <p>1. Create Your Account</p>
                        <p>2. Confirm Your Subscription</p>
                        <p>3. Get Sweating in Seconds!</p>
                    </div>
                    <div className="large-6 columns">
                      <div className="auth_form_container bordered-concrete radius shadow">
                        <div id="form-signup-container">
                          <div className="text-center">
                              <fieldset>
                                <div className="row">
                                  <div className="small-12 columns">
                                  <input className="form-control" id="user_fname" onChange={(e) => this.setState({firstname: e.target.value})} placeholder="&#42; Enter first name" size="30" type="text" />
                                  </div>
                                  <div className="small-12 columns">
                                  <input className="form-control" id="user_lname" onChange={(e) => this.setState({lastname: e.target.value})} placeholder="&#42; Last name" size="30" type="text" />
                                  </div>
                                  <div className="small-12 columns">
                                  <input className="form-control" id="user_email" onChange={(e) => this.setState({email: e.target.value})} placeholder="&#42; Email" size="30" type="email" />
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="small-12 columns">
                                    <input className="form-control" onChange={(e) => this.setState({password: e.target.value})} placeholder="&#42; Password (8 characters minimum)" type="password" />
                                  </div>
                                  <div class="pass_confirmation small-12 columns">
                                    <input className="form-control" onChange={this.checkPassword} placeholder="&#42; Confirm password" type="password" />
                                  </div>
                                </div>
                              </fieldset>
                              <div class="row actions sign_up_actions">
                                <div class="small-12 columns">
                                  <button onClick={this.handleSubmit} class="button expand js-sign-up-button">Sign Up</button>
                                </div>
                              </div>
                              <br/>
                          </div>
                        </div>
                      </div>
                    </div>
    
                  </div>
                </section>
                ):(
                ''
                )
              }

              </div>
           
            <ToastsContainer store={ToastsStore} />
          </section>
    
        )
    }
}

export default Coach;















