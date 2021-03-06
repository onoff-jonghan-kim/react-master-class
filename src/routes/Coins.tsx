import { useState } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { isDarkAtom } from "../atoms";

const Container = styled.div`
  padding: 0px, 20px;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  cursor: pointer;
  div{
    width: 100%;
    text-align: center;
  }
`;

const CoinsList = styled.ul`
  max-width: 580px;
  margin:  0 auto;
`;

const Coin = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};;
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  border: 2px solid ${(props)=> props.theme.textColor};
  a{
    padding: 20px;
    transition: color .2s ease-in-out; 
    display: flex;
    align-items: center;
  }
  &:hover{
    a{
      color: ${(props) => props.theme.accentColor}
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color:${props => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;


interface ICoin {
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string,
}
interface ICoinsProps {
}

function Coins({}: ICoinsProps) {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev)=>!prev);
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
  
  return (
  <Container>
    <Helmet>
        <title>코인!</title>
    </Helmet>
    <Header onClick={toggleDarkAtom}>
      <Title>코인!</Title>
      <div>Click to Change the Mode</div>
    </Header>
    {isLoading ? (
      <Loader>Loading...</Loader>
      ):(
      <CoinsList>
      {data?.slice(0,100).map(coin => (
        <Coin key={coin.id}>
          <Link to={{
            pathname:`/${coin.id}`,
            state: {name: coin.name},
          }}>
              <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}/>
              {coin.name} &rarr;
          </Link>
        </Coin>))}
      </CoinsList>
    )}
  </Container>
  );
}
export default Coins;