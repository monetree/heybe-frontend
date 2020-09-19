import React from 'react';
import { Link } from "react-router-dom";
import BackgroundVideo from "../components/BackgroundVideo";

class Home extends React.Component {
    constructor(props){
      super(props);
      this.state = {

      }
    }

    componentDidMount(){
      let data = JSON.parse(localStorage.getItem("data"));
      if(data){
        if(data.type === "coach"){
          this.props.history.push("/coach/dashboard")
        }
      } else {
        return
      }
    }

    render(){
        return (
            <div>
            <div id="flash_msg">
              <div id="messaging" className="messaging-fixed">
    
              </div>
            </div>
    
            <section className="main home-index">
    
              <section className="hero">
              <BackgroundVideo
              poster="http://d2xhaclmiois39.cloudfront.net/images/booyafitness_sizzle_promo_final_snapshot.png"
              src="https://dadbxlstbmqt1.cloudfront.net/booyafitness_sizzle_promo_final.mp4"
            />
                <div className="hero-container">
                  <div className="hero-inner-container">
                    <div className="video-upper-texts">
                      <h1>
                        Getting you <span className="sweating">sweating</span> in seconds
                      </h1>
                      <p>
                        Every type of fitness class you can imagine.
                      </p>
                      <Link to={JSON.parse(localStorage.getItem("data")) ? "/pricing" : "/signup"} className="button">Start your free month</Link>
                    </div>

                  </div>
                </div>
              </section>
          
              <section className="featured-fitness-container text-center">
                <div className="featured-title">
                  <h1>EVERY FITNESS <span className="blue">CLASS</span> YOU CAN IMAGINE</h1>
                  <p>Go with what you love or try something new.</p>
                </div>
    
                <div className="genres">
                 
                 
                <div className="row expand">
                      <div className="small-12 columns">
    
                      <div className="genre-container">
                        <Link to="/videos?search=barre">
                          <div className="genre-info">
                            <div className="genre-title">Barre</div>
                            <ul>
                              <li>Strengthens core and improves posture</li>
                              <li>Sculpts arms, back and legs without putting stress on joints</li>
                              <li>Improves flexibility and balance</li>
                            </ul>
    
                          </div>
                          <div className="featured-genre">
                            <img alt="Barre" height="240" src="http://d2xhaclmiois39.cloudfront.net/images/Barre.jpg" width="377" />
                          </div>
                        </Link>
                      </div>
        
                      <div className="genre-container">
                      <Link to="/videos?search=pilates">
                          <div className="genre-info">
                            <div className="genre-title">Pilates</div>
                            <ul>
                              <li>Helps ensure proper body alignment </li>
                              <li>Sculpts and tones muscles </li>
                              <li>Strengthens core</li>
                            </ul>
    
                          </div>
                          <div className="featured-genre">
                            <img alt="Pilates" height="240" src="http://d2xhaclmiois39.cloudfront.net/images/Pilates.jpg" width="377" />
                          </div>
                        </Link>
                      </div>

                      <div className="genre-container">
                      <Link to="/videos?search=barre">
                          <div className="genre-info">
                            <div className="genre-title">Barre</div>
                            <ul>
                              <li>Strengthens core and improves posture</li>
                              <li>Sculpts arms, back and legs without putting stress on joints</li>
                              <li>Improves flexibility and balance</li>
                            </ul>
    
                          </div>
                          <div className="featured-genre">
                            <img alt="Barre" height="240" src="http://d2xhaclmiois39.cloudfront.net/images/Barre.jpg" width="377" />
                          </div>
                        </Link>
                      </div>
    
                </div>
                </div>
                  <div className="row expand">
                    <div className="small-12 columns">
    
    
                      <div className="genre-container">
                      <Link to="/videos?search=hiit">
                          <div className="genre-info">
                            <div className="genre-title">HiiT</div>
                            <ul>
                              <li>Burns more calories in a shorter period of time than traditional cardio </li>
                              <li>Boosts metabolism to burn more calories in the 24 hours following the workout </li>
                              <li>Improves endurance</li>
                            </ul>
    
                          </div>
                          <div className="featured-genre">
                            <img alt="Hiit" height="240" src="http://d2xhaclmiois39.cloudfront.net/images/HiiT.jpg" width="377" />
                          </div>
                        </Link>
                      </div>
    
    
                      <div className="genre-container">
                      <Link to="/videos?search=sports+conditioning">
                          <div className="genre-info">
                            <div className="genre-title">Sports Conditioning</div>
                            <ul>
                              <li>Improves overall athletic performance </li>
                              <li>Increases power and speed  </li>
                              <li>Improves agility and responsiveness</li>
                            </ul>
    
                          </div>
                          <div className="featured-genre">
                            <img alt="Sports_conditioning" height="240" src="http://d2xhaclmiois39.cloudfront.net/images/Sports_Conditioning.jpg" width="377" />
                          </div>
                        </Link>
                      </div>
    
                      <div className="genre-container">
                      <Link to="/videos?search=dance">
                          <div className="genre-info">
                            <div className="genre-title">Dance (Ethnic)</div>
                            <ul>
                              <li>Burns calories and improves cardiovascular health</li>
                              <li>Improves coordination </li>
                              <li>Relieves stress</li>
                            </ul>
    
                          </div>
                          <div className="featured-genre">
                            <img alt="Dance_(ethnic)" height="240" src="http://d2xhaclmiois39.cloudfront.net/images/Dance_(Ethnic).jpg" width="377" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
    
 
                  <div id="more-genres">
                    <div className="row expand">
                      <div className="small-12 columns">
    
                        <div className="genre-container">
                        <Link to="/videos?search=yoga">
                            <div className="genre-info">
                              <div className="genre-title">Beginner Yoga</div>
                              <ul>
                                <li>Helps align your body and mind </li>
                                <li>Builds strength necessary to progress in your yoga practice </li>
                                <li>Relieves stress</li>
                              </ul>
    
                            </div>
                            <div className="featured-genre">
                              <img alt="Beginner_yoga" height="240" src="http://d2xhaclmiois39.cloudfront.net/images/Beginner_Yoga.jpg" width="377" />
                            </div>
                          </Link>
                        </div>
    
                        <div className="genre-container">
                        <Link to="/videos?search=sculpting">
                            <div className="genre-info">
                              <div className="genre-title">Body Weight Sculpting</div>
                              <ul>
                                <li>Builds strength using your body’s own weight </li>
                                <li>Improves core strength and balance </li>
                                <li>Burns fat and boosts metabolism</li>
                              </ul>
    
                            </div>
                            <div className="featured-genre">
                              <img alt="Body_weight_sculpting" height="240" src="http://d2xhaclmiois39.cloudfront.net/images/Body_Weight_Sculpting.jpg" width="377" />
                            </div>
                          </Link>
                        </div>
    
    
                        <div className="genre-container">
                        <Link to="/videos?search=bootcamp">
                            <div className="genre-info">
                              <div className="genre-title">Bootcamp</div>
                              <ul>
                                <li>Increases calorie burn by mixing cardio with strength training</li>
                                <li>Provides a challenging and interesting workout</li>
                                <li>Helps build lean muscle mass</li>
                              </ul>
    
                            </div>
                            <div className="featured-genre">
                              <img alt="Bootcamp" height="240" src="http://d2xhaclmiois39.cloudfront.net/images/Bootcamp.jpg" width="377" />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
    
                    <div className="row expand">
                      <div className="small-12 columns">
                        <div className="genre-container">
                        <Link to="/videos?search=dance">
                            <div className="genre-info">
                              <div className="genre-title">Dance (Jazz)</div>
                              <ul>
                                <li>Builds muscle strength, especially in the lower body</li>
                                <li>Improves coordination</li>
                                <li>Improves endurance </li>
                              </ul>
                            </div>
    
                            <div className="featured-genre">
                              <img alt="Dance_(jazz)" height="240" src="http://d2xhaclmiois39.cloudfront.net/images/Dance_(Jazz).jpg" width="377" />
                            </div>
                          </Link>
                        </div>
    
                        <div className="genre-container">
                        <Link to="/videos?search=dance">
                            <div className="genre-info">
                              <div className="genre-title">Dance (Pop)</div>
                              <ul>
                                <li>Burns calories while having fun </li>
                                <li>Reduces stress </li>
                                <li>Increases energy and boosts mood</li>
                              </ul>
    
                            </div>
                            <div className="featured-genre">
                              <img alt="Dance_(pop)" height="240" src="http://d2xhaclmiois39.cloudfront.net/images/Dance_(Pop).jpg" width="377" />
                            </div>
                          </Link>
                        </div>
    
    
                        <div className="genre-container">
                        <Link to="/videos?search=core">
                            <div className="genre-info">
                              <div className="genre-title">Core</div>
                              <ul>
                                <li>Creates strong muscles to help improve athletic performance </li>
                                <li>Improves posture and balance </li>
                                <li>Lowers the risk of injury and reduces back pain</li>
                              </ul>
    
                            </div>
                            <div className="featured-genre">
                              <img alt="Core" height="240" src="http://d2xhaclmiois39.cloudfront.net/images/Core.jpg" width="377" />
                            </div>
                          </Link>
                        </div>
    
                      </div>
                    </div>
    
                    <div className="row expand">
                      <div className="small-12 columns">
    
                        <div className="genre-container">
                        <Link to="/videos?search=prenatal">
                            <div className="genre-info">
                              <div className="genre-title">Prenatal</div>
                              <ul>
                                <li>Boosts energy and improves mood</li>
                                <li>Reduces pregnancy discomforts</li>
                                <li>Helps make birth and postpartum recovery easier</li>
                              </ul>
    
                            </div>
                            <div className="featured-genre">
                              <img alt="Prenatal" height="240" src="http://d2xhaclmiois39.cloudfront.net/images/Prenatal.jpg" width="377" />
                            </div>
                          </Link>
                        </div>
    
    
                        <div className="genre-container">
                        <Link to="/videos?search=cardio">
                            <div className="genre-info">
                              <div className="genre-title">
                                Cardio Yoga
              </div>
    
                              <ul>
                                <li>Balances traditional yoga moves with increased calorie burn</li>
                                <li>Improves strength and flexibility</li>
                                <li>Balances mood </li>
                              </ul>
    
                            </div>
                            <div className="featured-genre">
                              <img alt="Cardio_yoga" height="240" src="http://d2xhaclmiois39.cloudfront.net/images/Cardio_Yoga.jpg" width="377" />
                            </div>
                          </Link>
                        </div>
    
                        <div className="genre-container">
                        <Link to="/videos?search=ballet">
                            <div className="genre-info">
                              <div className="genre-title">Ballet</div>
                              <ul>
                                <li>Builds long, lean muscles</li>
                                <li>Improves posture and body awareness</li>
                                <li>Develops strong core muscles</li>
                              </ul>
    
                            </div>
                            <div className="featured-genre">
                              <img alt="Ballet" height="240" src="http://d2xhaclmiois39.cloudfront.net/images/Ballet.jpg" width="377" />
                            </div>
                          </Link>
                        </div>
    
    
                      </div>
                    </div>
    
                    <div className="row expand">
                      <div className="small-12 columns">
                        <div className="genre-container">
                        <Link to="/videos?search=strength+conditioning">
                            <div className="genre-info">
                              <div className="genre-title">Strength Conditioning</div>
                              <ul>
                                <li>Promotes fat burning even after workout is finished</li>
                                <li>Improves strength and muscle tone</li>
                                <li>Improves athletic performance</li>
                              </ul>
    
                            </div>
    
                            <div className="featured-genre">
                              <img alt="Strength_conditioning" height="240" src="http://d2xhaclmiois39.cloudfront.net/images/Strength_Conditioning.jpg" width="377" />
                            </div>
                          </Link>
                        </div>
    
    
                        <div className="genre-container">
                        <Link to="/videos?search=boxing">
                            <div className="genre-info">
                              <div className="genre-title">Boxing</div>
                              <ul>
                                <li>Provides total body sculpting </li>
                                <li>Improves flexibility and balance </li>
                                <li>Increases mind-body connection</li>
                              </ul>
    
                            </div>
    
                            <div className="featured-genre">
                              <img alt="Yoga_boxing" height="240" src="http://d2xhaclmiois39.cloudfront.net/images/Yoga_Boxing.jpg" width="377" />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div><p id="reveal-more-genres">See More <br />&darr;</p></div>
                
                </div>
              </section>
   
              <section className="pricing-container">
                <div className="row text-center">
                  <div className="large-5 large-offset-1 small-12 columns">
                    <h1 className="inline"><span>workout for</span><br />
                      <span className="wide">30</span>
                      <div id="days" className="inline rotate thin">days</div>
                      <span className="wide">free</span>
                    </h1>
                  </div>
    
                  <div className="large-6 small-12 columns">
                    <Link to="/signup" className="button small">Sign Up</Link>
                    <p>Membership as low as $8.50 a month</p>
                  </div>
                </div>
              </section>
     
              <section className="final-promo-container text-center">
                <div className="row">
                  <div className="small-12 columns">
                    <h1>ARE YOU READY?</h1>
                    <Link to="/signup" className="button">Start your free month</Link>
    
                  </div>
                </div>
              </section>
    
            </section>
 
          </div>
        )
    }
}


export default Home;