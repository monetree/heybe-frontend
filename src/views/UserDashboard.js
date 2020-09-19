import React from 'react';
import { Link } from "react-router-dom";
import FormatUrl from "utils/UrlFormatter";


class UserDashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        playlists:[],
        videos: [],
        path:null
    }
  }

  associatedPlaylists = () => {
    let user_id = JSON.parse(localStorage.getItem("data")).id
    let url = FormatUrl(`/user/associated-playlists/?user_id=${user_id}`)
    fetch(url)
    .then(res => res.json())
    .then(res => {
        this.setState({
            playlists: res,
            path:window.location.pathname
        })
    })
  }

  allowedUsers = () => {
    let user_id = JSON.parse(localStorage.getItem("data")).id
    let url = FormatUrl(`/allowed-videos/?user_id=${user_id}`)
    fetch(url)
    .then(res => res.json())
    .then(res => {
        this.setState({
            videos: res
        })
    })
  }



    componentDidMount(){
        this.associatedPlaylists()
        this.allowedUsers()
    }



  render() {
      console.log("playlists: ",this.state.playlists)
    return (
      <div>
          <section className="workout-plans-container" style={{ background:'#f5f5f5' }}>
                <div className="small-12 columns" style={{  margin:'2cm 0 2cm 0' }}>
                    {
                        this.state.playlists.length ? 
                        (
                        <h3 className="text-center list-header">{this.props.title ? this.props.title : "Your playlists"}</h3>
                        ):(
                            ''
                        )
                    }
                
                    <ul className="wop-list">
                    {
                        this.state.playlists.length ? 
                        (
                        <React.Fragment>
                    {
                        this.state.playlists.map(playlist => {
                        return (                      
                            <li className="wop-card" style={playlist.workouts === 0 ? { marginRight:'12px', opacity:'0.4' } : { marginRight:'12px' }}>
                            <Link to={playlist.workouts > 0 ? `/player?playlist=${playlist.playlist_id}` : `${this.state.path}` }>
                            <div className="panel-header">
                            <h2>{playlist.title.length > 25 ? playlist.title.slice(0, 20)+" ..." : playlist.title}</h2>
                            </div>
                            <div className="thumbnail">
                            <img className="display-block" src={playlist.thumbnail.replace(/[(),']/g,'')} />
                            </div>
                            </Link>
                            <div className="panel-content border-bottom">
                                {
                                    playlist.active ?
                                    (
                                        <div style={{ textAlign:'center', verticalAlign: 'middle', fontSize:'20px',color:'#126F80' }}>
                                            <p><i class="fa fa-unlock" aria-hidden="true"></i></p>
                                        </div>
                                    ): (
                                        <div title="You are not acuthorized to access this playlist" style={{ textAlign:'center', verticalAlign: 'middle', fontSize:'20px', color:'#F95151' }}>
                                            <p><i class="fa fa-lock" aria-hidden="true"></i></p>
                                        </div>
                                    )
                                }
                            <div className="wop-description border-bottom">
                            {playlist.description.slice(0, 80)}
                            </div>
                            <div className="row collapse credentials-container">
                                <div className="columns large-4 small-4">
                                <div className="wop-info-value">{playlist.workouts}</div>
                                <div className="wop-info-name">Videos</div>
                                </div>
                                <div className="columns large-4 small-4">
                                <div className="wop-info-value">{playlist.duration ? playlist.duration.match(/\d+/)[0] : playlist.duration}</div>
                                <div className="wop-info-name">week</div>
                                </div>
                                <div className="columns large-4 small-4">
                                <div className="wop-info-value">
                                {parseInt(playlist.level.match(/\d+/)[0]) === 1 ?
                                    "High" : parseInt(playlist.level.match(/\d+/)[0]) === 2 ?
                                    "medium" : "low"
                                }
                                </div>
                                <div className="wop-info-name">
                                    <div>LEVEL</div>
                                </div>

                                </div>
                                    <div className="clearfix">
                                        <br/><br/><br/><br/>
                                        <h5>By {playlist.coach_name}</h5>
                                    </div>
                            
                            </div>
                
                            </div>
            
                        </li>
                        
                        )
                        })
                    }
                        </React.Fragment>
                        ):(
                            <li className="wop-card" style={{ fontSize:'15px' }}>
                            <h3 className="text-center list-header">No Playlists found </h3>
                            <br/>
                            <h2>&nbsp; <Link to="/coaches/" className="small button secondary coach tc" style={{ padding:'10px' }}>Meet our coaches</Link></h2>
                            </li>
                        )
                    }
                    </ul>
                </div>






                <div className="" style={{  margin:'2cm 0 2cm 0' }}>
        
                <h3 className="text-center list-header">My videos</h3>
                  
                    <ul className="wop-list">
                    {
                        this.state.videos.length ? 
                        (
                        <React.Fragment>
                    {
                        this.state.videos.map(playlist => {
                        return (                      
                            <li className="wop-card" style={playlist.workouts === 0 ? { marginRight:'12px', opacity:'0.4' } : { marginRight:'12px' }}>
                            <Link to={`/player?video=${playlist.id}` }>
                            <div className="panel-header">
                            <h2>{playlist.title.length > 25 ? playlist.title.slice(0, 20)+" ..." : playlist.title}</h2>
                            </div>
                            <div className="thumbnail">
                            <img className="display-block" src={playlist.thumbnail.replace(/[(),']/g,'')} />
                            </div>
                            </Link>
                            <div className="panel-content border-bottom">
                         
                            <div className="wop-description border-bottom">
                            {playlist.description.slice(0, 80)}
                            </div>
          
                
                            </div>
            
                        </li>
                        
                        )
                        })
                    }
                        </React.Fragment>
                        ):(
                            <li className="wop-card" style={{ fontSize:'15px' }}>
                            <h3 className="text-center list-header">No videos found </h3>
                            <br/>
                            <h2>&nbsp; <Link to="/coaches/" className="small button secondary coach tc" style={{ padding:'10px' }}>Meet our coaches</Link></h2>
                            </li>
                        )
                    }
                    </ul>
                </div>


            </section>
      </div>
    );
  }
}


export default UserDashboard;
