import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaPause, FaPlay } from "react-icons/fa";
import { useAudioPlayerContext } from './AudioPlayerContext';


const AudioProgressBar = () => {
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

    const formatTime = (ms: number) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        return `${minutes.toString()}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
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
            <div>{currentTrack.duration}</div>
        </div>
    );
}

export default AudioProgressBar;