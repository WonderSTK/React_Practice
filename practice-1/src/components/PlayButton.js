import ThemeContext from '../context/ThemeContext';
import './PlayButton.css';
import { useContext, useState } from 'react';
function PlayButton({message, children, onPlay, onPause}) {
    const [playing, setPlaying] = useState(false);
    const theme = useContext(ThemeContext)
    function handleClick() {
        
        if(playing) onPlay();
        else onPause();
        setPlaying(!playing);
    }
    return(
        <button clasName={theme} onClick={handleClick} >{children} : {playing? '▶️': '⏸️'}</button>

    )
}
export default PlayButton;