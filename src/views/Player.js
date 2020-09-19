import React from "react";
import ReactPlayer from "react-player";
import FormatUrl from "utils/UrlFormatter";
import { ToastsContainer, ToastsStore } from "react-toasts";
import { isFloat, toNumberString } from "../utils/customFunctions";
import SideBar from "../components/SideBar/SideBar";
import "../views/sidebar.css";
import videoLogo from "../images/img_141364.png";
import iccLogo from "../images/icc.jpeg";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      playing: "",
      title: "",
      tags: [],
      description: "",
      calories: "",
      equipments: [],
      playlists: [],
      playing_id: null,
      coach_id: null,
      ratings: [],
      comment: null,
      is_user: false,
      comments: [],
      no_of_played_times: 0,
      no_of_users_who_have_seen: 0,
      start_time: 0,
      avg_view_time: 0,
      playlist_id: null,
      no_of_users_allowed: 0,
      no_of_playlists_the_video_is_in: 0,
      coach_name: "",
      show_review_modal: false,
      next_video_modal: false,
      likes: { likes: 0, dislikes: 0, liked: 0 },
      sharemodal: false,
      is_coach: false,
      description_full: false,
      showallvideomodal: false,
      serial_no: 0,
      access_type: 1,
      is_coach_of_current_video:false,
      user_management_modal:  false,
      users: [],
      alowed_uses:[],
      allowed_users: 0,
      loggedin_coach_id: 0
    };
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
        this.setState({
            users:res
        }, () => this.getAllowedUsers())
    })
}

