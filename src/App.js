
import styled from "styled-components";
const Father = styled.div`
  display: flex;
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color:white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;

`;


function App() {
  return (
    <div>
      <h1>안좋은 예시</h1>
      <div style={{display : "flex" }}>
        <div style={{ backgroundColor: "teal", width: 100, height: 100 }}></div>
        <div style={{ backgroundColor: "tomato", width: 100, height: 100 }}></div>
      </div>
      <h1>좋은 예시</h1>
      <Father>
        <Box bgColor="teal">
          <Text>Hello!</Text>
        </Box>
        <Circle bgColor="tomato"></Circle>
      </Father>
    </div>
  );
}

export default App;