import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function SalesMat() {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['Sales Data'] }]}
      series={[{ data: [1000] }, { data: [111] }, { data: [233] }]}
      width={500}
      height={300}
    />
  );
}