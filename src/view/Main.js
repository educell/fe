import React from 'react';
import styled from 'styled-components';

const Writing1 = styled.h1`
  background-color: #31363e;
  color: white;
  font-size: 6rem;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  margin: 0 400px 10px 0;
  font-weight: 900;
`;

const Writing2 = styled.h1`
  background-color: #31363e;
  color: white;
  font-size: 6rem;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  margin: 0 200px 10px 0;
  font-weight: 900;
`;

const Writing3 = styled.h1`
  background-color: #31363e;
  color: white;
  font-size: 6rem;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  margin: 0 700px 10px 0;
  font-weight: 900;
`;

const WritingDiv = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  margin: 3rem;
  position: relative;
`;

const Main = () => {
  return (
    <div>
      <WritingDiv>
        <Writing1>Bridging the gap</Writing1>
        <Writing2>Between social workers</Writing2>
        <Writing3>And schools</Writing3>
      </WritingDiv>
    </div>
  );
};

export default Main;
