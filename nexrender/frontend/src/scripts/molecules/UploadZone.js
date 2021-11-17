import React, {useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import './styles/UploadZone.css'
import uploadLogo from '../../assets/upload.svg'

//http://jsfiddle.net/4cwpLvae/

export default function Uploadzone(props) {
  const onDrop = useCallback(acceptedFiles => {
    props.loading(true);
    console.log(acceptedFiles);
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = (data) => {
          setTimeout(() => props.loading(false), 2000);
          console.log('file reading was succesful', data.target);
      };
      reader.readAsArrayBuffer(file)
    });
    //props.files({...acceptedFiles})
  }, []);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  return(
      <div className={isDragActive ? 'uploadzoneContainer dragState' : 'uploadzoneContainer'} {...getRootProps()} >
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here.</p> :
            <img src={uploadLogo} alt="upload icon" />
          }
      </div>

  )
}