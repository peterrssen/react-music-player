import React, { createContext, useState, useContext, ReactNode, useRef } from 'react';
import { Track, tracks } from './Tracks';

interface AudioPlayerContextProps {
    isPlaying: boolean;
    setIsPlaying: (isPlaying: boolean) => void;
    trackList: Track[];
    setTrackList: (tracks: Track[]) => void;
    currentTrack: Track;
    setCurrentTrack: (track: Track) => void;
    shuffleList: Number[];
    setShuffleList: (shuffleList: Number[]) => void;
    volume: number;
    setVolume: (volume: number) => void;
    audioRef: React.RefObject<HTMLAudioElement>;
}

export const AudioPlayerContext = createContext<AudioPlayerContextProps | undefined>(undefined);

export const AudioPlayerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [trackList, setTrackList] = useState<Track[]>(tracks);
    const [currentTrack, setCurrentTrack] = useState<Track>(tracks[0]);
    const [shuffleList, setShuffleList] = useState<Number[]>([]);
    const [volume, setVolume] = useState<number>(1);
    const audioRef = useRef<HTMLAudioElement>(null);

    const contextValue = {
        isPlaying,
        setIsPlaying,
        trackList,
        setTrackList,
        currentTrack,
        setCurrentTrack,
        shuffleList,
        setShuffleList,
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
