import { useEffect, useState } from 'react'
import epicCinema from './assets/epic-cinema.mp3'
import { FaPlay, FaPause, FaStop } from "react-icons/fa"
import useSound from 'use-sound'
import './App.css'

function App() {
  const [playSound, { pause, duration, sound, stop }] = useSound(epicCinema);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSliderActive, setIsSliderActive] = useState(false);
  const [time, setTime] = useState(0);

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
    stop();
    setIsPlaying(false);
  };


  useEffect(() => {
    console.log('useEffect()');
    //Implementing the setInterval method
    if (isPlaying && sound && !isSliderActive) {
      const interval = setInterval(() => {
        setTime(sound.seek([]) * 1000);
      }, 100);
      return () => clearInterval(interval);
    }
    //Clearing the interval
  }, [time, isPlaying, isSliderActive]);

  const handleSliderChangeComplete = () => {
    setTime(time);
    sound.seek(time / 1000);
    setIsSliderActive(false);
  };

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes.toString()}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="App">
      <img className="musicCover" src="https://miro.medium.com/v2/resize:fit:681/1*EBOL4lka5QjcYoxj6AHp-g.png" width="200" height="200" />
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>{formatTime(time)}</div>
          <input
            type="range"
            min="1"
            max={106031}
            value={time}
            onChange={(event) => { setTime(Number(event.target.value)) }}
            onMouseDown={() => setIsSliderActive(true)}
            onTouchStart={() => setIsSliderActive(true)}
            onMouseUp={handleSliderChangeComplete}
            onTouchEnd={handleSliderChangeComplete}
            id="myRange">
          </input>
          <div>{formatTime(duration ? duration : 0)}</div>
        </div>
        <div>
          <button onClick={playingButton}>{isPlaying ? <FaPause /> : <FaPlay />}</button>
          <button onClick={stopButton}><FaStop /></button>
        </div>
      </div>
    </div >
  )
}

export default App
