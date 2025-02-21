import React, { useState } from 'react';
import { Track, tracks } from './components/Tracks';
import './App.css';
import AudioPlayer from './components/AudioPlayer';
import { AudioPlayerProvider } from './components/AudioPlayerContext';


const App: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(tracks[0]);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  console.log("Render App");

  return (
    <div className='app-container'>
      <AudioPlayerProvider>
        <AudioPlayer />
      </AudioPlayerProvider>
    </div>
  );
};

export default App;