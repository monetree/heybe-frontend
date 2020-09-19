import React, { Suspense } from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import indexRoutes from "routes/index";
import { loadHomeScripts } from './loadScriptsForHomePage';
import { Link } from "react-router-dom";

var hist = createBrowserHistory();

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data : {},
      path: window.location.pathname
    }
  }

  componentDidMount() {
    this.setState({
      path: window.location.pathname
    })
    loadHomeScripts();
    let data = JSON.parse(localStorage.getItem("data"))
    this.setState({
      data: data ? data : {}
    })
  }

  logout = () => {
    this.setState({
      data: {}
    }, localStorage.removeItem("data"))
    window.location = "/"
  }


    render(){
        return (
          <div>
            <Router history={hist}>

                {
                  JSON.parse(localStorage.getItem("data")) && JSON.parse(localStorage.getItem("data")).type=== "coach" ? (
                    ''
                  ): (
                    <div class="fixed-custom">
                    <nav id="top-bar-main" class="top-bar" data-topbar>
                    <ul class="title-area">
                      <li class="name">
                        <a href="/">
                          <img alt="Booya-logo-white" src="/assets/kit-logo-white.png" />
                        </a>
                        </li>
                        <li class="toggle-topbar menu-icon" style={{ color:'#fff', fontSize:'20px' }}>
                          <i class="fa fa-bars" aria-hidden="true"></i>
                        </li>
                    </ul>
                    <section class="top-bar-section bold">
                      <ul class="pull-right">
                        <li><Link to='/videos'>Workouts</Link></li>
                        <li><Link to='/coaches'>Coaches</Link></li>
                        {
                          this.state.data && this.state.data.type === "coach" ? 
                          (
                            ''
                          ): (
                            <li><Link to='/pricing'>Pricing</Link></li>
                          )
                        }
                       
        
                        {
                          this.state.data.id ? 
                          (
                            <React.Fragment>
                            {
                              this.state.data.type === "coach" ? 
                              (
                                <li class="has-dropdown">
                              <a href="#">{this.state.data.name} &nbsp;&nbsp;</a>
                              <ul class="dropdown">
                                <li><Link to='/coach/dashboard'>Dashboard</Link></li>
                                <li><Link to='/change-password/?type=coach'>Change Password</Link></li>
                                <li onClick={this.logout}><a href="#">Logout</a></li>
                              </ul>
                            </li>
                              ): this.state.data.type === "user"? (
                          <li class="has-dropdown">
                          <a href="#">{this.state.data.name} &nbsp;&nbsp;</a>
                          <ul class="dropdown">
                            <li><Link to='/user/dashboard'>Dashboard</Link></li>
                            <li><Link to='/change-password/?type=user'>Change Password</Link></li>
                            <li onClick={this.logout}><a href="#">Logout</a></li>
                          </ul>
                        </li>
                              ) : (
                                ''
                              )
                            }
                          </React.Fragment>
                 
                          ):(
                            <React.Fragment>
                            <li><Link to='/signin'>Sign in</Link></li>
                            <li><Link to='/signup'>Sign Up</Link></li>
                          </React.Fragment>
                            
                          )
                        }
                  
        
        
                          {
                            localStorage.getItem("data") ? (
                              <span>
                                {
                                  JSON.parse(localStorage.getItem("data")).type === "user" ? 
                                  (
                                    <li class="special-tariff-wrap" style={{ display: 'none' }}>
                                        <Link to='/signup'  class="button header special-tariff">START YOUR FREE MONTH</Link>
                                    </li>
                                  ) : (
                                    ''
                                  )
                                }
                              </span>
                            ) : (
                              <li class="special-tariff-wrap" style={{ display: 'none' }}>
                              <Link to='/signup'  class="button header special-tariff">START YOUR FREE MONTH</Link>
                          </li>
                            )
                          }
                   
                      </ul>
                    </section>
                  </nav>
                    </div>
             
             
                  )
                }
       
      {/* <Router history={hist}> */}
        <Suspense fallback={<div style={{ position: 'absolute', top: '0%', left: "18%" }}>
            <img src="https://cdn.dribbble.com/users/189524/screenshots/2822794/silhouette-solo-loader-dribbble_v2.gif" alt="loader"></img>
            </div>}>
          <Switch>
            {indexRoutes.map((prop, key) => {
              return <Route exact path={prop.path} key={key} component={prop.component} />;
            })} 
          </Switch>
        </Suspense>
      {/* </Router> */}

{/* <footer>
<div class="row">
  <div class="large-3  small-12 columns">
    <ul class="brand">
      <li>&copy;2019 Booya Fitness, Inc.</li>
    </ul>
  </div>
  <div class="large-6 small-12 columns links-wrap">
    <ul class="links centered clearfix">
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="faqs/browse.html">FAQs</a></li>
      <li><a href="terms.html">Terms</a></li>
      <li><a href="partners/browse.html#sponsors">Sponsors</a></li>
    </ul>
  </div>
  <div class="large-3 small-12 columns">
    <ul class="icons">
      <li><a href="http://instagram.com/booyafitness" target="_blank" title="Instagram"><i class='fa fa-instagram'></i></a></li>
      <li><a href="https://www.facebook.com/BooyaFitness" target="_blank" title="Facebook"><i class='fa fa-facebook'></i></a></li>
      <li><a href="https://twitter.com/booyafitness" target="_blank" title="Twitter"><i class='fa fa-twitter'></i></a></li>
      <li><a href="https://www.youtube.com/channel/UCEgVOJ1tv12yiwMgraZYLZQ" target="_blank" title="Youtube"><i class='fa fa-youtube-square'></i></a></li>
    </ul>
  </div>
</div>
</footer> */}
</Router>
      </div>
        )
    }
}


export default App;