import React, {useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import './styles/UploadZone.css'
import uploadLogo from '../../assets/upload.svg'

//http://jsfiddle.net/4cwpLvae/

export default function Uploadzone(props) {
  const onDrop = useCallback(acceptedFiles => {
    props.loading(true);
    const readFiles = [];
    let doneCounter = 0;
    
    acceptedFiles.forEach((file, index) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file)
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = (data) => {
        doneCounter++;
        //console.log('file', index, 'reading was succesful');
        readFiles.push(data.target);
        if(doneCounter === acceptedFiles.length) {
          console.log('readFiles', readFiles);
          const jsonFiles = JSON.stringify(readFiles);
          console.log('jsonFiles', jsonFiles);
          props.loading(false);
          props.files(jsonFiles);
        }
      };
    });
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