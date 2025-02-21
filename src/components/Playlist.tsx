import React from 'react';
import './Playlist.css'
import { FaPause, FaPlay } from "react-icons/fa"
import { Track, tracks } from './Tracks';
import { useAudioPlayerContext } from './AudioPlayerContext';

interface PlaylistProps {
    playSong: (track?: Track) => void;
    pauseSong: () => void;
}

const Playlist: React.FC<PlaylistProps> = ({ playSong, pauseSong }) => {
    console.log("Render Playlist");
    const { isPlaying, currentTrack, setCurrentTrack } = useAudioPlayerContext();

    const handlePlaylistClick = (track: Track) => {
        if (track === currentTrack) {
            isPlaying ? pauseSong() : playSong();
        } else {
            setCurrentTrack(track);
        }
    }

    return (
        <div>
            <ul className="playlist">
                {tracks.map((track) => (
                    <li className="playlist-item selected" key={track.index} onClick={() => handlePlaylistClick(track)}>
                        <div className='list-cover-container'>
                            <img className="list-cover" src={track.cover} />
                            <div className="overlay">{(isPlaying && currentTrack.url === track.url) ? <FaPause /> : <FaPlay />}</div>
                            {isPlaying && currentTrack.url === track.url && (
                                <div className="container">
                                    <div className="bar" style={{ animationDelay: '0s' }}></div>
                                    <div className="bar" style={{ animationDelay: '0.4s' }}></div>
                                    <div className="bar" style={{ animationDelay: '0.2s' }}></div>
                                    <div className="bar" style={{ animationDelay: '0.6s' }}></div>
                                </div>
                            )}
                        </div>
                        <div className="list-song-info">
                            <div className="info-title">{track.title}</div>
                            <div className="info-artist">{track.interpret}</div>
                        </div>
                        <div className='list-duration'>{track.duration}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Playlist;
