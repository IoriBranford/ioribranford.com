import { GameInfo } from "./GameInfo";
import Carousel from 'react-bootstrap/Carousel'

export default function GamePage(gameInfo : GameInfo) {
    const {galleryElements} = gameInfo
    return <div className="game-page">
        <Carousel>
            {galleryElements.map((html) => (
                <Carousel.Item>
                    <div dangerouslySetInnerHTML={{
                        __html: html
                    }}/>
                </Carousel.Item>
            ))}
        </Carousel>
        <div className='game-page-description' dangerouslySetInnerHTML={{
            __html: gameInfo.description
        }}/>
    </div>
}