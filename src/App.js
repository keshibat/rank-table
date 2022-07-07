import {
  useState, useEffect
} from 'react';
import LiverList from './components/liver-list/liver-list.component';

function App() {
  const [livers, serLivers] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchLiverData();
    }, 3000);
    return () => clearInterval(interval)
  }, [livers])


  const fetchLiverData = async () => {
    const response = await fetch('https://webcdn.17app.co/campaign/pretest/data.json');
    let data = await response.json();
    let addPoints = getRandomPoint();
    let userIndex = getRandomIndex();

    let updateData = [...data]
    updateData[userIndex].score += addPoints
    const sortedData = updateData.sort((a,b) => b.score - a.score);
    serLivers(sortedData);
  }

  const getRandomPoint = () => {
    const MIN = 50;
    const MAX = 10000;
    let randomFloat = Math.random();
    let randomInt = Math.floor(randomFloat * (MAX - MIN)) + MIN;
    return randomInt
  }

    const getRandomIndex = () => {
    const MIN = 0;
    const MAX = 10;
    let randomFloat = Math.random();
    let randomInt = Math.floor(randomFloat * (MAX - MIN)) + MIN;
    return randomInt
  }

  return (
    <div>
      <LiverList livers={livers}/>
    </div>
  );
}

export default App;