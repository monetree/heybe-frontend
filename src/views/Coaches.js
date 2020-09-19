import React from 'react'
import { loadHomeScripts } from 'utils/loadScriptsForHomePage';
import FormatUrl from "utils/UrlFormatter";
import { Link } from "react-router-dom";
import SideBar from '../components/SideBar/SideBar';
import "../views/sidebar.css";

class Coaches extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      coaches:[],
      is_coach: false
    }
  }

  componentDidMount(){
    let data = localStorage.getItem("data")
    if(data){
      if( JSON.parse(data)["type"] === "coach"){
        this.setState({
          is_coach: true
        })
      }
    }

    // document.getElementById("top-bar-main").classList.remove("expanded")
    // document.getElementsByTagName('body')[0].id = 'workout_plan_authors_index';
    loadHomeScripts();
    let url = FormatUrl(`/coach/bio/`)
    fetch(url)
    .then(res => res.json())
    .then(res => {
        if(res.length){
            this.setState({
                coaches: res
            })
        } else {
          this.setState({
            coaches: []
        })
        }
    })
  }


    render(){
        return (
            <section className="main workout_plan_authors-index" style={this.state.is_coach ? { marginTop:'-60px' } : {}}>
         
              {
                this.state.is_coach && (
                  <SideBar />
                )
              }
              <br/>
              <div className={ this.state.is_coach ? "dashboards-content" : "dashboards-content-inactive" }>
              <div className="row">
              <div className="large-12 columns">
                <div className="row subheader">      
                  <div className="large-6 small-12 columns">
                    <h2 style={{ color:'#126F80' }}>Meet Our Coaches</h2>
                  </div>
                  <div className="large-6 small-12 columns">
                    <h2>&nbsp; <Link to="/coach/signup" className="small button secondary coach">Apply to Coach</Link></h2>
                  </div>
                </div>
                <ul className="large-block-grid-3 partner-list">
                  {
                    this.state.coaches.map(coach => {
                      return (
                        <li>
                          {
                            localStorage.getItem("data") ? 
                            (
                              <Link to={coach.url ? coach.url : coach.name}>
                                <img className="coaches" alt="Convert?crop=0,0,300,300&cache=true" src={coach.logo} style={{ cursor:'pointer !important' }} />
                                <h4>{coach.name}</h4>
                              </Link>   
                            ):(
                              <Link to={coach.url ? coach.url : coach.name}>
                              <img className="coaches" alt="Convert?crop=0,0,300,300&cache=true" src={coach.logo} style={{ cursor:'pointer !important' }} />
                              <h4>{coach.name}</h4>
                            </Link>   
                            )
                          } 
                        </li>
                      )
                    })
                  }

                </ul>
              </div>
            </div>
          
              </div>
          
          </section>
        )
    }
}

export default Coaches;