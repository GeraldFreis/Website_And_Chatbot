import { useEffect, useRef } from "react";
import Plotly from "plotly.js-dist";

function PlottingNodes({ nodeHistory, specifiedNode }) {
  const chartRef = useRef(null);

  useEffect(() => {
    // if (!specifiedNode || nodeHistory.length === 0) return;

    const [layerIdx, neuronIdx] = specifiedNode || [1,0];
    const yVals = nodeHistory.length ? [...Array(nodeHistory.length).keys()] : [0];
    const nodeValues = nodeHistory.length ? nodeHistory.map(epoch => epoch[layerIdx][neuronIdx]) : [0];

    const trace = {
      x: yVals,
      y: nodeValues,
      mode: "lines+markers",
      type: "scatter",
      name: `Neuron [${layerIdx}, ${neuronIdx}]`,
      line: { color: "blue" },
    };

    const layout = {
      title: {text: `Neuron Bias over Epochs for node [${layerIdx}, ${neuronIdx}]`, x: 0.5},
      xaxis: {
        title: {
          text: "Epoch",   // <--- correct property
          font: { size: 12, family: 'Arial, sans-serif', color: 'black' }
        }
      },
      yaxis: {
        title: {
          text: "Bias Value",   // <--- correct property
          font: { size: 12, family: 'Arial, sans-serif', color: 'black' }
        },
    },
    margin: { t: 40, r: 20, l: 50, b: 40 },

    };

    Plotly.newPlot(chartRef.current, [trace], layout);
    
  }, [nodeHistory, specifiedNode]);

  return (
    <div
      ref={chartRef}
      className="flex-none w-full h-60 bg-white rounded-lg shadow-lg p-2 mx-auto max-w-[25vw]"
    ></div>
  );
}

export default PlottingNodes;