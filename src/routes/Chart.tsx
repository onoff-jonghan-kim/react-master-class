import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
interface ChartProps {
  coinId: string;
}
interface IHistorical {
  time_open: number,
  time_close: number,
  open: number,
  high: number,
  low: number,
  close: number,
  volume: number,
  market_cap: number
}
interface ICandleChartItem{
  x : Date;
  y : number[];
}
function Chart({coinId}:ChartProps) {
  const {isLoading, data} = useQuery<IHistorical[]>(
    ["ohlcv", coinId], () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );
  return <div>{isLoading ? "Loding chart..." : <ApexChart 
  type="candlestick" 
  series={[
    {
      name: "Price",
      data: data?.map((price)=>{
        return{
          x: new Date(price.time_open * 1000),
          y: [
            price.open,
            price.high,
            price.low,
            price.close,
          ]
        }
      }) as ICandleChartItem[],
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
      axisBorder: { show: false, },
      labels: {
        show: false,
        datetimeFormatter: {month: "mmm'yy"},
      },
      axisTicks: { show: false, },
      type: "datetime",
      categories: data?.map((price) => (price.time_close)*1000),
     },
     stroke: {
      curve: "smooth",
      width: 2,
     },
     tooltip: {
      y: {
        formatter: (value)=> `$${value.toFixed(2)}`,
      }
     }
    }
  } />}</div>;
}

export default Chart;