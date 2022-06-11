import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((cur) => cur.value);
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((curElement) => {
        return (
          <ChartBar
            value={curElement.value}
            maxValue={totalMax}
            label={curElement.label}
            key={curElement.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
