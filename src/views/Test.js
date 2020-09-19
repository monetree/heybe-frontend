import React from 'react';
import Dropzone from 'react-dropzone-uploader'
import config from "utils/s3Config";
import { uploadFile } from 'react-s3';

const Test = () => {


 const UploadToS3 = (file) =>{
     console.log(file)
    uploadFile(file, config)
    .then(data => console.log(data))
    .catch(err => console.error(err))
  }


    
    const getUploadParams = async ({ meta: { name } }) => {
        const { fields, uploadUrl, fileUrl } = await UploadToS3(name)
        return { fields, meta: { fileUrl }, url: uploadUrl }
      }

    const handleChangeStatus = ({ meta }, status) => {
      console.log("hhhh", status, meta)
    }
  
    const handleSubmit = (files, allFiles) => {
      console.log(files.map(f => f.meta))
      allFiles.forEach(f => f.remove())
    }
  
    return (
        <div>
        <br/><br/><br/><br/><br/><br/>
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
      />
      </div>
    )
  }
  
export default Test