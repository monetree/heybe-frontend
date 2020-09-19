import React from 'react';
import Videos from 'components/Videos/Videos';
import CoachPlaylists from 'components/CoachPlaylists/CoachPlaylists'
import ModifyPLaylist from '../components/modifyPlaylist/ModifyPlaylist';
import HandleAssociatedUsers from '../components/HandleAssociatedUsers/HandleAssociatedUsers'
import FormatUrl from "utils/UrlFormatter";
import {ToastsContainer, ToastsStore} from 'react-toasts';
import "./sidebar.css";
import SideBar from '../components/SideBar/SideBar';

class CoachDashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playlist_id:null,
      showmodifyplaylist:false,
      showhandleusermodal:false,
      coach:[]
    }
    this.Coachplaylists = React.createRef();
    this.handleassociatedusers = React.createRef()
  }




  componentDidMount(){
    if(new URLSearchParams(window.location.search).get('down')){
      if(new URLSearchParams(window.location.search).get('down') === "yes"){
        window.scrollTo(0,document.body.scrollHeight);
      }
    }

    if(!localStorage.getItem("data")){
      window.location = "/"
    }
    let data = JSON.parse(localStorage.getItem("data"))
    let coach_id = null
    if(data.type === "coach"){
      coach_id = data.id
    } else {
      window.location = "/"
    }
    let url = FormatUrl(`/coach/bio/?coach_id=${coach_id}`)
    fetch(url)
    .then(res => res.json())
    .then(res => {
        if(res.length){
          this.setState({
              coach: res[0]
          })
      } else {
        window.location = "/coach/bio/" 
      }
    })

  }

  addToPlaylist = (playlist_id) => {
    this.setState({
      playlist_id:playlist_id,
      showmodifyplaylist:true
    })
  }

  handleAssociatedUsers = (playlist_id) => {
    this.setState({
      playlist_id:playlist_id,
      showhandleusermodal:true
    },() => this.handleassociatedusers.current.customComponentDidMount(playlist_id))
  }

  updatePLaylist = () => {
    this.Coachplaylists.current.updatePLaylist()
  }



  render() {
    const { playlist_id, showmodifyplaylist, showhandleusermodal } = this.state;
    return (
      <div style={{ marginTop:'-10px' }}>
        <div class="wrapper d-flex align-items-stretch">
          <SideBar />
          <div className={ this.state.sidebar ? "dashboards-content-inactive" : "dashboards-content" }>
            <section className="hero-section" style={{backgroundImage: `url(${this.state.coach.banner})`, height:'300px'}}>
            </section>
            <Videos />
            <CoachPlaylists ref={this.Coachplaylists} handleAssociatedUsers={this.handleAssociatedUsers} addToPlaylist={this.addToPlaylist}/>
            { showmodifyplaylist ? (
            <ModifyPLaylist updatePLaylist={this.updatePLaylist} playlist_id={playlist_id} closeModal={()=>
            this.setState({showmodifyplaylist: false})}/> ):( '' ) }
            { showhandleusermodal ? (
            <HandleAssociatedUsers ref={this.handleassociatedusers} closeModal={()=>
            this.setState({showhandleusermodal: false})} /> ):( '' ) }
          </div>
        </div> 
      </div>
    );
  }
}


export default CoachDashboard;
