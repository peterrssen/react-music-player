import { FaForwardStep, FaBackwardStep, FaDownload, FaPause, FaPlay, FaBars } from "react-icons/fa6";
import { useAudioPlayerContext } from "./AudioPlayerContext";
import './AudioControls.css';

interface AudioControlsProps {
    playSong: () => void;
    pauseSong: () => void;
    nextSong: () => void;
    previousSong: () => void;
}

const AudioControls: React.FC<AudioControlsProps> = ({ playSong, pauseSong, nextSong, previousSong }) => {
    const { isPlaying, currentTrack, onReoder, setOnReoder } = useAudioPlayerContext();

    return (
        <div className="audio-controls-container">
            <div className="track-controls-container">
                <button className='audio-control-button' onClick={previousSong}><FaBackwardStep /></button>
                <button className="audio-control-button play-pause-button" onClick={isPlaying ? pauseSong : playSong}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <button className='audio-control-button' onClick={nextSong}><FaForwardStep /></button>
            </div>
            <div className="other-controls-container">
                <a href={currentTrack.url} download={currentTrack.title}>
                    <button className='audio-control-button'><FaDownload /></button>
                </a>
                <button className="audio-control-button" onClick={onReoder ? () => setOnReoder(false) : () => setOnReoder(true)}>
                    <FaBars style={{ color: onReoder ? "blue" : "black"}}/>
                </button>
            </div>
        </div >
    );
}

export default AudioControls;