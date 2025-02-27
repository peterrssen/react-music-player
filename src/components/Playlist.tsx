import React, { useEffect, useState } from 'react';
import './Playlist.css'
import { FaPause, FaPlay } from "react-icons/fa"
import { Track } from './Tracks';
import { useAudioPlayerContext } from './AudioPlayerContext';
import { formatTime } from './Helper';
import { Reorder } from 'framer-motion';

interface PlaylistProps {
    playSong: (track?: Track) => void;
    pauseSong: () => void;
}

const Playlist: React.FC<PlaylistProps> = ({ playSong, pauseSong }) => {
    console.log("Render Playlist");
    const { isPlaying, trackList, setTrackList, currentTrack, setCurrentTrack } = useAudioPlayerContext();
    const [isDragging, setIsDragging] = useState(false);
    console.log("Render Playlist II");

    const handlePlaylistClick = (track: Track) => {
        console.log(track.title);
        console.log(currentTrack)
        if (!isDragging) {
            if (track === currentTrack) {
                isPlaying ? pauseSong() : playSong();
            } else {
                setCurrentTrack(track);
            }
        }
    }

    return (
        <div>
            <Reorder.Group className="playlist" axis="y" values={trackList} onReorder={setTrackList}>
                {trackList.map((track) => (
                    <Reorder.Item className="playlist-item selected"
                        value={track}
                        key={track.url}
                        onClick={() => handlePlaylistClick(track)}
                        onDragStart={() => setIsDragging(true)}
                        onDragEnd={() => setIsDragging(false)}>
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
                        <div className='list-duration'>{formatTime(track.duration)}</div>
                    </Reorder.Item>
                ))}
            </Reorder.Group>
        </div>
    );
};

export default Playlist;
