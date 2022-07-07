import {
  useState, useEffect
} from 'react';
import LiverList from './components/liver-list/liver-list.component';


// {
// "userID": "4f4d5462-4a9f-483e-b620-9df9c13ec840",
// "displayName": "Jone",
// "picture": "https://assets-17app.akamaized.net/THUMBNAIL_525BEE6E-94B5-4C7F-AB47-1A6F9735EE82.jpg",
// "score": 157000
// },
// {
// "userID": "2c0c5c67-1cfc-4b99-992e-2918b8a0dcc1",
// "displayName": "Victoria",
// "picture": "https://assets-17app.akamaized.net/THUMBNAIL_8390066D-46E4-4741-968D-9FF84B276B52.jpg",
// "score": 46200
// },

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

    const getRandomIndex = () => {
    const MIN = 0;
    const MAX = 10;
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
