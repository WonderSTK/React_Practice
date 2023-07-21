import "./App.css";
import AddVideo from "./components/AddVideo";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videoDB from "./data/data";
import { useState } from "react";
function App() {
  const [videos, setVideos] = useState(videoDB);
  return (
    <div className="App">
      <AddVideo
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >
          <PlayButton
            message="play-msg"
            onPlay={() => console.log('Playing..', video.title)}
            onPause={() => console.log('Paused..', video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      
    </div>
  );
}

export default App;
