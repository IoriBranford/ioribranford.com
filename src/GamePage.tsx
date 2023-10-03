import { GameInfo } from "./GameInfo";

export default function GamePage(gameInfo : GameInfo) {
    const {title, keyArtPath, logoPath} = gameInfo
    return <div className="game-page">
        <img src={keyArtPath} alt={title + " key art"}/>
        <div className='game-page-description'>
            <h1><img className='game-page-logo' src={logoPath} alt={title}/></h1>
            <div dangerouslySetInnerHTML={{
                __html: gameInfo.description
            }}/>
        </div>
    </div>
}