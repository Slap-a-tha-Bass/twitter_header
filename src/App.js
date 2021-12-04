import React from "react";
import styled from "styled-components";

const ContainerDiv = styled.div`
  position: absolute;
  height: 500px;
  width: 1500px;
  background-color: rgb(250,250,250);
  color: black;
  margin-top: 1rem;
`;
const LgTriangleUpBack = styled.div`
  position: absolute;
  border-left: 11rem transparent solid;
  border-right: 11rem transparent solid;
  border-bottom: 21.375rem solid black;
  margin-left: 2rem;
`;
const LgTriangleUpFront = styled.div`
  position: absolute;
  border-left: 10rem transparent solid;
  border-right: 10rem transparent solid;
  border-bottom: 19.875rem solid rgb(250,250,250);
  margin-left: 3rem;
  margin-top: 1rem;
`;
const LgSquare = styled.div`
  position: absolute;
  border: 0.675rem solid black;
  background-color: rgb(250,250,250);
  height: 20rem;
  width: 20rem;
  margin-left: 23.75rem;
`;
const LgCircle = styled.div`
  position: absolute;
  border: 0.675rem solid black;
  border-radius: 25rem;
  background-color: rgb(250,250,250);
  height: 20rem;
  width: 20rem;
  margin-left: 45rem;
`;
const XTopBack = styled.div`
  position: absolute;
  border-left: 11rem solid transparent;
  border-right: 11rem solid transparent;
  border-top: 11rem solid black;
  margin-left: 64rem;
`;
const XTopFront = styled.div`
  position: absolute;
  border-left: 10rem solid transparent;
  border-right: 10rem solid transparent;
  border-top: 10rem solid rgb(250,250,250);
  margin-left: 65rem;
`;
const XBottomBack = styled.div`
  position: absolute;
  border-left: 11rem solid transparent;
  border-right: 11rem solid transparent;
  border-bottom: 11rem solid black;
  margin-left: 64rem;
  margin-top: 10rem;
`;
const XBottomFront = styled.div`
  position: absolute;
  border-left: 10rem solid transparent;
  border-right: 10rem solid transparent;
  border-bottom: 10rem solid rgb(250,250,250);
  margin-left: 65rem;
  margin-top: 11rem;
`;
const Line = styled.div`
  position: absolute;
  width: 60rem;
  height: 0.5rem;
  background-color: black;
  margin-top: 25rem;
  margin-left: 30rem;
`;
const DiagonalLineFront = styled.div`
  position: absolute;
  width: 5rem;
  transform: rotate(45deg);
  height: 0.5rem;
  background-color: black;
  margin-top: 26.75rem;
  margin-left: 45rem;
`;
const SmLineFront = styled.div`
  position: absolute;
  width: 2.5rem;
  transform: rotate(45deg);
  height: 0.25rem;
  background-color: black;
  margin-top: 26rem;
  margin-left: 50rem;
`;
const SmLineFront2 = styled.div`
  position: absolute;
  width: 2.5rem;
  transform: rotate(45deg);
  height: 0.25rem;
  background-color: black;
  margin-top: 26rem;
  margin-left: 55rem;
`;
const SmLineMiddle = styled.div`
  position: absolute;
  width: 2.5rem;
  transform: rotate(45deg);
  height: 0.25rem;
  background-color: black;
  margin-top: 26rem;
  margin-left: 65rem;
`;
const SmLineMiddle2 = styled.div`
  position: absolute;
  width: 2.5rem;
  transform: rotate(45deg);
  height: 0.25rem;
  background-color: black;
  margin-top: 26rem;
  margin-left: 70rem;
`;
const SmLineEnd = styled.div`
  position: absolute;
  width: 2.5rem;
  transform: rotate(45deg);
  height: 0.25rem;
  background-color: black;
  margin-top: 26rem;
  margin-left: 80rem;
`;
const SmLineEnd2 = styled.div`
  position: absolute;
  width: 2.5rem;
  transform: rotate(45deg);
  height: 0.25rem;
  background-color: black;
  margin-top: 26rem;
  margin-left: 85rem;
`;
const DiagonalLineMid = styled.div`
  position: absolute;
  width: 5rem;
  transform: rotate(45deg);
  height: 0.5rem;
  background-color: black;
  margin-top: 26.75rem;
  margin-left: 60rem;
`;
const DiagonalLineBack = styled.div`
  position: absolute;
  width: 5rem;
  transform: rotate(45deg);
  height: 0.5rem;
  background-color: black;
  margin-top: 26.75rem;
  margin-left: 75rem;
`;
const DiagonalLineEnd = styled.div`
  position: absolute;
  width: 5rem;
  transform: rotate(45deg);
  height: 0.5rem;
  background-color: black;
  margin-top: 26.75rem;
  margin-left: 89.1rem;
`;
const TextDiv = styled.div`
  position: absolute;
  width: 60rem;
  height: 0.5rem;
  background-color: rgba(39, 40, 140, 0.001);
  margin-top: 18.5rem;
  margin-left: 33rem;
`
const TextFont = styled.p`
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 3rem;
  font-weight: 300;
  color: black;

`
const App = () => {
  return (
    <ContainerDiv>
      <LgTriangleUpBack />
      <LgTriangleUpFront />
      <LgSquare />
      <LgCircle />
      <XTopBack />
      <XTopFront />
      <XBottomBack />
      <XBottomFront />
      <Line />
      <DiagonalLineFront />
      <SmLineFront />
      <DiagonalLineMid />
      <SmLineFront2 />
      <DiagonalLineBack />
      <SmLineMiddle />
      <SmLineMiddle2 />
      <DiagonalLineEnd />
      <SmLineEnd />
      <SmLineEnd2 />
      <TextDiv>
        <TextFont>Designing and Building Full-Stack React Apps</TextFont>
      </TextDiv>
    </ContainerDiv>
  );
};
export default App;
