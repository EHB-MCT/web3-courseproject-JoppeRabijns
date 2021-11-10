import React from 'react';
import VideoContext from "videocontext";

class Editor extends React.Component {
  componentDidMount(){
  var canvasElement = document.getElementById("canvas");
  var videoCtx = new VideoContext(canvasElement);
  var videoNode1 = videoCtx.video(
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  );
  videoNode1.start(0);
  videoNode1.stop(4);
  
  var videoNode2 = videoCtx.video(
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  );
  videoNode2.start(2);
  videoNode2.stop(6);
  
  var crossFade = videoCtx.transition(VideoContext.DEFINITIONS.CROSSFADE);
  crossFade.transition(2, 4, 0.0, 1.0, "mix");
  
  videoNode1.connect(crossFade);
  videoNode2.connect(crossFade);
  crossFade.connect(videoCtx.destination);
  
  videoCtx.play();
  
  }
  render() { 
    return <div id="canvas" style={{height:800, width: 1200}}></div>;
  }
}
 
export default Editor;

