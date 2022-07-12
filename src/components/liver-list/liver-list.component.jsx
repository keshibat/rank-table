
import { createRef } from 'react';
import LiverRow from '../liver/liver.component';
import {useFlip } from '../../utils/useFlip';
import { RankTableContainer } from './liver-list.styles';

const LiverList = ({ livers }) => {
  let liverRef = createRef();
  useFlip(liverRef);
  return (
    <RankTableContainer ref={liverRef}>
      {
        livers.map((liver, index) => {
          return <LiverRow key={liver.userID} liver={liver} index={index} />;
        })
      }
    </RankTableContainer>
  )

}

export default LiverList;