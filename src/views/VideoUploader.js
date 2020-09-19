import React from 'react';
import FormatUrl from "utils/UrlFormatter";
import Chips, { Chip } from 'react-chips';
import { uploadFile } from 'react-s3';
import config from "utils/s3Config";
import {ToastsContainer, ToastsStore} from 'react-toasts';
import SideBar from "../components/SideBar/SideBar"
import "../views/sidebar.css";

class VideoUploader extends React.Component {
  constructor(props){
    super(props);
    this.getVideoDuration = this.getVideoDuration.bind(this);
    this.state = {
        showmodal:false,
        isvideobuttonloading:0,
        isthumbnailbuttonloading:0,
        chips: [],
        tags: [],
        title:null,
        description:null,
        calories:null,
        duration:null,
        videourl:null,
        thumbnailurl:null,
        youtube_url:null,
        accesstype: null
    }
  }

  youtube_api_key = "AIzaSyB02QYCZK9hDPvRYzMrOpZBhkgE1BJnitE";


  theme = {
    chipsContainer: {
      display: "flex",
      position: "relative",
      border: "1px solid #ccc",
      backgroundColor: 'rgb(236, 237, 241)',
      font: "13.33333px Arial",
      minHeight: 24,
      alignItems: "center",
      flexWrap: "wrap",
      padding: "2.5px",
      borderRadius: 5,
      marginBottom:'10px',
      ':focus': {
          border: "1px solid #aaa",
      }
    },
    container:{
      flex: 1,
    },
    containerOpen: {
  
    },
    input: {
      border: 'none',
      outline: 'none',
      boxSizing: 'border-box',
      width: '100%',
      padding: 5,
      margin: 2.5
    },
    suggestionsContainer: {
  
    },
    suggestionsList: {
      position: 'absolute',
      border: '1px solid #ccc',
      zIndex: 10,
      left: 0,
      top: '100%',
      width: '100%',
      backgroundColor: '#fff',
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    suggestion: {
      padding: '5px 15px'
    },
    suggestionHighlighted: {
      background: '#ddd'
    },
    sectionContainer: {
  
    },
    sectionTitle: {
  
    },
  }



  componentDidMount(){
    let data = localStorage.getItem("data")
    if(!data){
        window.location = "/"
        return
    }

    if(JSON.parse(data).type !== "coach"){
        window.location = "/"
        return
    }

  }

  setFileInfo(file) {
    let myVideos = []
    myVideos.push(file);
    var video = document.createElement('video');
    video.preload = 'metadata';
  
    video.onloadedmetadata = function() {
      window.URL.revokeObjectURL(video.src);
      var duration = video.duration;
      myVideos[myVideos.length - 1].duration = duration;
    }
    video.src = URL.createObjectURL(file);
    return myVideos
  }

  handleVideo = (e) => {
      this.setState({
        isvideobuttonloading:1
      })
    let file = e.target.files[0] 
    let duration = this.setFileInfo(e.target.files[0] )
    uploadFile(file, config)
    .then(data => {
        this.setState({
            isvideobuttonloading:2,
            videourl:data.location,
            duration:duration[0].duration
          })
    })
    .catch(err => {
        this.setState({
            isvideobuttonloading:3,
            videourl:null
          })
    })
  }

  handleThumbnail = (e) => {
    this.setState({
        isthumbnailbuttonloading:1
      })
    let file = e.target.files[0] 
    uploadFile(file, config)
    .then(data => {
        console.log(data)
        this.setState({
            isthumbnailbuttonloading:2,
            thumbnailurl:data.location,
            isvideobuttonloading:0
          })
    })
    .catch(err => {
        this.setState({
            isthumbnailbuttonloading:3,
            thumbnailurl:null
          })
    })
  }


  changeEquitments = chips => {
    this.setState({ chips });
  }

  changeTags = tags => {
    this.setState({ tags });
  }


  getVideoDuration = async(video_id) => {
    let duration_url = `https://www.googleapis.com/youtube/v3/videos?id=${video_id}&part=contentDetails&key=${this.youtube_api_key}`;
    return fetch(duration_url)
    .then(response => response.json())
  }

  getVideoThumbnail = async(video_id) => {
    let url = `https://www.googleapis.com/youtube/v3/videos?key=${this.youtube_api_key}&part=snippet&id=${video_id}`
    return fetch(url)
    .then(response => response.json())
  }

  getVideoTitle = async(video_id) => {
    let url = `https://www.googleapis.com/youtube/v3/videos?id=${video_id}&key=${this.youtube_api_key}&fields=items(snippet(title))&part=snippet`
    return fetch(url)
    .then(response => response.json())
  }


  submitForm = async () => {
    let id = JSON.parse(localStorage.getItem("data")).id
    let equipments = this.state.chips;
    let tags = this.state.tags;
    let title = this.state.title;
    let duration = this.state.duration;
    let description = this.state.description;
    let calories= this.state.calories;
    let videourl = this.state.videourl;
    let thumbnailurl = this.state.thumbnailurl;
    let youtube_url = this.state.youtube_url;
    let accesstype = this.state.accesstype;

    if(!accesstype){
        accesstype = 1
    }

    let video_id = null
    if(youtube_url){
        if (youtube_url.split('?').length > 1){
          video_id = youtube_url.split("?")[1].split("=")[1];
        } else {
          video_id = youtube_url;
        }
    }


    if(!tags){
        ToastsStore.success("tags required",3000,"toast-box-success")
        return
    }
    if(!equipments){
        ToastsStore.success("equipments required",3000,"toast-box-success")
        return
    }
    if(!title){
        if (video_id){
            let youtube_video_title = await this.getVideoTitle(video_id)
            title = youtube_video_title["items"][0]["snippet"]["title"]
        } else {
            ToastsStore.success("thumbnail required ",3000,"toast-box-success")
            return
        }
    }



    if(!videourl){
        videourl = youtube_url;
        duration = await this.getVideoDuration(video_id)
        try{
            duration = duration['items'][0]['contentDetails']['duration']
        } catch(err) {
            duration = 1
        }
    }


    if(!videourl){
        ToastsStore.success("youtube url or video required",3000,"toast-box-success")
        return
    }

    if(!duration){
        ToastsStore.success("duration required ",3000,"toast-box-success")
        return
    }
    if(!description){
        ToastsStore.success("description required",3000,"toast-box-success")
        return
    }
    if(!calories){
        ToastsStore.success("caloriVideoes required",3000,"toast-box-success")
        return
    }

    if(!videourl){
        ToastsStore.success("youtube url or video required",3000,"toast-box-success")
        return
    }

    if(!thumbnailurl){
        if (video_id){
            thumbnailurl = await this.getVideoThumbnail(video_id)
            thumbnailurl = thumbnailurl["items"][0]["snippet"]["thumbnails"]["high"]["url"]
        } else {
            ToastsStore.success("thumbnail required ",3000,"toast-box-success")
            return
        }
        
    }


    let data = JSON.stringify({
        id:id,
        equipments:equipments,
        tags:tags,
        title:title,
        duration:duration,
        description:description,
        calories:calories,
        videourl:videourl,
        thumbnailurl:thumbnailurl,
        accesstype:accesstype
    })

    console.log(data)
    let url = FormatUrl(`/coach/videos/`)
    fetch(url, {
      method: 'post',
      headers: {
          Accept: 'application/json, text/plain, */*'
        },
        body:data,
    })
    .then(response => response.json())
    .then(res => {
        if (res.code === 200){
            ToastsStore.success("Success",10000,"toast-box-success")
            this.setState({
                chips:[],
                tags:[],
                title:'',
                videourl:'',
                thumbnailurl:'',
                isvideobuttonloading:0,
                isthumbnailbuttonloading:0,
                showmodal:true
            })
            document.getElementById("title").value = null
            document.getElementById("description").value = null
            document.getElementById("calories").value = null
            document.getElementById("duration").value = null
        } else {
            ToastsStore.success("Failed",3000,"toast-box-error")
        }

    }).catch(err => {
        // console.log("err-------" , err)
        // ToastsStore.success("Internal server error",3000,"toast-box-error")
    })
  }

  goBack = () => {
      this.props.history.push("/coach/dashboard/")
  }

  render() {
    return (
        <div>

        {
                    this.state.showmodal ?
                    (

                    <div class="image-modal" id="modal" style={{ background:'transparent',boxShadow:'none' }}>
                    <div class="row form-block text-center">
                      <div class="large-8 small-12 large-centered columns form-border signup_form border-bottom-radius-0" style={{ height:'300px' }}>
                          <h3>Video uploaded successfully!</h3>
                          <h5> Do you want to upload another one?</h5>
                        <div class="row">
                          <div class="large-6 columns general-container">
                          <button class="button expand" type="button" onClick={() => this.setState({ showmodal:false })}>Yes</button>
                          </div>
                          <div class="large-6 columns general-container">
                          <button class="button expand" type="button" onClick={() => this.props.history.push("/coach/dashboard")}>No</button>
                          </div>
                        </div>
                        </div>
                        </div>
                        </div>


                    ):(
                        ''
                    )
                }



            <br/><br/>
            
            <div class="video-upload-container" style={{ marginTop:'-32px' }}>
                

            <SideBar />
                          <section className="bio-section">
                          <div className="dashboards-content">
                         
      <div className="row">


                    <div className="small-6 columns">
                    {
                            this.state.isthumbnailbuttonloading === 0 ? 
                            (
                                <button className="button expand" name="commit" type="buttom" >
                                    <label style={{ color:'#fff' }}>
                                        <i class="fa fa-cloud-upload" aria-hidden="true">
                                            <input onChange={this.handleThumbnail} style={{ display:'none' }} type="file" accept="image/*" />
                                        </i>
                                    </label>Thumbnail
                                </button>
                            ): this.state.isthumbnailbuttonloading === 1 ? (
                                <button className="button expand">
                                    <label>
                                        <i style={{ color:'#fff' }} class="fa fa-refresh fa-spin"></i>
                                    </label> 
                                    Upoloading
                                </button>
                            ): this.state.isthumbnailbuttonloading === 2 ? (
                                <button className="button expand" name="commit" type="buttom" >
                                    <label style={{ color:'#fff' }}>
                                        <i class="fa fa-check" aria-hidden="true">
                                        </i>
                                    </label>Success
                                </button>
                            ): (
                                <button className="button expand" name="commit" type="buttom" >
                                    <label style={{ color:'#fff' }}>
                                    <i class="fa fa-frown-o" aria-hidden="true">
                                        </i>
                                    </label>Failed
                                </button>
                            )
                        }
                    </div>

      

                    <div className="small-6 columns">
                        {
                            this.state.isvideobuttonloading === 0 ? 
                            (
                                <button className="button expand" name="commit" type="buttom" >
                                    <label style={{ color:'#fff' }}>
                                        <i class="fa fa-cloud-upload" aria-hidden="true">
                                            <input onChange={this.handleVideo} style={{ display:'none' }} type="file" accept="video/*, .mkv" />
                                        </i>
                                    </label>Video
                                </button>
                            ): this.state.isvideobuttonloading === 1 ? (
                                <button className="button expand">
                                    <label>
                                        <i style={{ color:'#fff' }} class="fa fa-refresh fa-spin"></i>
                                    </label> 
                                    Upoloading
                                </button>
                            ): this.state.isvideobuttonloading === 2 ? (
                                <button className="button expand" name="commit" type="buttom" >
                                    <label style={{ color:'#fff' }}>
                                        <i class="fa fa-check" aria-hidden="true">
                                       </i>
                                    </label>Success
                                </button>
                            ): (
                                <button className="button expand" name="commit" type="buttom" >
                                    <label style={{ color:'#fff' }}>
                                    <i class="fa fa-frown-o" aria-hidden="true">
                                        </i>
                                    </label>Failed
                                </button>
                            )
                        }
                    </div>



                    
                  </div>
                  </div>

                  </section>
                  
                  <div className="dashboards-content">
                  <center>
                      <div className="uploader-note">
                      Please fill below details while video is uploading.. 
                      </div>
                    </center>


                    <div className="row">
                        <div className="large-12 columns general-container">
                        <div className="video-form-container">
                            <input id="title" type="text" placeholder="Enter youtube url instead." className="form-control" onChange={(e) => this.setState({youtube_url:e.target.value})} />
                        </div>
                    </div>

      <div class="large-12 columns general-container">
              <div class="row form-block text-center">
          <div class="large-5 small-12 large-centered columns form-border signup_form border-bottom-radius-0">
                   

                    <div className="video-form-container">
                        <div style={{ padding:"10px 0 0 0" }}>
                            <input id="title" type="text" placeholder="Enter video title" className="form-control" onChange={(e) => this.setState({title:e.target.value})} />
                            <textarea id="description" className="form-control" placeholder="Enter video descriptions" onChange={(e) => this.setState({ description: e.target.value })} />

                        </div>
                        <Chips
                            value={this.state.chips}
                            onChange={this.changeEquitments}
                            suggestions={["mat", "room", "dumbels", "water", "shoes", "globes"]}
                            placeholder="Choose Your equipments"
                            theme={this.theme}
                    
                        />
                        <br/>
                        <Chips
                            value={this.state.tags}
                            onChange={this.changeTags}
                            suggestions={["yoga", "body building", "sweting", "hiit", "hrx", "run", "chest", "burning", "belly", "trisheps"]}
                            placeholder="Tags"
                            theme={this.theme}
                        />
                        <br/>
                        <input id="calories" type="text" placeholder="Enter calories" className="uploader-input" onChange={(e) => this.setState({calories:e.target.value})} />
                        <select onChange={(e) => this.setState({accesstype:e.target.value})} className="form-control" style={{ background:'#fff', padding:'20px 14px', color:'grey', fontSize:'12px' }}>
                            <option value="1">Public</option>
                            <option value="2">Private</option>
                        </select>
                        <center><button className="button" name="commit" type="buttom" onClick={this.submitForm}>Upload Video</button></center>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
               

                    <br/><br/><br/>


            </div>
            
            <ToastsContainer store={ToastsStore} onClick={this.goBack}/>
            
        </div>
    );
  }
}


export default VideoUploader;
