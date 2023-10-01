import {GameInfo} from "./GameInfo";

export default function GameCard(gameInfo : GameInfo) {
    const { title, keyArtPath, keyArtCardStyle } = gameInfo
    return <div style={{
        position: 'relative',
    }}>
        <img src={keyArtPath} alt={title} width={300} height={420} style={{
            borderRadius: '16px',
            ...keyArtCardStyle
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