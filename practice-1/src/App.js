import "./App.css";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import videoDB from "./data/data";
import { useState } from "react";
function App() {
  const [videos, setVideos] = useState(videoDB);
  function addVideos(video){
    setVideos([
      ...videos,
      {...video, id: videos.length+1}
     ]);
  }

  function deleteVideo(id){
    setVideos(videos.filter(video=>video.id!==id));
  }

  function editVideo(id){
    
  }
  return (
    <div className="App">
      <AddVideo addVideos={addVideos}></AddVideo>
      <VideoList deleteVideo={deleteVideo} editVideo={editVideo} videos={videos}></VideoList>
      
    </div>
  );
}

export default App;
