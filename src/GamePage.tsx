import { GameInfo } from "./GameInfo";
import { useState } from "preact/hooks";
import Markdown from "react-markdown";

export default function GamePage(gameInfo : GameInfo) {
    const [description, setDescription] = useState("")
    const {title, keyArtPath} = gameInfo
    fetch('/demonizer/description.md')
    .then((response) => response.text())
    .then((text) => setDescription(text))
    return <div className="game-page">
        <img src={keyArtPath} alt={title + " key art"}/>
        <Markdown className='game-page-description'>{description}</Markdown>
        {/* <embed type="text/html" src="/demonizer/index.html"/> */}
    </div>
}