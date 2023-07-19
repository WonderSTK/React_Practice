import "./App.css"
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videos from "./data/data"
function App() {


  return (
    <div className="App">
      <div>Videos</div>
      {
        videos.map(video=><Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        ></Video>)
      }
      <div style={{clear:'both'}}>
        <PlayButton name="play" message="play-msg"></PlayButton>
        <PlayButton name="pause" message="pause-msg"></PlayButton>
      </div>
      
      
    </div>
  );
}

export default App;