import {
  useState, useEffect
} from 'react';
import LiverList from './components/liver-list/liver-list.component';

function App() {
  const [livers, serLivers] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchLiverData();
      console.log( getRandomPoint())
    }, 3000);
    return () => clearInterval(interval)
  }, [livers])

  const fetchLiverData = async () => {
    const response = await fetch('https://webcdn.17app.co/campaign/pretest/data.json');
    const data = await response.json();
    const sortedData = data.sort((a,b) => b.score - a.score);
    serLivers(sortedData);
  }

  const getRandomPoint = () => {
    const MIN = 50;
    const MAX = 10000;
    let randomFloat = Math.random();
    let randomInt = Math.floor(randomFloat * (MAX - MIN)) + MIN;
    return randomInt
  }

  // useEffect(() => {
  //   fetch('https://webcdn.17app.co/campaign/pretest/data.json')
  //     .then((response) => response.json())
  //     .then((data) => serLivers(data))
  // }, [])


  return (
    <div>
      <LiverList livers={livers}/>
    </div>
  );
}

export default App;
