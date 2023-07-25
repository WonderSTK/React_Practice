import "./App.css";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import ThemeContext from "./context/ThemeContext";
import videoDB from "./data/data";
import { useContext, useReducer, useState } from "react";
function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  function videoReducer(videos, action){
    switch (action.type) {
      case 'ADD':
        
        return [
          ...videos,
          {...action.payload, id: videos.length+1}
         ]
      case 'DELETE':
        return videos.filter(video=>video.id!==action.payload)
      case 'UPDATE':
        const index = videos.findIndex(v=>v.id===action.payload.id);
        const newVideos =[...videos]
        newVideos.splice(index,1,action.payload);
        setEditableVideo(null)
        return newVideos
      default:
        return videos
    }

  }
 
  const [videos, dispatch] = useReducer(videoReducer, videoDB);

  const themeContext = useContext(ThemeContext);


  function editVideo(id){
    setEditableVideo(videos.find(video=>video.id===id));
  }
  


  return (
    <div className={ 'App ${themeContext}' }>
      <AddVideo dispatch={dispatch}  editableVideo={editableVideo}></AddVideo>
      <VideoList dispatch={dispatch} editVideo={editVideo} videos={videos}></VideoList>
      
    </div>
  );
}

export default App;
