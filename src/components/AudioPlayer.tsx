import React, { useState, useRef, useEffect, createContext, useContext } from 'react';
import './AudioPlayer.css';
import { useAudioPlayerContext } from './AudioPlayerContext';
import AudioProgressBar from './AudioProgressBar';
import AudioControls from './AudioControls';
import Playlist from './Playlist';
import { Track, tracks } from './Tracks';
import ConfettiExplosion from 'react-confetti-explosion';


const AudioPlayer = () => {
    console.log("Render Player");
    const { isPlaying, setIsPlaying, currentTrack, setCurrentTrack, audioRef } = useAudioPlayerContext();
    const [isExploding, setIsExploding] = useState(false);

    useEffect(() => {
        setIsExploding(true)
    }, [])

    useEffect(() => {
        if (isPlaying) {
            playSong();
        }
    }, [currentTrack]);

    const playSong = (track?: Track) => {
        audioRef.current?.play();
        setIsPlaying(true);
    }

    const pauseSong = () => {
        audioRef.current?.pause();
        setIsPlaying(false);
    }

    const handleEnded = () => {
        console.log("Song ended");
    }

    const nextSong = () => {
        if (currentTrack.index + 1 < tracks.length) {
            const nextIndex = (currentTrack.index + 1) % tracks.length;
            setCurrentTrack(tracks[nextIndex]);
        }
    };

    const previousSong = () => {
        if (currentTrack.index - 1 >= 0) {
            const previousIndex = (currentTrack.index - 1) % tracks.length;
            setCurrentTrack(tracks[previousIndex]);
        }
    }

    return (
        <div className='audio-player-container'>
            <div className='player'>
                <div onClick={()=>(setIsExploding(true))} className='cover'>
                    {isExploding && <ConfettiExplosion onComplete={() => (setIsExploding(false))} />}
                    <img src={currentTrack?.cover} />
                </div>
                <div className='info'>
                    <div>{currentTrack?.title}</div>
                    <div>{currentTrack?.interpret}</div>
                    <AudioProgressBar />
                    <AudioControls playSong={playSong} pauseSong={pauseSong} nextSong={nextSong} previousSong={previousSong} />
                </div>
            </div>
            <div>
                <Playlist playSong={playSong} pauseSong={pauseSong} />
            </div>
            <audio ref={audioRef} src={currentTrack.url} onEnded={nextSong} />
        </div>
    );
};

export default AudioPlayer;