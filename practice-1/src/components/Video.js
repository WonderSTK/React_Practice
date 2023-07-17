import './Video.css'

function Video({title,channel="Mehul Kumar",views,time,verified}) {
    return (
        <>


        <div className='container'>
        <div className="pic">
        <img src="https://picsum.photos/id/4/160/90" alt="Katherine Johnson" />
        </div>
        <div className="title">{title}</div>
        { verified ? <div className="channel">{channel}  ✔️</div> : <div className="channel">{channel} <div> }
        
        <div className="views">
        {views} views <span>.</span> {time}
        </div>
        </div>
        </>
    );
}

export default Video;