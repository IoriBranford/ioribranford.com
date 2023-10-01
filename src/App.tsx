import "./App.css";
import NameTag from "./NameTag";
import { AllGameInfoArray } from "./GameInfo";
import GamePage from "./GamePage";
import { Link, Route } from "wouter";

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      rowGap: '16px'
    }}>
      <NameTag name='Iori Branford' src='/avatar.jpg' />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        columnGap: '16px'
      }}>
        <Route path='/'>
          {
            AllGameInfoArray.map(([gameId, gameInfo]) =>
              <Link key={`${gameId}-card`} className='active' href={`/${gameId}`}>
                <div className="game-card">
                    <img className="game-card-image" src={gameInfo.keyArtPath} alt={gameInfo.title} width={420} height={300}
                        style={gameInfo.keyArtCardStyle} />
                    <h2 className='game-card-title'>{gameInfo.title}</h2>
                </div>
              </Link>
            )
          }
        </Route>

        {AllGameInfoArray.map(([gameId, gameInfo]) =>
          <Route key={`${gameId}-page`} path={`/${gameId}`}>
            <GamePage {...gameInfo} />
          </Route>
        )}
      </div>
      <p>©2023 Iori Branford</p>
    </div>
  )
}

export default App;
