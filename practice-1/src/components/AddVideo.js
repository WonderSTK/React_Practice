import { useState } from "react";
import "./AddVideo.css"

const intialState = {
        time: '2 year ago',
        channel: 'Mehul Kumar',
        verified: true,
        title: '',
        views: '',
}

function AddVideo({addVideos}) {
    const [video, setVideos] = useState(intialState);

    function handleSubmit(e){
        e.preventDefault();
        addVideos(video);
        setVideos(intialState);
        

    }
    function handleChange(e){
        setVideos({...video,
            [e.target.name] : e.target.value
        });
    }

    return(
        <form>
            <input
              type="text" 
              name="title" 
              onChange={handleChange} 
              placeholder="Title" 
              value={video.title}
            />
            <input 
              type="text" 
              name="views" 
              onChange={handleChange} 
              placeholder="Views"
              value={video.views}
             />
        
        <button onClick={handleSubmit}>Add Video</button>
        </form>
    )

}

export default AddVideo;