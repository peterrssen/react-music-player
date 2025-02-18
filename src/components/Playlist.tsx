import React from 'react';
import './Playlist.css'
import { FaPause, FaPlay } from "react-icons/fa"
import { Track } from './Tracks';
import ListGroup from 'react-bootstrap/ListGroup';

interface PlaylistProps {
    tracks: Track[];
    onSelectTrack: (track: Track) => void;
    currentTrack: Track | null;
}


const Playlist: React.FC<PlaylistProps> = ({ tracks, onSelectTrack, currentTrack }) => {
    console.log("Render Playlist");

    return (
        <div>
            <ul className="playlist">
                {tracks.map((track, index) => (
                    <li className="playlist-item selected" key={index} onClick={() => onSelectTrack(track)}>
                        <div className='list-cover-container'>
                            <img className="list-cover" src={track.cover} />
                            <div className="overlay">{(currentTrack && currentTrack.url === track.url) ? <FaPause /> : <FaPlay />}</div>
                            {currentTrack && currentTrack.url === track.url && (
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
