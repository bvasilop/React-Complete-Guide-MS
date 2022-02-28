import React from "react";
import Chartbar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <Chartbar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
