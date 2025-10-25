import { useEffect, useRef } from "react";
import Plotly from "plotly.js-dist";

function PlottingNeuronWeights({ weightHistory, hoveredNeuron }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!hoveredNeuron || weightHistory.length === 0) {
      Plotly.purge(chartRef.current);
      return;
    }

    const [layer, neuron] = hoveredNeuron;

    const xVals = [...Array(weightHistory.length).keys()]; // epochs

    // Determine outgoing weights if neuron has outgoing links
    const yValsPerTarget = [];

    const nextLayerLength = weightHistory[0][layer + 1]?.length || 1;

    for (let k = 0; k < nextLayerLength; k++) {
      const yVals = weightHistory.map((epoch) => {
        if (
          !epoch ||
          !epoch[layer] ||
          !epoch[layer][neuron] ||
          epoch[layer][neuron][k] === undefined
        ) return null;
        return epoch[layer][neuron][k];
      });
      yValsPerTarget.push(yVals);
    }

    if (yValsPerTarget.length === 0) return;

    // Create a trace for each outgoing weight
    const traces = yValsPerTarget.map((yVals, idx) => ({
      x: xVals,
      y: yVals,
      mode: "lines+markers",
      type: "scatter",
      name: `Weight ${layer}, ${neuron}→${idx}`,
      connectgaps: true,
    }));

    const layout = {
      title: {
        text: `Outgoing Weights of Neuron [${layer}, ${neuron}]`,
        x: 0.5,
        xanchor: "center",
      },
      xaxis: { title: { text: "Epoch" } },
      yaxis: { title: { text: "Weight Value" } },
      hovermode: "closest",
    };

    Plotly.newPlot(chartRef.current, traces, layout, { responsive: true });
  }, [weightHistory, hoveredNeuron]);

  return (
    <div
      ref={chartRef}
      className="flex-none w-full h-96 bg-white rounded-lg shadow-lg p-4 mx-auto max-w-[33.33vw]"
    ></div>
  );
}

export default PlottingNeuronWeights;