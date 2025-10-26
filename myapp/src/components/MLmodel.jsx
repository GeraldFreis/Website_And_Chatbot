import Section from "./Section";
import Navbar from "./Navbar";
import { useRef, useEffect, useState } from "react";
import ModelConfigXOR from "./MLInfrastructure/ModelConfigXOR";
import PlayPauseButton from "./PlayPauseButton";
import PlottingNodes from "./PlottingNodes";
import PlottingNeuronWeights from "./PlottingLink";
import PlottingAccuracy from "./PlottingAccuracy";
import { model } from "@tensorflow/tfjs";

function MLmodel() {
  const NLayers = 3;
  const NNeurons = [4, 12, 1];
  const Activations = ["relu", "sigmoid"];
  const [isPlaying, setIsPlaying] = useState(false);
  const [layerData, setLayerData] = useState([]);
  const [neuronHistory, setNeuronHistory] = useState([]);
  const [hoveredNode, setHoveredNode] = useState([1,0]);
  const [weightHistory, setWeightHistory] = useState([]);
  const [accuracyHistory, setAccuracyHistory] = useState([]);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [learningRate, setLearningRate] = useState(0.01); // slider-controlled learning rate
  const [hasTrained, setHasTrained] = useState(false);
  const [modelKey, setModelKey] = useState(0);
  const handlePlayPause = () => {
    if (hasTrained) {
      // Reset everything before restarting
      setLayerData([]);
      setAccuracyHistory([]);
      setNeuronHistory([]);
      setWeightHistory([]);
      setHasTrained(false);
  
      // Optional: trigger model rebuild via a key reset
      setModelKey(prev => prev + 1);
    }
  
    setIsPlaying(prev => !prev);
  };
  // Resize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (canvas && container) {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    }
  }, []);


  // Update neuron colors, draw connections, handle hover
  useEffect(() => {

    if (!layerData.length) return;
    

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const container = containerRef.current;
    const layers = container.querySelectorAll(".layer");
    const neuronElems = [...layers].map(layer => [...layer.querySelectorAll(".neuron")]);

    // --- Update histories ---
    const epochBiases = neuronElems.map((layer, i) => {
      const biases = layerData[i-1]?.biases || []; // skipping input
      return layer.map((_, j) => biases[j] ?? 0);
    });
    
    

    const epochWeights = layerData.map(layer => {
        const weights = layer?.weights || [];
        const nNeurons = layer?.weights?.length || 0; // number of neurons in this layer
        return [...Array(nNeurons)].map((_, i) => {
          // Copy weights row if it exists, else empty array
          return weights[i] ? [...weights[i]] : [];
        });
      })

    if (isPlaying) {
        setNeuronHistory(prev => [...prev, epochBiases]);
        setWeightHistory(prev => [...prev, epochWeights]);
    }

    // --- Update neuron colors and hover ---
    neuronElems.forEach((layer, i) => {
    //   console.log(epochBiases[i]);
      layer.forEach((neuron, j) => {
        
        const bias = epochBiases[i][j] ?? 1;
        
        const intensity = Math.min(255, Math.max(0, Math.floor((bias + 1) * 128)));
        neuron.style.backgroundColor = `rgb(${255 - intensity}, ${intensity}, 128)`;

        // Attach hover handler
        neuron.onmouseenter = () => {
          setHoveredNode([i, j]);
        };
      });
    });

    // --- Draw connections ---
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const neuronPositions = neuronElems.map(layer =>
      layer.map(neuron => {
        const rect = neuron.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        return {
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2
        };
      })
    );

    const links = [];
    neuronPositions.forEach((layer, i) => {
      if (i < neuronPositions.length - 1) {
        const weights = layerData[i]?.weights || [];
        layer.forEach((n1, j) => {
          neuronPositions[i + 1].forEach((n2, k) => {
            const weight = weights[j]?.[k] ?? 0;
            const intensity = Math.min(255, Math.max(0, Math.floor((weight + 1) * 128)));
            ctx.strokeStyle = `rgb(${255-intensity}, ${intensity}, 128)`;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();

            links.push({ layer: i, from: j, to: k, n1, n2 });
          });
        });
      }
    });
  }, [layerData]);

  return (
    <Section
      id="MLmodel"
      className="h-screen"
      bg="bg-gradient-to-b from-blue-500 to-gradientEnd dark:from-gray-800 dark:to-gray-900"
    >
      <Navbar />
      <div className="flex flex-col items-center text-center mb-14 pt-16">
        <h1 className="text-8xl sm:text-5xl font-heading font-bold text-sky-400 dark:text-gray-100">
          ML Model Training Visualiser
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/80 dark:text-gray-300 max-w-xl mx-auto mt-4">
          A simple Neural Network that shows the learning process via the colour of Neurons and Links.
        </p>
        <p className="text-base sm:text-sm md:text-m text-white/80 dark:text-gray-300 max-w-xl mx-auto mt-4">
            Context: Here we have a 3 layer, [4,8,1] Dense Neural Network, performing classification on 4 input features.
            The problem at hand is the trivial <a
            href="https://en.wikipedia.org/wiki/XOR_gate"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 text-m font-semibold transition-colors"
            >
            XOR problem. </a>
            The features are either 1's or 0's (i.e. [0,1,0,1] = 1), and we have a binary output (0 or 1).</p>
            <p className="font-semibold md:text-m text-white/80">Press the play button and hover over a neuron to see the change in its Bias and outgoing Weights, over time. </p>
            <p className="mt-2 text-white/80">Adjust the learning rate:</p>
                <input
                type="range"
                min="0.001"
                max="1.0"
                step="0.001"
                value={learningRate}
                onChange={(e) => setLearningRate(parseFloat(e.target.value))}
                className="w-64 mt-2"
                />
                <span className="text-white ml-2">{learningRate.toFixed(3)}</span>
      </div>

      <div className="grid grid-cols-2 justify-center items-center h-[70vh] w-full mt-10 bg-white">
        
        <div ref={containerRef} className="relative flex-none justify-center items-center h-[100%vh] w-full mt-10 bg-white">

            <div className="absolute top-2 left-2 z-20">
                <PlayPauseButton isPlaying={isPlaying} onToggle={handlePlayPause} />
                
            </div>
            
            {/* </div> */}
          <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none"></canvas>
          <div className="flex justify-center items-center space-x-60 relative z-10">
            {[...Array(NLayers)].map((_, i) => (
              <div key={i} className="layer flex flex-col justify-center items-center space-y-6">
                {[...Array(NNeurons[i])].map((_, j) => (
                  <div key={`${i}-${j}`} className="neuron w-8 h-8 bg-black rounded-full shadow-md"></div>
                ))}
              </div>
            ))}
          </div>

          <ModelConfigXOR
            layers={NLayers}
            neurons={NNeurons}
            activationFunctions={Activations}
            learningRate={learningRate}
            isPlaying={isPlaying}
            onUpdate={({ layerData, accuracy }) => {
                setLayerData(layerData);
                setAccuracyHistory(prev => [...prev, accuracy]);
              }}
              onTrainingEnd={() => {
                setIsPlaying(false);
                setHasTrained(true);
              }}
              key={modelKey}
          />
        </div>

        <div className="flex flex-col h-full bg-white space-y-4">
            <h1 className="text-8xl sm:text-5xl font-heading font-bold text-sky-400 text-center justify-center items-center">
            Graphs
            </h1>
          <PlottingNodes nodeHistory={neuronHistory} specifiedNode={hoveredNode} />
          <PlottingNeuronWeights weightHistory={weightHistory} hoveredNeuron={hoveredNode} />
          <PlottingAccuracy accuracyHistory={accuracyHistory} />
        </div>

      </div>
    </Section>
  );
}

export default MLmodel;