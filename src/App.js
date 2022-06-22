
import styled, {keyframes} from "styled-components";
const Father = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
  0%{
    transform:rotate(0deg);
    border-radius: 0px;
  }
  50%{
    transform: rotate(180deg);
    border-radius: 100px;
  }
  100%{
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  background-color: tomato;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  span{
    font-size: 36px;
    transition: .3s;
    &:hover{
      font-size: 80px;
    }
    &:active{
      opacity: 0;
    }
  }
`;


function App() {
  return (
    <Father as="header">
      <Box>
        <span>😊</span>
      </Box>
    </Father>
  );
}

export default App;