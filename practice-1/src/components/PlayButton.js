import './PlayButton.css';
function PlayButton({message, name}) {
    function handleClick() {
        console.log(message)
    }
    return(
        <button onClick={handleClick} >{name}</button>

    )
}
export default PlayButton;