import "./App.css";
import NameTag from "./NameTag";
import GameCard from "./GameCard";
import { AllGameInfo, AllGameInfoArray } from "./GameInfo";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import GamePage from "./GamePage";

interface AppInterface {
  selectGame: Dispatch<SetStateAction<string>>;
}

export const AppInterfaceContext = createContext<AppInterface>(null!);

function App() {
  const [selectedGame, selectGame] = useState("")
  const appInterface = {
    selectGame
  }

  return <AppInterfaceContext.Provider value={appInterface}>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      rowGap: '16px'
    }}>
      <NameTag name='Iori Branford' src='/avatar.jpg'/>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        columnGap: '16px'
      }}>
        {selectedGame.length > 0 ? 
        <GamePage {...AllGameInfo[selectedGame]}/>
        :
        AllGameInfoArray.map(([gameId, gameInfo]) =>
          <GameCard key={gameId} gameId={gameId} gameInfo={gameInfo}/>)
        }
      </div>
      <p>©2023 Iori Branford</p>
    </div>
  </AppInterfaceContext.Provider>
}

export default App;
