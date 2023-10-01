import { CSSProperties } from "react";

export interface GameInfo {
  title: string;
  keyArtPath: string;
  keyArtCardStyle: CSSProperties;
}

export const AllGameInfo : {[key:string]: GameInfo} = {
  'demonizer': {
    title: "Demonizer",
    keyArtPath: "/demonizer/cover-art.png",
    keyArtCardStyle: {
      objectFit: 'none',
      objectPosition: '-130px -110px',
    },
  },
  'honey-soldier': {
    title: "Honey Soldier",
    keyArtPath: "/honey-soldier/cover-art.jpg",
    keyArtCardStyle: {
      objectFit: 'none',
      objectPosition: '-216px -66px',
    },
  },
};

export const AllGameInfoArray = Object.entries(AllGameInfo)