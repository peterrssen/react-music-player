import epicCinema from '../assets/epic-cinema.mp3';
import epicRock from '../assets/some-metal.mp3';

import epicCinemaCover from '../assets/epic-cinema-cover.png';
import epicRockCover from '../assets/some-metal-cover.png';

export interface Track {
    title: string;
    url: string;
    interpret: string;
    cover: string;
    duration: string;
}

export const tracks: Track[] = [
    {
        title: 'Epic Cinema',
        url: epicCinema,
        interpret: 'Trinix ft Rushawn',
        cover: epicCinemaCover,
        duration: "1:46"
    },
    {
        title: 'We Are The World',
        url: epicRock,
        interpret: 'Michael Jackson',
        cover: epicRockCover,
        duration: "3:23"
    }
];