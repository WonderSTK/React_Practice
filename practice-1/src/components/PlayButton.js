import './PlayButton.css';
function PlayButton({message, children, onPlay, onPause}) {
    let playing = false;
    function handleClick() {
        
        if(playing) onPlay();
        else onPause();
        playing = !playing;
    }
    return(
        <button onClick={handleClick} >{children}</button>

    )
}
export default PlayButton;