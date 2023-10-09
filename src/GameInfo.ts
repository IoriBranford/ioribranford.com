import { CSSProperties } from "react";
import { html as DemonizerDescription } from './demonizer/description.md'
import { html as HoneySoldierDescription } from './honey-soldier/description.md'
import { html as HoneySoldierPlay } from './honey-soldier/get.md'

export interface GameInfo {
  title: string;
  keyArtPath: string;
  keyArtCardStyle: CSSProperties;
  description: string; // html
  sectionTitles: string[] | undefined;
  sectionBodies: {[key:string]: string} | undefined;
}

export const AllGameInfo : {[key:string]: GameInfo} = {
  'demonizer': {
    title: "Demonizer",
    description: DemonizerDescription,
    keyArtPath: "/demonizer/cover-art.png",
    keyArtCardStyle: {
      objectFit: 'none',
      objectPosition: '-130px -110px',
    },
    sectionTitles: ['About', 'Buy', 'Bonus Material'],
    sectionBodies: {
      About: DemonizerDescription,
      Buy: '',
      'Bonus Material': ''
    },
  },
  'honey-soldier': {
    title: "Honey Soldier",
    description: HoneySoldierDescription,
    keyArtPath: "/honey-soldier/cover-art.jpg",
    keyArtCardStyle: {
      objectFit: 'none',
      objectPosition: '-216px -66px',
    },
    sectionTitles: ['About', 'Play'],
    sectionBodies: {
      About: HoneySoldierDescription,
      Play: HoneySoldierPlay
    },
  },
};

export const AllGameInfoArray = Object.entries(AllGameInfo)