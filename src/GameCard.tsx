import { useContext } from "react";
import {GameInfo} from "./GameInfo";
import { AppInterfaceContext } from "./App";

export default function GameCard({gameId, gameInfo} : {gameId: string; gameInfo: GameInfo}) {
    const appInterface = useContext(AppInterfaceContext)

    const { title, keyArtPath, keyArtCardStyle } = gameInfo
    return <div className="game-card" onClick={() => {appInterface.selectGame(gameId)}}>
        <img className="game-card-image" src={keyArtPath} alt={title} width={420} height={300}
            style={keyArtCardStyle}/>
        <h2 className='game-card-title'>{title}</h2>
    </div>
}