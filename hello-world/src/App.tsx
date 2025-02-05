import { useState } from 'react'
import epicCinema from './assets/epic-cinema.mp3'
import useSound from 'use-sound'
import './App.css'

function App() {
  const [playSound, { pause, duration, sound, stop }] = useSound(epicCinema);
  const [isPlaying, setIsPlaying] = useState(false);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      playSound();
      setIsPlaying(true);
    }
  };

  const stopButton = () => {
    if (isPlaying) {
      stop();
      setIsPlaying(false);
    }
  };

  return (
    <div className="App">
      <img className="musicCover" src="https://miro.medium.com/v2/resize:fit:681/1*EBOL4lka5QjcYoxj6AHp-g.png" width="200" height="200" />
      <div>
        <button onClick={playingButton}>Play Sound</button>
        <button onClick={stopButton}>Stop Sound</button>
      </div>
    </div>
  )
}

export default App
