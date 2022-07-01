import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
interface RouteParams {
  coinId: string;
}
const Container = styled.div`
  padding: 0px, 20px;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;
const Title = styled.h1`
  font-size: 48px;
  color:${props => props.theme.accentColor};
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;
interface RouteState{
  name: string;
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { state } = useLocation<RouteState>();
  const { coinId } = useParams<RouteParams>();
  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});
  useEffect(() => {
    (async () => {
      const infoData =  await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? ( <Loader>Loading...</Loader>):(null)}
    </Container>
  );
}
export default Coin;