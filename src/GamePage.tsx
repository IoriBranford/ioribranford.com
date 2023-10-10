import { useState } from "preact/hooks";
import { GameInfo } from "./GameInfo";
import Carousel from "react-bootstrap/Carousel";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Col, Container, Row } from "react-bootstrap";

export default function GamePage(gameInfo: GameInfo) {
  const { galleryElements, sectionTitles, sectionBodies } = gameInfo;
  const [section, setSection] = useState<string>(sectionTitles[0]);
  return (
    <Container>
      <Row xs={1} sm={1} md={2} lg={2} xl={2} xxl={2}>
        <Col>
          <Carousel width='100%'>
            {galleryElements.map((html) => (
              <Carousel.Item>
                <div
                  dangerouslySetInnerHTML={{
                    __html: html,
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col>
          {/* <Container className='game-page-description'> */}
          <Tabs
            activeKey={section}
            onSelect={(newSection) => setSection(newSection!)}
          >
            {sectionTitles.map((sectionTitle) => (
              <Tab eventKey={sectionTitle} title={sectionTitle}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: sectionBodies[sectionTitle],
                  }}
                />
              </Tab>
            ))}
          </Tabs>
          {/* </Container> */}
        </Col>
      </Row>
    </Container>
  );
}
