import './Video.css'

function Video(props) {
    return (
        <>
        <div className="container">
        <div className="img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8LxP_7emE0s0hOKPRg9dImVQ3MCNTs-VeOA&usqp=CAU" alt="Katherine Johnson" />
        </div>
        
        <div className="title">{props.title}</div>
        <div className="channel">{props.channel}</div>
        <div className="views">{props.views} views <span>.</span></div>
        </div>
        </>
    );
}

export default Video;