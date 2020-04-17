import React from "react";
import ErrorBoundary from "react-error-boundary";
import Chart from "./Chart/index";

export default function App() {
  return (
    <ErrorBoundary>
      <div style={{ height: "1000px" }}>
        <h1>Echart</h1>
        <Chart />
      </div>
    </ErrorBoundary>
  );
}
