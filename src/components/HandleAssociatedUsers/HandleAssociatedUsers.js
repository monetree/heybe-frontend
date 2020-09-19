import React from 'react';
import FormatUrl from "utils/UrlFormatter";
import {ToastsContainer, ToastsStore} from 'react-toasts';
import { Link } from "react-router-dom";


class HandleAssociatedUsers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users:[],
            data:[],
            username:'',
            playlist_id:null
        }
    }

    customComponentDidMount(playlist_id){
        let url = FormatUrl(`/coach/associated-users/?playlist_id=${playlist_id}`)
        fetch(url)
        .then(res => res.json())
        .then(res => this.setState({
                users: res,
                 playlist_id:playlist_id
            },this.fetchUsers)
            )
    }

    allowUser = (id) => {
        let playlist_id = this.state.playlist_id;
        let url = FormatUrl(`/coach/associated-users/?user_id=${id}&playlist_id=${playlist_id}&allow=1`)
        fetch(url, {
            method: 'put',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: id,
                playlist_id: playlist_id
            })
            })
        .then(res => res.json())
        .then(res => {
            if(res.code === 200){
                ToastsStore.success("Success",3000,"toast-box-success")
                this.customComponentDidMount(playlist_id)
            } else {
                ToastsStore.error("Internal server error",3000,"toast-box-error")
            }
        })
    }

    cancelUser = (id) => {
        let playlist_id = this.state.playlist_id;
        let url = FormatUrl(`/coach/associated-users/?user_id=${id}&playlist_id=${playlist_id}&allow=0`)
        fetch(url, {
            method: 'put',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: id,
                playlist_id: playlist_id
            })
            })
        .then(res => res.json())
        .then(res => {
            if(res.code === 200){
                ToastsStore.success("Success",3000,"toast-box-success")
                this.customComponentDidMount(playlist_id)
            } else {
                ToastsStore.error("Internal server error",3000,"toast-box-error")
            }
        })
    }

    removeUser = (id) => {
        let playlist_id = this.state.playlist_id;
        let url = FormatUrl(`/coach/associated-users/?user_id=${id}&playlist_id=${playlist_id}`)
        fetch(url, {
            method: 'delete',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: id,
                playlist_id: playlist_id
            })
            })
        .then(res => res.json())
        .then(res => {
            if(res.code === 200){
                ToastsStore.success("Success",3000,"toast-box-success")
                this.customComponentDidMount(playlist_id)
            } else {
                ToastsStore.error("Internal server error",3000,"toast-box-error")
            }
        })
    }

    fetchUsers = () => {
        let associated_users = this.state.users
        let ids = []
        for(let a of associated_users){
            ids.push(a.user_id)
        }
        let url = FormatUrl(`/users/`)
        fetch(url)
        .then(res => res.json())
        .then(res => {
            let users = []
            for (let r of res){
                if(!ids.includes(r.id)){
                    users.push(r)
                }
            }
            this.setState({
                data:users
            })
        })
    }

    associateUser = (id) => {
        let playlist_id = this.state.playlist_id;
        let url = FormatUrl(`/coach/associated-users/`)
        fetch(url, {
            method: 'post',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: id,
                playlist_id: playlist_id
            })
            })
        .then(res => res.json())
        .then(res => {
            if(res.code === 200){
                ToastsStore.success("Success",3000,"toast-box-success")
                this.customComponentDidMount(playlist_id)
            } else {
                ToastsStore.error("Internal server error",3000,"toast-box-error")
            }
        })
    }


    render(){
        const lowercasedFilter = this.state.username.toLowerCase();
        const filteredData = this.state.data.filter(item => {
            return Object.keys(item).some(key =>
                typeof item[key] === "string" && item[key].toLowerCase().includes(lowercasedFilter)
            );
        });
        return (
            <div class="image-modal" id="modal" style={{ width:'100%', maxHeight:'500px', overflowY:'scroll' }}>
                <span onClick={this.props.closeModal} style={{ float:'right', position:'absolute', right:'20px', top:'20px', cursor:'pointer' }}><i class="fa fa-times" aria-hidden="true"></i></span>
   

                <div class="row">
                    <div class="large-12 columns general-container">
                        
                        <p className="tc" style={{ color:'#126F80' }}>Handle users</p>
                    <div style={{  overflowX:'auto' }}>
                    <table>
                        <tr style={{ background:'#126F80',fontWeight:'bold' }}>
                        <th style={{ color:'#fff' }}>Username</th>
                        <th style={{ color:'#fff' }}>Email</th>
                        <th style={{ color:'#fff' }}>Allowed</th>
                        <th style={{ color:'#fff' }}>Action</th>
                        <th style={{ color:'#fff' }}>Remove</th>
                        </tr>
                        {
                            this.state.users.length ? 
                            (
                                this.state.users.map(user => (
                                    <tr className={user.active ? 'active-users' : "inactive-users"}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                        {user.active ? 
                                        <span>Yes</span> : 
                                        <span>No</span>
                                        }
                                        </td>
                                        <td>
                                        {user.active ? 
                                        <span title="Inactive the user to access this playlist" className="small button secondary coach" style={{ marginTop:'8px' }} onClick={() => this.cancelUser(user.user_id)}>Cancel</span> : 
                                        <span title="Allow the user to access this playlist" className="small button secondary coach" style={{ marginTop:'8px' }} onClick={() => this.allowUser(user.user_id)}>Allow</span>
                                        }
                                        </td>
                                        <td onClick={() => this.removeUser(user.user_id)} title="Removing user won't be able to access this playlist" style={{ fontSize:'18px',color:'#F95151' }} className="pointer"><i class="fa fa-times" aria-hidden="true"></i></td>
                                    </tr>
                                ))
                            ):(
                                <tr>
                                    <td colSpan="5" className="tc">No users associated to this playlist !</td>
                                </tr>
                            )
                        }
                    </table>
                    </div>
                    </div>
                </div>


                <div class="row">
                <div class="large-12 columns general-container">
                <div class="row form-block text-center">
                    <div class="large-5 small-12 large-centered columns form-border signup_form border-bottom-radius-0">
                        <div class="row collapse">
                        <div class="small-12 large-12 columns">
                            <div class="field">
                            <input className="form-control" onChange={(e) => this.setState({username: e.target.value})} placeholder="Search users" type="text" />
                            </div>
                        </div>
                        </div>
                    </div>

                       
                    <div class="large-5 small-12 large-centered columns form-border signup_form border-bottom-radius-0">
                    <div class="row collapse">
                        <div class="small-12 large-12 columns">
                            <div class="list-search">
                                <ol>
                                    {
                                       filteredData.length ? 
                                       (
                                        filteredData.map(user => (
                                            <li style={{ paddingBottom:'5px' }}>
                                                <span className="left-span">{user.name}</span>
                                                <span className="right-span" onClick={() => this.associateUser(user.id)} style={{ color:'rgb(18, 111, 128)' }}>Add</span>
                                            </li>
                                        ))
                                       ):(
                                        <li style={{ paddingBottom:'5px' }}>
                                            <span className="tc">No users found !</span>
                                        </li>
                                       )
                                    }

                                </ol>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>

    

                </div>
                </div>


                <ToastsContainer store={ToastsStore} onClick={this.goBack}/>
            </div>
        )
    }
}


export default HandleAssociatedUsers;