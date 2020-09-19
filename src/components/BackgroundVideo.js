import React from 'react';
import './BackgroundVideo.css';

class BackgroundVideo extends React.Component {
    componentDidMount() {
        document.getElementById("big-video-vid_html5_api").play();
    }
    render() {
        return (
            <div className="background-video">
                <video
                    id="big-video-vid_html5_api"
                    // className="vjs-tech"
                    autoPlay="autoplay"
                    preload="none"
                    muted
                    webkit-playsinline
                    className="background-video-player"
                    poster={this.props.poster}
                    src={this.props.src}>
                </video>
            </div>
        )
    }
}


export default BackgroundVideo;