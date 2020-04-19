import React, { useRef } from "react";
import ReactEcharts from "echarts-for-react";

import { cases } from "./sources";

function Chart(props) {
  const chartRef = useRef(null);

  const getOptions = () => {
    const option = {
      grid: {
        left: "3%",
        right: 120,
        bottom: 40,
        containLabel: true
      },
      dataset: {
        source: cases
      },
      title: {
        text: "Total cases by DHB, 18 April 2020"
      },
      legend: {
        data: ["Active", "Recovered", "Deceased"],
        bottom: 5
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
          label: {
            backgroundColor: "#6a7985"
          }
        }
      },
      xAxis: {
        name: "Number of cases",
        type: "value"
      },
      yAxis: [
        {
          type: "category",
          name: "Distric Health Board"
        }
      ],
      color: ["#e3dc54", "#51ba43", "#cc0000"],
      series: [
        {
          name: "Active",
          type: "bar",
          encode: { x: "Active", y: "DHB" },
          stack: "Total",
          style: {
            color: "red"
          }
        },
        {
          name: "Recovered",
          type: "bar",
          encode: { x: "Recovered", y: "DHB" },
          stack: "Total"
        },
        {
          name: "Deceased",
          type: "bar",
          encode: { x: "Deceased", y: "DHB" },
          stack: "Total"
        }
      ]
    };

    return option;
  };

  return (
    <ReactEcharts
      option={getOptions()}
      ref={chartRef}
      style={{ width: "100%", height: "100%" }}
      notMerge // should be true
      lazyUpdate={false} // should be false
      theme={"light"}
    />
  );
}

export default Chart;

//ecchart option see https://www.echartsjs.com/en/api.html#echartsInstance.setOption
