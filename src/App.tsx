import React, {useState} from 'react';
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.div`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  
  return (
    <Container>
      <H1>hello!!</H1>
    </Container>
  );
}

export default App;
