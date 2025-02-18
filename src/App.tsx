import React, { useState } from 'react';
import Playlist from './components/Playlist';
import Player from './components/Player';
import { Track, tracks } from './components/Tracks';
import './App.css';


const App: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(tracks[0]);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  console.log("Render App");

  return (
    <div>
      <div className='player-container'>
        <Player track={selectedTrack} onTrackPlay={setCurrentTrack} />
        <Playlist tracks={tracks} onSelectTrack={setSelectedTrack} currentTrack={currentTrack} />
      </div>
    </div>
  );
};

export default App;