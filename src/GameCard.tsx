import {GameInfo} from "./GameInfo";

export default function GameCard({coverArt, title} : GameInfo) {
    return <div style={{
        position: 'relative',
    }}>
        <img src={coverArt} alt={title} style={{
            borderRadius: '16px'
        }}/>
        <p style={{
            position: 'absolute',
            left: '16px',
            top: '0',
            textAlign: 'left',
            color: 'white',
            textShadow: '2px 2px #000000',
        }}>{title}</p>
    </div>
}