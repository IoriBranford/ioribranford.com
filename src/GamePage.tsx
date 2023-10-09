import { useState } from "preact/hooks";
import { GameInfo } from "./GameInfo";
import Carousel from 'react-bootstrap/Carousel'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

export default function GamePage(gameInfo : GameInfo) {
    const {galleryElements, sectionTitles, sectionBodies} = gameInfo
    const [section, setSection] = useState<string>(sectionTitles[0])
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
        <div className='game-page-description'>
            <Tabs activeKey={section} onSelect={(newSection) => setSection(newSection!)}>
                {sectionTitles.map((sectionTitle) => (
                    <Tab eventKey={sectionTitle} title={sectionTitle} dangerouslySetInnerHTML={{
                        __html: sectionBodies[sectionTitle]
                    }}/>
                ))}
            </Tabs>
        </div>
    </div>
}