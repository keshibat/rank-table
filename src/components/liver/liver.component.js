import {
  Liver,
  RankTableOneRow,
  RTCNumber,
  RTCProfileImageContainer,
  RTCProfileImage,
  RTCName,
  RTCPoints
} from './liver.styles';

const LiverRow = ({ liver, index }) => {
  const {displayName, picture, score} = liver;

  return (
    <Liver>
      <RankTableOneRow>
        <RTCNumber>{index + 1}</RTCNumber>
        <RTCProfileImageContainer>
          <RTCProfileImage
          alt={`liver${displayName}`}
          src={picture}
          />
        </RTCProfileImageContainer>
        <RTCName>{displayName}</RTCName>
        <RTCPoints key={score}>{`${score} pt`}</RTCPoints>
      </RankTableOneRow>
    </Liver>
  )
}

export default LiverRow;