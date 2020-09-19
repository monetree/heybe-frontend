import React from 'react';
import FormatUrl from "utils/UrlFormatter";
import Chips from 'react-chips';
import { uploadFile } from 'react-s3';
import config from "utils/s3Config";
import {ToastsContainer, ToastsStore} from 'react-toasts';
import Playlists from 'components/Playlists/Playlists';

class CoachPlaylists extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          isthumbnailbuttonloading:0,
          chips: [],
          associatedusers:[],
          level:null,
          duration:null,
          title:null,
          description:null,
          thumbnailurl:null,
          userassociation:false,
          users:[],
          usernames:[]
        }
        this.Playlists = React.createRef()
    }



    componentDidMount(){
        let url = FormatUrl(`/users/`)
        fetch(url)
        .then(res => res.json())
        .then(res => {
            let usernames = []
            for(let user of res){
                usernames.push(user.name)
            }
            this.setState({
                users:res,
                usernames:usernames
            })
        })
    }

    
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
   
      

    handleThumbnail = (e) => {
      this.setState({
          isthumbnailbuttonloading:1
        })
      let file = e.target.files[0] 
      uploadFile(file, config)
      .then(data => {
          this.setState({
              isthumbnailbuttonloading:2,
              thumbnailurl:data.location
            })
      })
      .catch(err => {
          this.setState({
              isthumbnailbuttonloading:3,
              thumbnailurl:null
            })
      })
    }

    changeTags = chips => {
      this.setState({ chips });
    }

    changeUsers = associatedusers => {
        this.setState({ associatedusers });
      }

    submitForm = () => {
      let id = JSON.parse(localStorage.getItem("data")).id
      let tags = this.state.chips;
      let title = this.state.title;
      let duration = this.state.duration;
      let description = this.state.description;
      let thumbnailurl = this.state.thumbnailurl;
      let level = this.state.level;
      let associated_users = null
      if(this.state.associatedusers.length){
        let associated_user_ids = []
        let associatedusers = this.state.associatedusers;
        for(let user of this.state.users){
            console.log(user)
            if(associatedusers.includes(user.name)){
                associated_user_ids.push(user.id)
            }
        }
        associated_users = associated_user_ids;
      }

      if(!tags){
          ToastsStore.success("tags required",3000,"toast-box-success")
          return 
      }
      if(!title){
          ToastsStore.success("title required ",3000,"toast-box-success")
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
      if(!thumbnailurl){
          ToastsStore.success("thumbnailurl required ",3000,"toast-box-success")
          return
      }
      if(!level){
          ToastsStore.success("level required ",3000,"toast-box-success")
          return
      }
      let data = JSON.stringify({
          id:id,
          tags:tags,
          title:title,
          duration:duration,
          description:description,
          level:level,
          thumbnailurl:thumbnailurl,
          associated_users:associated_users
      })
      let url = FormatUrl(`/coach/playlists/`)
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
              this.Playlists.current.getPlayLists()
              this.setState({
                  chips:[],
                  thumbnailurl:'',
                  isthumbnailbuttonloading:0
              })
              document.getElementById("title").value = null
              document.getElementById("description").value = null
              document.getElementById("level").value = null
              document.getElementById("duration").value = null
          } else {
              ToastsStore.success("Failed -> Please try again <- ",3000,"toast-box-error")
          }
  
      }).catch(err => {
        //   cons(err)
        //   ToastsStore.success("Internal server error",3000,"toast-box-error")
      })
    }

    addToPlaylist = (playlist_id) => {
        this.props.addToPlaylist(playlist_id)
    }

    handleAssociatedUsers = (playlist_id) => {
        this.props.handleAssociatedUsers(playlist_id)
      }


    updatePLaylist = () => {
        this.Playlists.current.getPlayLists()
    }

    handleAssociation = () => {
        this.setState(prevState => ({
            userassociation: !prevState.userassociation
          }));
    }


    render(){
        return (
    <section className="workout-plans-container" style={{ background:'#f5f5f5' }}>
        <Playlists ref={this.Playlists} handleAssociatedUsers={this.handleAssociatedUsers} addToPlaylist ={this.addToPlaylist}/>


      <div className="row" id="create_playlist">
        <div class="large-12 columns general-container">
              <div class="row form-block text-center">
                <div class="large-5 small-12 large-centered columns form-border signup_form border-bottom-radius-0">
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
                                    Uploading
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


                 
                         <div style={{ padding:"10px 0 0 0" }}>
                            <input id="title" type="text" placeholder="Enter video title" className="form-control" onChange={(e) => this.setState({title:e.target.value})} />
                            <textarea id="description" className="form-control" placeholder="Enter video descriptions" onChange={(e) => this.setState({ description: e.target.value })} />
                        </div>
                   
                     
                        <Chips
                            value={this.state.chips}
                            onChange={this.changeTags}
                            suggestions={["Your", "Data", "Here"]}
                            placeholder="Tags"
                            theme={this.theme}
                    
                        />
                        <select onChange={(e) => this.setState({level:e.target.value})} className="form-control" style={{ background:'#fff', padding:'14px', color:'grey', fontSize:'16px' }}>
                            <option value="1">Beginner</option>
                            <option value="2">Intermediate</option>
                            <option value="3">Advanced</option>
                        </select>
                        <input id="duration" type="text" placeholder="Duration in weeks" className="form-control" onChange={(e) => this.setState({duration:e.target.value})} />
                        
                        {
                            this.state.userassociation ? 
                            (
                                <Chips
                                    value={this.state.associatedusers}
                                    onChange={this.changeUsers}
                                    suggestions={this.state.usernames}
                                    placeholder="Choose users to associate"
                                    theme={this.theme}
                                />
                            ):(
                                ''
                            )
                        }

                        <label class="checkbox-container"><span></span>
                            <input type="checkbox" onChange={this.handleAssociation}/>
                            <span>
                                <span style={{ marginTop:'-10px' }} class="checkmark"></span>
                                <span style={{ marginTop:'-3cm' }}>Associate with users</span>
                            </span>
                        </label>

                        <center><button className="button" name="commit" type="buttom" onClick={this.submitForm}>Submit</button></center> 



                    </div>
              
              </div>
        </div>
      </div>
    
    <ToastsContainer store={ToastsStore} />
      </section>

        )
    }
}


export default CoachPlaylists;