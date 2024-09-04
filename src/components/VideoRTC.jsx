import React from 'react'
import { useRef,useEffect } from 'react'

const VideoRTC = () => {
  const videoRef= useRef(null);
  useEffect(()=>{
     navigator.mediaDevices.getUserMedia({video:true}).then(stream=>{
      videoRef.current.srcObject=stream;
      video.current.play();

     }).catch((err)=>{
      console.log("Error While accesssing the camera!!"+err);

      
     })
  },[])
  return (

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <video ref={videoRef} width="640" height="480" autoPlay muted />
    </div>

  )
}

export default VideoRTC;
