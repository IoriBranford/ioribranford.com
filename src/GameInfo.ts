import { CSSProperties } from "react";
import { html as DemonizerDescription } from './demonizer/description.md'

export interface GameInfo {
  title: string;
  logoPath: string;
  keyArtPath: string;
  keyArtCardStyle: CSSProperties;
  description: string; // html
}

export const AllGameInfo : {[key:string]: GameInfo} = {
  'demonizer': {
    title: "Demonizer",
    description: DemonizerDescription,
    logoPath: "/demonizer/logo.png",
    keyArtPath: "/demonizer/cover-art.png",
    keyArtCardStyle: {
      objectFit: 'none',
      objectPosition: '-130px -110px',
    },
  },
  'honey-soldier': {
    title: "Honey Soldier",
    description: DemonizerDescription,
    logoPath: "/demonizer/logo.png",
    keyArtPath: "/honey-soldier/cover-art.jpg",
    keyArtCardStyle: {
      objectFit: 'none',
      objectPosition: '-216px -66px',
    },
  },
};

export const AllGameInfoArray = Object.entries(AllGameInfo)