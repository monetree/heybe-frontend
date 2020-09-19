import React from 'react';
import FormatUrl from "utils/UrlFormatter";
import { Link } from "react-router-dom";


class Videos extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            videos:[]
        }
    }
    
    componentDidMount = () =>{
      let coach_id = null
      if(this.props.coach_id){
        coach_id = this.props.coach_id
      } else {
        let data = JSON.parse(localStorage.getItem("data"))
        if(data){
          if(data.type === "coach"){
            coach_id = data.id
          } else {
            return
          }
        } else {
          return
        }
      }
      if(!coach_id){
        return
      }
        let url = FormatUrl(`/coach/videos/?coach_id=${coach_id}`)
        fetch(url)
        .then(res => res.json())
        .then(res => {
            this.setState({
                videos: res
            })
        }).catch(err => {
          console.log(err)
        })
    }

    

    render(){
      let videos = []
      if(this.props.video_list){
          videos = this.props.video_list
      }
      if(!videos.length){
        videos = this.state.videos
      }
        return (
            <section className="partner-videos-container" style={this.props.for_user ? { background:'none' } :{}}>
            <div className="row">
              <div className="small-12 columns">
                <h3 className="text-center list-header">{this.props.title ? this.props.title : "Your videos" }</h3>
                <center><hr style={{ width:'50%' }}/></center>
                <div className="text-center" id="two-plus">
                    {
                       videos.map(video => {
                            return (
                                <div className="card">
                                  <Link exact to={`/player/?video=${video.id}`}>
                                <div className="thumbnail">
                                  <img alt="Akwyotlqjgu8qcenrpcq?cache=true" src={video.thumbnail} />
                                </div>
                                <div className="panel-content white-bg bordered-concrete bottom-radius">
                                  <table className="title">
                                    <tbody><tr>
                                        <td>
                                          {video.title.length > 30 ? video.title.slice(0, 30)+'...' : video.title} ({video.duration})
                                  
                                        </td>
                                        <td className="small like-count">
                                        <i class="fa fa-bolt" aria-hidden="true" />
                                          {video.calories} C
                                        </td>
                                      </tr>
                                    </tbody></table>
                                  <div className="small short-description">
                                    <span className="description-text">
                                        {video.description.length > 100 ? video.description.slice(0, 100)+"..." : video.description} 
                                    </span>
                                  </div>
                               
                                    <div className="tc">
                                      equipments needed ⇩
                                    </div>
                                    <center>
                                      {
                                          eval(video.equipments).splice(0, 3).map(equipment => {
                                            return (
                                                <span className="bold">{equipment} </span>
                                            )
                                          })
                                      }
                                    </center>
                           
                                </div>
                                </Link>

                              </div>
                            )
                        })
                    }                    
                </div>
              </div>
            </div>
          </section>
        )
    }
}


export default Videos;