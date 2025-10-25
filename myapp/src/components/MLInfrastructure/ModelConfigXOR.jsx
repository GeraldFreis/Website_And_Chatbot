import { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";

function ModelConfigXOR({ layers, neurons, activationFunctions, learningRate, isPlaying, onUpdate, onTrainingEnd, key }) {
  const modelRef = useRef(null);
  const trainingRef = useRef(false);
  const [epochs, setEpochs] = useState(0);
  // Build model and render initial weights/biases once
  useEffect(() => {
    // XOR data
    const data = [];
    for (let i = 0; i < 16; i++) {
      const x = [(i >> 3) & 1, (i >> 2) & 1, (i >> 1) & 1, i & 1];
      const y = x.reduce((a, b) => a + b, 0) % 2;
      data.push({ x, y });
    }
    const xs = tf.tensor2d(data.map(d => d.x));
    const ys = tf.tensor2d(data.map(d => [d.y]));

    // Build model
    const model = tf.sequential();
    for (let i = 1; i < layers; i++) {
      model.add(tf.layers.dense({
        inputShape: [neurons[i - 1]],
        units: neurons[i],
        activation: activationFunctions[i - 1],
        biasInitializer: tf.initializers.constant({ value: 0.15 }),
        kernelInitializer: tf.initializers.leCunNormal(),
      }));
    }

    model.compile({
      optimizer: tf.train.adam(learningRate),
      loss: "binaryCrossentropy",
      metrics: ["accuracy"],
    });

    modelRef.current = { model, xs, ys };

    // Render initial weights/biases
    (async () => {
      const layerData = await Promise.all(
        model.layers.map(async (layer) => {
          const [w, b] = layer.getWeights();
          return { weights: await w.array(), biases: await b.array() };
        })
      );
      onUpdate({ layerData, accuracy: 0 }); // initial render, accuracy = 0
      
    })();
  }, []);

  // Training loop when play button is pressed
  useEffect(() => {
    if (!isPlaying || !modelRef.current || trainingRef.current) return;

    const { model, xs, ys } = modelRef.current;
    const maxEpochs = 50;
    let epoch = epochs;

    trainingRef.current = true;

    const trainStep = async () => {
      if (!trainingRef.current || epoch >= maxEpochs || !isPlaying) {
        trainingRef.current = false;
        return;
      }

      const history = await model.fit(xs, ys, { epochs: 1 });
      const acc = history.history.acc?.[0] ?? history.history.accuracy?.[0];

      const layerData = await Promise.all(
        model.layers.map(async (layer) => {
          const [w, b] = layer.getWeights();
          return { weights: await w.array(), biases: await b.array() };
        })
      );

      onUpdate({ layerData, accuracy: acc });
      epoch++;
      setEpochs(epoch);

      await new Promise(r => setTimeout(r, 500));
      trainStep();
    };

    trainStep();
    if (!trainingRef.current || epoch >= maxEpochs) {
      trainingRef.current = false;
      onTrainingEnd?.();  // 👈 notify parent training is done
      return;
    }
  }, [isPlaying, onUpdate, epochs]);

  return (
    <div className="relative flex justify-center text-center left-20">
      <div className="px-4 py-2 bg-black/70 text-white rounded-lg shadow-md text-lg">
        Epoch: {epochs}
      </div>
    </div>
  );
}

export default ModelConfigXOR;