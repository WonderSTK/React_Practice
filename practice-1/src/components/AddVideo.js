import { useEffect, useRef, useState } from "react";
import "./AddVideo.css"
import useVideoDispatch from "../hooks/VideoDispatch";


const intialState = {
        time: '2 year ago',
        channel: 'Mehul Kumar',
        verified: true,
        title: '',
        views: '',
}

function AddVideo({editableVideo,}) {
    const [video, setVideo] = useState(intialState);
    const dispatch = useVideoDispatch();
    const inputRef = useRef(null);
function handleSubmit(e){
    e.preventDefault();
    if(editableVideo){
        dispatch({type: 'UPDATE' ,payload:video})

    }else{
        dispatch({type: 'ADD' ,payload:video})
    }
    setVideo(intialState);
    }

    function handleChange(e){
        setVideo({...video,
            [e.target.name] : e.target.value
        });
    }

    useEffect(()=>{
        if(editableVideo){
            setVideo(editableVideo)
        }
        inputRef.current.focus()
    },[editableVideo])

    return(
        <form>
            <input
              ref={inputRef}
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
        
        <button onClick={handleSubmit}>{editableVideo?'Edit': 'Add'} Video</button>
        </form>
    )

}

export default AddVideo;