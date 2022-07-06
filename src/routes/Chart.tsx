import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
interface ChartProps {
  coinId: string;
}
interface IHistorical {
  time_open: string,
  time_close: string,
  open: number,
  high: number,
  low: number,
  close: number,
  volume: number,
  market_cap: number
}

function Chart({coinId}:ChartProps) {
  const {isLoading, data} = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId));
  return <div>{isLoading ? "Loding chart..." : <ApexChart type="line" 
  series={[
    {
      name: "price",
      data: data?.map((price) => price.close)as number[],
    },
  ]}
  options={
    {
      theme: {
        mode: "dark",
      },
      chart: {
      height: 500,
      width: 500,
      background: "transparents",
      toolbar: {
        show: false,
      },
     },
     grid: {
      show: false,
     },
     yaxis: {
      show: false,
     },
     xaxis: {
      axisBorder: {
        show: false,
      },
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
     },
     stroke: {
      curve: "smooth",
      width: 5,
     },
    }
  } />}</div>;
}

export default Chart;