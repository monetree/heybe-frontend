import React from 'react';
import FormatUrl from "utils/UrlFormatter";


class CoachBio extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            coach:[],
            url:'',
            showmodal:false,
            coachname:''
        }
    }


    componentDidMount(){
        this.setState({
            coachname: JSON.parse(localStorage.getItem("data")).name
        })
        let coach_id = JSON.parse(localStorage.getItem("data")).id
        let url = FormatUrl(`/coach/bio/?coach_id=${coach_id}`)
        fetch(url)
        .then(res => res.json())
        .then(res => {
            if(res.length){
                this.setState({
                    coach: res[0]
                })
            }
        })
    }

    submitForm = () => {
        let coach_id = JSON.parse(localStorage.getItem("data")).id
        let url = FormatUrl(`/coach/bio/?coach_id=${coach_id}&url=${this.state.url}`)
        fetch(url)
        .then(res => res.json())
        .then(res => {
            if(res.code === 200){
                this.setState({
                    showmodal:false
                })
            } else {
                console.log("failed")
            }
        }).catch(err => {
            console.log(err)
        })
    }


    render(){
        return (
            <div>
                
                {
                    this.state.showmodal ?
                    (

                    <div class="image-modal" id="modal" style={{ background:'transparent',boxShadow:'none' }}>
                        <div class="row">
                          <div class="large-12 columns general-container">
                          <div class="row form-block text-center">
                      <div class="large-5 small-12 large-centered columns form-border signup_form border-bottom-radius-0">
                        <div class="row collapse">
                          <div class="small-12 large-12 columns">
                            <div class="field">
                            <input className="form-control" defaultValue={this.state.coach.url} onChange={(e) => this.setState({ url: e.target.value })} placeholder="Enter name" type="text" />              
                            </div>
                          </div>
                          <div class="small-12 large-12 columns">
                            <div class="field">
                                <span>Your url will be as below</span>
                                <br/><br/>
                                <span className="bold" style={{ color:'#F95151' }}>{window.location.hostname}/{this.state.url ? this.state.url: this.state.coach.url}</span>
                            </div>
                          </div>
                          
                        </div>
                        <div class="actions">
                        <button class="button expand" type="button" onClick={this.submitForm}>Submit</button>
                        <button class="button expand" type="button" onClick={() => this.setState({showmodal:false})}>Cancel</button>
                        </div>
                      </div>
                    </div>
                          </div>
                        </div>
                        </div>


                    ):(
                        ''
                    )
                }



                {/* <div>
                <img src={this.state.coach.banner} alt="Nature" style={{ width:'100%', height:'auto' }} class="responsive" width="600" height="400" />
                </div>

                <div className="row">
                    <div className="columns small-6">
                        <img style={{ width:'100px', height:'100px', borderRadius:'50%', marginTop:'-1.6cm' }} src={this.state.coach.logo} />
                    </div>
                    <div className="columns small-6" style={{ marginTop:'-1.4cm',marginLeft:'-2cm', fontSize:'1rem'  }}>
                        <h1 className="coach-name">{this.state.coachname}</h1>
                    </div>
   
                </div> */}

                {/* <div className="row">
                    <div className="columns small-12" style={{ textAlign:'center' }}>
                    <button title="customize your profile url" onClick={() => this.setState({showmodal:true})} class="button small responsive-button">Profile link &nbsp; <i class="fa fa-pencil" aria-hidden="true"></i></button>
                    </div>
                </div>
                <br/> */}

                {/* <section className="partner-videos-container">
                    <div className="row">
                    <div className="small-12 columns">
                        <h5>About</h5>
                        <div className="medium coach-bio">
                            {this.state.coach.bio}
                        </div>
                    </div>
                    </div>
                </section> */}
            </div>
        )
    }
}


export default CoachBio;