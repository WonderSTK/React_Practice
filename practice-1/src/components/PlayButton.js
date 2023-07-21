import './PlayButton.css';
import { useState } from 'react';
function PlayButton({message, children, onPlay, onPause}) {
    const [playing, setPlaying] = useState(false);
    function handleClick() {
        
        if(playing) onPlay();
        else onPause();
        setPlaying(!playing);
    }
    return(
        <button onClick={handleClick} >{children} : {playing? '▶️': '⏸️'}</button>

    )
}
export default PlayButton;