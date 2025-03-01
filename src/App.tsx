import React from 'react';
import './App.css';
import AudioPlayer from './components/AudioPlayer';
import { AudioPlayerProvider } from './components/AudioPlayerContext';


const App: React.FC = () => {
  console.log("Render App");

  return (
    <AudioPlayerProvider>
      <AudioPlayer />
    </AudioPlayerProvider>
  );
};

export default App;