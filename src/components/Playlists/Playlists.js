import React from 'react';
import FormatUrl from "utils/UrlFormatter";
import { Link } from "react-router-dom";


class Playlists extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          playlists:[],
          Keywords:[],
          path:'',
          coach_id:null
        }
    }

    getKeywords(){
      let coach_id = this.state.coach_id;
      let url = FormatUrl(`/coach/keywords/equipments/?coach_id=${coach_id}`)
      fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          Keywords: res.keywords
        })
      })
    }

    getPlayLists(){
      let coach_id = this.state.coach_id;
      let url = FormatUrl(`/coach/playlists/?coach_id=${coach_id}`)
      fetch(url)
      .then(res => res.json())
      .then(res => {
          this.setState({
              playlists: res
          })
      })
    }

    fetchPlaylistAndKeyword(){
      this.getKeywords()
      this.getPlayLists()
    }


    getCoachId(){
      let coach_name = window.location.pathname.replace("/", "")
      let url = FormatUrl(`/coach/get_coach_id/?coach_name=${coach_name}`)
      fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          coach_id:res.coach_id
        }, () => this.fetchPlaylistAndKeyword())
      }).catch(err => {
        console.log(err)
      })
    }

    componentDidMount(){
      this.setState({
        path:window.location.pathname
      })
      if(window.location.pathname === "/coach/dashboard"){
        this.setState({
          coach_id: JSON.parse(localStorage.getItem("data")).id
        }, () => this.fetchPlaylistAndKeyword())
      } else {
        this.getCoachId()
      }
  }




  addToPlaylist = (playlist_id) => {
    this.props.addToPlaylist(playlist_id)
  }

  handleAssociatedUsers = (playlist_id) => {
    this.props.handleAssociatedUsers(playlist_id)
  }

    render(){
        return (
        <div>
          <div className="small-12 columns">
          <h3 className="text-center list-header">{this.props.title ? this.props.title : "Your playlists"}</h3>
          <center><hr style={{ width:'50%' }}/></center>
            <ul className="wop-list">
              {
                this.state.playlists.length ? 
                (
                  <React.Fragment>
              {
                this.state.playlists.map(playlist => {
                  return (                      
                      <li className="wop-card" style={{ marginRight:'12px' }}>
                      <Link to={playlist.workouts.length > 0 ? `/player?playlist=${playlist.id}` : `${this.state.path}` }>
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
                      <div className="row collapse credentials-container">
                        <div className="columns large-4 small-4">
                          <div className="wop-info-value">{playlist.workouts.length}</div>
                          <div className="wop-info-name">workouts</div>
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
                       
                        {
                          this.props.title ? (
                            <div className="clearfix">
                              <br/><br/><br/>
                                 <h5>Keywords</h5>
                                 <br/>
                                  <div className="body">
                                    <dl>
                                      {
                                        playlist.tags.match(/\w+/g).map(Keyword => (
                                          <span className="label radius secondary"><Link to={`/videos/?search=${Keyword}`}>{Keyword}</Link></span>
                                        ))
                                      }
                                    </dl>
                                  </div>
                            </div>
                          ):(
                            <React.Fragment>
                            <hr/>
                            <div className="row">
                                <div className="small-4 columns"><span title="Modify playlist" style={{ fontSize:'18px' }}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span></div>
                                <div className="small-4 columns"><span title="Handle asssociated users" onClick={() => this.handleAssociatedUsers(playlist.id)} style={{  fontSize:'18px' }}><i class="fa fa-user" aria-hidden="true"></i></span></div>
                                <div className="small-4 columns"><span title="Add to playlist" onClick={() => this.addToPlaylist(playlist.id)} style={{ fontSize:'18px' }}><i class="fa fa-plus" aria-hidden="true"></i></span></div>
                            </div>
                            </React.Fragment>
                          )
                        }
                     
                      </div>
          
                    </div>
     
                  </li>
                  
                  )
                })
              }
                  </React.Fragment>
                ):(
                  <div style={{ textAlign:'center' }}>
                    No Playlists found !
                  </div>
                )
              }


              </ul>
          </div>
        </div>
        )
    }
}


export default Playlists;