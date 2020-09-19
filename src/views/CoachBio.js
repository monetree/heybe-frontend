import React, { PureComponent } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import FormatUrl from "utils/UrlFormatter";
import { uploadFile } from 'react-s3';
import config from "utils/s3Config";

class CoachDashboard extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      logoformat:"jpeg",
      bannerformat:'jpeg',
      buttonLoading:false,
      showmodal:0,
      logo:'',
      src: null,
      crop: {
        unit: '%',
        width: 200,
        aspect: 15 / 16,
      },
      crop2: {
        unit: '%',
        width: 200,
        aspect: 16 / 9,
      },
      bio:''
    };

  }

  componentDidMount(){
    document.getElementById("top-bar-main").classList.remove("expanded")
    document.getElementsByTagName('body')[0].id = 'messages_new';
  }


  UploadToS3 = (image) =>{
    let file = null
    if(image === "logo"){
      file = this.state.logo;  
    } else {
      file = this.state.banner;  
    }
    uploadFile(file, config)
    .then(data => {
      console.log(data)
      if(image === "logo"){
        this.setState({
          buttonLoading:false,
          logo:data.location,
          showmodal: 0
        }) 
      } else {
        this.setState({
          buttonLoading:false,
          banner:data.location,
          showmodal: 0
        })
      }
    })
    .catch(err => {
      // console.error(err)
      this.setState({
        buttonLoading:false,
        logo:null
      })
    })
  }

  saveImage = (image) => {
    this.setState({
      buttonLoading:true
    }, () => this.UploadToS3(image))
  }



  onSelectBanner = e => {
    this.setState({
      showmodal:2,
      bannerformat:e.target.files[0].name.split(".")[1]
    })
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  onBannerCropChange = (crop2, percentCrop) => {
    this.setState({ crop2 });
  };

  onBannerCropComplete = crop => {
    this.makeBannerClientCrop(crop);
  };


  onSelectLogo = e => {
    this.setState({
      showmodal:1,
      logoformat:e.target.files[0].name.split(".")[1]
    })
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  

  onImageLoaded = image => {
    this.imageRef = image;
  };

  onCropComplete = crop => {
    console.log(crop)
    this.makeClientCrop(crop);
  };

  onCropChange = (crop, percentCrop) => {
    this.setState({ crop });
  };


  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImage = await this.getCroppedImg(
        this.imageRef,
        crop,
        Math.floor((Math.random() * 1000000000) + 1) + "." + this.state.logoformat
      );
      console.log("Cropped file image is ------------- ", croppedImage.imageFile);
      this.setState({
        logo:croppedImage.imageFile
      })
      this.setState({ croppedImageUrl : croppedImage.fileUrl });
    }
    }


  async makeBannerClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImage = await this.getCroppedImg(
        this.imageRef,  
        crop,
        Math.floor((Math.random() * 1000000000) + 1) + "." + this.state.bannerformat
      );
      console.log("Cropped file image is ------------- ", croppedImage.imageFile);
      this.setState({
        banner:croppedImage.imageFile
      })
      this.setState({ croppedImageUrl : croppedImage.fileUrl });
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    var originWidth = crop.width * scaleX;
    var originHeight = crop.height * scaleY;
    // maximum width/height
    var maxWidth = 1200, maxHeight = 1200 / (16 / 9);
    var targetWidth = originWidth,
      targetHeight = originHeight;
    if (originWidth > maxWidth || originHeight > maxHeight) {
      if (originWidth / originHeight > maxWidth / maxHeight) {
        targetWidth = maxWidth;
        targetHeight = Math.round(maxWidth * (originHeight / originWidth));
      } else {
        targetHeight = maxHeight;
        targetWidth = Math.round(maxHeight * (originWidth / originHeight));
      }
    }
    // set canvas size
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    const ctx = canvas.getContext("2d");


  ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      targetWidth, 
      targetHeight 
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        let imageFile = new File([blob], fileName);
        resolve({fileUrl: this.fileUrl, imageFile: imageFile});
      }, 'image/jpeg');
    });
  }


  handleSubmit = () => {
    let id = JSON.parse(localStorage.getItem("data")).id
    let logo = this.state.logo;
    let banner = this.state.banner;
    let bio = this.state.bio;
    let data = JSON.stringify({
      id:id,
      logo:logo,
      banner:banner,
      bio:bio
    })
    let url = FormatUrl(`/coach/bio/`)
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
          this.props.history.push("/coach/dashboard")
        }
    })
  }




  render() {
    const { crop,crop2, croppedImageUrl, src } = this.state;

    return (
      <section className="main general">
        {
          this.state.showmodal === 1 ? 
          (
            <div class="image-modal" id="modal">
              <div className="row">
              <div className="small-6 columns">
                      <div style={{ width:'300px',height:'300px' }}>
                      {src && (
                        <ReactCrop
                          src={src}
                          crop={crop}
                          ruleOfThirds
                          onImageLoaded={this.onImageLoaded}
                          onComplete={this.onCropComplete}
                          onChange={this.onCropChange}
                        />
                        )}
                        </div>
                        </div>
                        <div className="small-6 columns">
                          {croppedImageUrl && (
                            <img alt="Crop" style={{ height:'200px' }} src={croppedImageUrl} />
                          )}
                          
                      </div> 
                      {
                          this.state.buttonLoading ?
                          (
                            <button className="button btn-disabled" disabled><i class="fa fa-refresh fa-spin"></i> Loading</button>

                          ):(
                            <button className="button" onClick={() => this.saveImage("logo")}>Save</button>
                          )
                        }                          
                      </div>
            </div>
          ):  this.state.showmodal === 2 ?
          (
          <div class="image-modal" id="modal">
          <div className="row">
          <div className="small-6 columns">
                  <div style={{ width:'300px',height:'300px' }}>
                  {src && (
                    <ReactCrop
                      src={src}
                      crop={crop2}
                      ruleOfThirds
                      onImageLoaded={this.onImageLoaded}
                      onComplete={this.onBannerCropComplete}
                      onChange={this.onBannerCropChange}
                    />
                    )}
                    </div>
                    </div>
                    <div className="small-6 columns">
                      {croppedImageUrl && (
                        <img alt="Crop" style={{ height:'200px' }} src={croppedImageUrl} />
                      )}
                      
                  </div> 
                        {
                          this.state.buttonLoading ?
                          (
                            <button className="button btn-disabled" disabled><i class="fa fa-refresh fa-spin"></i> Loading</button>

                          ):(
                            <button className="button" onClick={() => this.saveImage("banner")}>Save</button>
                          )
                        }
                  </div>
        </div>
        ):
        ('')
        }
      
      <div class="row" style={{ marginTop:'1cm' }}>
            <div class="large-12 columns general-container">
            <div class="row form-block text-center">
        <div class="large-5 small-12 large-centered columns form-border signup_form border-bottom-radius-0">
        <div className="text-center panel-header bordered pad-half bottom-border">
                <h3>Create Your Profile</h3>
                <h6>We Want To Hear From You!</h6>
              </div>

          <div className="row">
                    <div className="small-12 columns">
                    <label className="button expand">Upload Logo<input onChange={this.onSelectLogo} type="file" style={{display:'none'}} /></label>      
            </div>
          </div>
      
   
          <div className="row">
                    <div className="small-12 columns">
              <label className="button expand">Upload Banner<input onChange={this.onSelectBanner} type="file" style={{display:'none'}} /></label>            
            </div>
          </div>
          <br/>

          <div class="row collapse">
            <div class="small-12 large-12 columns">
              <div class="field">
              <textarea style={{ borderRadius:'5px',padding:'10px', width:'100%' }} id="message_message" placeholder="Bio" rows={7} onChange={(e) => this.setState({ bio: e.target.value })} />             
              </div>
            </div>
          </div>
      
      
          <div className="row">
                    <div className="small-12 columns">
                    <button className="button expand" name="commit" type="buttom" onClick={this.handleSubmit}>Submit</button>          
            </div>
          </div>
          <br/>
        </div>
      

      
    
  
      </div>
      
            </div>
          </div>


      <br/><br/><br/>
    </section>
    );
  }
}


export default CoachDashboard;
