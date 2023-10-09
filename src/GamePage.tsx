import { GameInfo } from "./GameInfo";

export default function GamePage(gameInfo : GameInfo) {
    const {title, keyArtPath} = gameInfo
    return <div className="game-page">
        <img src={keyArtPath} alt={title + " key art"}/>
        <div className='game-page-description' dangerouslySetInnerHTML={{
            __html: gameInfo.description
        }}/>
    </div>
}