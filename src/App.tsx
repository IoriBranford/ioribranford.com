import "./App.css";
import { AllGameInfoArray } from "./GameInfo";
import GamePage from "./GamePage";
import { Link, Route } from "wouter";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <>
      <Stack gap={3}>
        <Container id='brand'>
          <Row xs="auto">
            <Col>
              <Link className="active" href={`/`}>
                <img
                  src="/avatar.jpg"
                  alt="IB"
                  width={48}
                  height={48}
                  style={{
                    borderRadius: "100%",
                  }}
                />
              </Link>
            </Col>
            <Col>
              <Link className="active" href={`/`}>
                <h1>Iori Branford</h1>
              </Link>
            </Col>
          </Row>
        </Container>
        <Container id='content'>
          <Route path="/">
            <Row xs="auto">
              {AllGameInfoArray.map(([gameId, gameInfo]) => (
                <Col key={`${gameId}-column`}>
                  <div className="game-card">
                    <Link className="active" href={`/${gameId}`}>
                      <img
                        className="game-card-image"
                        src={gameInfo.keyArtPath}
                        alt={gameInfo.title}
                        width={420}
                        height={300}
                        style={gameInfo.keyArtCardStyle}
                      />
                      <h2 className="game-card-title">{gameInfo.title}</h2>
                    </Link>
                  </div>
                </Col>
              ))}
            </Row>
          </Route>

          {AllGameInfoArray.map(([gameId, gameInfo]) => (
            <Route key={`${gameId}-page`} path={`/${gameId}`}>
              <GamePage {...gameInfo} />
            </Route>
          ))}
        </Container>
        <Container xs="auto">©2023 Iori Branford</Container>
      </Stack>
    </>
  );
}

export default App;
