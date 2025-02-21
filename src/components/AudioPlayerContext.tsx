import React, { createContext, useState, useContext, ReactNode, useRef } from 'react';
import { Track, tracks } from './Tracks';

interface AudioPlayerContextProps {
    isPlaying: boolean;
    setIsPlaying: (isPlaying: boolean) => void;
    currentTrack: Track;
    setCurrentTrack: (track: Track) => void;
    currentTrackIndex: number;
    setCurrentTrackIndex: (index: number) => void;
    volume: number;
    setVolume: (volume: number) => void;
    audioRef: React.RefObject<HTMLAudioElement>;
}

export const AudioPlayerContext = createContext<AudioPlayerContextProps | undefined>(undefined);

export const AudioPlayerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
    const [currentTrack, setCurrentTrack] = useState<Track>(tracks[currentTrackIndex]);
    const [volume, setVolume] = useState<number>(1);
    const audioRef = useRef<HTMLAudioElement>(null);

    const contextValue = {
        isPlaying,
        setIsPlaying,
        currentTrackIndex,
        setCurrentTrackIndex,
        currentTrack,
        setCurrentTrack,
        volume,
        setVolume,
        audioRef,
    };

    return (
        <AudioPlayerContext.Provider value={contextValue}>
            {children}
        </AudioPlayerContext.Provider>
    );
};

export const useAudioPlayerContext = (): AudioPlayerContextProps => {
    const context = useContext(AudioPlayerContext);

    if (context === undefined) {
        throw new Error(
            'useAudioPlayerContext must be used within an AudioPlayerProvider'
        );
    }

    return context;
};
