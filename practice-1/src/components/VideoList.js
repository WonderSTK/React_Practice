  import PlayButton from "./PlayButton";
import Video from "./Video";
import useVideos from "../hooks/Videos";

function VideoList({editVideo}) {
  const videos = useVideos();
    return(
        <>
        {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          editVideo={editVideo}
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
        
        </>

    )
}

export default VideoList;