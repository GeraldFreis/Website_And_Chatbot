import { useEffect, useRef } from "react";
import Plotly from "plotly.js-dist";

function PlottingNodes({ nodeHistory, specifiedNode }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!specifiedNode || nodeHistory.length === 0) return;

    const [layerIdx, neuronIdx] = specifiedNode;
    const yVals = [...Array(nodeHistory.length).keys()];
    const nodeValues = nodeHistory.map(epoch => epoch[layerIdx][neuronIdx]);

    const trace = {
      x: yVals,
      y: nodeValues,
      mode: "lines+markers",
      type: "scatter",
      name: `Neuron [${layerIdx}, ${neuronIdx}]`,
      line: { color: "blue" },
    };

    const layout = {
      title: {text: `Neuron Bias over Epochs`,
      font: {
        family: 'Arial, sans-serif',
        size: 20,
        color: 'black'
      },
      xref: 'paper',
      x: 0.5,   // centers the title horizontally
      xanchor: 'center'
    },
        xaxis: {
        title: {
          text: "Epoch",   // <--- correct property
          font: { size: 16, family: 'Arial, sans-serif', color: 'black' }
        }
      },
      yaxis: {
        title: {
          text: "Bias Value",   // <--- correct property
          font: { size: 16, family: 'Arial, sans-serif', color: 'black' }
        },
    }
    };

    Plotly.newPlot(chartRef.current, [trace], layout);
    
  }, [nodeHistory, specifiedNode]);

  return (
    <div
      ref={chartRef}
      className="flex-none w-full h-96 bg-white rounded-lg shadow-lg p-4 mx-auto max-w-[33.33vw]"
    ></div>
  );
}

export default PlottingNodes;