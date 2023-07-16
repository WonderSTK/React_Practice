import "./App.css"
import Video from "./components/Video";

function App() {

  return (
    <div className="App">
      Videos
      <div className="videos">
      <Video title="React js tutorial" channel="Mehul Kumar" views="10M"></Video>
      <Video title="Node js tutorial" channel="Mehul Kumar" views="10M" ></Video>
      </div>
      
    </div>
    
  ) 
}

export default App;