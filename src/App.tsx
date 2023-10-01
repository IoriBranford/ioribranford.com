import "./App.css";
import NameTag from "./NameTag";
import GameCard from "./GameCard";
import { AllGameInfo } from "./GameInfo";

function App() {
  return <div style={{
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
      {AllGameInfo.map((gameInfo) => <GameCard key={gameInfo.title} {...gameInfo}/>)}
    </div>
  </div>
}

export default App;
