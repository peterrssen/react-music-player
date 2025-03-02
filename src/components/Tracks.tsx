import karnevalImMittelrheintal from '../assets/KarnevalImMittelrheintal.mp3';
import theSoundOfLoudness from '../assets/TheSoundOfLoudness.mp3';
import code from '../assets/Code.mp3';
import werkstatt from '../assets/Werkstatt.mp3';
import werkstattRemix from '../assets/Werkstatt-Remix.mp3';
import schwammDrueberSong from '../assets/SchwammDrueberSong.mp3';

import karnevalImMittelrheintalCover from '../assets/KarnevalImMittelrheintal-cover.jpg';
import theSoundOfLoudnessCover from '../assets/TheSoundOfLoudness-cover.jpeg';
import codeCover from '../assets/code-cover.jpeg';
import werkstattCover from '../assets/werkstatt-cover.jpeg';
import werkstattRemixCover from '../assets/Werkstatt-Remix.jpeg';
import schwammDrueberSongCover from '../assets/SchwammDrueberSong-cover.jpg';


export interface Track {
    id: number;
    title: string;
    url: string;
    interpret: string;
    cover: string;
    duration: number;
}

export const tracks: Track[] = [
    {
        id: 0,
        title: 'Karneval im Mittelrheintal',
        url: karnevalImMittelrheintal,
        interpret: 'DJ Hopsi',
        cover: karnevalImMittelrheintalCover,
        duration: 121800,
    },
    {
        id: 1,
        title: 'The sound of loudness',
        url: theSoundOfLoudness,
        interpret: 'Alex & DJ KI',
        cover: theSoundOfLoudnessCover,
        duration: 240024,
    },
    {
        id: 2,
        title: 'Code',
        url: code,
        interpret: 'Die Notkascher',
        cover: codeCover,
        duration: 191424,
    },
    {
        id: 3,
        title: 'Schwamm-Drüber-Song',
        url: schwammDrueberSong,
        interpret: 'Feucht und Fröhlich',
        cover: schwammDrueberSongCover,
        duration: 203184,
    },
    {
        id: 4,
        title: 'Werkstatt',
        url: werkstatt,
        interpret: 'Reif R. Schaid',
        cover: werkstattCover,
        duration: 240024,
    },
    {
        id: 5,
        title: 'Werkstatt Remix',
        url: werkstattRemix,
        interpret: 'DJ Glitch feat, Reif R. Schaid',
        cover: werkstattRemixCover,
        duration: 240024,
    },
    {
        id: 6,
        title: 'Karneval im Mittelrheintal2',
        url: karnevalImMittelrheintal,
        interpret: 'DJ Hopsi',
        cover: karnevalImMittelrheintalCover,
        duration: 121800,
    },
    {
        id: 7,
        title: 'The sound of loudness2',
        url: theSoundOfLoudness,
        interpret: 'Alex & DJ KI',
        cover: theSoundOfLoudnessCover,
        duration: 240024,
    },
    {
        id: 8,
        title: 'Code2',
        url: code,
        interpret: 'Die Notkascher',
        cover: codeCover,
        duration: 191424,
    },
    {
        id: 9,
        title: 'Schwamm-Drüber-Song2',
        url: schwammDrueberSong,
        interpret: 'Feucht und Fröhlich',
        cover: schwammDrueberSongCover,
        duration: 203184,
    },
    {
        id: 10,
        title: 'Werkstatt2',
        url: werkstatt,
        interpret: 'Reif R. Schaid',
        cover: werkstattCover,
        duration: 240024,
    },
    {
        id: 11,
        title: 'Werkstatt Remix2',
        url: werkstattRemix,
        interpret: 'DJ Glitch feat, Reif R. Schaid',
        cover: werkstattRemixCover,
        duration: 240024,
    }
];