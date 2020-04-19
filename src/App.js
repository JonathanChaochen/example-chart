import React from "react";
import ErrorBoundary from "react-error-boundary";
import Chart from "./Chart/index";

export default function App() {
  return (
    <ErrorBoundary>
      <div style={{ height: "850px" }}>
        <h1>Covid-19 New Zealand</h1>
        <Chart />
        <div style={{ height: "30px" }} />
      </div>
    </ErrorBoundary>
  );
}
