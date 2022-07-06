import {
  useState, useEffect
} from 'react';
import LiverList from './components/liver-list/liver-list.component';

function App() {
  const [livers, serLivers] = useState([]);
  


  useEffect(() => {
    fetch('https://webcdn.17app.co/campaign/pretest/data.json')
      .then((response) => response.json())
      .then((data) => serLivers(data))
  }, [])
  console.log(livers);

  return (
    <div>
      <LiverList livers={livers}/>
    </div>
  );
}

export default App;
