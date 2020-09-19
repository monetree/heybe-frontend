import * as constants from './Constants'

const FormatUrl = (url) => {
    let port = parseInt(window.location.port);
    let live_url = constants.LIVEURL;
    let local_url = constants.LOCALURL;
    if (port === 3000){
      url = local_url + url;
    } else {
      url = live_url + url;
    }
    return url
}

export default FormatUrl
