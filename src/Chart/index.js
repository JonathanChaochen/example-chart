import React, { useRef } from "react";
import ReactEcharts from "echarts-for-react";

function Chart(props) {
  const chartRef = useRef(null);

  const getOptions = () => {
    const option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line"
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
