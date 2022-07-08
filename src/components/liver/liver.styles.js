import styled from 'styled-components';

export const Liver = styled.div`
    width: 100%;
    height: 100%;
`

export const RankTableOneRow = styled.div`
  width: 320px;
  height: 48px;
  top: 48px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  font-size: 16px;
  font-family: "Helvetica Neue",Helvetica,Arial,"Microsoft JhengHei",sans-serif;
`

export const RTCNumber = styled.div`
  width: 24px;
  text-align: center;
`

export const RTCProfileImageContainer = styled.div`
    background-size: 100%;
    width: 36px;
    height: 36px;
    border-radius: 18px;
    border: 2px solid rgb(255, 255, 255);
`

export const RTCProfileImage = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const RTCName = styled.div`

`

export const RTCPoints = styled.div`
  flex-grow: 1;
  text-align: right;

`