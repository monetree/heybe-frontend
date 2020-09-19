import React from 'react';
import FormatUrl from "utils/UrlFormatter";
import {ToastsContainer, ToastsStore} from 'react-toasts';
import { Link } from "react-router-dom";


class ModifyPLaylist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search:'',
            videos:[],
            playlist_id:null
        }
    }

    componentDidMount(){
        let coach_id = JSON.parse(localStorage.getItem("data")).id
        let url = FormatUrl(`/coach/videos/?coach_id=${coach_id}&playlist_id=playlist`)
        fetch(url)
        .then(res => res.json())
        .then(res => {
            this.setState({
                videos: res
            })
        })
    }

    addToPlaylist = (video_id) => {
        let id = JSON.parse(localStorage.getItem("data")).id
        let playlist_id = this.state.playlist_id;
        let data = JSON.stringify({
            coach_id:id,
            video_id:video_id,
            playlist_id:playlist_id
        })
        let url = FormatUrl(`/coach/add-to-playlist/`)
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
                this.componentDidMount()
                this.props.updatePLaylist()
                ToastsStore.success("Success",10000,"toast-box-success")
            } else {
                ToastsStore.success("Failed -> Please try again <- ",3000,"toast-box-error")
            }
    
        }).catch(err => {
            ToastsStore.success("Internal server error",3000,"toast-box-error")
        })
    }

    render(){
        if(!this.state.playlist_id){
            this.setState({
                playlist_id:this.props.playlist_id
            })
        }

        const lowercasedFilter = this.state.search.toLowerCase();
        const filteredData = this.state.videos.filter(item => {
            return Object.keys(item).some(key =>
                typeof item[key] === "string" && item[key].toLowerCase().includes(lowercasedFilter)
            );
        });
        return (
            <div class="image-modal" id="modal" style={{ width:'100%', maxHeight:'500px', overflowY:'scroll' }}>
                <span onClick={this.props.closeModal} style={{ float:'right', position:'absolute', right:'20px', top:'20px', cursor:'pointer' }}><i class="fa fa-times" aria-hidden="true"></i></span>
                <div className="video-form-container">
                        
                    <div class="row collapse">
                        <div class="small-12 large-12 columns">
                            <div class="field">
                                <input id="title" type="text" placeholder="Search videos" className="uploader-input" onChange={(e) => this.setState({search:e.target.value})} />
                            </div>
                        </div>
                    </div>

                    {
                        filteredData.length ? 
                        (
                            <div class="list-search">
                            <ol>
                                {
                                    filteredData.map(video => {
                                        return (
                                            <li>
                                                <span className="left-span">{video.title}</span>
                                                <span className="right-span" onClick={() => this.addToPlaylist(video.id, video.playlist_id)}>⇒</span>
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                            </div>
                        ):(
                            <div class="list-search">
                                <p className="text-center">No videos left !</p>
                                <Link to="/uploader/"><button className="button expand" name="commit" type="buttom">Upload New Video ⇨ </button></Link>
                            </div>
                        )
                    }
       


                </div>
                <ToastsContainer store={ToastsStore} onClick={this.goBack}/>
            </div>
        )
    }
}


export default ModifyPLaylist;