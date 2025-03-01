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
    const { isPlaying, setIsPlaying, currentTrack, setCurrentTrack, audioRef, volume, trackList, setTrackList } = useAudioPlayerContext();
    const [isExploding, setIsExploding] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        console.log("Render Startup");
        setIsExploding(true)
        setIsInitialized(true);
    }, [])

    useEffect(() => {
        if (isInitialized) {
            playSong();
        }
    }, [currentTrack]);

    useEffect(() => {
        audioRef.current!.volume = volume;
    }, [volume]);

    const playSong = (track?: Track) => {
        audioRef.current?.play();
        setIsPlaying(true);
    }

    const pauseSong = () => {
        audioRef.current?.pause();
        setIsPlaying(false);
    }

    const nextSong = () => {
        const currentTackIndex = getTrackIndex(currentTrack);
        console.log(currentTackIndex);
        if (currentTackIndex + 1 < trackList.length) {
            setCurrentTrack(trackList[currentTackIndex + 1]);
        } else {
            setCurrentTrack(trackList[0])
        }
    };

    const previousSong = () => {
        const currentTackIndex = getTrackIndex(currentTrack);
        if (currentTackIndex - 1 >= 0) {
            setCurrentTrack(trackList[currentTackIndex - 1]);
        } else {
            setCurrentTrack(trackList[trackList.length - 1])
        }
    }

    const getTrackIndex = (track: Track) => {
        return trackList.findIndex((t) => t.url === track.url);
    }

    return (
        <div className='audio-player-container'>
            <div className='player'>
                <div onClick={() => (setIsExploding(true))}>
                    {isExploding && <ConfettiExplosion onComplete={() => (setIsExploding(false))} />}
                    <img className='cover' src={currentTrack?.cover} />
                </div>
                <div className='info'>
                    <div className='current-track-title'>{currentTrack?.title}</div>
                    <div>{currentTrack?.interpret}</div>
                    <AudioProgressBar />
                    <AudioControls playSong={playSong} pauseSong={pauseSong} nextSong={nextSong} previousSong={previousSong} />
                </div>
            </div>
            <div className='playlist-container'>
                <Playlist playSong={playSong} pauseSong={pauseSong} />
            </div>
            <audio ref={audioRef} src={currentTrack.url} onEnded={nextSong} />
        </div>
    );
};

export default AudioPlayer;