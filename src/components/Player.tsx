import React, { useState, useRef, useEffect } from 'react';
import './Player.css';
import { FaPlay, FaPause, FaStop } from "react-icons/fa"
import { Track } from './Tracks';
import { Button } from 'react-bootstrap';

interface PlayerProps {
    track: Track | null;
    onTrackPlay: (track: Track | null) => void;
}

const Player: React.FC<PlayerProps> = ({ track, onTrackPlay }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isSliderActive, setIsSliderActive] = useState(false);
    const [time, setTime] = useState(0);
    const [isInitialized, setIsInitialized] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    console.log("Render Player");

    useEffect(() => {
        if (track && audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
            onTrackPlay(track);
        }
    }, [track, onTrackPlay]);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current?.pause();
            onTrackPlay(null);
        } else {
            audioRef.current?.play();
            onTrackPlay(track);
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        console.log('useEffect()');
        //Implementing the setInterval method
        if (isPlaying && audioRef.current && !isSliderActive) {
            const interval = setInterval(() => {
                if (audioRef.current) {
                    setTime(audioRef.current.currentTime * 1000);
                }
            }, 100);
            return () => clearInterval(interval);
        }
        //Clearing the interval
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
        <div className='player'>
            <div className='cover'>
                <img src={track?.cover} />
            </div>
            <div className='info'>
                <div>{track?.title}</div>
                <div>{track?.interpret}</div>
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
                    <div>{formatTime(audioRef.current?.duration ? audioRef.current?.duration : 0)}</div>
                </div>
                {track && <audio ref={audioRef} src={track.url} />}
                <Button onClick={togglePlayPause}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </Button>
            </div>
        </div>
    );
};

export default Player;