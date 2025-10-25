import { useEffect, useRef } from "react";
import Plotly from "plotly.js-dist";

function PlottingAccuracy({ accuracyHistory }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (accuracyHistory.length === 0) return;

    const xVals = [...Array(accuracyHistory.length).keys()];
    const yVals = accuracyHistory.map(a => (typeof a === "number" ? a : 0));
    
    const trace = {
      x: xVals,
      y: yVals,
      mode: "lines+markers",
      type: "scatter",
      name: "Accuracy",
      line: { color: "green" },
    };

    const layout = {
      title: { text: "Model Accuracy over Epochs", x: 0.5 },
      xaxis: { title: "Epoch" },
      yaxis: { title: "Accuracy", range: [0, 1] },
      margin: { t: 40, r: 20, l: 50, b: 40 },
    };

    Plotly.react(chartRef.current, [trace], layout, { responsive: true });
  }, [accuracyHistory]);

  return (
    <div
      ref={chartRef}
      className="flex-none w-full h-96 bg-white rounded-lg shadow-lg p-4 mx-auto max-w-[33.33vw]"
    ></div>
  );
}

export default PlottingAccuracy;