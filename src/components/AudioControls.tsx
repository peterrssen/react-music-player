import { FaAngleLeft, FaAngleRight, FaDownload, FaPause, FaPlay, FaVolumeDown, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { useAudioPlayerContext } from "./AudioPlayerContext";
import ConfettiExplosion from 'react-confetti-explosion';
import { useState } from "react";

interface AudioControlsProps {
    playSong: () => void;
    pauseSong: () => void;
    nextSong: () => void;
    previousSong: () => void;
}

const AudioControls: React.FC<AudioControlsProps> = ({ playSong, pauseSong, nextSong, previousSong }) => {
    const { isPlaying, currentTrack } = useAudioPlayerContext();
    const [isExploding, setIsExploding] = useState(false);

    return (
        <div>
            <button onClick={previousSong}><FaAngleLeft /></button>
            <button onClick={isPlaying ? pauseSong : playSong}>{isPlaying ? <FaPause /> : <FaPlay />} </button>
            <button onClick={nextSong}><FaAngleRight /></button>
            {currentTrack && (
                <a href={currentTrack.url} download={currentTrack.title}>
                    <button><FaDownload /></button>
                </a>
            )}
            
            <button onClick={()=>(setIsExploding(true))}>
                {isExploding && <ConfettiExplosion onComplete={() => (setIsExploding(false))} />}
            </button>
        </div>
    );
}

export default AudioControls;