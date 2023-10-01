import { CSSProperties } from "react";

export interface GameInfo {
  title: string;
  keyArtPath: string;
  keyArtCardStyle: CSSProperties;
}

export const AllGameInfo : GameInfo[] = [
  {
    title: "Demonizer",
    keyArtPath: "/demonizer/cover-art.png",
    keyArtCardStyle: {
      objectFit: 'none',
      objectPosition: '-148px -82px',
    },
  },
  {
    title: "Honey Soldier",
    keyArtPath: "/honey-soldier/cover-art.jpg",
    keyArtCardStyle: {
      objectFit: 'none',
      objectPosition: '-240px -44px',
    },
  },
];