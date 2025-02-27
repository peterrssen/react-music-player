import { useEffect, useState } from "react";
import './AudioProgressBar.css';
import { useAudioPlayerContext } from './AudioPlayerContext';
import { formatTime } from './Helper';


const AudioProgressBar = () => {
    console.log("Render Progress Bar");
    const { isPlaying, setIsPlaying, currentTrack, audioRef } = useAudioPlayerContext();
    const [time, setTime] = useState(0);
    const [isSliderActive, setIsSliderActive] = useState(false);

    useEffect(() => {
        //Implementing the setInterval method
        if (isPlaying && audioRef.current && !isSliderActive) {
            const interval = setInterval(() => {
                if (audioRef.current) {
                    setTime(audioRef.current.currentTime * 1000);
                }
            }, 100);
            return () => clearInterval(interval);
        }
    }, [time, isPlaying, isSliderActive]);

    const handleSliderChangeComplete = () => {
        setTime(time);
        if (audioRef.current) {
            audioRef.current.currentTime = time / 1000;
        }
        setIsSliderActive(false);
    };

    return (
        <div className='progress-container'>
            <input
                type="range"
                min="1"
                value={time}
                max={currentTrack.duration}
                onChange={(event) => { setTime(Number(event.target.value)) }}
                onMouseDown={() => setIsSliderActive(true)}
                onTouchStart={() => setIsSliderActive(true)}
                onMouseUp={handleSliderChangeComplete}
                onTouchEnd={handleSliderChangeComplete}
                id="myRange">
            </input>
            <div className="progress-time">
                <div>{formatTime(time)}</div>
                <div>{formatTime(currentTrack.duration)}</div>
            </div>
        </div >
    );
}

export default AudioProgressBar;