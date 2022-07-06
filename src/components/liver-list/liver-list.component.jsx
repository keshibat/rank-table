import LiverRow from '../liver/liver.component';
import { RankTableContainer } from './liver-list.styles';

const LiverList = ({ livers }) => (
  <RankTableContainer>
    {
      livers.map((liver) => {
        return <LiverRow key={liver.userID} liver={liver} />;
      })
    }
  </RankTableContainer>
)

export default LiverList;