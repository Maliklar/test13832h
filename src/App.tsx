import React from "react";

import "./App.css";
import { ReactMediaRecorder } from "react-media-recorder";

// @ts-ignore
import vid from "./a.mp4";
function App() {
  console.log(vid);
  return (
    <div className="App">
      <video
        controls
        src={vid}
        height="500px"
        width="500px"
        autoPlay
        style={{
          backgroundColor: "red",
        }}
      ></video>
      {/* <ReactMediaRecorder
        video
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div>
            <p>{status}</p>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
            <video src={mediaBlobUrl} controls autoPlay loop />
          </div>
        )}
      /> */}
    </div>
  );
}

export default App;
