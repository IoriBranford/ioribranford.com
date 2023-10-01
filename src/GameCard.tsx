import {GameInfo} from "./GameInfo";

export default function GameCard(gameInfo : GameInfo) {
    const { title, keyArtPath, keyArtCardStyle } = gameInfo
    return <div className="game-card">
        <img className="game-card-image" src={keyArtPath} alt={title} width={300} height={420} 
            style={keyArtCardStyle}/>
        <h2 className='game-card-title'>{title}</h2>
    </div>
}