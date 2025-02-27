import someMetal from '../assets/some-metal.mp3';
import checksForFree from '../assets/ChecksForFree.mp3';
import hiFiBrutality from '../assets/HiFiBrutality.mp3';
import rockEnergy from '../assets/RockEnergy.mp3';
import rockTune from '../assets/RockTune.mp3';

import someMetalCover from '../assets/some-metal-cover2.png';
import rockEnergyCover from '../assets/RockEnergy-cover.png';
import epicRockCover from '../assets/some-metal-cover.png';
import hiFiBrutalityCover from '../assets/HiFiBrutality-dover.jpg';
import checksForFreeCover from '../assets/ChecksForFree-cover.png';


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
        title: 'We Are The World',
        url: someMetal,
        interpret: 'Thunderstrike',
        cover: someMetalCover,
        duration: 203472,
    },
    {
        id: 1,
        title: 'Checks For Free',
        url: checksForFree,
        interpret: 'Electric Echo',
        cover: checksForFreeCover,
        duration: 61129,
    },
    {
        id: 2,
        title: 'HiFi Brutality',
        url: hiFiBrutality,
        interpret: 'Crimson Vortex',
        cover: hiFiBrutalityCover,
        duration: 136780,
    },
    {
        id: 3,
        title: 'Rock Energy',
        url: rockEnergy,
        interpret: 'Midnight Blaze',
        cover: rockEnergyCover,
        duration: 115046,
    },
    {
        id: 4,
        title: 'Rock Tune',
        url: rockTune,
        interpret: 'Steel Serpent',
        cover: epicRockCover,
        duration: 170586,
    }
];