import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinTickers } from "../api";

interface ChartProps {
  coinId: string;
}
interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const Container = styled.div`
  padding: 20px 0;
  width: 100%;
  margin : 30px 0;
  border: 3px solid white;
  border-radius: 10px;
`;

const Pricetitle = styled.div`
  text-align: center;
  font-size: 25px;
  padding: 10px 0;
`;

const Changes = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  max-width: 300px;
  font-size: 20px;
`;


function Price({ coinId }:ChartProps) {
  const { isLoading, data } = useQuery<PriceData>( ["price", coinId], () => 
    fetchCoinTickers(coinId),
    { 
      refetchInterval: 10000, 
    }
  );

  return(
    <>
    {isLoading ? "Loding chart..." : 
    <Container>
      <Pricetitle>Percent Change</Pricetitle>
      <Changes>
        <div>15 MIN</div>
        <div>{data?.quotes.USD.percent_change_15m}%</div>
      </Changes>
      <Changes>
        <div>1 HOUR</div>
        <div>{data?.quotes.USD.percent_change_1h}%</div>
      </Changes>
      <Changes>
        <div>24 HOUR</div>
        <div>{data?.quotes.USD.percent_change_24h}%</div>
      </Changes>
      <Changes>
        <div>30 DAYS</div>
        <div>{data?.quotes.USD.percent_change_30d}%</div>
      </Changes>
      <Changes>
        <div>1 YEAR</div>
        <div>{data?.quotes.USD.percent_change_1y}%</div>
      </Changes>
    </Container>
    }</>
  );
}

export default Price;