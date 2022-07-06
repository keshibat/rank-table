import LiverRow from '../liver/liver.component';
import { RankTableContainer } from './liver-list.styles';

const LiverList = ({ livers }) => {
  return (
    <RankTableContainer>
      {
        livers.map((liver, index) => {
          return <LiverRow key={liver.userID} liver={liver} index={index} />;
        })
      }
    </RankTableContainer>
  )

}

export default LiverList;