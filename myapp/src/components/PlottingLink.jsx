import { useEffect, useRef } from "react";
import Plotly from "plotly.js-dist";

function PlottingNeuronWeights({ weightHistory, hoveredNeuron }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Default to layer 1, neuron 0 if nothing hovered
    const [layer, neuron] = hoveredNeuron || [1, 0];
    const layout = {
      title: {
        text: `Outgoing Weights of Neuron [${layer}, ${neuron}]`,
        x: 0.5,
        font: { size: 14 },
      },
      xaxis: {
        title: { text: "Epoch", font: { size: 12, color: "black" } },
      },
      yaxis: {
        title: { text: "Weight Value", font: { size: 12, color: "black" } },
      },
      margin: { t: 40, r: 20, l: 40, b: 40 },
      hovermode: "closest",
    };
    // Handle empty data gracefully
    if (!weightHistory || weightHistory.length === 0) {
      Plotly.react(chartRef.current, [], layout, { responsive: true });
      return;
    }

    const xVals = [...Array(weightHistory.length).keys()]; // epochs
    const nextLayerLength = weightHistory[0][layer + 1]?.length || 1;

    // Build outgoing weight traces
    const traces = [];
    for (let k = 0; k < nextLayerLength; k++) {
      const yVals = weightHistory.map(epoch => {
        const val = epoch?.[layer]?.[neuron]?.[k];
        return typeof val === "number" ? val : null;
      });

      traces.push({
        x: xVals,
        y: yVals,
        mode: "lines+markers",
        type: "scatter",
        name: `w[${layer},${neuron}→${k}]`,
        connectgaps: true,
      });
    }

    if (traces.length === 0) {
      Plotly.purge(chartRef.current);
      return;
    }

    

    Plotly.react(chartRef.current, traces, layout, { responsive: true });
  }, [weightHistory, hoveredNeuron]);

  return (
    <div
      ref={chartRef}
      className="flex-none w-full h-52 bg-white rounded-lg shadow-md p-2 mx-auto max-w-[25vw]"
    />
  );
}

export default PlottingNeuronWeights;