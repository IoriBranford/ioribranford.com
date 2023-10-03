import { GameInfo } from "./GameInfo";

export default function GamePage(gameInfo : GameInfo) {
    const {title, keyArtPath} = gameInfo
    return <div className="game-page">
        <img src={keyArtPath} alt={title + " key art"}/>
        <div className='game-page-description'>
            <img className='game-page-logo' src={gameInfo.logoPath} alt={gameInfo.title}/>
            <div dangerouslySetInnerHTML={{
                __html: gameInfo.description
            }}/>
        </div>
    </div>
}