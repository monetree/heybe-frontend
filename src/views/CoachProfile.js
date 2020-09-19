import React from 'react'
import { loadHomeScripts } from 'utils/loadScriptsForHomePage';


class CoachProfile extends React.Component{

  componentDidMount(){
    document.getElementById("top-bar-main").classList.remove("expanded")
    document.getElementsByTagName('body')[0].id = 'workout_plan_authors_show';
    loadHomeScripts();
  }


    render(){
        return (
            <div>          
              <br/>          
              <br/>          
              <br/>      
              
            <section className="coach-hero-section" style={{backgroundImage: 'url(https://d3nqjjn0fvaas1.cloudfront.net/api/file/5JBjiR41SHK0LXEib2l4?cache=true)'}}>
              <div className="hero-content">
                <div className="coach-container">
                  <h1 className="coach-name">Amy Caine&nbsp;<small className="small label success">Coach</small></h1>
                  <div className="coach-avatar">
                    <img alt="Convert?crop=0,0,300,300&cache=true" src="https://www.filepicker.io/api/file/PtzWNtzSuCey5teRE7AE/convert?crop=0,0,300,300&cache=true" />
                  </div>
                </div>
              </div>
            </section>
            <section className="bio-section">
              <div className="row">
                <div className="small-12 columns">
                  <h5>Amy Caine Biography</h5>
                  <div className="medium coach-bio">
                    AmyC is the fanatic runner, fitness junkie, and now expat living in China who writes Running Escapades! Running Escapades is a blog about her adventures while trying to balance running, fitness, healthy living, and the lessons she has learned through these experiences.
                  </div>
                </div>
              </div>
            </section>
            <section className="below-fold-container">
              <div className="row wop-card">
                <div className="large-4 small-12 columns">
                  <h2>Chilly Challenge</h2>
                  <div className="author-info">
                    by Amy Caine
                  </div>
                  <div className="thumbnail hide-for-medium-up">
                    <a href="../workout-plans/chilly-challenge-z8wedm.html"><img alt="5jbjir41shk0lxeib2l4?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/5JBjiR41SHK0LXEib2l4?cache=true" /></a>
                  </div>
                  <div className="medium description">
                    Stay in shape through the winter with this 4 week plan that will make you stronger and fitter. Each week you will be given 3 energizing workouts mixing cardio, strength and yoga, that will help you burn calories, build muscle, and tone up. This plan is a great cross training option for runners.
                  </div>
                  <div className="row collapse credentials-container">
                    <div className="columns large-4 small-4">
                      <div className="wop-info-value">24</div>
                      <div className="wop-info-name">workouts</div>
                    </div>
                    <div className="columns large-4 small-4">
                      <div className="wop-info-value">4</div>
                      <div className="wop-info-name">WEEKs</div>
                    </div>
                    <div className="columns large-4 small-4">
                      <div className="wop-info-value">High </div>
                      <div className="wop-info-name">
                        <div>Commitment</div>
                      </div>
                    </div>
                  </div>
                  <div className="row collapse icons-container">
                    <div className="equipment">
                      <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                      <div className="title">Yoga Mat</div>
                    </div>
                    <div className="equipment">
                      <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                      <div className="title">Dumbbells</div>
                    </div>
                  </div>
                  <div className="field">
                    <a href="../workout-plans/chilly-challenge-z8wedm.html" className="button expand success">View Workout Plan</a>
                  </div>
                </div>
                <div className="large-8 hide-for-small columns">
                  <div className="thumbnail">
                    <a href="../workout-plans/chilly-challenge-z8wedm.html"><img alt="5jbjir41shk0lxeib2l4?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/5JBjiR41SHK0LXEib2l4?cache=true" /></a>
                  </div>
                </div>
              </div>
            </section>
            <section className="promo-container">
              <div className="row text-center">
                <div className="large-6 small-12 columns first">
                  <h1 className="inline"><span className="thin">workout for</span><br />
                    <span className="wide">30</span>
                    <div id="days" className="inline rotate thin">days</div>
                    <span className="wide">free</span>
                  </h1>
                </div>
                <div className="large-6 small-12 columns second">
                  <a href="../signup.html" className="button rounded hero expand">Start your free month</a>
                </div>
              </div>
            </section>
            <div id="modal-signup" className="reveal-modal large">
              <h2>Intrigued? Watch The Full Workout!</h2>
              <form acceptCharset="UTF-8" action="https://www.booyafitness.com/" className="custom" id="form-signup" method="post"><div style={{margin: 0, padding: 0, display: 'inline'}}><input name="utf8" type="hidden" defaultValue="✓" /><input name="authenticity_token" type="hidden" defaultValue="CXy9qD6s9J8Ikf39LYiknYLp9wx4K6l6QcpQoOKR0DU=" /></div>
                <fieldset>
                  <div className="row">
                    <div className="small-12 columns">
                      <input id="user_fname" name="user[fname]" placeholder="* Enter first name" size={30} type="text" />
                    </div>
                    <div className="small-12 columns">
                      <input id="user_lname" name="user[lname]" placeholder="* Last name" size={30} type="text" />
                    </div>
                    <div className="small-12 columns">
                      <input id="user_email" name="user[email]" placeholder="* Email" size={30} type="email" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="small-12 columns">
                      <input id="user_password" name="user[password]" placeholder="* Password (8 characters minimum)" size={30} type="password" />
                    </div>
                    <div className="pass_confirmation small-12 columns">
                      <input id="user_password_confirmation" name="user[password_confirmation]" placeholder="* Confirm password" size={30} type="password" />
                    </div>
                  </div>
                  <div className="row collapse">
                    <div className="small-12 large-12 columns">
                      <input id="coupon" name="coupon" placeholder="Have a coupon or invite code?" type="text" />
                    </div>
                  </div>
                  <input id="user_is_classpass" name="user[is_classpass]" type="hidden" defaultValue="false" />
                  <input id="user_commit" name="commit" type="hidden" defaultValue="Sign Up" />
                </fieldset>
                <div className="errors hide">
                  <div data-alert className="alert-box">
                    <ul className="errors-list" />
                    <a href="#" className="close-error-icon js-close-error-icon">×</a>
                  </div>
                </div>
                <div className="row actions sign_up_actions">
                  <div className="small-12 columns">
                    <a href="javascript:void(0)" className="button expand js-sign-up-button">Sign Up</a>
                  </div>
                </div>
              </form>
              <a className="close-reveal-modal">×</a>
            </div>
            <input type="hidden" id="user-id" defaultValue />
            </div>
        )
    }
}

export default CoachProfile;