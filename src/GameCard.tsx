import {GameInfo} from "./GameInfo";

export default function GameCard({coverArt, title} : GameInfo) {
    return <div style={{
        position: 'relative',
    }}>
        <img src={coverArt} alt={title} style={{
            borderRadius: '16px'
        }}/>
        <h2 style={{
            position: 'absolute',
            left: '16px',
            top: '0',
            textAlign: 'left',
            color: 'white',
            textShadow: '1px 1px #000000,-1px 1px #000000,1px -1px #000000,-1px -1px #000000',
        }}>{title}</h2>
    </div>
}