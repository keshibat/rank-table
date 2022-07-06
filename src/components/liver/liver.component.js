import {
  Liver,
  RankTableOneRow,
  RTCNumber,
  RTCProfileImageContainer,
  RTCProfileImage,
  RTCName,
  RTCPoints
} from './liver.styles';

const LiverRow = ({ liver }) => {
  const {displayName, picture, score} = liver;

  return (
    <Liver>
      <RankTableOneRow>
        <RTCNumber>1</RTCNumber>
        <RTCProfileImageContainer>
          <RTCProfileImage
          alt={`liver${displayName}`}
          src={picture}
          />
        </RTCProfileImageContainer>
        <RTCName>{displayName}</RTCName>
        <RTCPoints>{`${score} pt`}</RTCPoints>
      </RankTableOneRow>
    </Liver>
  )
}

export default LiverRow;