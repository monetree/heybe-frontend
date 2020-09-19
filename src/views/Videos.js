import React from 'react';
import FormatUrl from "utils/UrlFormatter";
import { Link } from "react-router-dom";
import SideBar from '../components/SideBar/SideBar';
import "./sidebar.css";

class Videos extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          videos:[],
          search:null,
          is_coach:false
        }
    }



    componentDidMount(searching=false){
      let data = JSON.parse(localStorage.getItem("data"))
      if(data){
        if(data.type === "coach"){
          this.setState({
            is_coach:true
          })
        }
      }

      let param = null;
      try{
        param = window.location.href.split("=")[1]
      }catch(err){
        param = null
      }

      let url = ''
      let search = this.state.search;
      if(param && !searching){
        url = FormatUrl(`/public-videos/?search=${param}`)
      } else {
        if(search){
          url = FormatUrl(`/public-videos/?search=${search}`)
        } else {
          url = FormatUrl(`/public-videos/`)
        }
      }
      
      fetch(url)
      .then(res => res.json())
      .then(res => {
          this.setState({
              videos: res
          })
      })
    }


    handleSearch = (event) => {
      this.setState({
        search:event.target.value
      }, () => this.componentDidMount(true))
    }


    render(){
        return (
          <div className="videos-main-contents" style={this.state.is_coach ? { marginTop:'-1.7cm' } : { margin:'0px 30px' }}>
            {
              this.state.is_coach  && (
                <SideBar style={{ marginTop:'1.7cm', zIndex:'1000' }} />
              )
            }
              
      
              <div className={this.state.is_coach ? "videos-inner-contents-coach" : "videos-inner-contents"}>
                    
                      <center><div style={{ textAlign:'center', width:'80%' }}><input style={{ marginTop:"2cm", width: '80% !important' }} type="text" placeholder="Search here" onChange={this.handleSearch} /></div></center>
      
                    <br/>
                    {/* <section className="hero-section" style={{backgroundImage: 'url("/assets/workout/workouts_browse_header2-5723fa6f9b592f16ce5eea1593c0a3d4.jpg")', height:'300px'}}>
                    </section> */}
                    <div id="list">
                        {
                        this.state.videos.map(video => (
                        <Link to={`/player/?video=${video.id}`}>
                        <center><div className="row" style={{ background:'#fff', margin:'10px', borderRadius:'5px' }}>
                          <div className="large-4 columns expand-column">
                            
                              <div className="filepicker_image">
                                <img alt="ChaiseSculpt thumbnail image" fit="scale" height={140} src={video.thumbnail} width={276} />
                              </div>
                          </div>
                          <div className="large-8 columns">
                              <div className="row info" style={{ margin:'10px 20px' }}>
                                <div className="columns">
                                    <h5>{video.title}</h5>
                                    <div className="short-description">
                                      {video.description.length > 200 ? video.description.slice(0, 200) + "..." : video.description}
                                    </div>
                                </div>
                              </div>
                          </div>
                          <div className="large-8 columns mt20">
                              {
                              this.state.is_premium_user ? 
                              (
                              <h2 className="tc">&nbsp; <span className="small button secondary coach">Start workout</span></h2>
                              ):(
                              <h2 className="tc">&nbsp; <span className="small button secondary coach">Preview workout</span></h2>
                              )
                              }
                          </div>
                        </div></center>
                        </Link>
                        ))
                        }
                    </div>
              
              </div>
             
              </div>
            
        )
    }
}
export default Videos;