totalAllowedUsers = () => {
  let url = FormatUrl(`/video-access/?video_id=${this.state.playing_id}`)
  fetch(url)
  .then(res => res.json())
  .then(res => {
    this.setState({
      allowed_users: res.length
    })
  })
}

  addUser = (id) => {
    let url = FormatUrl(`/video-access/`)
    fetch(url, {
      method: 'post',
      headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          user: id,
          video: this.state.playing_id
      })
      })
      .then(response => response.json())
      .then(res => {
          this.getAllowedUsers()
      }).catch(err => {
          console.log(err)
      })
  }

  removeUser = (id) => {
    let url = FormatUrl(`/video-access/`)
    fetch(url, {
      method: 'put',
      headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          user: id,
          video: this.state.playing_id
      })
      })
      .then(response => response.json())
      .then(res => {
          this.fetchUsers()
      }).catch(err => {
          console.log(err)
      })
  }

  getAllowedUsers = () => {
    let url = FormatUrl(`/video-access/?video_id=${this.state.playing_id}`)
    fetch(url)
    .then(res => res.json())
    .then(res => {
      let users = this.state.users;
      for(let i of users){
        for(let j of res){
          if(i.id === j.user_id){
            i["allowed"] = true
          }
        }
      }
      this.setState({
        users: users
      })
    })
  }


  handleShareModal = (event) => {
    event.preventDefault()
    this.setState({
      sharemodal: true
    })
  }


  changeVideoAccessType = (accesstype) => {
    let url = FormatUrl(`/coach/videos/`)
    fetch(url, {
    method: 'put',
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        accesstype: accesstype,
        video_id: this.state.playing_id
    })
    })
    .then(response => response.json())
    .then(res => {
        this.setState({
          access_type: accesstype
        })
    }).catch(err => {
        console.log(err)
    })
  }

  getCoachName = () => {
    if(this.state.loggedin_coach_id === this.state.coach_id){
      this.setState({
        is_coach_of_current_video: true
      })
    }
    let coach_id = this.state.coach_id;
    let url = FormatUrl(`/coach/register/?coach_id=${coach_id}`);
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            coach_name: res[0].name
          },
          () => this.getLikes()
        );
      })
      .catch(err => {
        this.getLikes();
      });
  };

  no_of_playlists_the_video_is_in = () => {
    let video_id = this.state.playing_id;
    let url = FormatUrl(
      `/no-of-playlists-the-video-is-in/?video_id=${video_id}`
    );
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          no_of_playlists_the_video_is_in: res.length
        });
      });
  };

  get_no_of_users_allowed = () => {
    let playlist_id = this.state.playlist_id;
    let url = FormatUrl(`/coach/associated-users/?playlist_id=${playlist_id}`);
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          no_of_users_allowed: res.length
        });
      });
  };

  avg_watch_time = () => {
    let data = JSON.parse(localStorage.getItem("data"));
    let user_id = null;
    if (data && data.type === "user") {
      user_id = data["id"];
    } else {
      user_id = this.state.coach_id;
    }
    let url = FormatUrl(`/avg-view-time/`);
    fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        video_id: this.state.playing_id,
        coach_id: this.state.coach_id,
        user_id: user_id,
        view_time: (
          Math.floor((new Date() - this.state.start_time) / 1000) / 60
        ).toFixed(2)
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  };

  get_avg_view_time = video_id => {
    let url = FormatUrl(`/avg-view-time/?video_id=${video_id}`);
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          avg_view_time: res["avg_watch_time"]
        });
      });
  };

  no_of_users_who_have_seen = video_id => {
    let data = JSON.parse(localStorage.getItem("data"));
    let user_id = null;
    if (data && data.type === "user") {
      user_id = data["id"];
    } else {
      user_id = this.state.coach_id;
    }
    let url = FormatUrl(`/no-of-users-who-have-seen/`);
    fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        video_id: video_id,
        coach_id: this.state.coach_id,
        user_id: user_id
      })
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          no_of_users_who_have_seen: res.count
        });
      });
  };

  no_of_played_times = video_id => {
    let data = JSON.parse(localStorage.getItem("data"));
    let user_id = null;
    if (data && data.type === "user") {
      user_id = data["id"];
    }
    let url = FormatUrl(`/no-of-played-times/`);
    fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        video_id: video_id,
        coach_id: this.state.coach_id,
        user_id: user_id
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.length) {
          this.setState({
            no_of_played_times: res[0]["no_of_played_times"]
          });
        }
      });
  };

  startPlayer = video_id => {
    this.setState({
      start_time: new Date()
    });

    this.no_of_played_times(video_id);
    this.no_of_users_who_have_seen(video_id);
    this.get_avg_view_time(video_id);
    this.get_no_of_users_allowed();
    this.no_of_playlists_the_video_is_in();
  };

  getRating = () => {
    let video_id = this.state.playing_id;
    let url = FormatUrl(`/review/?video_id=${video_id}`);
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            ratings: res
          },
          () => this.getComments()
        );
      });
  };

  handleRating = rating => {
    let coach_id = this.state.coach_id;
    let video_id = this.state.playing_id;
    let data = JSON.parse(localStorage.getItem("data"));
    let user_id = null;
    if (data) {
      if (data.type === "user") {
        user_id = data.id;
      } else {
        ToastsStore.error(
          "Coach can't share ratings..",
          3000,
          "toast-box-success"
        );
        return;
      }
    } else {
      ToastsStore.error("Login to share rating..", 3000, "toast-box-success");
      return;
    }
    let url = FormatUrl(`/review/`);
    fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        coach_id: coach_id,
        user_id: user_id,
        video_id: video_id,
        rating: rating
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.code === 200) {
          this.setState({
            show_review_modal: false,
            next_video_modal: true
          });
          this.getRating();
          ToastsStore.success("Success", 3000, "toast-box-success");
        } else {
          this.setState({
            show_review_modal: false,
            next_video_modal: true
          });
          ToastsStore.error("Internal server error", 3000, "toast-box-success");
        }
      })
      .catch(err => {
        this.setState({
          show_review_modal: false,
          next_video_modal: true
        });
        ToastsStore.error("Internal server error", 3000, "toast-box-success");
      });
  };

  changeVideo = video => {
    if (video.video) {
      this.setState(
        {
          playing: video["video"],
          title: video["title"],
          description: video["description"],
          calories: video["calories"],
          equipments: eval(video["equipments"]),
          playing_id: video["id"],
          duration: video["duration"].replace("weeks", "")
        },
        () => this.getRating()
      );
    }
  };

  getPlayLists() {
    let playlists = [];
    if (!JSON.parse(localStorage.getItem("data"))) {
      return;
    }
    let coach_id = JSON.parse(localStorage.getItem("data")).id;
    let url = FormatUrl(`/coach/playlists/?coach_id=${coach_id}`);
    fetch(url)
      .then(res => res.json())
      .then(res => {
        for (let playlist of res) {
          if (playlist.workouts.length > 0) {
            playlists.push(playlist);
          }
        }
        this.setState({
          playlists: playlists
        });
      });
  }

  getLikes = () => {
    this.totalAllowedUsers()
    let video_id = this.state.playing_id;
    let data = JSON.parse(localStorage.getItem("data"));
    let user_id = null;
    if (data && data.type === "user") {
      user_id = data["id"];
    } else {
      user_id = 0;
    }

    let url = FormatUrl(`/likes/?video_id=${video_id}&user_id=${user_id}`);
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          likes: res
        });
      });
  };

  componentDidMount = (id = null) => {
    let data = localStorage.getItem("data");
    if (data) {
      if (JSON.parse(data)["type"] === "coach") {
        this.setState({
          is_coach: true,
          loggedin_coach_id: JSON.parse(data)["id"]
        });
      }
    } else {
      this.props.history.push("/signin/")
      return
    }

    if (id) {
      this.props.history.push(`/player/?playlist=${id}`);
    }

    let user_type = null;
    if (JSON.parse(localStorage.getItem("data"))) {
      user_type = JSON.parse(localStorage.getItem("data"))["type"];
      if (user_type === "user") {
        this.setState({
          is_user: true
        });
      }
    }

    let playlist_id = null;
    let video_id = null;
    if (new URLSearchParams(window.location.search).get("playlist")) {
      playlist_id = new URLSearchParams(window.location.search).get("playlist");
    } else if (new URLSearchParams(window.location.search).get("video")) {
      video_id = new URLSearchParams(window.location.search).get("video");
    } else {
      window.location = "/";
    }

    if (playlist_id) {
      let url = FormatUrl(
        `/coach/videos/?playlist_id=${id ? id : playlist_id}`
      );
      fetch(url)
        .then(res => res.json())
        .then(res => {
          this.setState(
            {
              videos: res.data,
              playing: res.data[0]["video"],
              tags: eval(res.data[0]["tags"]),
              coach_id: res.data[0]["coach_id"],
              title: res.data[0]["title"],
              description: res.data[0]["description"],
              calories: res.data[0]["calories"],
              equipments: eval(res.data[0]["equipments"]),
              duration: res.data[0]["duration"].replace("weeks", ""),
              playing_id: res.data[0]["id"],
              playlist_id: res.data[0]["playlist_id"],
              access_type: res.data[0]["accesstype"],
              playlist_title: res.playlist_name,
              serial_no: 1
            },
            () => this.getRating()
          );
        });
    } else {
      let url = FormatUrl(`/videos/?video_id=${id ? id : video_id}`);
      fetch(url)
        .then(res => res.json())
        .then(res => {
          this.setState({
            videos: res.data
          });
          let counter = 0;
          for (let r of res.data) {
            if (parseInt(r.id) === parseInt(video_id)) {
              this.setState(
                {
                  playing: r["video"],
                  coach_id: r["coach_id"],
                  title: r["title"],
                  tags: eval(r["tags"]),
                  description: r["description"],
                  calories: r["calories"],
                  equipments: eval(r["equipments"]),
                  duration: r["duration"].replace("weeks", ""),
                  playing_id: r["id"],
                  playlist_id: r["playlist_id"],
                  access_type: r["accesstype"],
                  playlist_title: res.playlist_name,
                  serial_no: r.serial_no
                },
                () => this.getRating()
              );
            }
          }
        });
    }
    this.getPlayLists();
  };

  EndedPlayer = () => {
    this.setState({
      next_video_modal: false
    });
    let id = this.state.playing_id;

    this.avg_watch_time();
    let counter = 0;
    for (let video of this.state.videos) {
      if (counter === 1) {
        if (video.video) {
          this.setState({
            playing: video["video"],
            title: video["title"],
            description: video["description"],
            calories: video["calories"],
            equipments: eval(video["equipments"]),
            playing_id: video["id"],
            duration: video["duration"].replace("weeks", "")
          });
        }
        return;
      }
      if (video.id == id) {
        counter += 1;
      }
    }
  };

  EndedPlayerBefore = id => {
    this.setState({
      show_review_modal: true
    });
  };

  getComments = () => {
    let video_id = this.state.playing_id;
    let url = FormatUrl(`/comments/?video_id=${video_id}`);
    fetch(url)
      .then(response => response.json())
      .then(res => {
        this.setState(
          {
            comments: res
          },
          this.getCoachName()
        );
      });
  };

  submitComment = () => {
    let comment = this.state.comment;
    let video_id = this.state.playing_id;
    let coach_id = this.state.coach_id;
    let data = JSON.parse(localStorage.getItem("data"));
    if (!data) {
      return;
    }
    if (data.type !== "user") {
      return;
    }

    let url = FormatUrl(`/comments/`);
    fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        comment: comment,
        video_id: video_id,
        coach_id: coach_id,
        user_id: JSON.parse(localStorage.getItem("data"))["id"]
      })
    })
      .then(response => response.json())
      .then(res => {
        if (res["code"] === 200) {
          ToastsStore.success("Success", 3000, "toast-box-success");
          this.getComments();
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  postLikes = (event, like) => {
    event.preventDefault()
    let video_id = this.state.playing_id;
    let coach_id = this.state.coach_id;
    let data = JSON.parse(localStorage.getItem("data"));
    let user_id = null;
    if (data && data.type === "user") {
      user_id = data["id"];
    } else {
      user_id = 0;
    }

    let url = FormatUrl(`/likes/`);
    fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        like: like,
        video_id: video_id,
        coach_id: coach_id,
        user_id: user_id
      })
    })
      .then(response => response.json())
      .then(res => {
        this.getLikes();
      });
  };

  showAllVideo = () => {
    this.setState({
      showallvideomodal: true
    });
  };

  render() {
    const ratings = this.state.ratings;
    let avg_rating = 0;
    if (ratings.length) {
      let total_ratings = 0;
      for (let rating of ratings) {
        total_ratings += rating.rating;
      }
      avg_rating = (total_ratings / (5 * ratings.length)) * 5;
    }

    if (isFloat(avg_rating)) {
      if (parseInt(toNumberString(avg_rating).split(".")[1]) > 5) {
        avg_rating = Math.ceil(avg_rating);
      } else {
        avg_rating = Math.floor(avg_rating);
      }
    }

    return (
      <section
        className="main videos-show"
        style={
          this.state.is_coach
            ? { marginTop: "-60px", background: "#fff" }
            : { background: "#fff" }
        }
      >
        {this.state.is_coach && <SideBar />}
        <div
          className={
            this.state.is_coach
              ? "dashboards-content"
              : "dashboards-content-inactive"
          }
        >


    {this.state.user_management_modal ? (
            <div
              class="image-modal"
              id="modal"
              style={{
                background: "#fff",
                boxShadow: "none",
                overflowY: "auto",
                width: "40%"
              }}
            >
              <i
                class="fa fa-times-circle pointer f20 fr"
                aria-hidden="true"
                onClick={() => this.setState({ user_management_modal: false })}
                style={{ color: "red" }}
              />
              <div class="row">
                <div class="large-12 columns general-container">
                {/* <p className="tc" style={{ color:'#126F80' }}>Handle users</p> */}
                    <div>
                    <table>
                        <tr style={{ background:'#126F80',fontWeight:'bold' }}>
                        <th style={{ color:'#fff' }}>Username</th>
                        <th style={{ color:'#fff' }}>Action</th>
                        </tr>
                        {
                            this.state.users.length ? 
                            (
                                this.state.users.map(user => (
                                    <tr className={user.active ? 'active-users' : "inactive-users"}>
                                        <td>{user.name}</td>
                                        <td><span title="Allow the user to access this playlist" className="small button secondary coach" style={{ marginTop:'8px' }} onClick={ user.allowed ?  () => this.removeUser(user.id) : () => this.addUser(user.id) }>{user.allowed ? "Remove" : "Add"}</span></td>
                                        {/* <td title="Removing user won't be able to access this playlist" style={{ fontSize:'18px',color:'#F95151' }} className="pointer"><i class="fa fa-times" aria-hidden="true"></i></td> */}
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


            </div>
          ) : (
            ""
          )}


          {this.state.showallvideomodal ? (
            <div
              class="image-modal"
              id="modal"
              style={{
                background: "#fff",
                boxShadow: "none",
                overflowY: "auto"
              }}
            >
              <i
                class="fa fa-times-circle pointer f20 fr"
                aria-hidden="true"
                onClick={() => this.setState({ showallvideomodal: false })}
                style={{ color: "red" }}
              />

              <div id="list">
                {this.state.videos.map(video => (
                  <a href={`/player/?video=${video.id}`}>
                    <center>
                      <div
                        className="row"
                        style={{
                          background: "#fff",
                          margin: "10px",
                          borderRadius: "5px"
                        }}
                      >
                        <div className="large-4 columns expand-column">
                          <div className="filepicker_image">
                            <img
                              alt="ChaiseSculpt thumbnail image"
                              fit="scale"
                              height={140}
                              src={video.thumbnail}
                              width={276}
                            />
                          </div>
                        </div>
                        <div className="large-8 columns">
                          <div
                            className="row info"
                            style={{ margin: "10px 20px" }}
                          >
                            <div className="columns">
                              <h5>{video.title}</h5>
                              <div className="short-description">
                                {video.description.length > 200
                                  ? video.description.slice(0, 200) + "..."
                                  : video.description}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="large-8 columns mt20">
                          {this.state.is_premium_user ? (
                            <h2 className="tc">
                              &nbsp;{" "}
                              <span className="small button secondary coach">
                                Start workout
                              </span>
                            </h2>
                          ) : (
                            <h2 className="tc">
                              &nbsp;{" "}
                              <span className="small button secondary coach">
                                Preview workout
                              </span>
                            </h2>
                          )}
                        </div>
                      </div>
                    </center>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}

          {this.state.next_video_modal ? (
            <div
              class="image-modal"
              id="modal"
              style={{ background: "transparent", boxShadow: "none" }}
            >
              <div class="row">
                <div class="large-12 columns general-container">
                  <div class="row form-block text-center">
                    <div class="large-5 small-12 large-centered columns form-border signup_form border-bottom-radius-0">
                      <div class="row collapse">
                        <br />
                        <br />
                        <br />
                        <br />
                        <h6>Like to watch next video ?</h6>
                        <div className="small-12 large-12 columns margin-tb-15">
                          <div class="actions">
                            <button
                              class="button expand"
                              type="button"
                              onClick={() => this.EndedPlayer()}
                            >
                              Yes
                            </button>
                            <button
                              class="button expand"
                              type="button"
                              onClick={() =>
                                this.setState({ next_video_modal: false })
                              }
                            >
                              No
                            </button>
                          </div>
                          <br />
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {this.state.show_review_modal ? (
            <div
              class="image-modal"
              id="modal"
              style={{ background: "transparent", boxShadow: "none" }}
            >
              <div class="row">
                <div class="large-12 columns general-container">
                  <div class="row form-block text-center">
                    <div class="large-5 small-12 large-centered columns form-border signup_form border-bottom-radius-0">
                      <div class="row collapse">
                        <br />
                        <br />
                        <br />
                        <br />
                        <h6>Please rate this video out of 5.</h6>
                        <div className="small-12 large-12 columns margin-tb-15">
                          <div>
                            {avg_rating === 0 ? (
                              <ul className="inline-ratings">
                                <li onClick={() => this.handleRating(1)}>
                                  <i
                                    class="fa fa-heart inactive"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li onClick={() => this.handleRating(2)}>
                                  <i
                                    class="fa fa-heart inactive"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li onClick={() => this.handleRating(3)}>
                                  <i
                                    class="fa fa-heart inactive"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li onClick={() => this.handleRating(4)}>
                                  <i
                                    class="fa fa-heart inactive"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li onClick={() => this.handleRating(5)}>
                                  <i
                                    class="fa fa-heart inactive"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                              </ul>
                            ) : avg_rating === 1 ? (
                              <ul className="inline-ratings">
                                <li onClick={() => this.handleRating(1)}>
                                  <i
                                    class="fa fa-heart active"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li onClick={() => this.handleRating(2)}>
                                  <i
                                    class="fa fa-heart inactive"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li onClick={() => this.handleRating(3)}>
                                  <i
                                    class="fa fa-heart inactive"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li onClick={() => this.handleRating(4)}>
                                  <i
                                    class="fa fa-heart inactive"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li onClick={() => this.handleRating(5)}>
                                  <i
                                    class="fa fa-heart inactive"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                              </ul>
                            ) : avg_rating === 2 ? (
                              <ul className="inline-ratings">
                                <li onClick={() => this.handleRating(1)}>
                                  <i
                                    class="fa fa-heart active"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li onClick={() => this.handleRating(2)}>
                                  <i
                                    class="fa fa-heart active"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li onClick={() => this.handleRating(3)}>
                                  <i
                                    class="fa fa-heart inactive"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li onClick={() => this.handleRating(4)}>
                                  <i
                                    class="fa fa-heart inactive"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li onClick={() => this.handleRating(5)}>
                                  <i
                                    class="fa fa-heart inactive"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                              </ul>
                            ) : avg_rating === 3 ? (
                              <ul className="inline-ratings">
                                <li onClick={() => this.handleRating(1)}>
                                  <i
                                    class="fa fa-heart active"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li onClick={() => this.handleRating(2)}>
                                  <i
                                    class="fa fa-heart active"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li onClick={() => this.handleRating(3)}>
                                  <i
                                    class="fa fa-heart active"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li onClick={() => this.handleRating(4)}>
                                  <i
                                    class="fa fa-heart inactive"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li onClick={() => this.handleRating(5)}>
                                  <i
                                    class="fa fa-heart inactive"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                              </ul>
                            ) : avg_rating === 4 ? (
                              <ul className="inline-ratings">
                                <li onClick={() => this.handleRating(1)}>
                                  <i
                                    class="fa fa-heart active"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li onClick={() => this.handleRating(2)}>
                                  <i
                                    class="fa fa-heart active"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li onClick={() => this.handleRating(3)}>
                                  <i
                                    class="fa fa-heart active"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li onClick={() => this.handleRating(4)}>
                                  <i
                                    class="fa fa-heart active"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li onClick={() => this.handleRating(5)}>
                                  <i
                                    class="fa fa-heart inactive"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                              </ul>
                            ) : (
                              <ul className="inline-ratings">
                                <li onClick={() => this.handleRating(1)}>
                                  <i
                                    class="fa fa-heart active"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li onClick={() => this.handleRating(2)}>
                                  <i
                                    class="fa fa-heart active"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li onClick={() => this.handleRating(3)}>
                                  <i
                                    class="fa fa-heart active"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li onClick={() => this.handleRating(4)}>
                                  <i
                                    class="fa fa-heart active"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li onClick={() => this.handleRating(5)}>
                                  <i
                                    class="fa fa-heart active"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                              </ul>
                            )}
                          </div>
                          <br />
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {this.state.sharemodal ? (
            <div
              class="image-modal"
              id="modal"
              style={{ background: "transparent", boxShadow: "none" }}
            >
              <div class="row">
                <div class="large-12 columns general-container">
                  <div class="row form-block text-center">
                    <div class="large-5 small-12 large-centered columns form-border signup_form border-bottom-radius-0">
                      <div class="row collapse">
                        <a href="https://www.facebook.com/" target="_blank">
                          <i
                            class="fa fa-facebook-official facebook-icon"
                            aria-hidden="true"
                          ></i>
                        </a>
                        <a href="https://twitter.com" target="_blank">
                          <i
                            class="fa fa-twitter twitter-icon"
                            aria-hidden="true"
                          ></i>
                        </a>
                        <div class="row collapse">
                          <div class="small-12 large-12 columns">
                            <div class="field">
                              <input
                                className="form-control"
                                value={window.location.href}
                                placeholder="link"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                        <button
                          className="button"
                          onClick={() => this.setState({ sharemodal: false })}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="row">
            <ReactPlayer
              url={this.state.playing + "?rel=0"}
              playing
              width="100%"
              height="500px"
              controls="true"
              ref="player"
              onStart={() => this.startPlayer(this.state.playing_id)}
              onEnded={() => this.EndedPlayerBefore(this.state.playing_id)}
            />

            <div className="col video-details">
            {/* <ul className="inline-list"> */}
                {
                    this.state.tags.map(tag => (
                        <span style={{color: 'blue'}} className="f12">{"#" + tag + " "}</span>
                    ))
                }
            {/* </ul> */}

              <h3>{this.state.title}</h3>

              <div className="row margin-top-10">
                <div className="col">
                  <p><b>{this.state.calories}</b> Calorires</p>
                </div>

                <div className="col-6 comment-options">
      
                  {/* <a href="#">
                    <i className="fa fa-eye" />
                    &nbsp;&nbsp;{this.state.likes.likes}
                  </a> */}
                  <a href="#">
                    <i className="fa fa-unlock" />
                    &nbsp;&nbsp;{this.state.no_of_users_who_have_seen}
                  </a>
                  <a href="#">
                    <i className="fa fa-male" />
                    &nbsp;&nbsp;{this.state.no_of_users_who_have_seen}
                  </a>
                  <a href="#">
                    <i className="fa fa-clock-o" />
                    &nbsp;&nbsp;{this.state.avg_view_time}
                  </a>
                  <a href="#">
                    <i className="fa fa-th-list" />
                    &nbsp;&nbsp;{this.state.no_of_playlists_the_video_is_in}
                  </a>
                </div>
              </div>
              <div className="row margin-top-10">
                <div className="col">
                  <p><i className="fa fa-eye" /> {this.state.no_of_played_times} views * Jan 21, 2020</p>
                </div>

                <div className="col-6 comment-options">
                  <a href="#" onClick={(e) => this.postLikes(e, 1)}>
                    <i className="fa fa-thumbs-up" style={this.state.likes.liked === 1 ? {color: 'blue'} : {}} />
                    &nbsp;&nbsp;{this.state.likes.likes}
                  </a>
                  <a href="#" onClick={(e) => this.postLikes(e, 2)}>
                    <i className="fa fa-thumbs-down"  style={this.state.likes.liked === 2 ? {color: 'blue'} : {}} />
                    &nbsp;&nbsp;{this.state.likes.dislikes}
                  </a>
                  <a href="#" onClick={this.handleShareModal}>
                    <i className="fa fa-share" />
                    &nbsp;&nbsp;Share
                  </a>
                  <a href="#">
                    <i className="fa fa-list" />
                    &nbsp;&nbsp;Save
                  </a>
                  <a href="#">
                    <i className="fa fa-ellipsis-h" />
                  </a>
                </div>
              </div>
             
                  <center>
                    {
                      this.state.is_coach_of_current_video ?
                      (
                        <div>
                        <div>
                          <span onClick={this.state.access_type === 1 ? '' : () => this.changeVideoAccessType(1)}><i title="public" class={this.state.access_type === 1 ?  "fa fa-globe access-type-icons access-type-icons-active" : "fa fa-globe access-type-icons" } aria-hidden="true"></i></span>
                          <span onClick={this.state.access_type === 2 ? '' : () => this.changeVideoAccessType(2)}><i title="private" class={this.state.access_type === 2 ? "fa fa-sign-language access-type-icons access-type-icons-active" : "fa fa-sign-language access-type-icons" } aria-hidden="true"></i></span>
                        </div>
                        {
                            this.state.access_type === 2 ? (
                              <div>
                              <span className="user-allowed-title" onClick={() => this.setState({user_management_modal: true}, () => this.fetchUsers())}>{this.state.allowed_users} users allowed</span>
                            </div>
                            ): (
                              ''
                            )
                        }
               
                        </div>
                      ): (
                        <div>
                            <div>
                              <span><i title="public" class={this.state.access_type === 1 ?  "fa fa-globe access-type-icons access-type-icons-active auto-cursor" : "fa fa-globe access-type-icons auto-cursor" } aria-hidden="true"></i></span>
                              <span><i title="private" class={this.state.access_type === 2 ? "fa fa-sign-language access-type-icons access-type-icons-active auto-cursor" : "fa fa-sign-language access-type-icons auto-cursor" } aria-hidden="true"></i></span>
                              {/* <span className="user-allowed-title">125 users allowed</span> */}
                          </div>
                      
                            <div>
                              <span className="user-allowed-title">{this.state.allowed_users} users allowed</span>
                            </div>
                          </div>
                      )
                    }
 
                  </center>
              <hr />

              <div className="row">
                <div className="col padding-right-20">
                  <img src={iccLogo} alt="logo" />
                </div>
                <div className="col-11">
                  <h4 className="text-left">
                  {this.state.coach_name} <i className="fa fa-check-circle" />
                  </h4>
                  {/* <p>6.04M subscribers</p> */}

                  <div style={{ marginTop:'10px' }}>
                        {avg_rating === 0 ? (
                          <ul className="inline-ratings">
                            <li>
                              <i
                                class="fa fa-heart inactive"
                                aria-hidden="true"
                              />
                            </li>
                            <li>
                              <i
                                class="fa fa-heart inactive"
                                aria-hidden="true"
                              />
                            </li>
                            <li>
                              <i
                                class="fa fa-heart inactive"
                                aria-hidden="true"
                              />
                            </li>
                            <li>
                              <i
                                class="fa fa-heart inactive"
                                aria-hidden="true"
                              />
                            </li>
                            <li>
                              <i
                                class="fa fa-heart inactive"
                                aria-hidden="true"
                              />
                            </li>
                          </ul>
                        ) : avg_rating === 1 ? (
                          <ul className="inline-ratings">
                            <li>
                              <i
                                class="fa fa-heart active"
                                aria-hidden="true"
                              />
                            </li>
                            <li>
                              <i
                                class="fa fa-heart inactive"
                                aria-hidden="true"
                              />
                            </li>
                            <li>
                              <i
                                class="fa fa-heart inactive"
                                aria-hidden="true"
                              />
                            </li>
                            <li>
                              <i
                                class="fa fa-heart inactive"
                                aria-hidden="true"
                              />
                            </li>
                            <li>
                              <i
                                class="fa fa-heart inactive"
                                aria-hidden="true"
                              />
                            </li>
                          </ul>
                        ) : avg_rating === 2 ? (
                          <ul className="inline-ratings">
                            <li>
                              <i
                                class="fa fa-heart active"
                                aria-hidden="true"
                              />
                            </li>
                            <li>
                              <i
                                class="fa fa-heart active"
                                aria-hidden="true"
                              />
                            </li>
                            <li>
                              <i
                                class="fa fa-heart inactive"
                                aria-hidden="true"
                              />
                            </li>
                            <li>
                              <i
                                class="fa fa-heart inactive"
                                aria-hidden="true"
                              />
                            </li>
                            <li>
                              <i
                                class="fa fa-heart inactive"
                                aria-hidden="true"
                              />
                            </li>
                          </ul>
                        ) : avg_rating === 3 ? (
                          <ul className="inline-ratings">
                            <li>
                              <i
                                class="fa fa-heart active"
                                aria-hidden="true"
                              />
                            </li>
                            <li>
                              <i
                                class="fa fa-heart active"
                                aria-hidden="true"
                              />
                            </li>
                            <li>
                              <i
                                class="fa fa-heart active"
                                aria-hidden="true"
                              />
                            </li>
                            <li>
                              <i
                                class="fa fa-heart inactive"
                                aria-hidden="true"
                              />
                            </li>
                            <li>
                              <i
                                class="fa fa-heart inactive"
                                aria-hidden="true"
                              />
                            </li>
                          </ul>
                        ) : avg_rating === 4 ? (
                          <ul className="inline-ratings">
                            <li>
                              <i
                                class="fa fa-heart active"
                                aria-hidden="true"
                              />
                            </li>
                            <li>
                              <i
                                class="fa fa-heart active"
                                aria-hidden="true"
                              />
                            </li>
                            <li>
                              <i
                                class="fa fa-heart active"
                                aria-hidden="true"
                              />
                            </li>
                            <li>
                              <i
                                class="fa fa-heart active"
                                aria-hidden="true"
                              />
                            </li>
                            <li>
                              <i
                                class="fa fa-heart inactive"
                                aria-hidden="true"
                              />
                            </li>
                          </ul>
                        ) : (
                          <ul className="inline-ratings">
                            <li>
                              <i
                                class="fa fa-heart active"
                                aria-hidden="true"
                              />
                            </li>
                            <li>
                              <i
                                class="fa fa-heart active"
                                aria-hidden="true"
                              />
                            </li>
                            <li>
                              <i
                                class="fa fa-heart active"
                                aria-hidden="true"
                              />
                            </li>
                            <li>
                              <i
                                class="fa fa-heart active"
                                aria-hidden="true"
                              />
                            </li>
                            <li>
                              <i
                                class="fa fa-heart active"
                                aria-hidden="true"
                              />
                            </li>
                          </ul>
                        )}
                      </div>
                    
                  {
                     this.state.description_full ?
                     (
                      <p className="description">
                        {this.state.description}
                      </p>
                     ):(
                      <p className="description">
                            {this.state.description.length > 400 ? 
                            this.state.description.slice(0, 400) + " ..." :
                            this.state.description}
                      </p>
                     )
                  }


                  <a href="#" onClick={() => this.setState(this.state.description_full ? { description_full: false} : { description_full: true})}>
                    {this.state.description_full ? "SHOW LESS" : "SHOW MORE"}
                  </a>
                </div>
              </div>
              <hr />

            <div className="row">
              <div className="small-7 columns">

              {this.state.is_user ? (
                        <div>
                          <div style={{ padding: "10px 0 0 0" }}>
                            <textarea
                              id="description"
                              className="form-control"
                              placeholder="share your comment here"
                              onChange={e =>
                                this.setState({ comment: e.target.value })
                              }
                            />
                          </div>
                          <button
                            style={{ marginTop: "0px" }}
                            className="button"
                            name="commit"
                            type="buttom"
                            onClick={this.submitComment}
                          >
                            Comment
                          </button>
                        </div>
                      ) : (
                        ""
                      )}

                        <br/><br/>
                <div className="row comment-sort-container">
                  <div className="col-2">611 Comments</div>
                  <div className="col-2 margin-left-20">
                    {/* <a href="#">
                      <i className="fa fa-sort-amount-desc" /> SORT BY
                    </a> */}
                  </div>
                </div>


                {
                  this.state.comments.map((comment, index) => ( 
                  <div className="row margin-top-20">
                    <div className="col padding-right-25">
                      <img src={videoLogo} alt="logo" />
                    </div>
                    <div className="col-11">
                      <p>
                        <a href="#">{comment.user_id__name}</a> 
                        {/* 365 days ago */}
                      </p>
                      <p className="margin-top-10">
                        {comment.comment}
                      </p>
                    </div>
                  </div>
              
                  ))
                }
            
              </div>

              <div className="small-5 columns">
                <p className="tc">{this.state.serial_no} of {this.state.videos.length} videos playing from <b>{this.state.playlist_title}</b> Playlist</p>
              <br/>
                
                {this.state.videos.slice(0, 2).map(video => (
                  <div
                    className="row pointer"
                    onClick={() => this.changeVideo(video)}
                  >

                    {/* rahman - the issue is in this div - 
                    when you remove the img and <a> tag</a> it will work. */}
                    <div className="small-12 large-12 columns margin-bottom-10">
                      <div className="recommendation-thumbnail">
                        <img
                          align="left"
                          alt="Arms, Abs, Legs and Butt! thumbnail image"
                          fit="scale"
                          height={156}
                          src={video.thumbnail}
                          width={276}
                        />
                      </div>
                      <div className="recommendation-content">
                        <h6 className="recommended-title">
                          <a href="#">
                            {video.title}
                          </a>
                        </h6>
                      </div>
                    </div>


                  </div>
                ))}


                <button
                  style={{ marginTop: "0px" }}
                  className="button expand"
                  name="commit"
                  type="buttom"
                  onClick={() => this.showAllVideo()}
                >
                  All Videos
                </button>


              </div>

              
              </div>

              
            </div>

          </div>

  
          <ToastsContainer store={ToastsStore} />
        </div>
      </section>
    );
  }
}

export default Player;